# RENCANA ARTIKEL CUTTING PLAT & CNC ROUTER
Sriwijaya Grafika — Optimasi Hub Pilar /cutting-plat/

Dokumen ini adalah **antrean eksekusi konten (artikel edukasi & target daerah)** untuk mendominasi kata kunci pencarian jasa laser cutting logam, CNC router ACP/kayu, plat motif pagar, dan laser akrilik di Palembang dan seluruh Sumatera Selatan.

Target Halaman Pilar: `https://sriwijayagrafika.com/cutting-plat/`
Halaman Indeks Artikel: `https://sriwijayagrafika.com/cutting-plat/artikel/`
Lokasi Penyimpanan File: `src/content/cutting/<slug>.md`

---

## Aturan untuk AI Agent

Saat pengguna bertanya: **"buat artikel apa kita hari ini?"** (atau variasi serupa):
1. Buka dan baca file ini (`RENCANA-ARTIKEL-CUTTING.md`) dan `RENCANA-ARTIKEL-HARIAN.md`.
2. Sajikan **2 opsi rekomendasi** kepada pengguna:
   - **Opsi Reklame Utama** (dari `RENCANA-ARTIKEL-HARIAN.md` untuk Huruf Timbul, Neon Box, atau Rambu K3).
   - **Opsi Cutting Plat & Laser CNC** (dari antrean `[ ] Belum Ditulis` di file ini).
3. Jelaskan ringkasan masing-masing: Judul, Target Keyword, Kategori Mesin/Material, dan Strategi Internal Link.
4. Minta konfirmasi pengguna tentang opsi mana yang ingin dikerjakan hari ini.
5. Jalankan riset kata kunci & outline semantik dengan skill **`pakar-entity-seo`**.
6. Tulis artikel final dengan skill **`penulis-ahli`** (mematuhi format frontmatter Zod cutting: `title`, `titleSeo`, `tipe: "artikel"`, `kategori`, `date`, `imgurl`, `imgalt`, `pengantar`, `kesimpulan`, `published: true`, `faq`).
7. Pastikan URL gambar memakai rasio 4:3 yang ada di `public/img/cutting-plat/` atau siapkan path aset yang sesuai.
8. Jalankan validasi link:
   ```bash
   node scripts/check-links.js src/content/cutting/<slug>.md
   npm run check:links
   ```
9. Tandai checkbox status menjadi `[x] Selesai` dan catat tanggal selesainya.

---

## Konten Awal yang Telah Terbit

### Target Daerah Awal (tipe: "daerah")
- [x] Selesai: `prabumulih.md` (Kota Prabumulih)
- [x] Selesai: `muara-enim.md` (Muara Enim & Tanjung Enim)
- [x] Selesai: `lahat.md` (Kabupaten Lahat)
- [x] Selesai: `sekayu.md` (Sekayu Musi Banyuasin)
- [x] Selesai: `pali.md` (Talang Ubi & Pendopo PALI)
- [x] Selesai: `indralaya.md` (Indralaya Ogan Ilir)
- [x] Selesai: `betung.md` (Betung Banyuasin)
- [x] Selesai: `lubuklinggau.md` (Kota Lubuklinggau)

### Artikel Spesialisasi Awal (tipe: "artikel")
- [x] Selesai: `jasa-potong-acp-prabumulih.md` (Potong ACP Prabumulih Presisi CNC Router)
- [x] Selesai: `motif-pagar-laser-cutting.md` (Potong Plat Motif Pagar & Ornamen Songket)
- [x] Selesai: `standar-format-file-dxf-laser-cutting.md` (Format File DXF dan CDR Laser Cutting)
- [x] Selesai: `perbandingan-biaya-laser-fiber-vs-plasma-cutting.md` (Biaya Laser Fiber vs Plasma Cutting)

---

## Daftar Antrean Artikel Baru (tipe: "artikel")

