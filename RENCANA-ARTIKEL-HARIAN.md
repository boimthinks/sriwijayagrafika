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
- **Status:** [x] Selesai (24 Oktober 2026)
- **Target Halaman Pilar:** `/layanan/huruf-timbul`
- **Topik:** `tips`
- **Slug File:** `huruf-timbul-meja-resepsionis-lobby-kantor`
- **Judul Kartu (`title`, maks 5 kata):** Huruf Timbul Meja Resepsionis
- **Title SEO (`titleSeo`, maks 12 kata):** Pilihan Huruf Timbul Meja Resepsionis Lobby Palembang
- **Target Keyword:**
  - *Primary:* huruf timbul lobby kantor palembang
  - *Secondary:* tulisan timbul resepsionis akrilik, huruf timbul stainless gold hairline interior
  - *Semantic / LSI:* mounting bracket tempel marmer, backlit soft warm white, ketebalan akrilik solid 10mm, laser presisi logo instansi
- **Strategi Internal Link:**
  - Mengarahkan kebutuhan branding interior korporat ke `[layanan huruf timbul](/layanan/huruf-timbul)`.

---

### Hari 6 — Penguat Rambu K3 (Kepatuhan Audit Sertifikasi SMK3)
- **Status:** [x] Selesai (26 Oktober 2026)
- **Target Halaman Pilar:** `/layanan/rambu-rambu`
- **Topik:** `panduan`
- **Slug File:** `daftar-rambu-k3-wajib-audit-smk3`
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
- **Status:** [x] Selesai (27 Oktober 2026)
- **Target Halaman Pilar:** `/layanan/huruf-timbul`
- **Topik:** `tips`
- **Slug File:** `cara-merawat-dan-membersihkan-huruf-timbul`
- **Judul Kartu (`title`, maks 5 kata):** Cara Rawat Huruf Timbul Kusam
- **Title SEO (`titleSeo`, maks 12 kata):** Cara Membersihkan Huruf Timbul Akrilik Stainless Palembang
- **Target Keyword:**
  - *Primary:* cara membersihkan huruf timbul outdoor
  - *Secondary:* servis huruf timbul led redup palembang, perawatan huruf timbul stainless kusam
  - *Semantic / LSI:* cairan pembersih stainless tanpa asam, jamur kaca akrilik, penggantian modul led mati sebagian, seal silikon anti air
- **Strategi Internal Link:**
  - Mengarahkan pemilik bisnis yang butuh restorasi atau pembuatan baru ke `[jasa huruf timbul Palembang](/layanan/huruf-timbul)`.

---

### Hari 8 — Penguat Rambu K3 (Lalu Lintas Kawasan Pabrik & Proyek)
- **Status:** [x] Selesai (29 Oktober 2026)
- **Target Halaman Pilar:** `/layanan/rambu-rambu`
- **Topik:** `tips`
- **Slug File:** `standar-rambu-k3-lalu-lintas-kawasan-pabrik`
- **Judul Kartu (`title`, maks 5 kata):** Rambu K3 Kawasan Pabrik
- **Title SEO (`titleSeo`, maks 12 kata):** Standar Rambu K3 Lalu Lintas Kawasan Pabrik Palembang
- **Target Keyword:**
  - *Primary:* rambu lalu lintas kawasan pabrik palembang
  - *Secondary:* rambu batas kecepatan jalan pabrik, rambu k3 proyek konstruksi
  - *Semantic / LSI:* rambu prioritas forklift, tiang tanam pipa galvanis 2 inch, pondasi cor angkur, visibilitas sopir truk tronton
- **Strategi Internal Link:**
  - Mengajak kontraktor dan pengelola kawasan memesan rambu lalu lintas internal komplit di `[halaman layanan rambu K3](/layanan/rambu-rambu)`.

---

### Hari 9 — Penguat Neon Box (Modul LED Outdoor & Kelistrikan Tahan Cuaca)
- **Status:** [x] Selesai (7 November 2026)
- **Target Halaman Pilar:** `/layanan/neon-box`
- **Topik:** `panduan`
- **Slug File:** `panduan-memilih-modul-led-neon-box-awet`
- **Judul Kartu (`title`, maks 5 kata):** Modul LED Neon Box
- **Title SEO (`titleSeo`, maks 12 kata):** Cara Memilih Modul LED Neon Box Tahan Cuaca Ekstrem Palembang
- **Target Keyword:**
  - *Primary:* modul led neon box outdoor palembang, lampu led neon box tahan lama
  - *Secondary:* trafo rainproof led neon box 12v, led mata 3 neon box palembang
  - *Semantic / LSI:* proteksi IP68 injection moulding, lensa cembung wide beam angle 160 derajat, load rule 80 persen trafo, ring circuit paralel anti drop tegangan
