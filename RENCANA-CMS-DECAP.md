# RENCANA: Menambahkan CMS Online (Decap CMS) ke Website Sriwijaya Grafika

> **Status:** Rencana (belum diimplementasikan)
> **Tanggal rencana:** 2026-09-19 (revisi: +konten portofolio + pengaturan homepage & halaman)
> **Stack saat ini:** Astro 7 (SSG, `output: 'static'`), GitHub (`boimthinks/sriwijayagrafika`, branch `main`), Netlify (deploy target).
> **Keputusan pengguna:** Netlify + Decap CMS + konten di repo GitHub + gambar di repo + rebuild otomatis 1-2 menit setelah Publish.
> **Cakupan CMS (disepakati):** blog (CRUD), layanan (CRUD), portofolio (CRUD), + Pengaturan Situs (nama/tagline, hero, 3 kolom bawah hero, dan title/deskripsi/teks/url tombol tiap halaman: layanan, portofolio, blog, kontak).

---

## 0. Backup / Restore Point (wajib sebelum eksekusi)

Sebelum implementasi apa pun, project sudah di-backup penuh ke:

```
/home/abah/Work/Webs/sriwijayagrafika.com.PRE-DECAP-20260919-091200/
```

- Isi: salinan `sriwijayagrafika.com` **termasuk `.git`** (HEAD = `9692c3e`), **kecuali** `node_modules/`, `dist/`, `.astro/` (regenerable via `npm install` + `npm run build`).
- Ukuran: ~19M (280 file source + 533 file git internal).
- Integritas: manifest checksum di
  `/home/abah/Work/Webs/BACKUP-MANIFEST-20260919-091200.sha256` (280 baris, SHA256 per file). Terverifikasi `sha256sum -c` dari dalam backup = **280/280 OK, 0 FAILED**.
- Verifikasi restore (jika diperlukan):
  ```bash
  cd /home/abah/Work/Webs && sha256sum -c BACKUP-MANIFEST-20260919-091200.sha256   # dari dalam backup dir
  rsync -a --exclude='node_modules' --exclude='dist' --exclude='.astro' \
    sriwijayagrafika.com.PRE-DECAP-20260919-091200/ sriwijayagrafika.com/
  cd sriwijayagrafika.com && npm install
  ```

---

## 1. Mengapa Decap CMS (bukan Google Sheets / Google Drive)

Project adalah **static site** (konten di-render saat build time via `getCollection()` + `render(post)` di `src/pages/...`). Artinya "CMS online" pada dasarnya = sumber konten ditulis saat edit, lalu rebuild.

| Kriteria | Google Sheets + Drive (ide awal) | Decap CMS (dipilih) |
|---|---|---|
| Kredensial/API | Perlu Google API key / Service Account + atur share Drive | Nol (GitHub OAuth PKCE) |
| Kesesuaian schema md | Mapping manual tiap field | 1:1 dengan `src/content.config.ts` / data file |
| Gambar | Drive rawan rate-limit / link berubah / hotlink-block | Commit ke `public/img` -> gratis, stabil, SEO aman |
| Versioning | Manual | Otomatis via Git (bisa revert) |
| UX editor | Edit di sel spreadsheet (tidak nyaman utk markdown panjang) | Form ber-field + textarea markdown + preview |
| Latensi publish | Rebuild terjadwal/manual | Commit -> Netlify rebuild otomatis 1-2 mnt |

**Efek pada arsitektur:** Decap **tidak mengubah** sifat static site. Decap menulis file (`.md` + gambar) ke repo GitHub; Netlify (sudah terhubung) rebuild otomatis. File kode (layout/component/lib) tetap di lokal.

---

## 2. Cara Kerja End-to-End