### Artikel 1 — Ketebalan Plat Pagar (Fiber Laser Logam)
- **Status:** [x] Selesai (29 Oktober 2026)
- **Kategori Mesin:** `fiber-laser` / `plat-motif`
- **Slug File:** `ketebalan-plat-besi-pagar-laser-cutting`
- **Judul Kartu (`title`, maks 5 kata):** Ketebalan Plat Pagar Laser
- **Title SEO (`titleSeo`, maks 12 kata):** Panduan Ketebalan Plat Besi Pagar Laser Cutting Palembang
- **Target Keyword:**
  - *Primary:* plat laser cutting pagar, ketebalan plat besi laser
  - *Secondary:* jasa cutting pagar besi, plat pagar tidak melengkung
  - *Semantic / LSI:* plat SPHC hitam 2mm vs 3mm, rangka hollow galvanis 4x4, kekuatan hembusan angin, sambungan las CO2
- **Strategi Internal Link:**
  - Tautan ke `/cutting-plat/motif-pagar-laser-cutting/` dan `/cutting-plat/perbandingan-biaya-laser-fiber-vs-plasma-cutting/`.
  - Tautan ke pilar reklame `/layanan/huruf-timbul/`.

---

### Artikel 2 — Stainless 304 vs 201 untuk Laser Eksterior
- **Status:** [ ] Belum Ditulis
- **Kategori Mesin:** `fiber-laser`
- **Slug File:** `laser-cutting-plat-stainless-304-vs-201`
- **Judul Kartu (`title`, maks 5 kata):** Laser Stainless 304 vs 201
- **Title SEO (`titleSeo`, maks 12 kata):** Jasa Laser Cutting Plat Stainless 304 vs 201 untuk Eksterior
- **Target Keyword:**
  - *Primary:* laser cutting stainless, jasa laser cutting stainless steel
  - *Secondary:* harga laser cutting stainless per meter, potong stainless anti karat
  - *Semantic / LSI:* kandungan nikel & kromium, korosi hujan asam, finishing hairline vs mirror, gas bantu nitrogen
- **Strategi Internal Link:**
  - Tautan ke `/cutting-plat/prabumulih/` dan `/cutting-plat/lahat/`.
  - Tautan ke edukasi blog `/blog/teknis/otopsi-karat-stainless-201/`.

---

### Artikel 3 — Kalkulasi Biaya Jasa Potong Plat (RAB & Meter Lari)
- **Status:** [ ] Belum Ditulis
- **Kategori Mesin:** `fiber-laser`
- **Slug File:** `cara-hitung-biaya-laser-cutting-plat-besi`
- **Judul Kartu (`title`, maks 5 kata):** Hitung Biaya Potong Laser
- **Title SEO (`titleSeo`, maks 12 kata):** Cara Menghitung Biaya Jasa Laser Cutting Plat Besi per Meter
- **Target Keyword:**
  - *Primary:* harga jasa potong plat per meter, harga laser cutting plat besi
  - *Secondary:* biaya jasa cutting plat custom, cutting plat per lembar
  - *Semantic / LSI:* total cutting length, tebal plat, piercing time, optimasi nesting file DXF
- **Strategi Internal Link:**
  - Tautan ke `/cutting-plat/standar-format-file-dxf-laser-cutting/` dan `/cutting-plat/perbandingan-biaya-laser-fiber-vs-plasma-cutting/`.

---

### Artikel 4 — Pagar Motif Songket Khas Palembang
- **Status:** [ ] Belum Ditulis
- **Kategori Mesin:** `plat-motif`
- **Slug File:** `jasa-laser-cutting-motif-songket-palembang`
- **Judul Kartu (`title`, maks 5 kata):** Pagar Motif Songket Palembang
- **Title SEO (`titleSeo`, maks 12 kata):** Jasa Potong Plat Motif Songket Palembang Presisi CNC Fiber Laser
- **Target Keyword:**
  - *Primary:* jasa laser cutting motif songket Palembang, jasa potong plat motif
  - *Secondary:* motif laser cutting minimalis modern, plat dekoratif custom
  - *Semantic / LSI:* motif bunga tanjung, motif lepus, ornamen arsitektur lokal Sumsel, gerbang kantor dinas