- **Strategi Internal Link:**
  - Menghubungkan kebutuhan pengadaan neon box ke `[jasa pembuatan neon box Palembang](/layanan/neon-box/)`.
  - Tautan silang ke panduan `[standar trafo LED tahan hujan outdoor](/blog/teknis/standar-trafo-led-huruf-timbul-outdoor/)` dan `[desain plang toko dua sisi tiang](/blog/panduan/plang-toko-dua-sisi-tiang/)`.

---

### Hari 10 — Penguat Huruf Timbul & Reklame (Cakupan Garansi 1 Tahun)
- **Status:** [x] Selesai (9 November 2026)
- **Target Halaman Pilar:** `/layanan/huruf-timbul`
- **Topik:** `panduan`
- **Slug File:** `garansi-signage-apa-saja-tercover`
- **Judul Kartu (`title`, maks 5 kata):** Garansi Signage 1 Tahun
- **Title SEO (`titleSeo`, maks 12 kata):** Garansi 1 Tahun Huruf Timbul Palembang yang Tercover Vendor
- **Target Keyword:**
  - *Primary:* garansi huruf timbul palembang, garansi signage reklame palembang
  - *Secondary:* klaim garansi lampu led huruf timbul, servis reklame palembang
  - *Semantic / LSI:* trafo short circuit, modul LED mati sebagian, bracket karat, garansi kelistrikan vs fisik, portofolio kantor dinas & BUMN
- **Strategi Internal Link:**
  - Tautan ke `/layanan/huruf-timbul/`.
  - Tautan silang ke `/blog/teknis/standar-trafo-led-huruf-timbul-outdoor/` dan `/blog/tips/cara-merawat-dan-membersihkan-huruf-timbul/`.

---

### Hari 11 — Penguat Rambu K3 (Bahan Kimia & Gudang B3)
- **Status:** [x] Selesai (11 November 2026)
- **Target Halaman Pilar:** `/layanan/rambu-rambu/`
- **Topik:** `panduan`
- **Slug File:** `rambu-bahan-kimia-gudang-b3-palembang`
- **Judul Kartu (`title`, maks 5 kata):** Rambu Bahan Kimia Gudang B3
- **Title SEO (`titleSeo`, maks 12 kata):** Rambu K3 Bahan Kimia Berbahaya untuk Gudang B3 Palembang
- **Target Keyword:**
  - *Primary:* rambu k3 bahan kimia palembang, rambu gudang b3
  - *Secondary:* label ghs jeriken solvent, safety sign bahan kimia berbahaya, rambu korosif pabrik karet sumsel
  - *Semantic / LSI:* piktogram GHS, Kepmenaker 187/MEN/1999, PP 74 Tahun 2001, segregasi oksidator dan asam formiat, overlaminate polyester, eyewash dan spill kit station
- **Strategi Internal Link:**
  - Tautan ke `/layanan/rambu-rambu/` sebagai pilar utama.
  - Tautan silang ke `/blog/panduan/daftar-rambu-k3-wajib-audit-smk3/`, `/blog/panduan/standar-kemnaker-rambu-k3-pabrik/`, `/blog/panduan/estimasi-biaya-rambu-palembang/`, dan `/blog/panduan/standar-stiker-rambu-tambang-sumsel/`.

---

### Hari 12 — Penguat Pylon / Totem Sign (Pondasi & Keamanan Struktur)
- **Status:** [x] Selesai (16 November 2026)
- **Target Halaman Pilar:** `/layanan/pylon-totem/`
- **Topik:** `panduan`
- **Slug File:** `standar-pondasi-dan-struktur-pylon-sign-palembang`
- **Judul Kartu (`title`, maks 5 kata):** Pondasi Pylon Sign Aman
- **Title SEO (`titleSeo`, maks 12 kata):** Standar Pondasi dan Struktur Pylon Sign Aman di Palembang
- **Target Keyword:**
  - *Primary:* pylon sign palembang, pondasi pylon sign
  - *Secondary:* totem sign spbu palembang, struktur tiang reklame baja
  - *Semantic / LSI:* cakar ayam pondasi beton, beban angin fasad, pipa baja heavy-duty, izin reklame pylon
- **Strategi Internal Link:**
  - Anchor alami ke `[jasa pembuatan pylon sign & totem Palembang](/layanan/pylon-totem/)`.
  - Tautan silang ke artikel izin reklame fasad (`/blog/panduan/izin-reklame-huruf-timbul-fasad-palembang/`) jika relevan konteks perizinan luar ruang.

---

