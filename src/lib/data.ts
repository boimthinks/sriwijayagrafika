import type { PortfolioItem } from './types';

export const BUSINESS_INFO = {
  name: 'Sriwijaya Grafika',
  tagline: 'Solusi Jasa Advertising Termurah di Kota Palembang',
  phone1: '085100888748',
  phone2: '08122233923',
  phone1Intl: '6285100888748',
  address: 'Jl. AMD Jl. Pertanian No.105, RT.029/RW.005, Talang Jambe, Kec. Sukarami, Kota Palembang, Sumatera Selatan 30155',
  googleMapsUrl: 'https://maps.app.goo.gl/aCQkXuc5nS9Toju38',
  googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.629342502758!2d104.68593417589139!3d-2.9221155970542385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3b733effffffff%3A0x6ded2fe9cb701449!2sSriwijaya%20Grafika%20Advertising%20%26%20Printing!5e0!3m2!1sid!2sid!4v1717253509932!5m2!1sid!2sid',
  socials: {
    instagram: 'https://www.instagram.com/sriwijayagrafika/',
    facebookUtama: 'https://web.facebook.com/sriwijayagrafika',
    facebookSecondary: 'https://web.facebook.com/percetakanpalembang/',
    tiktok: 'https://www.tiktok.com/@sriwijayagrafika',
    shopee: 'https://shopee.co.id/sriwijaya_grafika',
  },
  activeWebsites: [
    { title: 'Jasa Reklame dan Advertising Palembang', url: 'https://sriwijayagrafika.co.id/' },
    { title: 'Advertising Palembang dan Percetakan', url: 'https://www.sriwijayagrafika.com/' },
    { title: 'Jasa Reklame di Palembang', url: 'https://www.reklamepalembang.com/' },
    { title: 'Advertising Palembang', url: 'https://www.advertisingpalembang.com/' },
    { title: 'Huruf Timbul Palembang', url: 'https://www.huruftimbulpalembang.com/' },
    { title: 'Percetakan Palembang', url: 'http://www.percetakanpalembang.com/' },
  ],
  colors: {
    primary: '#3c5a98',
    accent: '#ff6634',
  },
} as const;

export const CORE_TAGLINES = [
  'Sriwijaya Grafika adalah perusahaan di Palembang yang bergerak di bidang jasa percetakan dan reklame / advertising. Kami menerima pesanan produk percetakan seperti nota, kwitansi dan sejenisnya.',
  'Produk unggulan kami di bidang advertising / reklame adalah huruf timbul atau tulisan timbul lampu LED dengan bahan stainless, akrilik kuningan, dll. Kami juga menjual rambu-rambu keselamatan (safety sign), rambu evakuasi, rambu K3, merek toko seperti neon box, papan nama toko (PNT).',
  'Kami juga menerima ornamen motif custom bahan semen, jasa cutting stiker, cutting laser plat, acrylic, plywood dan cutting ACP.',
  'Sriwijaya Grafika juga menerima pesanan produk akrilik custom dan berbagai produk-produk lainnya yang berhubungan dengan reklame dan jasa advertising.',
  'Jasa Advertising Termurah di Kota Palembang',
  'Sriwijaya Grafika pilihan tepat untuk usaha Anda',
  'Jasa Advertising Palembang Aman dan Terpercaya',
  'Kami membantu Anda mengembangkan ide-ide brilian media promosi untuk bisnis Anda',
  'Ide Promosi Kekinian. Membuat sesuatu yang berbeda, dengan cara inovatif dan kreatif adalah kunci sukses bisnis Anda',
  'Kami menjaga kepuasan pelanggan dengan memberikan pelayanan terbaik dan menjaga kualitas produk.',
  'Dengan tenaga kerja sudah ahli di bidangnya, bekerja secara professional, handal dan cekatan.',
  'Sriwijaya Grafika sangat mengutamakan profesionalisme kerja yang bertujuan untuk membuat pelanggan kami puas dan percaya.',
  'Kembangkan Bisnis Anda bersama Kami. Cetak media promosi impian Anda dan jadilah bisnis paling elegan di kota Anda',
];

