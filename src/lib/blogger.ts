import type { CollectionEntry } from 'astro:content';

export type BloggerPost = CollectionEntry<'blogger'>;

const SLUG_PATTERN = /^(\d{4})-(\d{2})-(.+)\.html$/;

export function parseBloggerSlug(slug: string): { year: string; month: string; rest: string } | null {
  const match = SLUG_PATTERN.exec(slug);
  if (!match) return null;
  return { year: match[1], month: match[2], rest: match[3] };
}

export function bloggerOldPath(post: BloggerPost): string {
  const parsed = parseBloggerSlug(post.data.slug);
  if (parsed) {
    return `/${parsed.year}/${parsed.month}/${parsed.rest}.html`;
  }
  return `/${post.id}`;
}

export function bloggerDateLabel(dateStr: string): string {
  const date = new Date(dateStr);
  if (Number.isNaN(date.getTime())) return '';
  return date.toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

export function bloggerIsoDate(dateStr: string): string {
  const date = new Date(dateStr);
  if (Number.isNaN(date.getTime())) return '';
  return date.toISOString();
}

export function isUsableBloggerPost(post: BloggerPost): boolean {
  return post.data.published && post.data.title.trim().length > 0;
}

export function sortBloggerPosts(posts: BloggerPost[]): BloggerPost[] {
  return posts.sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  );
}

/**
 * Meta description untuk halaman arsip, dipaksa panjang 120–155 karakter
 * agar lolos audit Ahrefs "Meta description too short / too long".
 *
 * Aturan:
 * - Jika `metaDescription` di frontmatter sudah 120–155 char -> pakai apa adanya.
 * - Jika terlalu pendek / panjang / kosong -> generate otomatis dari judul +
 *   konteks merek + CTA singkat, lalu truncate rapi di 155 char.
 */
const META_MIN = 120;
const META_MAX = 155;

export function bloggerMetaDescription(post: BloggerPost): string {
  const raw = (post.data.metaDescription ?? '').trim();
  if (raw.length >= META_MIN && raw.length <= META_MAX) return raw;

  const title = post.data.title.trim() || 'Artikel arsip';
  const prefix = `Arsip artikel ${title} dari Sriwijaya Grafika, jasa advertising, reklame, dan percetakan Palembang. `;
  const suffix = 'Hubungi kami untuk info terbaru.';

  let desc = raw.length > 0 ? raw : `${title} — dokumentasi produk dan layanan kami.`;

  // Jika terlalu panjang, potong dulu lalu tambahkan suffix jika muat.
  if (desc.length > META_MAX - prefix.length) {
    const budget = META_MAX - prefix.length - 1;
    desc = desc.slice(0, budget).replace(/\s+\S*$/, '') + '…';
  }

  let result = prefix + desc;
  if (result.length < META_MAX) {
    const remaining = META_MAX - result.length;
    result += ' ' + suffix.slice(0, remaining);
  }
  if (result.length > META_MAX) {
    result = result.slice(0, META_MAX - 1).replace(/\s+\S*$/, '') + '…';
  }
  return result;
}

/**
 * Bangun daftar "artikel terkait" (related posts) untuk halaman arsip agar
 * tiap halaman arsip punya >1 internal dofollow inlink (perbaiki isu Ahrefs
 * "Page has only one dofollow incoming internal link").
 *
 * Dipilih dari artikel arsip lain (bukan halaman ini) dengan prioritas:
 * 1. Bagi label (tags) yang sama
 * 2. Terdekat tanggalnya
 * 3. Sisanya diacak deterministik lewat tahun supaya stabil antar build
 */
export function relatedBloggerPosts(
  post: BloggerPost,
  all: BloggerPost[],
  limit = 4
): BloggerPost[] {
  const others = all.filter(
    (p) => p.id !== post.id && p.data.title.trim().length > 0
  );
  if (others.length === 0) return [];

  const labels = new Set(post.data.labels.map((l) => l.toLowerCase()));

  const scored = others.map((p) => {
    let score = 0;
    for (const l of p.data.labels) {
      if (labels.has(l.toLowerCase())) score += 3;
    }
    // semakin dekat tanggalnya, semakin tinggi
    const diff = Math.abs(
      new Date(p.data.date).getTime() - new Date(post.data.date).getTime()
    );
    score += 2 / (1 + diff / (1000 * 60 * 60 * 24 * 30)); // bobot per ~bulan
    return { p, score };
  });

  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((s) => s.p);
}