### Hari 13 — Penguat Plang Toko & Papan Nama Kantor (Material & Visibilitas)
- **Status:** [x] Selesai (22 November 2026)
- **Target Halaman Pilar:** `/layanan/plang-toko-kantor/`
- **Topik:** `tips`
- **Slug Usulan:** `tips-memilih-plang-toko-awet-dan-terbaca`
- **Judul Kartu (`title`, maks 5 kata):** Plang Toko Awet Terbaca
- **Title SEO (`titleSeo`, maks 12 kata):** Tips Memilih Plang Toko Awet dan Mudah Terbaca di Palembang
- **Target Keyword:**
  - *Primary:* plang toko palembang, papan nama toko palembang
  - *Secondary:* papan nama kantor palembang, plang toko bahan aluminium
  - *Semantic / LSI:* rangka hollow galvanis, stiker Oracal outdoor, kontras warna fasad, jarak baca kendaraan
- **Strategi Internal Link:**
  - Tautan ke `[jasa pembuatan plang toko & papan nama kantor](/layanan/plang-toko-kantor/)`.
  - Tautan silang ke `/layanan/neon-box/` atau `/layanan/huruf-timbul/` sebagai opsi upgrade visibilitas malam.

---

### Hari 14 — Penguat Huruf LED Frontlit / Backlit (Efek Cahaya & Aplikasi)
- **Status:** [ ] Belum Ditulis
- **Target Halaman Pilar:** `/layanan/gantry-huruf-led/`
- **Topik:** `panduan`
- **Slug Usulan:** `perbedaan-huruf-led-frontlit-backlit-rgb`
- **Judul Kartu (`title`, maks 5 kata):** Bedanya Frontlit Backlit LED
- **Title SEO (`titleSeo`, maks 12 kata):** Perbedaan Huruf LED Frontlit Backlit dan RGB untuk Fasad Toko
- **Target Keyword:**
  - *Primary:* huruf led palembang, huruf led frontlit backlit
  - *Secondary:* channel letter led palembang, huruf timbul led rgb
  - *Semantic / LSI:* halo effect backlit, akrilik opal diffuser, modul LED waterproof, konsumsi daya driver
- **Strategi Internal Link:**
  - Tautan ke `[jasa pembuatan huruf LED frontlit/backlit](/layanan/gantry-huruf-led/)`.
  - Tautan silang ke `/layanan/huruf-timbul/` dan artikel teknis trafo/LED terkait.

---

### Hari 15 — Penguat Neon Flex (Indoor Dekoratif vs Outdoor)
- **Status:** [ ] Belum Ditulis
- **Target Halaman Pilar:** `/layanan/neon-flex/`
- **Topik:** `panduan`
- **Slug Usulan:** `panduan-neon-flex-indoor-outdoor-palembang`
- **Judul Kartu (`title`, maks 5 kata):** Neon Flex Indoor Outdoor
- **Title SEO (`titleSeo`, maks 12 kata):** Panduan Neon Flex Indoor dan Outdoor Tahan Cuaca Palembang
- **Target Keyword:**
  - *Primary:* neon flex palembang, jasa neon flex palembang
  - *Secondary:* neon flex outdoor tahan hujan, neon sign cafe palembang
  - *Semantic / LSI:* IP rating neon flex, adaptor/power supply, mounting acrylic backing, perawatan debu & panas
- **Strategi Internal Link:**
  - Tautan ke `[jasa pembuatan neon flex Palembang](/layanan/neon-flex/)`.
  - Tautan silang ke `/layanan/neon-box/` (perbandingan karakter cahaya/signage).

---

### Hari 16 — Penguat Booth Event & Desk (Branding Portable untuk Pameran)
- **Status:** [ ] Belum Ditulis
- **Target Halaman Pilar:** `/layanan/booth-event-desk/`
- **Topik:** `tips`
- **Slug Usulan:** `tips-desain-booth-event-desk-menarik-pameran`
- **Judul Kartu (`title`, maks 5 kata):** Booth Event Desk Menarik
- **Title SEO (`titleSeo`, maks 12 kata):** Tips Desain Booth Event Desk Menarik untuk Pameran Palembang
- **Target Keyword:**
  - *Primary:* booth event desk palembang, booth pameran palembang
  - *Secondary:* meja promosi event portable, backdrop booth custom
  - *Semantic / LSI:* branding visual jarak dekat, material ringan knock-down, pencahayaan spotlight booth, area interaksi pengunjung
- **Strategi Internal Link:**
  - Tautan ke `[jasa pembuatan booth event & desk](/layanan/booth-event-desk/)`.
  - Tautan silang ke `/layanan/plang-toko-kantor/` atau material cetak pendukung jika relevan.