export const GENERAL_DESCRIPTION =
  'Sriwijaya Grafika adalah perusahaan di Palembang yang bergerak di bidang jasa percetakan dan reklame / advertising. Kami menerima pesanan produk percetakan seperti nota, kwitansi dan sejenisnya. Produk unggulan kami di bidang advertising / reklame adalah huruf timbul atau tulisan timbul lampu LED dengan bahan stainless, akrilik kuningan, dll. Kami juga menjual rambu-rambu keselamatan (safety sign), rambu evakuasi, rambu K3, merek toko seperti neon box, papan nama toko (PNT), ornamen motif custom bahan semen, jasa cutting stiker, cutting laser plat, acrylic, plywood dan cutting ACP. Sriwijaya Grafika juga menerima pesanan produk akrilik custom dan berbagai produk-produk lainnya yang berhubungan dengan reklame dan jasa advertising.';

export const PORTFOLIOS: PortfolioItem[] = [
  { id: 'p1', title: 'Huruf Timbul Stainless Steel Organic Story', description: 'Huruf timbul 3D elegan dari bahan Stainless Steel Hairline presisi tinggi.', category: 'huruf-timbul', imagePlaceholder: 'from-[#3c5a98] to-[#20375a]', originalPath: 'img/organic-story.jpg', imageSrc: '/img/organic-story.jpg' },
  { id: 'p2', title: 'Huruf Timbul 3D Letter Rubberman', description: 'Neon block 3D acrylic signage dengan logo Rubberman menyala pekat di malam hari.', category: 'huruf-timbul', imagePlaceholder: 'from-orange-500 to-orange-700', originalPath: 'img/rubberman.jpg', imageSrc: '/img/rubberman.jpg' },
  { id: 'p3', title: 'Huruf Timbul & Letter Timbul Smartfren', description: 'Pekerjaan branding papan nama outlet Smartfren bernuansa merah muda menyala mencolok.', category: 'huruf-timbul', imagePlaceholder: 'from-pink-500 to-rose-700', originalPath: 'img/smartfren.jpg', imageSrc: '/img/smartfren.jpg' },
  { id: 'p4', title: 'Huruf Timbul Akrilik LED Chris Cake', description: 'Paduan manis akrilik putih susu berlampu LED warm-light interior untuk Toko Cake.', category: 'huruf-timbul', imagePlaceholder: 'from-amber-400 to-amber-600', originalPath: 'img/chris-cake.jpg', imageSrc: '/img/chris-cake.jpg' },
  { id: 'p5', title: 'Huruf Timbul Janji Jiwa', description: 'Acrylic sign huruf timbul Janji Jiwa dengan akrilik cutting sticker presisi dipasang di mall.', category: 'huruf-timbul', imagePlaceholder: 'from-neutral-800 to-neutral-950', originalPath: 'img/janji-jiwa.jpg', imageSrc: '/img/janji-jiwa.jpg' },
  { id: 'p6', title: 'Huruf Timbul Fish Streat', description: 'Signage visual 3D huruf menyala depan gerai makanan Fish Streat.', category: 'huruf-timbul', imagePlaceholder: 'from-yellow-400 to-amber-500', originalPath: 'img/fish-streat.jpg', imageSrc: '/img/fish-streat.jpg' },
  { id: 'p7', title: "Rambu Pabrik 'Dilarang Merokok' & 'Titik Kumpul'", description: 'Plat alumunium berlapis Asahi reflective stiker standar safety industri K3.', category: 'rambu-rambu', imagePlaceholder: 'from-emerald-600 to-teal-800', originalPath: 'img/rambu-pabrik.jpg', imageSrc: '/img/rambu-pabrik.jpg' },
  { id: 'p8', title: "Rambu Proyek Keselamatan 'Area Berbahaya'", description: 'Papan rambu peringatan material berat proyek konstruksi, glow in the dark.', category: 'rambu-rambu', imagePlaceholder: 'from-amber-500 to-yellow-600', originalPath: 'img/rambu-proyek.jpg', imageSrc: '/img/rambu-proyek.jpg' },
  { id: 'p9', title: 'Rambu Parkir Khusus Kantor Swasta', description: 'Safety sign penunjuk parkir direksi, tiang besi tanam galvanis kokoh.', category: 'rambu-rambu', imagePlaceholder: 'from-blue-600 to-slate-800', originalPath: 'img/rambu-kantor.jpg', imageSrc: '/img/rambu-kantor.jpg' },
  { id: 'p10', title: 'Totem Sign Apator Kantor', description: 'Papan nama vertikal pylon kokoh ACP dilapisi laser-cut huruf akrilik timbul.', category: 'pylon-totem', imagePlaceholder: 'from-indigo-600 to-violet-800', originalPath: 'img/totem-sign-apator.jpg', imageSrc: '/img/totem-sign-apator.jpg' },
  { id: 'p11', title: 'Pylon Sign Star Campus', description: 'Monumen penunjuk arah megah berlapis ACP anti-cuaca dan lampu LED menyala malam hari.', category: 'pylon-totem', imagePlaceholder: 'from-blue-700 to-sky-900', originalPath: 'img/pylon-sign-star-campus.jpg', imageSrc: '/img/pylon-sign-star-campus.jpg' },
  { id: 'p12', title: 'Totem Sign Chatime Cabang', description: 'Totem outdoor Chatime untuk penunjuk drive-thru atau gerbang masuk cafe.', category: 'pylon-totem', imagePlaceholder: 'from-purple-500 to-fuchsia-700', originalPath: 'img/totem-sign-chatime.jpg', imageSrc: '/img/totem-sign-chatime.jpg' },
  { id: 'p13', title: 'Neon Box Guest House Princess', description: 'Neon box dua sisi diletakkan di pinggir jalan umum dengan pendaran neon merata.', category: 'neon-box', imagePlaceholder: 'from-sky-400 to-indigo-600', originalPath: 'img/neon-box-guest-house.jpg', imageSrc: '/img/neon-box-guest-house.jpg' },
  { id: 'p14', title: 'Papan Nama Toko Teh Pucuk Harum', description: 'Papan nama besi reklame program kemitraan UMKM Teh Pucuk, kokoh anti badai.', category: 'plang-toko-kantor', imagePlaceholder: 'from-orange-400 to-red-600', originalPath: 'img/papan-nama-toko-teh-pucuk.jpg', imageSrc: '/img/papan-nama-toko-teh-pucuk.jpg' },
  { id: 'p15', title: 'Papan Nama Toko Lava Smart Phone', description: 'Branding toko gadget Lava, warna merah menyala dengan lampu spotlight atas.', category: 'plang-toko-kantor', imagePlaceholder: 'from-red-600 to-rose-800', originalPath: 'img/lava-smart-phone.jpg', imageSrc: '/img/lava-smart-phone.jpg' },
  { id: 'p16', title: 'Papan Nama Toko Hugos Collection', description: 'Visual minimalis papan nama butik pakaian dengan list aluminium dan tiang besi ganda.', category: 'plang-toko-kantor', imagePlaceholder: 'from-zinc-700 to-neutral-900', originalPath: 'img/hugos-collection.jpg', imageSrc: '/img/hugos-collection.jpg' },
  { id: 'p17', title: 'Neon Box PLN Unit Palembang', description: 'Neon box bulat akrilik dengan cutting stiker Oracal resmi PLN, terang benderang.', category: 'neon-box', imagePlaceholder: 'from-cyan-500 to-teal-600', originalPath: 'img/neon-box-pln-palembang.jpeg', imageSrc: '/img/neon-box-pln-palembang.jpeg' },
  { id: 'p18', title: 'Huruf Timbul Fanetta Lampu LED', description: 'Signage butik Fanetta, model backlit led mewah membayang anggun di fasad bangunan.', category: 'huruf-timbul', imagePlaceholder: 'from-pink-600 to-pink-900', originalPath: 'img/fanetta.jpg', imageSrc: '/img/fanetta.jpg' },
  { id: 'p19', title: 'Huruf Timbul Stainless Steel BNI Emerald', description: 'Eksklusif logo dan huruf timbul BNI Emerald, stainless hairline finishing rapi presisi.', category: 'huruf-timbul', imagePlaceholder: 'from-slate-600 to-blue-900', originalPath: 'img/bni-emerald.png', imageSrc: '/img/bni-emerald.png' },
  { id: 'p20', title: 'Huruf Timbul Acrylic Credo Cafe', description: 'Huruf timbul bermaterial full akrilik solid di bagian lobby utama.', category: 'huruf-timbul', imagePlaceholder: 'from-orange-600 to-yellow-500', originalPath: 'img/credo.png', imageSrc: '/img/credo.png' },
  { id: 'p21', title: 'Huruf Timbul Plat Galvanil Stefani City Hotel', description: 'Kerja raksasa di puncak gedung hotel, menggunakan galvanil tebal, finishing cat oven.', category: 'huruf-timbul', imagePlaceholder: 'from-red-700 to-amber-700', originalPath: 'img/stefani-city-hotel.png', imageSrc: '/img/stefani-city-hotel.png' },
  { id: 'p22', title: 'Neon Box OYO Guest House', description: 'Penanda penginapan OYO gantung, terang menyala, memandu tamu di kegelapan.', category: 'neon-box', imagePlaceholder: 'from-red-500 to-red-700', originalPath: 'img/neon-box-oyo.jpeg', imageSrc: '/img/neon-box-oyo.jpeg' },
  { id: 'p23', title: 'Neon Box Advan Store', description: 'Branding Neon Box persegi panjang toko komputer elektronik resmi.', category: 'neon-box', imagePlaceholder: 'from-sky-500 to-blue-700', originalPath: 'img/neon-box-advan.jpg', imageSrc: '/img/neon-box-advan.jpg' },
  { id: 'p24', title: 'Booth Event J&T Express Palembang', description: 'Pembuatan meja pameran promosi mini komplit portable untuk penarikan agen kurir.', category: 'booth-event-desk', imagePlaceholder: 'from-red-500 to-red-800', originalPath: 'img/booth-event-jnt.jpeg', imageSrc: '/img/booth-event-jnt.jpeg' },
  { id: 'p25', title: "Stand Pajangan Promosi L'Oreal Cosmetics", description: 'Rak pajangan display counter acrylic kustom kosmetik L\'Oreal di department store.', category: 'produk-akrilik', imagePlaceholder: 'from-slate-700 to-zinc-950', originalPath: 'img/stan-pajangan-loreal.jpg', imageSrc: '/img/stan-pajangan-loreal.jpg' },
  { id: 'p26', title: 'Neon Box Polres OKU Selatan', description: 'Neon Box resmi Kepolisian, besi tiang tanam besar kokoh untuk kedinasan.', category: 'neon-box', imagePlaceholder: 'from-blue-800 to-indigo-950', originalPath: 'img/polres-oku-selatan.jpg', imageSrc: '/img/polres-oku-selatan.jpg' },
];

