# Sriwijaya Grafika Palembang

Website resmi **Sriwijaya Grafika Palembang** — penyedia jasa Advertising, Reklame, dan Percetakan profesional di Sumatera Selatan.

> Berdiri sejak 2008. Pengalaman **16+ tahun**. Garansi resmi 1 tahun. Memberdayakan disabilitas.

Rewrite dari stack React + Vite + Express ke **Astro Static Site Generation (SSG)** — zero JS by default, deploy ke static host mana pun.

## Tech Stack

| Layer | Tools |
| --- | --- |
| Framework | [Astro 6.4](https://astro.build) — `output: 'static'`, multi-page SSG, islands architecture |
| UI interaktif | [React 19](https://react.dev) — `client:load` / `client:visible` untuk komponen yang butuh state |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) — CSS-first `@theme {}` di `src/styles/global.css`, tanpa file config |
| Bahasa | TypeScript strict, path alias `@/*`, `@components/*`, `@layouts/*`, `@lib/*`, `@data/*` |
| Konten | [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/) + Zod schema (`src/content.config.ts`) |
| SEO | `@astrojs/sitemap` (auto), JSON-LD per halaman, OG image manual |
| Feed | `@astrojs/rss` — endpoint `/blog/rss.xml` |
| Icon | `lucide-react` (di-import dari file `.astro` maupun `.tsx`) |
| Markdown parsing | `gray-matter` untuk file MD di `src/data/` |

Site URL di-hardcode di `astro.config.mjs:8` — `https://sriwijayagrafika.com`. Tidak perlu `.env` untuk production swap.

## Quick Start

```bash
npm install
npm run dev        # http://localhost:3000
```

## Perintah

```bash
npm run dev        # astro dev --host 0.0.0.0 → http://localhost:3000
npm run build      # static output → dist/
npm run preview    # serve dist/ untuk sanity-check
npm run check      # astro check (typecheck + a11y hints)
```

Catatan: `npm run check` saat ini memunculkan **142 pre-existing error di file `.tsx`** (pakai `class` alih-alih `className` di JSX). Build **tetap lulus** — ini repo-wide TS-strict mismatch yang disengaja tidak di-fix.

## Struktur Proyek

```
src/
├── content.config.ts                    # Zod schema: layanan, blog
├── content/
│   ├── layanan/                         # 31 file MD, satu per layanan
│   │   ├── huruf-timbul.md
│   │   ├── neon-box.md
│   │   └── ... (29 lainnya)
│   └── blog/                            # 9 artikel published (struktur flat, lihat catatan di §4)
├── data/                                # Static data, di-parse saat build
│   ├── data.ts                          # BUSINESS_INFO, dll
│   ├── portfolio.md                     # Daftar portofolio (gray-matter)
│   └── sriwijaya-grafika.md             # Knowledge base untuk AI Agent
├── components/
│   ├── *.astro                          # Server-rendered: Navbar, Footer, Hero, ServiceCard, BlogCard, dll
│   └── *.tsx                            # React islands: AboutAndMediaIsland, OrderHistory, dll
├── layouts/
│   └── Layout.astro                     # <head> + JSON-LD LocalBusiness base
├── lib/
│   ├── data.ts                          # Static business data
│   ├── portfolio.ts                     # Parse portfolio.md → PortfolioItem[]
│   ├── blog.ts                          # parseIndonesianDate, TOPIKS, AUTHOR_NAME, dll
│   └── types.ts                         # Shared TypeScript types
├── pages/
│   ├── index.astro                      # Beranda
│   ├── portofolio.astro                 # Galeri + lightbox
│   ├── media.astro                      # Profil + liputan
│   ├── sitemap.astro                    # Sitemap HTML manusia
│   ├── 404.astro
│   ├── layanan/
│   │   ├── index.astro                  # Listing + filter
│   │   └── [...slug].astro              # Detail layanan (dynamic)
│   └── blog/
│       ├── index.astro                  # Listing semua artikel
│       ├── rss.xml.ts                   # RSS feed
│       ├── [topik]/
│       │   ├── index.astro              # Arsip per topik
│       │   └── [slug].astro             # Detail artikel
├── styles/
│   └── global.css                       # Tailwind v4 + .prose-article + custom
└── env.d.ts
```

Catatan: Halaman media (`src/pages/media.astro`) tidak disertakan dalam navigasi navbar untuk menjaga fokus pada layanan utama, namun tetap dapat diakses secara langsung melalui URL `/media` dan dapat dimodifikasi kapan saja jika diperlukan.
src/
├── content.config.ts                    # Zod schema: layanan, blog
├── content/
│   ├── layanan/                         # 31 file MD, satu per layanan
│   │   ├── huruf-timbul.md
│   │   ├── neon-box.md
│   │   └── ... (29 lainnya)
│   └── blog/                            # 9 artikel published (struktur flat, lihat catatan di §4)
├── data/                                # Static data, di-parse saat build
│   ├── data.ts                          # BUSINESS_INFO, dll
│   ├── portfolio.md                     # Daftar portofolio (gray-matter)
│   └── sriwijaya-grafika.md             # Knowledge base untuk AI Agent
├── components/
│   ├── *.astro                          # Server-rendered: Navbar, Footer, Hero, ServiceCard, BlogCard, dll
│   └── *.tsx                            # React islands: AboutAndMediaIsland, OrderHistory, dll
├── layouts/
│   └── Layout.astro                     # <head> + JSON-LD LocalBusiness base
├── lib/
│   ├── data.ts                          # Static business data
│   ├── portfolio.ts                     # Parse portfolio.md → PortfolioItem[]
│   ├── blog.ts                          # parseIndonesianDate, TOPIKS, AUTHOR_NAME, dll
│   └── types.ts                         # Shared TypeScript types
├── pages/
│   ├── index.astro                      # Beranda
│   ├── portofolio.astro                 # Galeri + lightbox
│   ├── media.astro                      # Profil + liputan
│   ├── sitemap.astro                    # Sitemap HTML manusia
│   ├── 404.astro
│   ├── layanan/
│   │   ├── index.astro                  # Listing + filter
│   │   └── [...slug].astro              # Detail layanan (dynamic)
│   └── blog/
│       ├── index.astro                  # Listing semua artikel
│       ├── rss.xml.ts                   # RSS feed
│       ├── [topik]/
│       │   ├── index.astro              # Arsip per topik
│       │   └── [slug].astro             # Detail artikel
├── styles/
│   └── global.css                       # Tailwind v4 + .prose-article + custom
└── env.d.ts

public/
├── favicon.svg
├── og-default.svg
└── img/
    ├── hero/                            # Hero images
    ├── layanan/                         # <service-id>.webp (16:10)
    ├── portfolio/                       # <portfolio-id>.<ext>
    └── blog/                            # <article-id>.<ext> (16:9)
```

## Sistem Konten

Website punya **3 sistem konten** yang terpisah. Masing-masing punya workflow berbeda.

### 1. Layanan (`src/content/layanan/*.md`)

**31 layanan** dikelompokkan jadi 2 kategori: `utama` (10 file) dan `secondary` (21 file).

**Frontmatter schema** (lihat `src/content.config.ts:10`):

| Field | Type | Wajib | Keterangan |
| --- | --- | --- | --- |
| `name` | string | ya | Nama tampilan, mis. `"Huruf Timbul (3D Letter)"` |
| `description` | string | ya | 1-2 kalimat untuk card + meta |
| `category` | enum | ya | `'utama'` atau `'secondary'` |
| `subcategory` | string | ya | Mis. `"Advertising & Reklame"` |
| `basePrice` | number | ya | Harga dasar (number, bukan string) |
| `priceUnit` | string | ya | Mis. `"cm tinggi"`, `"per m²"` |
| `features` | string[] | tidak | Bullets keunggulan |
| `materials` | string[] | tidak | Pilihan material |
| `hasCalculator` | boolean | tidak | Default `false`. Saat ini tidak dipakai UI. |
| `calculatorType` | enum | tidak | `'huruf_timbul' \| 'neon_box' \| 'rambu' \| 'printing_standard'` |
| `imageUrl` | string | tidak | Path `/img/layanan/<id>.webp` |
| `order` | number | tidak | Default `99`. Sort ascending. |
| `published` | boolean | tidak | Default `true`. Filter unpublished di listing. |

**Body markdown** (Bahasa Indonesia): section `## Tentang`, `## Keunggulan`, `## Material/Tabel`, `## Aplikasi`, `## Proses`, `## FAQ`.

**Cara menambah layanan baru:**

1. Copy file `.md` terdekat (mis. `huruf-timbul.md`).
2. Ubah frontmatter (`name`, `category`, dll) **+ filename** (filename = slug = URL segment).
3. Tulis ulang body section dengan sudut pandang layanan baru.
4. Taruh gambar di `public/img/layanan/<id>.webp`, tambahkan `imageUrl: "/img/layanan/<id>.webp"` di frontmatter.
5. `ServiceCard.astro` dan halaman detail otomatis me-render card + hero image.

**Slug/URL pattern:** `/layanan/<filename-without-.md>` — mis. `huruf-timbul.md` → `/layanan/huruf-timbul`.

### 2. Portofolio (`src/data/portfolio.md`)

**26 item portofolio** di-parse dari `src/data/portfolio.md` via `gray-matter`. Berbeda dari layanan — formatnya **flat 3-field item** (lihat "Constraint" historis).

**Format file:**

```markdown
---
items:
  - src: "/img/portfolio/neon-box-cafe-bujang.webp"
    category: "neon-box"
    caption: "Neon box toko Bujang — palembang"
  - src: "/img/portfolio/huruf-timbul-pt-sinar-jaya.webp"
    category: "huruf-timbul"
    caption: "Huruf timbul stainless steel — PT Sinar Jaya"
---

# Catatan Tambahan (opsional, di luar frontmatter)
```

**Field:**

| Field | Keterangan |
| --- | --- |
| `src` | Path absolut dari `/public`, mis. `/img/portfolio/<id>.<ext>` |
| `category` | Kategori layanan terkait, lihat `KNOWN_CATEGORIES` di `src/lib/portfolio.ts:18` |
| `caption` | 1 kalimat deskriptif (lowercase, Bahasa Indonesia) |

**Kategori yang dikenal** (auto-label via `deriveCategoryLabel()`):

`huruf-timbul` · `neon-box` · `pylon-totem` · `rambu-rambu` · `plang-toko-kantor` · `booth-event-desk` · `produk-akrilik` · `gantry-huruf-led` · `neon-flex` · `billboard`

Kategori baru? Tambahkan ke `KNOWN_CATEGORIES` di `src/lib/portfolio.ts` agar label-nya proper-case. Kalau tidak, label di-derive otomatis.

**Cara menambah portofolio baru:**

1. Taruh gambar di `public/img/portfolio/<id>.<ext>` (jpg/png/webp, aspect ~4:3 disarankan untuk konsistensi grid).
2. Buka `src/data/portfolio.md`, tambahkan 3 baris di `items:[]` (pakai `id` yang sama dengan filename tanpa extension).
3. `PortfolioGrid.astro` (listing) + `index.astro` (homepage slider) otomatis me-render.
4. Filter chip di `/portofolio` di-generate dari `getPortfolioCategories()` — kategori baru otomatis muncul.

**Slug/URL pattern:** Tidak ada halaman detail per portofolio. Listing di `/portofolio` + slider di `/` (beranda, 8 item pertama).

### 3. Blog (`src/content/blog/*.md`)

Sistem **artikel long-form SEO** dengan URL nested per topik. **9 artikel published** per Februari 2026 (lihat `src/data/sriwijaya-grafika.md` bagian 12.1 untuk daftar). Workflow penulisan ada di bagian 11 knowledge base.

**Struktur file: flat, tanpa subfolder.** Semua MD disimpan langsung di `src/content/blog/<slug>.md` — field `topik` di frontmatter yang menentukan segmen URL, bukan struktur folder. Subfolder `src/content/blog/<topik>/<slug>.md` pernah dicoba tapi menyebabkan **ID conflict** di `getStaticPaths` (`Astro` membuat ID jadi `<topik>/<slug>`, lalu route `/blog/[topik]/[slug]` bentrok dengan path itu sendiri). Pakai flat, topik dari frontmatter.

**URL pattern:**

```
/blog/                          # listing semua
/blog/<topik>/                  # arsip per topik
/blog/<topik>/<slug>/           # detail artikel
/blog/rss.xml                   # RSS feed
```

**Topik yang dikenal** (lihat `TOPIKS` di `src/lib/blog.ts:59`):

| Slug | Label Indonesia | Icon (lucide) |
| --- | --- | --- |
| `tips` | Tips & Trik | `Lightbulb` |
| `studi-kasus` | Studi Kasus | `FileText` |
| `berita` | Berita | `Newspaper` |
| `panduan` | Panduan | `BookOpen` |
| `press-release` | Press Release | `Megaphone` |

**Frontmatter schema** (lihat `src/content.config.ts:29`):

| Field | Type | Constraint | Wajib |
| --- | --- | --- | --- |
| `title` | string | maks **5 kata** | ya |
| `titleSeo` | string | maks **12 kata** | ya |
| `excerpt` | string | 20-300 char | ya |
| `date` | string | format `"DD NamaBulan YYYY"`, mis. `"12 Desember 2025"` | ya |
| `topik` | enum | salah satu dari 5 topik di atas | ya |
| `imgurl` | string | path `/img/blog/<id>.<ext>` | ya |
| `imgalt` | string | fallback ke `titleSeo` | tidak |
| `pengantar` | string | 50-500 char | ya |
| `kesimpulan` | string | 50-500 char | ya |
| `published` | boolean | default `true`. Draft TIDAK di-render ke `dist/`. | tidak |

**Body markdown** — HANYA berisi H2 sections + sub-content:

```markdown
## Section 1

Paragraph...

## Section 2

- Bullet list
- dengan **bold** dan _italic_

## Section 3

| Tabel | Juga | Bisa |
| --- | --- | --- |
| sel | sel | sel |
```

**Larangan body:**

- Tidak boleh `#` (H1) — sudah di `titleSeo`
- Tidak boleh paragraf pembuka/penutup — sudah di `pengantar`/`kesimpulan`
- Tidak boleh tag/image — sudah di `imgurl`

**Aturan lengkap + checklist 22 poin:** Lihat `src/data/sriwijaya-grafika.md` bagian 11 (Aturan Menulis).

**Cara menambah artikel baru:**

1. Buka `src/data/sriwijaya-grafika.md` bagian 11 — baca 11.1 sampai 11.11.
2. Tulis artikel sesuai aturan (cek 22-poin checklist di 11.9).
3. Taruh gambar di `public/img/blog/<id>.<ext>`.
4. Simpan MD langsung di `src/content/blog/<slug>.md` (**flat, tanpa subfolder** — lihat catatan struktur di atas).
5. Set `published: false` dulu untuk review, lalu `true` saat publish.
6. Update Section 12.1 (topik yang sudah ditulis) di knowledge base.

## Knowledge Base untuk AI Agent

`src/data/sriwijaya-grafika.md` adalah **knowledge base** yang berisi:

1. **Identitas bisnis** — kontak, alamat, jam operasional, lisensi
2. **Tentang kami** — sejarah, nilai, diferensiasi
3. **Tagline** — koleksi copy yang disetujui
4. **Layanan** — overview 31 layanan + cara pengelompokan
5. **Portofolio** — guideline showcase + referensi `portfolio.md`
6. **Liputan media** — daftar media yang pernah meliput
7. **Wawancara klien** — voice-of-customer quotes
8. **Kompetitor** — landscape kompetitif Palembang
9. **Website aktif** — link terkait (Google Business, marketplace, dll)
10. **Catatan AI Agent** — directives untuk AI assistant
11. **Aturan Menulis** — workflow + checklist penulisan artikel blog
12. **Insight & Lessons Learned** — topik yang sudah ditulis, open topics, FAQ klien, pelajaran

Section 11 dan 12 adalah yang paling sering di-update — baca dulu sebelum nulis artikel baru.

## Image Convention

| Path | Aspect | Format |
| --- | --- | --- |
| `public/img/layanan/<id>.webp` | 16:10 | `.webp` (prefer), `.jpg` OK |
| `public/img/portfolio/<id>.<ext>` | bebas (~4:3 disarankan) | `.webp` / `.jpg` / `.png` |
| `public/img/blog/<id>.<ext>` | 16:9 | `.webp` / `.jpg` / `.png` |
| `public/img/hero/*` | bebas | bebas |

**Tanpa gambar?** Card/hero otomatis render gradient + icon lucide sesuai `subcategory` — UI tetap berfungsi penuh.

## SEO & Schema JSON-LD

Setiap halaman otomatis memuat JSON-LD via `<script type="application/ld+json">`:

| Halaman | Schema |
| --- | --- |
| Semua | `LocalBusiness` (base, dari `Layout.astro`) |
| `/` | + `WebSite`, `BreadcrumbList`, `ItemList` (layanan utama) |
| `/layanan` | `CollectionPage` + `ItemList` layanan |
| `/layanan/<slug>` | `Service` lengkap + `BreadcrumbList` |
| `/portofolio` | `ImageGallery` + `ItemList` |
| `/blog` | `CollectionPage` + `hasPart: Article[]` |
| `/blog/<topik>` | `CollectionPage` per topik |
| `/blog/<topik>/<slug>` | `Article` lengkap (headline, image, datePublished, author, publisher, articleSection, isPartOf) + `BreadcrumbList` |
| `/media` | `NewsMediaOrganization` + list `NewsArticle` |

Validasi setelah deploy: [Google Rich Results Test](https://search.google.com/test/rich-results).

## Konvensi

- **Bahasa Indonesia** untuk semua user-facing copy (heading, button, deskripsi, body MD, pesan WhatsApp).
- **English** untuk schema/JSON-LD field name (mis. `Article.headline` bukan `Article.judul`).
- **Tanpa emoji** di code atau output UI (kecuali user minta eksplisit).
- **lucide-react** untuk semua icon — import di file `.astro` maupun `.tsx` (Astro bisa render React component).
- **Tailwind v4** — pakai utility bracket form untuk inline value baru: `bg-[#224da8]`, `text-[#ff6634]`.
- **Color tokens** di `src/styles/global.css` `@theme {}`: `--color-sriwijaya-blue`, `--color-sriwijaya-orange`. Tapi inline `bg-[#hexcode]` lebih sering dipakai di codebase.
- **File `.astro`** untuk static, **file `.tsx`** untuk komponen interaktif (React island).
- **Path alias** saat ini: `@/*` → `src/*`, plus `@components`, `@layouts`, `@lib`, `@data`.

## Build & Deploy

```bash
npm run build      # output di ./dist
npm run preview    # serve ./dist lokal
```

Output adalah HTML statis murni. Deploy ke static host mana pun:

- **Vercel** / **Netlify** / **Cloudflare Pages** — `build: npm run build`, `output: dist`
- **Nginx / Apache** — salin isi `dist/` ke document root
- **GitHub Pages** — push `dist/` ke branch `gh-pages`

Tidak perlu Node.js runtime di server, tidak ada env var, tidak ada database.

## Lisensi

Proprietary — © Sriwijaya Grafika Palembang. Semua Hak Cipta Dilindungi.