- **Strategi Internal Link:**
  - Tautan ke `/cutting-plat/` dan `/layanan/plang-toko-kantor/`.

---

### Artikel 5 — Ornamen Fasad & Pagar Muara Enim
- **Status:** [ ] Belum Ditulis
- **Kategori Mesin:** `plat-motif` / `daerah`
- **Slug File:** `jasa-cutting-plat-ornamen-muara-enim`
- **Judul Kartu (`title`, maks 5 kata):** Laser Cutting Fasad Muara Enim
- **Title SEO (`titleSeo`, maks 12 kata):** Jasa Cutting Plat Ornamen Fasad dan Pagar di Muara Enim
- **Target Keyword:**
  - *Primary:* jasa cutting plat Muara Enim, laser cutting motif pagar
  - *Secondary:* panel dekoratif besi, secondary skin bangunan
  - *Semantic / LSI:* perumahan Tanjung Enim, fasilitas mess karyawan tambang, pengiriman via travel Palembang-Muara Enim
- **Strategi Internal Link:**
  - Tautan ke `/cutting-plat/muara-enim/` dan `/cutting-plat/motif-pagar-laser-cutting/`.

---

### Artikel 6 — Partisi Ruangan & Mihrab Masjid Kaligrafi
- **Status:** [ ] Belum Ditulis
- **Kategori Mesin:** `plat-motif`
- **Slug File:** `laser-cutting-partisi-masjid-kaligrafi-arab`
- **Judul Kartu (`title`, maks 5 kata):** Partisi Ruangan Motif Islami
- **Title SEO (`titleSeo`, maks 12 kata):** Jasa Laser Cutting Partisi Masjid dan Ornamen Kaligrafi Arab Presisi
- **Target Keyword:**
  - *Primary:* jasa laser cutting partisi masjid, cutting plat motif Islami
  - *Secondary:* cutting motif kaligrafi laser cutting, penyekat ruangan motif
  - *Semantic / LSI:* mihrab musholla, ornamen kubah, kisi-kisi ventilasi dekoratif, finishing gold duco
- **Strategi Internal Link:**
  - Tautan ke `/cutting-plat/sekayu/` dan `/cutting-plat/lahat/`.

---

### Artikel 7 — Teknik Grooving & Potong ACP Fasad Ruko
- **Status:** [ ] Belum Ditulis
- **Kategori Mesin:** `acp`
- **Slug File:** `jasa-grooving-dan-potong-acp-fasad-ruko`
- **Judul Kartu (`title`, maks 5 kata):** Teknik Grooving Fasad ACP
- **Title SEO (`titleSeo`, maks 12 kata):** Jasa Potong dan Grooving ACP 90 Derajat Fasad Ruko Presisi
- **Target Keyword:**
  - *Primary:* jasa potong ACP, jasa CNC router ACP 4 mm
  - *Secondary:* jasa lubang ACP, jasa cutting ACP motif
  - *Semantic / LSI:* mata pisau V-Groove 90°, lipatan sudut tajam, ACP Seven PVDF, rangka hollow aluminium
- **Strategi Internal Link:**
  - Tautan ke `/cutting-plat/jasa-potong-acp-prabumulih/` dan `/layanan/neon-box/`.

---

### Artikel 8 — Potong ACP Gedung Kantor & Fasad Sekayu
- **Status:** [ ] Belum Ditulis
- **Kategori Mesin:** `acp` / `daerah`
- **Slug File:** `jasa-cnc-router-acp-gedung-sekayu`
- **Judul Kartu (`title`, maks 5 kata):** Potong ACP Fasad Sekayu
- **Title SEO (`titleSeo`, maks 12 kata):** Jasa CNC Router ACP Gedung Kantor dan Ruko di Sekayu
- **Target Keyword:**
  - *Primary:* jasa cutting ACP Palembang, jasa potong ACP untuk reklame
  - *Secondary:* jasa CNC router Sumatera Selatan, panel fasad bangunan
  - *Semantic / LSI:* proyek kantor dinas Muba, fasad ruko Sekayu, expedisi angkutan Betung-Sekayu
