# RENCANA ARTIKEL HARIAN (TOPICAL CLUSTER ROADMAP)
Sriwijaya Grafika — Optimasi Halaman Pilar Google

Dokumen ini adalah **antrean eksekusi harian (1 hari 1 artikel)** untuk mendongkrak dua halaman pilar utama ke halaman pertama Google:
1. `http://localhost:3000/layanan/huruf-timbul` (Layanan Pembuatan Huruf Timbul)
2. `http://localhost:3000/layanan/rambu-rambu` (Layanan Pembuatan Rambu K3 & Safety Sign)

---

## Aturan untuk AI Agent

Saat pengguna bertanya: **"buat artikel apa kita hari ini?"** (atau variasi kalimat serupa):
1. Buka dan baca file ini (`RENCANA-ARTIKEL-HARIAN.md`).
2. Cari artikel teratas yang statusnya masih belum selesai (`[ ]`).
3. Tampilkan rencana hari tersebut kepada pengguna:
   - Hari ke-berapa
   - Target Pilar
   - Judul Kartu (`title`) & `titleSeo`
   - Keyword & Intensi
   - Rencana Internal Link
4. Minta konfirmasi pengguna untuk mulai memproses.
5. Jalankan riset kata kunci, pemetaan entitas semantik, dan outline E-E-A-T menggunakan skill **`pakar-entity-seo`**.
6. Teruskan hasil riset tersebut ke skill **`penulis-ahli`** untuk menulis artikel sesuai standar project (humanizer + SEO/GEO 2026 + non-komoditas + schema Zod blog).
7. Buat file artikel di `src/content/blog/<slug>.md`.
8. Tandai checkbox status menjadi `[x]` dan catat tanggal selesainya.

---

## Daftar Antrean Artikel Harian

### Hari 1 — Penguat Huruf Timbul (Kelistrikan & Trafo Outdoor)
- **Status:** [x] Selesai (20 Oktober 2026)
- **Target Halaman Pilar:** `/layanan/huruf-timbul`
- **Topik:** `teknis`
- **Slug File:** `standar-trafo-led-huruf-timbul-outdoor`
- **Judul Kartu (`title`, maks 5 kata):** Standar Trafo Huruf Timbul Outdoor
- **Title SEO (`titleSeo`, maks 12 kata):** Standar Trafo LED Huruf Timbul Tahan Hujan di Palembang
- **Target Keyword:**
  - *Primary:* trafo led huruf timbul tahan air palembang
  - *Secondary:* beban watt modul led signage, trafo outdoor rainproof 12v
  - *Semantic / LSI:* waterproof IP67/IP68, drop tegangan kabel outdoor, arus bocor saat hujan deras, driver Meanwell / power supply jaring
- **Strategi Internal Link:**
  - Anchor text alami ke `[jasa pembuatan huruf timbul](/layanan/huruf-timbul)` dengan garansi kelistrikan 1 tahun.
  - Link silang ke artikel pendukung lain seperti rincian harga per meter atau uji karat stainless.

---

### Hari 2 — Penguat Rambu K3 (Grade Stiker Tambang & Perkebunan Sumsel)
- **Status:** [x] Selesai (21 Oktober 2026)
- **Target Halaman Pilar:** `/layanan/rambu-rambu`
- **Topik:** `panduan`
- **Slug File:** `standar-stiker-rambu-tambang-sumsel`
- **Judul Kartu (`title`, maks 5 kata):** Standar Stiker Rambu Tambang Sumsel
- **Title SEO (`titleSeo`, maks 12 kata):** Perbedaan Grade Stiker Rambu K3 Area Tambang Batubara Sumsel
- **Target Keyword:**
  - *Primary:* standar stiker rambu tambang batubara sumsel
  - *Secondary:* stiker reflektif rambu tambang lahat muara enim, rambu hauling road tambang
  - *Semantic / LSI:* retroreflektif sheeting ASTM D4956, Engineer Grade Prismatic (EGP) vs High Intensity Prismatic (HIP), pantulan debu batubara, plat ACP 3mm anti karat
- **Strategi Internal Link:**
  - Anchor text alami ke `[pembuatan rambu K3 industri](/layanan/rambu-rambu)` untuk pengadaan plat aluminium dan stiker standar tambang.

---

### Hari 3 — Penguat Huruf Timbul (Regulasi & Izin Reklame Fasad Ruko)
- **Status:** [x] Selesai (22 Oktober 2026)
- **Target Halaman Pilar:** `/layanan/huruf-timbul`
- **Topik:** `panduan`
- **Slug File:** `izin-reklame-huruf-timbul-fasad-palembang`
- **Judul Kartu (`title`, maks 5 kata):** Syarat Izin Reklame Huruf Timbul
- **Title SEO (`titleSeo`, maks 12 kata):** Prosedur Izin Reklame Huruf Timbul Fasad Ruko di Palembang
- **Target Keyword:**
  - *Primary:* izin reklame huruf timbul palembang
  - *Secondary:* pajak reklame fasad ruko palembang, dpmptsp kota palembang izin plang toko
  - *Semantic / LSI:* Izin Penyelenggaraan Reklame (IPR), Nilai Sewa Reklame (NSR), sempadan jalan Sudirman / R. Sukamto, mockup 3D untuk lampiran izin
- **Strategi Internal Link:**
  - Menghubungkan kepatuhan izin fasad dengan pemesanan langsung di `[layanan huruf timbul Palembang](/layanan/huruf-timbul)`.

---