```
Editor buka /admin  --login GitHub (Collaborator repo)-->
Decap tampilkan form (blog/layanan/portofolio/pengaturan situs)
  --edit field + upload gambar-->
Save  --commit file ke github.com/boimthinks/sriwijayagrafika (main)-->
Netlify detect push  --npm install + npm run build-->
dist/ baru  --deploy--> perubahan live dalam 1-2 menit
```

---

## 3. Prasyarat (one-time, ~5 menit) -- BELUM DILAKUKAN

1. **Repo terhubung Netlify** (asumsi). Publish Decap = commit ke `main` -> rebuild otomatis.
2. **GitHub OAuth App** (Settings -> Developer settings -> OAuth Apps):
   - Homepage URL: `https://sriwijayagrafika.com`
   - Authorization callback URL: `https://sriwijayagrafika.com/admin/` (tambahkan `http://localhost:3000/admin/` untuk lokal).
   - Catat **Client ID** (tanpa client secret -> PKCE).
3. **Akses editor**: beri peran **Collaborator (Write)** di repo. `/admin` terbuka untuk umum, tapi simpan butuh login GitHub + write access.

---

## 4. Inventaris Field & File CMS (Diturunkan Langsung dari Source)

### A. Collection `blog` (SUDAH ADA: `src/content/blog/*.md`)
Schema: `src/content.config.ts` (zod). Tidak perlu ubah schema; cukup petakan ke Decap.

| Field | Decap widget | Required | Catatan |
|---|---|---|---|
| `title` | string | ya | Maks 5 kata (divalidasi build) |
| `titleSeo` | string | - | Maks 12 kata |
| `excerpt` | text | ya | 20-300 char |
| `date` | datetime (format `DD MMMM YYYY`) | ya | **preSave hook** konversi ISO -> `"26 Januari 2026"` |
| `topik` | select | ya | `tips`, `studi-kasus`, `panduan`, `kabar` |
| `imgurl` | image | ya | feature + og:image (`/img/blog/...`) |
| `imgalt` | string | - | |
| `imgPrompt` | string | - | opsional |
| `pengantar` | text | ya | 50-500 char |
| `kesimpulan` | text | ya | 50-500 char |
| `faq` | list {question, answer} | - | |
| `published` | boolean | - | default true |
| `body` | markdown | - | isi artikel |

### B. Collection `layanan` (SUDAH ADA: `src/content/layanan/*.md`)
Schema: `src/content.config.ts`.

| Field | Decap widget | Required | Catatan |
|---|---|---|---|
| `name` | string | ya | |
| `description` | text | ya | |
| `category` | select | ya | **Zod enum saat ini hanya `['utama']`** -> jika editor butuh `secondary`, WIDEN enum dulu di `content.config.ts` (`z.enum(['utama','secondary'])`) sebelum CMS dipakai |
| `subcategory` | string | - | |
| `basePrice` | number | - | |
| `priceUnit` | string | - | |
| `features` | list<string> | - | |
| `materials` | list<string> | - | |
| `hasCalculator` | boolean | - | default false |
| `calculatorType` | select | - | `huruf_timbul`, `neon_box`, `rambu`, `printing_standard` |
| `imageUrl` | image | - | `/img/layanan/...` |
| `heroAlt` | string | - | |
| `titleSeo` | string | - | |
| `metaDescription` | text | - | |
| `faqs` | list {question, answer} | - | |
| `keywords` | list<string> | - | |
| `order` | number | - | default 99 |
| `published` | boolean | - | default true |
| `body` | markdown | - | |

### C. Collection `portofolio` (BARU — migrasi dari `src/data/portfolio.md`)
**Fakta:** portofolio BUKAN content collection. Datanya saat ini di **satu file** `src/data/portfolio.md` berupa frontmatter `items: []` (tiap item: `src`, `category`, `caption`), dibaca oleh `src/lib/portfolio.ts`. Gambar di `public/img/portfolio/` (26 file).

