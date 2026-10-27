#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const ROOT_DIR = process.cwd();
const BLOG_DIR = path.join(ROOT_DIR, 'src', 'content', 'blog');
const LAYANAN_DIR = path.join(ROOT_DIR, 'src', 'content', 'layanan');

// Daftar halaman statis yang sah di situs
const STATIC_ROUTES = new Set([
  '/',
  '/layanan/',
  '/portofolio/',
  '/media/',
  '/kontak/',
  '/sitemap/',
  '/kebijakan-privasi/',
  '/syarat-ketentuan/',
  '/link/',
  '/arsip/',
  '/blog/',
  '/blog/tips/',
  '/blog/studi-kasus/',
  '/blog/panduan/',
  '/blog/kabar/',
  '/blog/teknis/',
  '/blog/rss.xml',
]);

// 1. Kumpulkan semua rute layanan yang sah
const layananFiles = fs.existsSync(LAYANAN_DIR) ? fs.readdirSync(LAYANAN_DIR) : [];
const LAYANAN_ROUTES = new Set(
  layananFiles
    .filter((f) => f.endsWith('.md'))
    .map((f) => `/layanan/${path.basename(f, '.md')}/`)
);

// 2. Kumpulkan semua rute blog yang sah (berdasarkan topik dan slug file)
const blogFiles = fs.existsSync(BLOG_DIR) ? fs.readdirSync(BLOG_DIR) : [];
const BLOG_ROUTES = new Set();
const BLOG_SLUG_MAP = new Map(); // slug -> topik

for (const file of blogFiles) {
  if (!file.endsWith('.md')) continue;
  const filePath = path.join(BLOG_DIR, file);
  const rawContent = fs.readFileSync(filePath, 'utf-8');
  const { data } = matter(rawContent);
  const slug = data.slug || path.basename(file, '.md');
  const topik = data.topik;

  if (topik) {
    const route = `/blog/${topik}/${slug}/`;
    BLOG_ROUTES.add(route);
    BLOG_SLUG_MAP.set(slug, topik);
  }
}

// Gabungan semua rute internal valid
const ALL_VALID_ROUTES = new Set([
  ...STATIC_ROUTES,
  ...LAYANAN_ROUTES,
  ...BLOG_ROUTES,
]);

