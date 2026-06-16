---
items:
  - src: /img/portfolio/papan-nama-toko-pusat-plafon-pvc.webp
    category: papan-nama
    caption: "Papan Nama Toko Pusat Plafon PVC"
  - src: /img/portfolio/cutting-akrilik-rakha-dental.webp
    category: huruf-timbul
    caption: "Huruf Timbul Cutting Akrilik Rakha Dental"
  - src: /img/portfolio/papan-nama-toko-gadai-rejeki-mandiri.webp
    category: papan-nama
    caption: "Papan Nama Toko Gadai Rejeki Mandiri"
  - src: /img/portfolio/huruf_timbul_acrylic_indah_cake_bakery.webp
    category: huruf-timbul
    caption: "Huruf Timbul Indah Cake & Bakery"
  - src: /img/portfolio/neon_box_penginapan_aba.webp
    category: neon-box
    caption: "Neon Box Penginapan dan Kost ABA"
  - src: /img/portfolio/graha-cindua-mato.webp
    category: huruf-timbul
    caption: "Huruf Timbul Galvanis Graha Cindua Mato"
  - src: /img/portfolio/kumori-pancake.webp
    category: huruf-timbul
    caption: "Huruf Timbul Akrilik Kumore Pancake"
  - src: /img/portfolio/huruf-timbul-akrilik-gemini.webp
    category: huruf-timbul
    caption: "Huruf Timbul Akrilik LED Gemini"
  - src: /img/portfolio/neon-box-kedai-pempek-maris.webp
    category: neon-box
    caption: "Neon Box Kedai Pempek Maris"
  - src: /img/portfolio/neon-box-spbu-pertamina.webp
    category: neon-box
    caption: "Neon Box SPBU Pertamina"
  - src: /img/portfolio/papan-nama-toko-sukses-mandiri.webp
    category: papan-nama
    caption: "Papan Nama Toko Elektronik Sukses Mandiri"
  - src: /img/portfolio/neon-box-d-uni.webp
    category: neon-box
    caption: "Neon Box D Unnie"
  - src: /img/portfolio/sinar-mentari-bersinergi.webp
    category: huruf-timbul
    caption: "Huruf Timbul Akrilik Sinar Mentari Bersinergi"
  - src: /img/portfolio/rambu-benua-laut-lepas.webp
    category: rambu-k3
    caption: "Rambu PT Benua Laut Lepas"
  - src: /img/portfolio/andalas-sakti-perkasa.webp
    category: huruf-timbul
    caption: "Huruf Timbul Akrilik PT Andalas Sakti Perkasa"
  - src: /img/portfolio/smp-islam-bina-insani.webp
    category: huruf-timbul
    caption: "Huruf Timbul Galvanis SMP Islam Bina Insani"
  - src: /img/portfolio/rambu-kantor-keluar-parkir.webp
    category: rambu-k3
    caption: "Rambu Petunjuk Parkir"
  - src: /img/portfolio/ekspedingin.webp
    category: huruf-timbul
    caption: "Huruf Timbul Galvanis Ekspedingin"
  - src: /img/portfolio/vape-store-barangan.webp
    category: papan-nama
    caption: "Papan Nama Vape Store Barangan"
  - src: /img/portfolio/rambu-k3-jalur-evakuasi.webp
    category: rambu-k3
    caption: "Rambu Jalur Evakuasi"
  - src: /img/portfolio/riyadh-regency-3.webp
    category: huruf-timbul
    caption: "Huruf Timbul Galvanis Riyadh Regency 3"
  - src: /img/portfolio/neon-box-kedai-temon.webp
    category: neon-box
    caption: "Neon Box Kedai Temon"
  - src: /img/portfolio/dprd-oki.webp
    category: huruf-timbul
    caption: "Huruf Timbul Cutting Akrilik DPRD OKI"
  - src: /img/portfolio/neon-box-super-indo.webp
    category: neon-box
    caption: "Neon Box Super Indo"
---

# Portofolio Sriwijaya Grafika

File ini menyimpan data portofolio dalam format YAML frontmatter.

Cara menambah item baru: salin salah satu entri di bawah `items:`, lalu isi `src`
(path gambar di `/img/portfolio/`), `category` (slug), dan `caption`.

Field lain di-derive otomatis:
- `id` ← nama file pada `src` tanpa ekstensi
- `categoryLabel` ← lookup dari tabel kategori di `src/lib/portfolio.ts`
