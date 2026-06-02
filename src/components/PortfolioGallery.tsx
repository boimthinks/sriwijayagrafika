import { useState, useMemo } from 'react';
import type { PortfolioItem } from '@lib/types';
import { BUSINESS_INFO } from '@lib/data';
import { Image, Eye, ArrowRight, ShieldCheck, Phone, X } from 'lucide-react';

interface Props {
  items: PortfolioItem[];
}

export default function PortfolioGallery({ items }: Props) {
  const [filter, setFilter] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filterCategories = [
    { id: 'all', label: 'Semua Karya' },
    { id: 'huruf-timbul', label: 'Huruf Timbul LED' },
    { id: 'neon-box', label: 'Neon Box' },
    { id: 'pylon-totem', label: 'Pylon / Totem' },
    { id: 'rambu-rambu', label: 'Rambu K3 & Keamanan' },
    { id: 'plang-toko-kantor', label: 'Plang Toko / Kantor' },
  ];

  const filteredItems = useMemo(
    () => (filter === 'all' ? items : items.filter((item) => item.category === filter)),
    [filter, items],
  );

  const handleOrderQuoteFromPortfolio = (item: PortfolioItem) => {
    const text = `Halo Sriwijaya Grafika, saya tertarik membuat proyek sejenis dengan portofolio Anda:\n\n*PORTOFOLIO:* ${item.title}\n*KETERANGAN:* ${item.description}\n*PATH DATA:* ${item.originalPath}\n\nMohon konsultasikan pilihan bahan, estimasi pengerjaan, dan survei lokasi untuk ruko/kantor saya. Terima kasih!`;
    const waUrl = `https://wa.me/${BUSINESS_INFO.phone1Intl}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <section class="py-12 bg-white" id="portfolio-section">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-10 space-y-4">
          <span class="text-xs font-bold text-[#ff6634] uppercase tracking-widest block animate-pulse">
            GALERI HASIL KERJA NYATA
          </span>
          <h2 class="text-3xl font-extrabold text-neutral-800 tracking-tight sm:text-4xl">
            Portofolio Unggulan Bergaransi
          </h2>
          <p class="text-sm text-neutral-500 leading-relaxed">
            Menampilkan hasil pengerjaan papan nama reklame, huruf LED timbul akrilik murni, totem sign instansi, dan rambu bersertifikasi K3 di gedung pemerintahan serta tenant ritel Palembang.
          </p>
        </div>

        <div class="flex flex-wrap items-center justify-center gap-2 mb-10 overflow-x-auto pb-1" id="portfolio-filter-buttons">
          {filterCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              class={`py-2 px-4 rounded-xl text-xs font-bold transition-all ${
                filter === cat.id
                  ? 'bg-[#224da8] text-white shadow-md shadow-[#224da8]/10'
                  : 'bg-neutral-50 border border-neutral-100 text-neutral-600 hover:bg-neutral-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="portfolio-grid">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              id={`portfolio-item-${item.id}`}
              onClick={() => setSelectedItem(item)}
              class="group bg-neutral-50 rounded-3xl border border-neutral-100/70 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div class="relative h-48 overflow-hidden">
                <div class={`w-full h-full bg-gradient-to-br ${item.imagePlaceholder} opacity-90 relative flex items-center justify-center p-6 text-center text-white`}>
                  <div class="absolute top-3 left-3 bg-white/20 backdrop-blur-md text-white text-[9px] font-mono tracking-widest font-extrabold py-0.5 px-2 rounded-full border border-white/10 uppercase">
                    PROYEK SELESAI
                  </div>
                  <Image class="w-12 h-12 opacity-15 absolute" />
                  <span class="text-sm font-black tracking-tight leading-tight max-w-[200px] z-10 drop-shadow-md">
                    {item.title.split(' ').slice(-3).join(' ')}
                  </span>
                </div>
                <div class="absolute inset-0 bg-neutral-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2.5">
                  <span class="p-2.5 bg-white text-neutral-800 rounded-full shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <Eye class="w-4 h-4 text-[#224da8]" />
                  </span>
                  <span class="text-white text-xs font-bold drop-shadow">Detail Proyek</span>
                </div>
              </div>

              <div class="p-5">
                <p class="text-[10px] font-mono font-bold uppercase text-[#ff6634] tracking-wider">
                  {item.category.replace('-', ' ')}
                </p>
                <h3 class="text-sm font-extrabold text-neutral-800 mt-1.5 leading-snug group-hover:text-[#224da8] transition-colors">
                  {item.title}
                </h3>
                <p class="text-xs text-neutral-500 mt-2 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
                <div class="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between">
                  <span class="text-[9px] font-mono text-neutral-400 select-all">
                    Data: {item.originalPath}
                  </span>
                  <span class="text-xs font-bold text-[#224da8] inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Detail <ArrowRight class="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedItem && (
          <div class="fixed inset-0 z-50 bg-neutral-950/70 backdrop-blur-md flex items-center justify-center p-4" role="dialog" aria-modal="true" onClick={() => setSelectedItem(null)}>
            <div class="bg-white rounded-3xl max-w-xl w-full overflow-hidden border border-neutral-100 shadow-2xl animate-scaleUp" onClick={(e) => e.stopPropagation()}>
              <div class={`h-40 bg-gradient-to-br ${selectedItem.imagePlaceholder} flex items-center justify-center p-6 text-white text-center relative`}>
                <button
                  onClick={() => setSelectedItem(null)}
                  class="absolute top-4 right-4 p-1.5 bg-black/30 hover:bg-black/50 rounded-full text-white transition-colors"
                  aria-label="Tutup"
                >
                  <X class="w-5 h-5" />
                </button>
                <span class="text-xl font-bold tracking-tight z-10 drop-shadow-md">
                  {selectedItem.title}
                </span>
                <div class="absolute bottom-3 left-4 bg-emerald-500/90 text-white text-[10px] font-mono tracking-widest font-extrabold py-0.5 px-2 rounded-full">
                  GARANSI 1 TAHUN AKTIF
                </div>
              </div>

              <div class="p-6 md:p-8 space-y-4">
                <div>
                  <span class="text-xs font-extrabold text-[#ff6634] uppercase tracking-widest font-mono">
                    {selectedItem.category.replace('-', ' ')}
                  </span>
                  <h3 class="text-lg font-extrabold text-neutral-800 mt-1">{selectedItem.title}</h3>
                </div>

                <p class="text-xs text-neutral-600 leading-relaxed font-normal">
                  {selectedItem.description} Proyek ini dikerjakan oleh tim ahli Sriwijaya Grafika menggunakan metode pengukuran presisi, bahan berlapis antipudar, ketahanan tiupan angin tinggi, dan dilapisi penerangan kelistrikan hemat energi.
                </p>

                <div class="p-3.5 rounded-xl border border-neutral-100 bg-neutral-50/70 space-y-2 text-xs">
                  <div class="flex justify-between">
                    <span class="text-neutral-500">Katalog Referensi:</span>
                    <span class="font-semibold text-neutral-800 capitalize">{selectedItem.category.replace('-', ' ')}</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-neutral-500">File Verifikasi Vendor:</span>
                    <span class="font-mono text-[10px] text-neutral-400 select-all">{selectedItem.originalPath}</span>
                  </div>
                  <div class="flex gap-1 items-center pt-1 text-[10px] text-emerald-600 font-semibold">
                    <ShieldCheck class="w-4 h-4" />
                    <span>Jaminan kualitas 1 tahun terhitung sejak tanggal instalasi.</span>
                  </div>
                </div>

                <div class="flex gap-3 pt-2">
                  <button
                    onClick={() => setSelectedItem(null)}
                    class="flex-1 py-3 text-xs font-bold text-neutral-500 hover:text-neutral-800 rounded-xl hover:bg-neutral-50 transition-colors"
                  >
                    Kembali Ke Galeri
                  </button>
                  <button
                    onClick={() => handleOrderQuoteFromPortfolio(selectedItem)}
                    class="flex-1 py-3 px-4 text-xs font-bold bg-[#ff6634] hover:bg-[#e4511f] rounded-xl text-white inline-flex items-center justify-center gap-2 shadow-md"
                  >
                    <Phone class="w-3.5 h-3.5 fill-white text-white" />
                    <span>Tanya Harga Mirip</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
