# Aturan Optimalisasi Halaman Layanan (SEO & GEO)

Aturan ini adalah pengembangan dari pola yang diterapkan di halaman
`/layanan/huruf-timbul`. Semua halaman layanan (`src/content/layanan/*.md`)
harus mengikuti struktur ini agar masuk halaman pertama Google.

## Target keyword

- Format umum: `Jasa Pembuatan <Nama Layanan> Palembang`, `Harga <Layanan> Palembang`.
- Target lokasi: Kota Palembang + Sumatera Selatan (Inderalaya, Sekayu, Muaraenim,
  Kayuagung/OKI, Baturaja/OKU, Prabumulih, Lubuklinggau, Lahat).

## Frontmatter yang wajib ada

| Field | Ketentuan |
| --- | --- |
| `name` | Nama produk (sesuai slug). |
| `description` | Kunci di awal, sebut harga mulai + garansi + jangkauan. |
| `category` / `subcategory` | Jangan diubah. |
| `basePrice` / `priceUnit` | Jangan mengubah angka riil. |
| `features[]` / `materials[]` | Pertahankan, boleh tambah item yang sudah terbukti di blog. |
| `imageUrl` | Gunakan `/img/layanan/<slug>.webp`. |
| `heroAlt` | Alt text bernuansa keyword, contoh "huruf timbul akrilik Palembang". |
| `titleSeo` | H1 + `<title>` + og:title. Panjang sekitar 60-70 karakter, format `Jasa <Layanan> Palembang, <USP>`. Jangan klaim "garansi 10 tahun"; garansi nyatanya 1 tahun, daya tahan bisa 10 tahun. |
| `metaDescription` | 140-160 karakter, berisi keyword + harga mulai + garansi. |
| `faqs` | Array `{question, answer}` geser ke sini dari body. Dijadikan FAQ accordion + JSON-LD FAQPage otomatis. 6-10 pertanyaan ideal (harga, lamanya, minimal order, instalasi, izin, luar kota, garansi). |

## Struktur body (wajib, H2 dan H3)

1. **## Pentingnya <Layanan> untuk Branding** — definisi 1-2 kalimat, lalu lokasi
   strategis di Palembang (Jembatan Ampera, Jalan Jenderal Sudirman, Basuki
   Rahmat, Barlian, Jakabaring, Demang Lebar Daun, Pakyam, Mall Palembang Icon,
   dsb.), lalu benefit (terbaca 24 jam, kesan profesional, hemat dibanding sewa).
2. **## Klasifikasi Material & Spesifikasi Teknis** — satu H3 per material utama,
   jelaskan perbedaan singkat, lalu tabel `Material | Karakteristik | Cocok untuk | Harga mulai`.
3. **## Proses Produksi** — step-by-step konsisten dengan produksi di workshop Talang
   Jambe (laser cutting/CNC, las TIG argon, LED Samsung, QC, garansi).
4. **## Panduan Harga & Kalkulasi Biaya** — rumus/patokan, 1 contoh hitung, 2-4
   variabel yang memengarfluid biaya.
5. **## Regulasi / Informasi Lokal** — sesuaikan layanan: izin reklame (IPR
   DPMPTSP), standar Kemnaker/OSHA, ketahanan iklim Palembang, dsb.
6. **## Mengapa Memilih Sriwijaya Grafika** — 3-6 poin (pengalaman sejak 2008, produksi
   sendiri, garansi 1 tahun, portofolio Gedung Walikota/Kejati/mall, liputan media).
7. **## Hubungi Kami** — alamat workshop `Jl. Pertanian No.105, Talang Jambe,
   Sukarami, Palembang` + daftar kota Sumsel yang dilayani.

FAQ dihapus dari body (pindah ke frontmatter `faqs`).

## Aturan penulisan (hasil humanizer audit)

- Indonesia alami; hindari pola AI: em dash `—`/en dash `–`, kalimat akhir tiap
  seksi "…bisa Anda baca di [link]" yang sama, rule of three yang dipaksakan, kata
  AI (`menyoroti`, `krusial`, `lanskap`, `komprehensif`).
- Varian kalimat ajakan ke tautan: "dijelaskan dalam", "tertulis di", "bisa dilihat
  di", "panduan", dsb.
- Sebut kota-kota Sumatera Selatan secara natural, bukan daftar tempel.
- Tautan internal minimal: 2 ke layanan lain (`/layanan/<slug>`) dan 1-3 ke blog
  (`/blog/<topik>/<slug>`).
- Tidak boleh ada klaim yang tidak didukung sumber/blog. No emoji.

## Yang sudah otomatis dari template (jangan diubah lagi)

- `[...slug].astro` membaca `titleSeo`, `metaDescription`, `heroAlt`, `faqs`.
- JSON-LD otomatis per halaman: `Service` (dengan `areaServed` Semua), `BreadcrumbList`,
  `FAQPage` (hanya jika `faqs` tidak kosong).
- `og:image` otomatis dari `imageUrl`; alt text otomatis dari `heroAlt`.
- FAQ accordion dirender di kolom konten, di atas blok "Butuh layanan lain?".

## Status implementasi (Maret 2025)

- **Wajib (sudah diterapkan di semua 9 halaman):** field SEO frontmatter (`titleSeo`,
  `metaDescription`, `heroAlt`, `faqs`), FAQ dipindah dari body ke `faqs`, internal link
  layanan + blog, sebutan kota-kota Sumsel, harga mulai konsisten dengan `basePrice`.
- **Sedalam-deep section (seluruhnya hanya ada di halaman `huruf-timbul.md`, opsional
  untuk layanan lain jika butuh otoritas lebih):** H2 "Pentingnya X", Klasifikasi material
  + tabel, "Panduan harga & kalkulasi", regulasi lokal, "Hubungi Kami". Tambahkan secara
  bertahap, hati-hati, dan jangan sekali tulis dalam satu file penuh yang panjang.