export const MEDIA_COVERAGES = [
  {
    publisher: 'Sriwijaya Post',
    url: 'https://palembang.tribunnews.com/2020/10/07/cerita-pengusaha-di-palembang-keluar-dari-keterpurukan-saat-covid-19-kini-orderan-kembali-naik',
    screenshot: 'img/Sriwijaya-Grafika-di-Sriwijaya-Post.png',
    screenshotSrc: '/img/Sriwijaya-Grafika-di-Sriwijaya-Post.png',
    headline: 'Cerita Pengusaha di Palembang Keluar dari Keterpurukan Saat Covid-19, Kini Orderan Kembali Naik',
    date: '7 Oktober 2020',
    editor: 'Yandi Triansyah',
    contentSnippet:
      'Awal mula Covid-19 mulai masuk ke Kota Palembang, usaha ini ikut terimbas. Orderan yang semula ramai, mendadak sepi. Namun kini, usaha ini bisa keluar dari Keterpurukan tersebut. Owner Sriwijaya Grafika, M.Edy Munandar, berbagi pengalaman merintis dunia usaha yang digelutinya selama 16 tahun, melewati dua kali bangkrut, memberikan pelayanan terbaik, bahkan memberikan garansi 1 tahun penuh demi kepercayaan pelanggan.',
  },
  {
    publisher: 'Berita Sumsel',
    url: 'http://beritasumatera.co.id/2020/10/07/puas-jatuh-bangun-rintis-usaha-grafika-sriwijaya-bangun-kedekatan-emosional-dengan-pelanggan/',
    screenshot: 'img/Sriwijaya-Grafika-di-Berita-Sumatera.png',
    screenshotSrc: '/img/Sriwijaya-Grafika-di-Berita-Sumatera.png',
    headline: 'Puas Jatuh Bangun Rintis Usaha, Grafika Sriwijaya Bangun Kedekatan Emosional dengan Pelanggan',
    date: '7 Oktober 2020',
    editor: 'Redaksi beritasumatera.co.id',
    contentSnippet:
      'Selama 16 tahun kualitas pekerjaan dan mengutamakan kepuasan pelanggannya menjadi prioritas utamanya. M.Edy Munandar memberdayakan pegawai lokal yang handal, termasuk penyandang Tuna Rungu dan tetangga sekitar workshop di Sukarami, membuktikan bahwa bisnis juga memiliki andil pemberdayaan sosial yang luar biasa.',
  },
];