**Pendekatan (Rekomendasi C1 — minimal risiko):** Decap **file collection** yang mengedit langsung `src/data/portfolio.md`, dengan widget `list` untuk `items`. Editor bisa tambah/hapus/urutkan item di satu layar. **Tidak perlu** refactor `src/lib/portfolio.ts` / `index.astro` / `portofolio.astro` (mereka sudah baca file itu).

| Field (per item) | Decap widget | Required | Catatan |
|---|---|---|---|
| `src` | image | ya | `/img/portfolio/<nama>.webp` |
| `category` | select | ya | `huruf-timbul`, `neon-box`, `pylon-totem`, `rambu-rambu`, `plang-toko-kantor`, `booth-event-desk`, `produk-akrilik`, `gantry-huruf-led`, `neon-flex`, `billboard`, `papan-nama` (lihat `KNOWN_CATEGORIES` di `portfolio.ts`; `papan-nama` pakai fallback title-case) |
| `caption` | text | ya | |

> Alternatif C2 (lebih "WordPress-like" tapi lebih berisiko): ubah jadi content collection `src/content/portofolio/*.md` (1 file tiap item) + tulis loader/schema baru + rewrite `index.astro` & `portofolio.astro` ke `getCollection`. **Tidak direkomendasikan** untuk tahap pertama.

### D. Pengaturan Situs (BARU — homepage + page settings)
**Fakta:** nama website, tagline, hero, 3 kolom bawah hero (credentials), dan title/deskripsi/intro/CTA tiap halaman **saat ini di-hardcode** di component & page (bukan dari data file). Agar bisa diedit via CMS, BUTUH:
1. **File data baru** `src/data/site.md` (frontmatter saja).
2. **Refactor kecil** di `Hero.astro`, `Credentials.astro`, `Navbar.astro`, `Footer.astro`, `index.astro`, `layanan/index.astro`, `portofolio.astro`, `blog/index.astro`, `kontak.astro` agar membaca `site.md` via `gray-matter` (sudah dipakai `portfolio.ts`) alih-alih hardcode.

**Decap: file collection** menunjuk ke `src/data/site.md`.

#### D1. Identitas & Homepage Hero (sumber: `data.ts`, `Navbar.astro`, `Hero.astro`)
| Field | Decap widget | Sumber asli (hardcode) |
|---|---|---|
| `siteName` | string | `"Sriwijaya Grafika"` — dipakai Navbar brand, `Layout` author/`og:site_name`, `LocalBusiness.name`, semua schema |
| `tagline` | string | `"Spesialis Signage & Advertising di Palembang"` — Navbar subtitle + `data.ts` tagline + Hero badge |
| `heroImageDesktop` | image | `/img/hero/hero.webp` (Hero `<source min-width:768px>`) |
| `heroImageMobile` | image | `/img/hero/hero_mobile.webp` (Hero `<source max-width:767px>`) |
| `heroBadge` | string | `"Spesialis Signage & Advertising di Palembang"` (pill di Hero) |
| `heroTitle` | string | `"Kembangkan Bisnis bersama Sriwijaya Grafika"` — **CATATAN:** aslinya pakai `<span>` berwarna (biru/oranye). Untuk CMS disimpan teks polos; pewarnaan span akan disederhanakan (render tanpa span warna, atau aturan tetap). |
| `heroSubtitle` | text | paragraf `<p>` di Hero (tentang huruf timbul/neon box/sejak 2008) |
| `heroCtaText` | string | `"Hubungi Kami"` (tombol utama Hero) |
| `heroCtaUrl` | string | `"/kontak"` (href tombol Hero) |
| `stat1Value` / `stat1Label` | string | `"16+"` / `"Tahun Dedikasi"` |
| `stat2Value` / `stat2Label` | string | `"1 Thn"` / `"Garansi Penuh"` |
| `stat3Value` / `stat3Label` | string | `"Free"` / `"Biaya Desain"` |

