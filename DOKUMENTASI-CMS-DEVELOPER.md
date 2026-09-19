# Panduan & Dokumentasi Arsitektur Decap CMS — Sriwijaya Grafika

> **Untuk:** Junior Developer / Maintainer Proyek  
> **Tanggal Implementasi:** September 2026  
> **Stack:** Astro 7 (Static Site Generator) + Decap CMS v3 + GitHub API + Netlify  

---

## 1. Latar Belakang & Filosofi Arsitektur

### Masalah Awal
Sebelumnya, website Sriwijaya Grafika adalah website murni statis (SSG) berbasis file Markdown di komputer lokal. Masalahnya:
- Pemilik website atau rekan tim non-teknis kesulitan mengedit konten karena harus paham Git, VS Code, dan menjalankan terminal.
- Jika menggunakan CMS tradisional (seperti WordPress), kita kehilangan keunggulan kecepatan, keamanan, dan hosting gratis dari Astro SSG.

### Solusi: "Git-based CMS" (Decap CMS)
Kita memilih **Decap CMS** (sebelumnya bernama Netlify CMS). 
Decap CMS adalah aplikasi Single Page Application (SPA) berbasis JavaScript statis yang bertindak sebagai antarmuka formulir (mirip WordPress). 

**Prinsip Kerjanya:**
1. Decap CMS **bukan database server** (tidak butuh MySQL/PostgreSQL).
2. Decap CMS berkomunikasi langsung dengan **GitHub API** menggunakan akun GitHub editor.
3. Saat editor klik tombol **Save**, Decap CMS membuat sebuah **Git commit** langsung ke branch `main` repositori GitHub.
4. Kode website (layout, komponen, logika) tetap statis, aman, dan dapat diedit oleh developer di lokal.

---

## 2. Cara Kerja End-to-End (Alur Data)

Berikut diagram alur bagaimana perubahan konten mengalir hingga tampil di website publik:

```
┌────────────────────────────────────────────────────────┐
│             EDITOR / PENGGUNA NON-TEKNIS              │
│  Buka: https://sriwijayagrafika.com/admin/             │
│  (atau http://localhost:3000/admin/ di komputer lokal) │
└──────────────────────────┬─────────────────────────────┘
                           │ 1. Login via GitHub OAuth
                           ▼
┌────────────────────────────────────────────────────────┐
│             FORMULIR DECAP CMS (DI BROWSER)            │
│  - Edit Artikel Blog                                   │
│  - Edit Layanan                                        │
│  - Edit Galeri Portofolio                              │
│  - Edit Pengaturan Situs (Nama, Tagline, Hero, Banner) │
└──────────────────────────┬─────────────────────────────┘
                           │ 2. Klik "Save"
                           ▼
┌────────────────────────────────────────────────────────┐
│                 GITHUB API & REPOSITORY                │
│  Commit otomatis ke branch `main`:                     │
│  - Menulis file Markdown baru / mengubah file lama     │
│  - Mengunggah file gambar ke `public/img/`             │
│  *CATATAN: Belum memakan kuota build menit Netlify!    │
└──────────────────────────┬─────────────────────────────┘
                           │ 3. Klik tombol "🚀 Deploy ke Live"
                           ▼
┌────────────────────────────────────────────────────────┐
│                  NETLIFY BUILD HOOK                    │
│  Webhook POST ke api.netlify.com/build_hooks/...       │
└──────────────────────────┬─────────────────────────────┘
                           │ 4. Netlify Runner aktif
                           ▼
┌────────────────────────────────────────────────────────┐
│                  NETLIFY CI / CD BUILD                 │
│  1. `git pull` commit terbaru dari GitHub              │
│  2. Jalankan `npm run build` (Astro SSG render HTML)   │
│  3. Deploy file `dist/` ke CDN global                  │
│  4. Hasilnya: Website live terupdate dalam 1-2 menit!  │
└────────────────────────────────────────────────────────┘
```

---

## 3. Struktur File yang Terlibat

Jika Anda sebagai developer ingin memodifikasi atau menambah fitur CMS, berikut file-file kuncinya:

```
sriwijayagrafika.com/
├── public/
│   └── admin/
│       ├── index.html       # Entry point panel admin Decap CMS + script tombol Deploy + hook event
│       └── config.yml       # Definisi koleksi, skema field, widget, dan mapping folder/file CMS
├── src/
│   ├── content.config.ts    # Skema validasi Zod untuk Content Collections Astro (blog & layanan)
│   ├── data/
│   │   ├── portfolio.md     # Sumber data galeri portofolio (diedit lewat CMS)
│   │   └── site.md          # Sumber data nama website, hero, credentials, banner halaman (diedit lewat CMS)
│   └── lib/
│       ├── blog.ts          # Helper pengolah tanggal (ISO <-> format Indonesia) dan waktu baca
│       ├── portfolio.ts     # Helper parser portfolio.md
│       └── site.ts          # Helper parser site.md agar bisa dibaca komponen Astro
├── netlify.toml             # Konfigurasi build Netlify + script pencegah auto-deploy boros kuota
└── astro.config.mjs         # Konfigurasi Astro (redirects /admin ke /admin/index.html)
```

---

## 4. Mekanisme Kunci & Solusi Masalah Teknis

Sebagai junior developer, penting untuk memahami keputusan teknis berikut:

### A. Mekanisme Hemat Kuota Build Netlify (`netlify.toml`)
Netlify free tier hanya memberi 300 menit build per bulan. Editor sering kali menekan Save berkali-kali saat menulis artikel. Jika tiap Save memicu build, kuota akan habis dalam beberapa hari.