// Helper untuk membersihkan URL internal
function normalizeInternalUrl(rawUrl) {
  let url = rawUrl.trim();
  // Tangani absolute domain lokal/produksi
  url = url.replace(/^https?:\/\/(localhost:3000|sriwijayagrafika\.com)/, '');
  // Pisahkan query atau hash fragment untuk pengecekan path
  const [cleanPath] = url.split(/[?#]/);
  return { cleanPath, fullUrl: url };
}

// Fungsi audit link dalam satu file markdown
function checkMarkdownFile(filePath) {
  const fileName = path.basename(filePath);
  const content = fs.readFileSync(filePath, 'utf-8');
  const { data, content: body } = matter(content);

  // Periksa seluruh teks yang berpotensi mengandung link: pengantar, body, kesimpulan
  const fullTextToCheck = [
    data.pengantar || '',
    body || '',
    data.kesimpulan || '',
  ].join('\n\n');

  // Regex untuk menangkap markdown link: [anchor text](url)
  const markdownLinkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  // Regex untuk menangkap tag HTML: <a href="url">anchor text</a>
  const htmlLinkRegex = /<a\s+[^>]*href=["']([^"']+)["'][^>]*>(.*?)<\/a>/gi;

  const links = [];
  let match;

  while ((match = markdownLinkRegex.exec(fullTextToCheck)) !== null) {
    links.push({
      anchor: match[1].trim(),
      url: match[2].trim(),
      raw: match[0],
    });
  }

  while ((match = htmlLinkRegex.exec(fullTextToCheck)) !== null) {
    links.push({
      anchor: match[2].replace(/<[^>]+>/g, '').trim(),
      url: match[1].trim(),
      raw: match[0],
    });
  }

  const errors = [];
  const warnings = [];

  for (const { anchor, url, raw } of links) {
    // Lewati mailto, tel, whatsapp, dan link eksternal non-sriwijayagrafika
    if (
      url.startsWith('mailto:') ||
      url.startsWith('tel:') ||
      url.startsWith('https://wa.me') ||
      url.startsWith('https://maps.app.goo.gl')
    ) {
      continue;
    }

    const isInternal =
      url.startsWith('/') ||
      url.includes('sriwijayagrafika.com') ||
      url.includes('localhost:3000');

    if (isInternal) {
      const { cleanPath } = normalizeInternalUrl(url);

      // Cek apakah file asset statis (misal gambar / dokumen)
      const isStaticAsset = /\.(webp|png|jpg|jpeg|svg|pdf|xml|json)$/i.test(cleanPath);

      if (!isStaticAsset) {
        // ATURAN 1: Wajib ada trailing slash di belakangnya
        if (!cleanPath.endsWith('/')) {
          errors.push({
            type: 'MISSING_TRAILING_SLASH',
            message: `URL tidak memiliki trailing slash di akhir: "${url}" (Anchor: "${anchor}")`,
            fix: `${cleanPath}/`,
            raw,
          });
        }

        // Pastikan path berakhiran slash untuk validasi 404
        const pathWithSlash = cleanPath.endsWith('/') ? cleanPath : `${cleanPath}/`;

        // ATURAN 2: Anti-404 / Validitas Rute
        if (!ALL_VALID_ROUTES.has(pathWithSlash)) {
          // Deteksi khusus jika salah pola /blog/<slug>/ tanpa <topik>
          const blogMatch = pathWithSlash.match(/^\/blog\/([^/]+)\/$/);
          if (blogMatch) {
            const potentialSlug = blogMatch[1];
            if (BLOG_SLUG_MAP.has(potentialSlug)) {
              const properTopik = BLOG_SLUG_MAP.get(potentialSlug);
              errors.push({
                type: 'INVALID_BLOG_ROUTE_404',
                message: `URL blog mengarah ke 404 karena kurang kategori topik: "${url}". Format yang benar: "/blog/${properTopik}/${potentialSlug}/"`,
                fix: `/blog/${properTopik}/${potentialSlug}/`,
                raw,
              });
              continue;
            }
          }

          errors.push({
            type: 'BROKEN_INTERNAL_LINK_404',
            message: `URL internal tidak ditemukan / 404: "${url}" (Anchor: "${anchor}")`,
            raw,
          });
        }
      }
    }

    // ATURAN 3: Kualitas Anchor Text
    if (!anchor || anchor.length < 2) {
      errors.push({
        type: 'EMPTY_ANCHOR_TEXT',
        message: `Anchor text kosong atau tidak valid: "${raw}"`,
        raw,
      });
    } else {
      const lowerAnchor = anchor.toLowerCase();
      if (['klik disini', 'klik di sini', 'disini', 'link ini', 'baca ini'].includes(lowerAnchor)) {
        warnings.push({
          type: 'GENERIC_ANCHOR_TEXT',
          message: `Anchor text terlalu generik ("${anchor}"). Gunakan keyword alami yang deskriptif.`,
          raw,
        });
      }
    }
  }

  return { fileName, filePath, totalLinks: links.length, errors, warnings };
}

// Main Runner
function main() {
  const targetArg = process.argv[2];
  let filesToScan = [];

  if (targetArg) {
    const resolvedPath = path.resolve(ROOT_DIR, targetArg);
    if (!fs.existsSync(resolvedPath)) {
      console.error(`\x1b[31m[ERROR]\x1b[0m File tidak ditemukan: ${targetArg}`);
      process.exit(1);
    }
    filesToScan = [resolvedPath];
  } else {
    const blogScan = blogFiles
      .filter((f) => f.endsWith('.md'))
      .map((f) => path.join(BLOG_DIR, f));
    const layananScan = layananFiles
      .filter((f) => f.endsWith('.md'))
      .map((f) => path.join(LAYANAN_DIR, f));
    filesToScan = [...blogScan, ...layananScan];
  }

  console.log(`\n\x1b[36m🔍 Menjalankan Pemeriksaan Link & Anchor Text (${filesToScan.length} file)...\x1b[0m\n`);

  let totalErrors = 0;
  let totalWarnings = 0;

  for (const file of filesToScan) {
    const result = checkMarkdownFile(file);
    if (result.errors.length > 0 || result.warnings.length > 0) {
      console.log(`\x1b[1m📄 ${result.fileName}\x1b[0m (${result.totalLinks} links diperiksa):`);

      for (const err of result.errors) {
        console.log(`  \x1b[31m❌ [ERROR ${err.type}]\x1b[0m ${err.message}`);
        if (err.fix) {
          console.log(`     \x1b[32m💡 Saran perbaikan:\x1b[0m ${err.fix}`);
        }
      }

      for (const warn of result.warnings) {
        console.log(`  \x1b[33m⚠️  [WARNING ${warn.type}]\x1b[0m ${warn.message}`);
      }

      console.log('');
      totalErrors += result.errors.length;
      totalWarnings += result.warnings.length;
    }
  }

  if (totalErrors > 0) {
    console.log(`\x1b[31m❌ Ditemukan ${totalErrors} kesalahan link (trailing slash hilang / 404). Silakan perbaiki sebelum commit!\x1b[0m\n`);
    process.exit(1);
  } else {
    console.log(`\x1b[32m✅ Semua link internal valid! Tidak ada link 404 dan seluruh link memiliki trailing slash.\x1b[0m`);
    if (totalWarnings > 0) {
      console.log(`\x1b[33m⚠️  Ada ${totalWarnings} peringatan kualitas anchor text yang bisa dioptimasi.\x1b[0m\n`);
    } else {
      console.log(`\n`);
    }
    process.exit(0);
  }
}

main();
