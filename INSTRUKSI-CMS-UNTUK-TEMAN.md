# Cara Menggunakan CMS Sriwijaya Grafika (untuk Editor/Teman)

> **Update:** 2026-09-19. Panel admin sudah siap. Ikuti langkah ini untuk mulai edit blog, layanan, dan galeri portofolio.

## Prasyarat
- **Akun GitHub** yang telah dijadikan **Collaborator (Write)** di repo [boimthinks/sriwijayagrafika](https://github.com/boimthinks/sriwijayagrafika). Tanpa akses ini, Anda bisa lihat panel tapi tidak bisa simpan.
- **Node.js** terinstall di laptop Anda (versi 18+). Cukup sekali install.
- **Git** (opsional, tapi direkomendasikan untuk sync file lokal dengan GitHub).

## A. Edit lewat **Online** (tanpa install Node)
Jika tidak mau install Node, pakai panel online langsung:

1. Buka **https://sriwijayagrafika.com/admin/** di browser.
2. Login dengan akun GitHub Anda (Collab).
3. Panel Decap tampilkan 3 menu:
   - **Blog Artikel** — edit/baru/hapus artikel.
   - **Layanan** — edit/baru/hapus layanan.
   - **Portofolio** — galeri (list item) — edit langsung list gambar di halaman `/portofolio`.
4. **Edit → Save** = artikel live dalam **1-2 menit** (otomatis deploy oleh Netlify).

### Tips field spesifik
- **Tanggal artikel**: ketik **persis** format `"26 Januari 2026"` (DD NamaBulan YYYY, huruf awal bulan kapital). Tidak bisa pakai date‑picker.
- **Gambar**: upload → otomatis tersimpan di `public/img/`. Konvensi nama: `blog-artikel-saya.webp`, `layanan-huruf-timbul.webp`, dsb.
- **Blog > Topik**: pilih `tips`, `studi-kasus`, `panduan`, atau `kabar`.

## B. Edit lewat **Lokal** (plus preview)
Berguna jika ingin lihat website lokal saat edit, atau bila live site offline.

1. Clone repo:
   ```bash
   git clone https://github.com/boimthinks/sriwijayagrafika.git
   cd sriwijayagrafika
   ```

2. Install dependency (sekali saja):
   ```bash
   npm install
   ```

3. Jalankan dev server:
   ```bash
   npm run dev
   ```

4. Buka **http://localhost:3000/admin/** di browser.
5. Login GitHub (Collab).
6. Edit → Save → **perubahan langsung commit ke GitHub** (bukan ke file lokal). Netlify akan rebuild site live.

> **Catatan sinkronisasi**: karena Decap tulis langsung ke GitHub, file di laptop Anda (`src/content/blog/...`) menjadi **stale**. Sebelum mulai sesi edit baru, jalankan `git pull` untuk ambil versi terbaru (atau restart `npm run dev`).

---

## Struktur Panel CMS

### 1. Blog Artikel
- Folder: `src/content/blog/*.md`
- Schema sudah ketat (max kata di title, date wajib format Indonesia).
- **Tip**: preview artikel di `http://localhost:3000/blog/tips/slug-artikel` (ganti topik & slug sesuai).

### 2. Layanan
- Folder: `src/content/layanan/*.md`
- **Perhatian**: kategori saat ini cuma boleh `utama`. Jika butuh `secondary`, kami akan ubah config dulu.
- Gambar layanan: upload ke `public/img/layanan/`.

### 3. Portofolio
- **Bukan** per‑file, tapi **satu file list** (`src/data/portfolio.md`).
- Anda bisa tambah/hapus/urutkan item galeri di satu layar.
- Kategori: `huruf-timbul`, `neon-box`, `pylon-totem`, `rambu-rambu`, `plang-toko-kantor`, `booth-event-desk`, `produk-akrilik`, `gantry-huruf-led`, `neon-flex`, `billboard`, `papan-nama`.
- Gambar: upload ke `public/img/portfolio/`.

### 4. Pengaturan Situs (Homepage & Halaman)
- File data: `src/data/site.md`
- Anda bisa mengubah:
  - **Identitas**: Nama Website & Tagline.
  - **Homepage Hero**: Gambar Desktop/Mobile, Badge, Judul, Deskripsi, 3 Kotak Statistik (16+ Tahun, 1 Thn Garansi, Free Desain), serta Teks & Link Tombol.
  - **3 Kolom Bawah Hero (Credentials)**: Judul dan deskripsi masing-masing keunggulan/garansi.
  - **Pengaturan Halaman**: SEO Title, Meta Description, Judul Banner Atas, Teks Intro Banner, serta Teks & Link Tombol WhatsApp untuk halaman Layanan, Portofolio, Blog, dan Kontak.

---

## Cara Memicu Deploy ke Website Live

Untuk menghemat kuota build server, website **tidak otomatis rebuild setiap kali Anda klik Save**.
1. Lakukan edit, tambah, atau hapus konten sesuka hati. Klik **Save / Publish** di panel Decap untuk menyimpan perubahan ke GitHub.
2. Ketika semua pekerjaan selesai dan Anda ingin menerbitkan ke website publik:
   - Klik tombol **"🚀 Deploy ke Live"** di pojok kanan bawah panel admin.
   - Konfirmasi dialog yang muncul.
   - Tunggu 1–2 menit, perubahan Anda akan live di `https://sriwijayagrafika.com`.

---

## FAQ

**Q: Saya klik Save / Publish, tapi live website belum berubah. Kenapa?**  
A: Klik tombol **"🚀 Deploy ke Live"** di pojok kanan bawah panel admin untuk memicu proses build Netlify. Tunggu ~1‑2 menit lalu refresh website.

**Q: Saya edit dari lokal, tapi website lokal tidak update. Kenapa?**  
A: Decap tulis ke GitHub, bukan ke file di laptop. Website lokal tetap baca file lama. Untuk preview real‑time, commit dulu lalu `git pull` (atau restart `npm run dev`).

**Q: Gambar yang saya upload langsung muncul di live site?**  
A: Ya, gambar disimpan di `public/img/` di repo. Saat tombol "🚀 Deploy ke Live" ditekan, build akan mengikutsertakan gambar baru tersebut.

**Q: Saya salah input tanggal format. Apa yang terjadi?**  
A: Build akan **gagal** (Netlify laporkan error) → artikel tidak live. Edit ulang tanggal dengan format benar lalu Save lagi.

**Q: Bisa edit artikel lama (blogger) dari panel?**  
A: Tidak. Arsip blogger (80+ file) sengaja tidak dimasukkan karena format file khusus (`*.html.md`). Edit via Git jika perlu.

**Q: Bisa ubah nama website/tagline/hero dari panel?**  
A: **Bisa!** Masuk ke menu **Pengaturan Situs** di panel admin.

---

## Kontak Teknis
Jika ada masalah dengan panel/admin (gagal login, field tidak muncul, build error), hubungi pengelola repo.

**JANGAN** hapus/edit file di luar panel (misal via Git langsung) kecuali Anda paham struktur project — bisa bikin build error.