**Solusi:**
Di `netlify.toml`, kita memasang aturan `ignore`:
```toml
[build]
  publish = "dist"
  command = "npm run build"
  ignore = "[ -z \"$INCOMING_HOOK_TITLE\" ] && exit 0 || exit 1"
```
- **Saat editor klik Save:** Netlify mendeteksi push Git biasa, variabel `$INCOMING_HOOK_TITLE` kosong, script mengeksekusi `exit 0` → Netlify langsung membatalkan build dengan status *"Canceled: build ignored"*. **0 menit terpakai!**
- **Saat tombol "🚀 Deploy ke Live" diklik:** Webhook mengirim `$INCOMING_HOOK_TITLE`, script mengeksekusi `exit 1` → Netlify menjalankan `npm run build` dan mempublikasikan situs.

### B. Otentikasi GitHub OAuth (Lokal vs Live)
- Decap CMS menggunakan gateway OAuth Netlify (`https://api.netlify.com/auth`).
- Di `public/admin/config.yml`:
  ```yaml
  backend:
    name: github
    repo: boimthinks/sriwijayagrafika
    branch: main
    site_domain: sriwijayagrafika.com
  ```
- Dengan menyetel `site_domain: sriwijayagrafika.com`, Decap CMS mengenali situs yang sama baik saat dijalankan di `http://localhost:3000/admin/` maupun di `https://sriwijayagrafika.com/admin/`.
- Di dashboard Netlify (Site Configuration → Access & security → OAuth), kita menginstal GitHub provider dengan Client ID & Client Secret dari GitHub Developer Settings.
- Di GitHub OAuth App, Authorization Callback URL disetel ke:
  `https://api.netlify.com/auth/done`.

### C. Standardisasi Format Tanggal Blog (ISO vs Teks Indonesia)
- **Masalah:** Awalnya tanggal blog ditulis teks biasa `"26 Januari 2026"`. Akibatnya, Decap CMS tidak bisa melakukan sorting artikel dari yang terbaru ke terlama karena alfabet huruf bulan mengacaukan urutan (contoh: "15 September" kalah urut dibanding "2 Februari").
- **Solusi:**
  1. Semua tanggal di frontmatter disimpan dalam standar ISO `YYYY-MM-DD` (contoh: `"2026-09-19"`).
  2. Di Decap CMS (`config.yml`), field `date` menggunakan widget `datetime` lengkap dengan calendar picker dan auto-sort `sortable_fields: date (desc)`.
  3. Skema Zod di `src/content.config.ts` dibuat fleksibel menerima string maupun objek Date dari parser YAML.
  4. Fungsi `formatIndonesianDate()` di `src/lib/blog.ts` otomatis mengubah ISO date menjadi teks bahasa Indonesia ramah pengguna (`19 September 2026`) saat di-render ke kartu dan halaman web.

### D. Otomatisasi Alt Gambar dari Title SEO
Untuk mempermudah editor non-teknis dan menjaga standar SEO:
- Di `public/admin/index.html`, dipasang event listener `preSave`:
  ```javascript
  cms.registerEventListener({
    name: 'preSave',
    handler: ({ entry }) => {
      let data = entry.get('data');
      if (data) {
        const titleSeo = data.get('titleSeo');
        const imgalt = data.get('imgalt');
        if (titleSeo && (!imgalt || !String(imgalt).trim())) {
          data = data.set('imgalt', titleSeo);
        }
        return data;
      }
    }
  });
  ```
- Field `imgalt` disembunyikan dari antarmuka CMS agar formulir bersih, dan nilainya otomatis diisi persis sama dengan `titleSeo`.

---

## 5. Cara Menambah / Mengubah Konten di CMS (Panduan Pengembang)

Jika di masa depan ada permintaan: *"Tolong tambahkan field baru di CMS"*, ikuti langkah berikut:

### Contoh: Menambah field "Video URL" di Layanan
1. **Langkah 1: Update Skema Zod** di `src/content.config.ts`:
   ```typescript
   videoUrl: z.string().optional(),
   ```
2. **Langkah 2: Daftarkan Field di CMS** di `public/admin/config.yml`:
   ```yaml
   - { name: videoUrl, label: "URL Video (Opsional)", widget: string, required: false }
   ```
3. **Langkah 3: Tampilkan di Komponen Astro** di `src/pages/layanan/[...slug].astro`:
   ```astro
   {data.videoUrl && <iframe src={data.videoUrl} />}
   ```
4. **Langkah 4: Test & Commit**:
   Jalankan `npm run build` di lokal untuk memastikan validasi Zod lolos tanpa error, lalu commit dan push ke GitHub.

---

## 6. Cara Menggunakan CMS (Bagi Pengguna / Rekan Tim)

Beri tahu pengguna langkah mudah ini:

1. **Akses Panel Admin**:
   - Buka `https://sriwijayagrafika.com/admin/` di browser apa pun (laptop/tablet/HP).
2. **Login**:
   - Klik **Login with GitHub** (pastikan akun GitHub pengguna sudah diundang sebagai Collaborator repositori).
3. **Pilih Menu Koleksi**:
   - **Blog Artikel**: Tulis, edit, atau hapus artikel blog.
   - **Layanan**: Kelola daftar layanan reklame & percetakan.
   - **Portofolio**: Tambah foto proyek baru ke galeri portofolio.
   - **Pengaturan Situs**: Ubah Nama Website, Tagline, Banner Hero, dan teks halaman.
4. **Simpan Perubahan**:
   - Klik tombol **Save** di kanan atas.
5. **Rilis ke Website (Deploy)**:
   - Setelah semua selesai, klik tombol melayang **"🚀 Deploy ke Live"** di pojok kanan bawah.
   - Konfirmasi, dan website live akan terbit otomatis dalam 1–2 menit!