export const VIDEOS = [
  {
    id: 'oJ5VBoOWlMw',
    title: 'WhatsApp Business: Sriwijaya Grafika',
    url: 'https://www.youtube.com/watch?v=oJ5VBoOWlMw',
    channel: 'WhatsApp Official',
    description: 'Video profil resmi pemanfaatan WhatsApp Business oleh WhatsApp global dalam mendukung akselerasi bisnis lokal Sriwijaya Grafika Palembang.',
  },
  {
    id: 'w4mrCS2pKMo',
    title: 'Eksklusif Advertising Palembang Sriwijaya Grafika',
    url: 'https://www.youtube.com/watch?v=w4mrCS2pKMo',
    channel: 'Catatan Jurnalis',
    description: 'Peninjauan mendalam di workshop Sriwijaya Grafika mengenai alat cutting laser, ACP, akrilik, dan proses pembuatan reklame.',
  },
  {
    id: '7KUdXZmPHCk',
    title: 'Bangkit di Tengah Keterpurukan, Sriwijaya Grafika Raih Ratusan Juta Rupiah',
    url: 'https://www.youtube.com/watch?v=7KUdXZmPHCk',
    channel: 'Sriwijaya Post Official',
    description: 'Dokumentasi liputan khusus dari tim Sriwijaya Post mengenai omset ratusan juta dari usaha advertising reklame yang beralamat di Talang Jambe.',
  },
  {
    id: 'wXjFgzPGhV4',
    title: 'Sriwijaya Grafika Advertising X Heri Gondrong',
    url: 'https://www.youtube.com/watch?v=wXjFgzPGhV4',
    channel: 'Apri Storyvlog',
    description: 'Review langsung dari tokoh Polisi Viral legendaris Sumatera Selatan, Heri Gondrong, yang berkunjung melihat kualitas produksi reklame kami.',
  },
  {
    id: 'oeo9x8j1yK0',
    title: 'Liputan PAL-TV di Lokasi Sriwijaya Grafika Palembang',
    url: 'https://www.youtube.com/watch?v=oeo9x8j1yK0',
    channel: 'PAL-TV',
    description: 'Liputan khusus televisi swasta sumsel PAL-TV langsung di lokasi bengkel produksi untuk melihat dedikasi kerja ahli tim profesional kami.',
  },
];