- **Strategi Internal Link:**
  - Tautan ke `/cutting-plat/sekayu/` dan `/cutting-plat/betung/`.

---

### Artikel 9 — CNC Router Multiplek, HMR & MDF Interior
- **Status:** [ ] Belum Ditulis
- **Kategori Mesin:** `cnc-router`
- **Slug File:** `jasa-cnc-router-multiplek-hmr-mdf-interior`
- **Judul Kartu (`title`, maks 5 kata):** CNC Router Multiplek & MDF
- **Title SEO (`titleSeo`, maks 12 kata):** Jasa CNC Router Multiplek HMR dan MDF Interior Palembang Presisi
- **Target Keyword:**
  - *Primary:* CNC router multiplek, cutting MDF
  - *Secondary:* jasa CNC cutting triplek, jasa CNC router untuk interior
  - *Semantic / LSI:* HMR hijau anti lembab, plywood 18mm, kisi-kisi wall panel, perajin kitchen set
- **Strategi Internal Link:**
  - Tautan ke `/cutting-plat/` dan `/layanan/booth-event-desk/`.

---

### Artikel 10 — Laser Cutting Akrilik Presisi untuk Huruf Timbul & Neon Box
- **Status:** [ ] Belum Ditulis
- **Kategori Mesin:** `laser-co2`
- **Slug File:** `jasa-laser-cutting-akrilik-reklame-palembang`
- **Judul Kartu (`title`, maks 5 kata):** Cutting Akrilik Huruf Timbul
- **Title SEO (`titleSeo`, maks 12 kata):** Jasa Potong Laser Akrilik Presisi Bening dan Warna untuk Reklame
- **Target Keyword:**
  - *Primary:* jasa laser cutting akrilik, jasa potong akrilik
  - *Secondary:* laser cutting akrilik untuk neon box, potong akrilik custom
  - *Semantic / LSI:* akrilik MC/Marga Cipta 2-5mm, tepian potong bening mengkilap, akrilik diffuser susu
- **Strategi Internal Link:**
  - Tautan ke `/layanan/huruf-timbul/` dan `/layanan/neon-box/`.

---

### Artikel 11 — Laser Cutting Akrilik Kampus & Instansi Indralaya
- **Status:** [ ] Belum Ditulis
- **Kategori Mesin:** `laser-co2` / `daerah`
- **Slug File:** `jasa-cutting-akrilik-display-kampus-indralaya`
- **Judul Kartu (`title`, maks 5 kata):** Laser Akrilik Indralaya
- **Title SEO (`titleSeo`, maks 12 kata):** Jasa Potong Akrilik dan Display Kampus Ogan Ilir Indralaya
- **Target Keyword:**
  - *Primary:* jasa cutting akrilik Palembang, jasa laser cutting plakat akrilik
  - *Secondary:* potong logo custom, akrilik signage
  - *Semantic / LSI:* laboratorium Unsri, plakat wisuda seminar, signage meja kantor Tanjung Senai
- **Strategi Internal Link:**
  - Tautan ke `/cutting-plat/indralaya/` dan `/layanan/produk-akrilik/`.

---

### Artikel 12 — Plat Perforasi & Secondary Skin Arsitektur
- **Status:** [ ] Belum Ditulis
- **Kategori Mesin:** `plat-motif`
- **Slug File:** `jasa-plat-perforasi-custom-secondary-skin`
- **Judul Kartu (`title`, maks 5 kata):** Plat Perforasi Motif Custom
- **Title SEO (`titleSeo`, maks 12 kata):** Jasa Pembuatan Plat Perforasi Lubang Motif Custom untuk Arsitektur
- **Target Keyword:**
  - *Primary:* plat perforasi motif custom, secondary skin motif
  - *Secondary:* panel fasad bangunan, plat dekoratif custom
  - *Semantic / LSI:* shading penahan panas, lubang staggered vs round, fasad cafe industrial, plat galvanis 1.5mm
- **Strategi Internal Link:**
  - Tautan ke `/cutting-plat/motif-pagar-laser-cutting/` dan `/layanan/plang-toko-kantor/`.