#### D2. 3 Kolom di Bawah Hero — "Credentials" (sumber: `Credentials.astro`)
Saat ini 3 item fixed (icon `Award`/`Clock`/`ShieldCheck`, title, description). Di CMS: **list tepat 3 item**, tiap item `{ title, description }`; icon otomatis dari urutan (index 0/1/2 -> Award/Clock/ShieldCheck) agar tidak perlu pilih icon.

| Field (per item) | Decap widget |
|---|---|
| `title` | string |
| `description` | text |

#### D3. Pengaturan Tiap Halaman (sumber: `layanan/index.astro`, `portofolio.astro`, `blog/index.astro`, `kontak.astro`)
Editor bisa ubah **title, description, teks heading/intro, dan teks+url tombol** tiap halaman.

| Halaman | Field | Sumber asli |
|---|---|---|
| **Layanan** | `layananTitle`, `layananDescription`, `layananHeading` (`"Pilih & Rancang Media Promosi Bisnis Anda"`), `layananIntro` (paragraf), `layananCtaText` (`"Hubungi via WhatsApp"`), `layananCtaUrl` (wa.me) | `layanan/index.astro` Layout props + section gradient |
| **Portofolio** | `portofolioTitle`, `portofolioDescription`, `portofolioHeading` (`"Portofolio Unggulan"`), `portofolioIntro`, `portofolioCtaText` (`"Hubungi via WhatsApp"`), `portofolioCtaUrl` (wa.me) | `portofolio.astro` |
| **Blog** | `blogTitle`, `blogDescription`, `blogCtaText` (`"Tanya via WhatsApp"`), `blogCtaUrl` (wa.me) | `blog/index.astro` |
| **Kontak** | `kontakTitle`, `kontakDescription`, `kontakHeading` (`"Hubungi Kami"`), `kontakIntro` (`"Siap bantu wujudkan..."`) | `kontak.astro` (CTA di kontak berupa kartu WhatsApp map; sesuaikan bila perlu) |

> `keywords` tiap halaman saat ini array hardcode di page — bisa ikut dipindah ke `site.md` (list<string>) jika diinginkan, tapi **opsional** (bisa biarkan di page).

---

## 5. File yang Akan Dibuat / Dimodifikasi (belum dieksekusi)

### BARU
1. `public/admin/index.html` — bootstrap Decap + `preSave` hook (konversi tanggal blog ISO -> `"DD NamaBulan YYYY"`).
2. `public/admin/config.yml` — memetakan **4 area**: `blog`, `layanan` (folder collections), `portofolio` + `pengaturan-situs` (file collections ke `src/data/portfolio.md` & `src/data/site.md`).
3. `src/data/site.md` — file data pengaturan situs (frontmatter sesuai §4.D).

### MODIFIKASI (hanya untuk bagian D — homepage & page settings)
4. `src/content.config.ts` — **opsional**: widen `layanan.category` enum ke `['utama','secondary']` (jika dibutuhkan).
5. `Hero.astro`, `Credentials.astro`, `Navbar.astro`, `Footer.astro`, `index.astro`, `layanan/index.astro`, `portofolio.astro`, `blog/index.astro`, `kontak.astro` — ganti hardcode -> baca `site.md` via `gray-matter` (import pattern sama seperti `portfolio.ts`).
   - **Tidak** mengubah `astro.config.mjs`, `src/content.config.ts` (blog/layanan schema tetap), dan kode reading `blog`/`layanan` (glob loader otomatis).

### TIDAK disentuh
- `blog` & `layanan` content collections (sudah cocok 1:1).
- `public/admin/*` otomatis ter-copy ke `dist/admin/` saat build -> `/admin/` live.

---

## 6. Kendala & Keputusan (sudah diselesaikan di rancangan)