### Hari 4 — Penguat Rambu K3 (Rambu Evakuasi & Keselamatan Gedung)
- **Status:** [x] Selesai (23 Oktober 2026)
- **Target Halaman Pilar:** `/layanan/rambu-rambu`
- **Topik:** `panduan`
- **Slug Usulan:** `standar-rambu-evakuasi-glow-in-the-dark-gedung`
- **Judul Kartu (`title`, maks 5 kata):** Standar Rambu Evakuasi Glow Dark
- **Title SEO (`titleSeo`, maks 12 kata):** Ketentuan Rambu Evakuasi Glow in The Dark untuk Gedung Komersial
- **Target Keyword:**
  - *Primary:* rambu evakuasi glow in the dark palembang
  - *Secondary:* safety sign fosfor jalur darurat gedung, rambu photoluminescent hotel dan mall
  - *Semantic / LSI:* standar DIN 67510, intensitas pendaran luminansi (mcd/m2), tangga darurat padam total, inspeksi dinas pemadam kebakaran
- **Strategi Internal Link:**
  - Mengarahkan pengadaan sistem safety sign jalur darurat gedung ke `[jasa pembuatan rambu keselamatan](/layanan/rambu-rambu)`.

---

### Hari 5 — Penguat Huruf Timbul (Segmen Interior & Lobby Kantor)
- **Status:** [ ] Belum Ditulis
- **Target Halaman Pilar:** `/layanan/huruf-timbul`
- **Topik:** `tips`
- **Slug Usulan:** `huruf-timbul-meja-resepsionis-lobby-kantor`
- **Judul Kartu (`title`, maks 5 kata):** Huruf Timbul Lobby Kantor Elegan
- **Title SEO (`titleSeo`, maks 12 kata):** Pilihan Huruf Timbul Meja Resepsionis dan Lobby Kantor Palembang
- **Target Keyword:**
  - *Primary:* huruf timbul lobby kantor palembang
  - *Secondary:* tulisan timbul resepsionis akrilik, huruf timbul stainless gold hairline interior
  - *Semantic / LSI:* mounting bracket tempel marmer, backlit soft warm white, ketebalan akrilik solid 10mm, laser presisi logo instansi
- **Strategi Internal Link:**
  - Mengarahkan kebutuhan branding interior korporat ke `[layanan huruf timbul](/layanan/huruf-timbul)`.

---

### Hari 6 — Penguat Rambu K3 (Kepatuhan Audit Sertifikasi SMK3)
- **Status:** [ ] Belum Ditulis
- **Target Halaman Pilar:** `/layanan/rambu-rambu`
- **Topik:** `panduan`
- **Slug Usulan:** `daftar-rambu-k3-wajib-audit-smk3`
- **Judul Kartu (`title`, maks 5 kata):** Checklist Rambu Wajib Audit SMK3
- **Title SEO (`titleSeo`, maks 12 kata):** Daftar Rambu K3 Wajib untuk Lolos Audit SMK3 Sektor Industri
- **Target Keyword:**
  - *Primary:* rambu k3 wajib audit smk3 industri
  - *Secondary:* checklist safety sign pabrik lolos audit, pengadaan rambu k3 permenakertrans palembang
  - *Semantic / LSI:* PP No. 50 Tahun 2012, ISO 45001, rambu APD wajib, rambu jalur evakuasi, titik kumpul assembly point, piktogram larangan
- **Strategi Internal Link:**
  - Menawarkan paket lengkap rambu audit SMK3 langsung di `[pembuatan rambu k3 pabrik](/layanan/rambu-rambu)`.

---

### Hari 7 — Penguat Huruf Timbul (Perawatan & Servis Lampu LED)
- **Status:** [ ] Belum Ditulis
- **Target Halaman Pilar:** `/layanan/huruf-timbul`
- **Topik:** `tips`
- **Slug Usulan:** `cara-merawat-dan-membersihkan-huruf-timbul`
- **Judul Kartu (`title`, maks 5 kata):** Cara Rawat Huruf Timbul Kusam
- **Title SEO (`titleSeo`, maks 12 kata):** Cara Membersihkan Huruf Timbul Akrilik dan Stainless Akibat Cuaca Palembang
- **Target Keyword:**
  - *Primary:* cara membersihkan huruf timbul outdoor
  - *Secondary:* servis huruf timbul led redup palembang, perawatan huruf timbul stainless kusam
  - *Semantic / LSI:* cairan pembersih stainless tanpa asam, jamur kaca akrilik, penggantian modul led mati sebagian, seal silikon anti air
- **Strategi Internal Link:**
  - Mengarahkan pemilik bisnis yang butuh restorasi atau pembuatan baru ke `[jasa huruf timbul Palembang](/layanan/huruf-timbul)`.

---

### Hari 8 — Penguat Rambu K3 (Lalu Lintas Kawasan Pabrik & Proyek)
- **Status:** [ ] Belum Ditulis
- **Target Halaman Pilar:** `/layanan/rambu-rambu`
- **Topik:** `tips`
- **Slug Usulan:** `standar-rambu-k3-lalu-lintas-kawasan-pabrik`
- **Judul Kartu (`title`, maks 5 kata):** Rambu K3 Area Proyek Konstruksi
- **Title SEO (`titleSeo`, maks 12 kata):** Standar Pemasangan Rambu K3 dan Batas Kecepatan di Area Kawasan Pabrik
- **Target Keyword:**
  - *Primary:* rambu lalu lintas kawasan pabrik palembang
  - *Secondary:* rambu batas kecepatan jalan pabrik, rambu k3 proyek konstruksi
  - *Semantic / LSI:* rambu prioritas forklift, tiang tanam pipa galvanis 2 inch, pondasi cor angkur, visibilitas sopir truk tronton
- **Strategi Internal Link:**
  - Mengajak kontraktor dan pengelola kawasan memesan rambu lalu lintas internal komplit di `[halaman layanan rambu K3](/layanan/rambu-rambu)`.
