---
items:
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
