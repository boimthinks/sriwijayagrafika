# Sriwijaya Grafika — Astro Edition (SSG)

Website resmi **Sriwijaya Grafika Palembang** yang di-rewrite dari stack React + Vite + Express menjadi **Astro 5** dengan React islands, dan sepenuhnya **Static Site Generation** (SSG).

> Jasa Advertising, Reklame, dan Percetakan Profesional Termurah di Kota Palembang — garansi resmi 1 tahun, pengalaman 16+ tahun, pemberdayaan disabilitas.

## Stack

- **Astro 5** — `output: 'static'`, multi-page SSG, zero JS by default
- **React 19** — Untuk komponen interaktif (Calculator modal, AI Consultant chat, PortfolioGallery, OrderHistory, CatalogExplorer)
- **Tailwind CSS v4** — CSS-first theme tokens (`@theme {}`) tanpa file config
- **@astrojs/sitemap** — Auto-generated sitemap.xml
- **TypeScript** — Strict mode

## Struktur

```
/
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── public/
│   ├── favicon.svg
│   ├── og-default.svg
│   └── img/            # (lihat catatan gambar di bawah)
├── src/
│   ├── env.d.ts
│   ├── layouts/
│   │   └── Layout.astro
│   ├── components/
│   │   ├── *.astro     # Server-rendered (Navbar, Footer, Hero, dll)
│   │   └── *.tsx       # React islands (CalculatorModal, AIConsultant, dll)
│   ├── lib/
│   │   ├── data.ts     # Static business data
│   │   └── types.ts
│   ├── pages/
│   │   ├── index.astro
│   │   ├── layanan.astro
│   │   ├── portofolio.astro
│   │   ├── media.astro
│   │   ├── ai-konsultan.astro
│   │   ├── 404.astro
│   │   └── sitemap.astro
│   └── styles/
│       └── global.css
```

## Perbandingan dengan Versi React + Vite + Express

| Aspek | Versi lama (React + Vite) | Versi baru (Astro SSG) |
| --- | --- | --- |
| Routing | SPA useState view switching | Multi-page file-based routing |
| Server | Express (Vite middleware) | Tidak ada — murni SSG |
| API | Express `app.post('/api/consult')` | Tidak ada — AI Consultant pakai rule-based fallback |
| State | `useState` + localStorage | Astro + React islands (`client:load`) |
| Bundle | 1 SPA bundle | Multi-page, zero JS by default |
| Output | Runtime SSR (`node ./dist/server`) | Pre-rendered HTML statis (`./dist`) |
| Deploy | VPS / Node host | Static host apa pun (Vercel, Netlify, Cloudflare Pages, GH Pages, Nginx) |
| SEO | SPA butuh workaround | Per-page meta, OG, JSON-LD otomatis |

## Halaman

- `/` — Beranda, quick engagement banner, layanan utama, credentials, order history
- `/layanan` — Daftar layanan lengkap dengan filter tab + subkategori + kalkulator modal
- `/portofolio` — Galeri 26 portofolio dengan lightbox
- `/media` — Profil perusahaan + liputan Sriwijaya Post & Berita Sumsel + video
- `/ai-konsultan` — Chat AI rule-based (berbasis `FALLBACK_ANSWERS` di `src/lib/data.ts`)
- `/sitemap` — Sitemap HTML manusia
- `/404` — Halaman tidak ditemukan

## Menjalankan Lokal

```bash
npm install
npm run dev                # http://localhost:3000
```

Tanpa API key, AI Consultant tetap berjalan dengan sistem fallback rule-based yang cerdas (mendeteksi kata kunci: harga, alamat, huruf timbul, neon box, rambu K3, kontak, dll).

## Build & Deploy

```bash
npm run build              # hasil statis di ./dist
npm run preview            # serve ./dist lokal untuk sanity-check
```

Output adalah HTML statis murni. Deploy ke static host mana pun:

- **Vercel / Netlify / Cloudflare Pages** — `build command: npm run build`, `output dir: dist`
- **Nginx / Apache** — salin isi `dist/` ke document root
- **GitHub Pages** — push `dist/` ke branch `gh-pages` (via `actions-gh-pages` atau `peaceiris/workflows-gh-pages`)

Tidak perlu Node.js runtime, tidak ada server-side process, tidak ada env var rahasia.

## Catatan Aset Gambar

> Folder `public/img/` kosong pada saat konversi. Tempatkan semua gambar portofolio (jpg, png, jpeg) di sini.
> Data pada `src/lib/data.ts` sudah memuat field `imageSrc` yang menunjuk ke `/img/...` (mis. `/img/organic-story.jpg`).
>
> PortofolioGallery masih memakai `imagePlaceholder` (gradient) sebagai fallback, sehingga UI tetap berfungsi penuh tanpa gambar. Saat gambar di-upload, sistem sudah siap untuk transisi: tinggal tambah komponen `<img src={item.imageSrc}>` di `PortfolioGallery.tsx` menggantikan gradient.

## Schema SEO

Setiap halaman otomatis memuat:
- `LocalBusiness` (semua halaman via Layout.astro)
- `WebSite` + `BreadcrumbList` (beranda)
- `ItemList` (layanan)
- `ImageGallery` (portofolio)
- `Article` (media)
- `WebApplication` (ai-konsultan)

Validasi via [Google Rich Results Test](https://search.google.com/test/rich-results) setelah deploy.

## Lisensi

Proprietary — © Sriwijaya Grafika Palembang. Semua Hak Cipta Dilindungi.