export const COMPETITORS = [
  { name: 'Citra Sriwijaya Advertising', website: 'https://citrasriwijaya.com/' },
  { name: 'PT. Limo Anugerah Sriwijaya', website: 'https://www.limoanugerahsriwijaya.com/', keyword: 'Jasa Advertising, Billboard, Baliho, Neon Box, Shop Sign, Pole Sign Murah Palembang' },
  { name: 'PT. Bonafide Indo Media', website: 'https://bonafide.co.id/', keyword: 'Digital Printing & Advertising Palembang. Solusi Percetakan dan Advertising Terbaik untuk Anda' },
  { name: 'Devis Advertising', website: 'https://devisjaya.co.id/', keyword: 'Advertising Palembang' },
];

export const FULL_ARTICLES = [
  {
    publisher: 'Sriwijaya Post',
    headline: 'Cerita Pengusaha di Palembang Keluar dari Keterpurukan Saat Covid-19, Kini Orderan Kembali Naik',
    date: '7 Oktober 2020',
    editor: 'Yandi Triansyah',
    url: 'https://palembang.tribunnews.com/2020/10/07/cerita-pengusaha-di-palembang-keluar-dari-keterpurukan-saat-covid-19-kini-orderan-kembali-naik',
    content: `SRIWIJAYA POST (SRIPOKU.COM), PALEMBANG — Perlahan namun pasti, Sriwijaya Grafika, usaha yang bergerak di bidang advertising reklame, neon box, huruf timbul acrylic kembali bergairah.

Awal mula Covid-19 mulai masuk ke Kota Palembang, usaha ini ikut terimbas. Orderan yang semula ramai, mendadak sepi. Namun kini, usaha ini bisa keluar dari Keterpurukan tersebut.

Owner Sriwijaya Grafika, M.Edy Munandar, berbagi pengalaman dirinya bisa mempertahankan usahanya di tengah paceklik dunia usaha akibat dampak dari Virus Corona.

Menurut Edy, selama 16 tahun menekuni usaha Advertising, dirinya cukup puas merasakan asam garam dalam merintis dunia usaha yang digelutinya. Bahkan dua kali bangkrut tidak menjadi batu sandungan, melainkan sebagai motivasi untuk kembali bangkit di tengah keterpurukannya.

Melalui Sriwijaya Grafika, Edy memberdayakan pegawai yang handal dan kreatif, mulai dari Tuna Rungu dan tetangganya yang memiliki keahlian di bidangnya.

"Dari nol usaha ini saya bangun dari percetakan biasa," kata Edy mengawali cerita, Rabu (7/10/2020).

Menurut dia, kualitas pekerjaan dan mengutamakan kepuasan pelanggannya menjadi prioritas utamanya. Hal itu dilakukannya untuk membangun kedekatan dengan pelanggan. Bagi Edy, sangat mudah untuk menarik 100 pelanggan dibanding menjaga hubungan dengan satu pelanggan. Dengan memberikan kepuasan hasil kerja dari workshopnya yang beralamat di Jalan Pertanian Kelurahan Talang Jambe Kecamatan Sukarame, Kota Palembang.

"Bukan hanya dengan pelanggan yang besar, pemesan satu huruf timbul kita layani, dan tetap membangun kedekatan, Kami bukan hanya menjual karya kami. Kami ingin menciptakan dan membangun kedekatan dengan mereka," ungkapnya.

Bahkan, Sriwijaya Grafika yang bergerak dibidang advertising, reklame, neon box, huruf timbul arcelic, berani memberikan garansi selama satu tahun, saat papan reklame yang dipasangnya dibangunan atau dinding tempat usaha.

"Seperti huruf timbul di gedung Walikota Palembang, Kejati Sumsel dan mall kita berikan garansi selama satu tahun, kalau ada kerusakan ataupun kerusakan karena alam akan kita perbaiki free (gratis)," katanya.

Edy menempatkan customer service sebagai sesuatu yang amat penting. Ia memberikan sentuhan personal dalam menjalankan bisnisnya ini. Hal ini bisa dibuktikan dengan respons yang langsung diberikan kepada pelanggannya yang memesan di workshopnya.

"Kita juga langsung merespon pemesanan melalui online maupun dari marketing sales kita," tegasnya.

Selain dekat dengan pelanggan, Edy pun dekat dengan para karyawannya. "Bergerak pada bidang ini, SDM-nya memang harus benar-benar dijaga," katanya lagi.

Sementara itu Kepala Produksi Sriwijaya Grafika Agustian mengatakan, produksi juga sempat mengalami penurunan pemesanan sejak Covid-19 melanda.

"Meski sepi pemesanan kualitas tetap di nomor satukan," katanya. Alhamdulilah pemesanan kembali bergairah, bahkan omset pemesanan mulai kembali bergairah dan meningkat 30 persen dari hari biasanya.

"Kita masih melayani pemesanan dari dalam Sumsel, baik instansi, swasta dan pihak mal, seperti saat ini pemesanan neon box paling banyak dikerjakan, lantaran brand berganti merek," katanya.`,
  },
  {
    publisher: 'Berita Sumsel',
    headline: 'Puas Jatuh Bangun Rintis Usaha, Grafika Sriwijaya Bangun Kedekatan Emosional dengan Pelanggan',
    date: '07 Oktober 2020',
    editor: 'Redaktur Berita Sumatera',
    url: 'http://beritasumatera.co.id/2020/10/07/puas-jatuh-bangun-rintis-usaha-grafika-sriwijaya-bangun-kedekatan-emosional-dengan-pelanggan/',
    content: `PALEMBANG, BS — 16 tahun menekuni usaha Advertising, M.Edy Munandar cukup puas merasakan asam garam dalam dunia usaha yang dirintisnya. Bahkan dua kali bangkrut tidak menjadi batu sandungan, melainkan sebagai motivasi untuk kembali bangkit ditengah keterpurukannya.

Memiliki nama Sriwijaya Grafika, Edy mempekerjakan pegawai yang handal dan kreatif mulai dari Tuna Rungu dan tetangganya yang memiliki keahlian dibidangnya.

"Dari nol usaha ini saya bangun dari percetakan biasa," kata Owner Sriwijaya Grafika M.Edy Munandar, Rabu (7/10/2020) mengawali perbincangan dengan beritasumatera.co.id.

Selama 16 tahun kualitas pekerjaan dan mengutamakan kepuasan pelanggannya menjadi prioritas utamanya, membangun kedekatan dengan pelangganpun tidak pula diabaikan. Bagi Edy, sangat mudah untuk menarik 100 pelanggan dibanding menjaga hubungan dengan satu pelanggan dengan memberikan kepuasan hasil kerja dari workshopnya yang beralamat di Jalan Pertanian Kelurahan Talang Jambe Kecamatan Sukarame, langsung bersanding dengan tempat tinggalnya.

"Bukan hanya dengan pelanggan yang besar, pemesan satu huruf timbul kita layani,dan tetap membangun kedekatan,Kami bukan hanya menjual karya kami. Kami ingin menciptakan dan membangun kedekatan dengan mereka," ungkapnya.

Bahkan, Sriwijaya Grafika yang bergerak dibidang advertising, reklame, neon box, huruf timbul arcelic , berani memberikan garansi selama satu tahun, saat papan reklame yang dipasangnya dibangunan ataupun dinding tempat usaha.

"Seperti huruf timbul di gedung Walikota Palembang, Kejati Sumsel dan mall kita berikan garansi selama satu tahun, kalau ada kerusakan ataupun kerusakan karena alam akan kita perbaiki free (gratis)," katanya.

Edy menempatkan customer service sebagai sesuatu yang amat penting. Ia memberikan sentuhan personal dalam menjalankan bisnisnya ini. Hal ini bisa dibuktikan dengan respons yang langsung diberikan kepada pelanggannya yang memesan di workshopnya.

"Kita juga langsung merespon pemesanan melalui online maupun dari marketing sales kita," tegasnya.

Selain dekat dengan pelanggan, Edy pun dekat dengan para karyawannya. "Bergerak pada bidang ini, SDM nya memang harus benar benar dijaga," katanya lagi.

Sementara itu Kepala Produksi Sriwijaya Grafika Agustian mengatakan, produksi juga sempat mengalami penurunan pemesanan sejak Covid 19 melanda.

"Meski sepi pemesanan kualitas tetap di nomor satukan," katanya. Alhamdulilah pemesanan kembali bergairah, bahkan omset pemesanan mulai kembali bergairah dan meningkat 30 persen dari hari biasanya.

"Kita masih melayani pemesanan dari dalam Sumsel, baik instansi, swasta dan pihak mal, seperti saat ini pemesanan neon box paling banyak dikerjakan, lantaran brand berganti merek," katanya.`,
  },
];