1. **Format tanggal `blog`** — Decap `datetime` tulis ISO; schema minta `"26 Januari 2026"`. Solusi: `preSave` hook konversi. Tidak ubah kode Astro.
2. **`layanan.category` enum** — kode saat ini hanya izinkan `'utama'`. Jika editor butuh `secondary`, widen enum sebelum CMS aktif (§5 #4).
3. **Portofolio** — belum content collection; pakai **file collection** ke `src/data/portfolio.md` (C1) agar tanpa refactor berat. (`blogger` arsip 83 file tetap dikecualikan.)
4. **Pengaturan Situs butuh refactor** — bagian D bukan sekadar config; butuh `site.md` + ubah ~9 file component/page. Ini **risiko tersendiri** -> lakukan di pass terpisah, teruji, dengan backup siap. `heroTitle` kehilangan pewarnaan span (trade-off UX editor vs simplicity).
5. **Subfolder gambar** — `media_folder` Decap global (`public/img`). Konvensi `blog-/layanan-/portfolio-` via `hint` field.
6. **Kontrol akses** — `/admin` publik, simpan butuh GitHub write access (Collaborator).
7. **Validasi ketat** (word-count, dll.) — tidak di-enforce Decap; jalan saat build (Zod). Bila melanggar -> build gagal -> Netlify laporkan.

---

## 7. Langkah Verifikasi (setelah implementasi nanti)

1. **Lokal**: `npm run dev` -> `http://localhost:3000/admin/` -> login GitHub (callback localhost).
2. **Blog/Layanan**: edit 1 artikel -> Save -> cek `.md` berubah & `date` jadi format Indonesia.
3. **Portofolio**: tambah 1 item di file collection -> Save -> cek `src/data/portfolio.md` `items` bertambah.
4. **Pengaturan Situs**: ubah `heroTitle` / `layananHeading` -> Save -> cek `src/data/site.md` & reload homepage.
5. **Build**: `npm run build` -> pastikan tidak error & `dist/admin/index.html` ada & `dist/` merefleksikan perubahan.
6. **Produksi**: deploy Netlify -> uji publish 1 artikel + 1 edit pengaturan -> tunggu 1-2 mnt -> cek live.
7. **Rollback**: revert commit di GitHub (atau restore dari backup §0).

---

## 8. Enhancement Opsional (bukan wajib)
- **Editorial Workflow** (draft -> review -> publish via PR) untuk tim >1 editor.
- **Deploy Preview** Netlify untuk tiap PR editor.
- **Custom media library** agar upload otomatis ke subfolder `blog/` / `layanan/` / `portfolio/`.
- Konversi portofolio ke content collection sungguhan (C2) jika diinginkan nanti.

---

## 9. Checklist Eksekusi (untuk nanti, setelah disetujui)
**Pass 1 — Konten (aman, minim risiko):**
- [ ] Buat `public/admin/index.html` (+ preSave hook tanggal)
- [ ] Buat `public/admin/config.yml` (blog, layanan, portofolio file-collection)
- [ ] Setup GitHub OAuth App + catat Client ID
- [ ] Beri akses Collaborator ke editor
- [ ] Test lokal blog/layanan/portofolio
- [ ] `npm run build` -> cek `dist/admin/`

**Pass 2 — Pengaturan Situs (butuh refactor, hati-hati):**
- [ ] Buat `src/data/site.md`
- [ ] Refactor `Hero.astro`, `Credentials.astro`, `Navbar.astro`, `Footer.astro`, `index.astro`, `layanan/index.astro`, `portofolio.astro`, `blog/index.astro`, `kontak.astro` -> baca `site.md`
- [ ] Tambah file-collection `pengaturan-situs` ke `config.yml`
- [ ] (Jika perlu) Widen `layanan.category` enum
- [ ] Test lokal perubahan homepage & tiap halaman
- [ ] `npm run build` -> verifikasi tidak error

**Pass 3 — Produksi:**
- [ ] Deploy Netlify -> uji publish & edit pengaturan
- [ ] Verifikasi rollback lewat Git / backup §0
