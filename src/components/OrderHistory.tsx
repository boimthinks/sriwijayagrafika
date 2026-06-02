import { useState, useEffect } from 'react';
import { FileText, Phone, Sparkles } from 'lucide-react';
import type { OrderItem } from '@lib/types';
import { BUSINESS_INFO } from '@lib/data';

export default function OrderHistory() {
  const [items, setItems] = useState<OrderItem[]>([]);

  useEffect(() => {
    const load = () => {
      try {
        const saved = localStorage.getItem('sg_order_queries');
        if (saved) {
          setItems(JSON.parse(saved));
        } else {
          setItems([]);
        }
      } catch (e) {
        console.warn('Could not read localStorage', e);
        setItems([]);
      }
    };

    load();

    const handler = () => load();
    window.addEventListener('sg-cart-updated', handler);
    window.addEventListener('storage', handler);

    return () => {
      window.removeEventListener('sg-cart-updated', handler);
      window.removeEventListener('storage', handler);
    };
  }, []);

  const handleClear = () => {
    if (window.confirm('Hapus riwayat penawaran tersimpan?')) {
      localStorage.removeItem('sg_order_queries');
      setItems([]);
    }
  };

  if (items.length === 0) return null;

  return (
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div class="bg-white border border-neutral-100 rounded-3xl p-6 shadow-sm space-y-4" id="order-history-ledger">
        <div class="flex items-center justify-between border-b border-neutral-100 pb-3">
          <div class="flex items-center gap-2">
            <FileText class="w-5 h-5 text-[#224da8]" />
            <h4 class="text-base font-extrabold text-neutral-800">
              Keranjang Desain &amp; Riwayat Hitung Penawaran ({items.length})
            </h4>
          </div>
          <button onClick={handleClear} class="text-xs font-bold text-red-500 hover:text-red-700">
            Hapus Riwayat
          </button>
        </div>

        <div class="divide-y divide-neutral-100 max-h-60 overflow-y-auto pr-2">
          {items.map((item) => (
            <div key={item.id} class="py-3 flex flex-col sm:flex-row items-center sm:items-center justify-between gap-3 text-xs">
              <div>
                <span class="font-extrabold text-[#224da8]">{item.productName}</span>
                <span class="text-neutral-400 block mt-0.5">
                  Spesifikasi kustom: {item.details.wording ? `Wording: "${item.details.wording}", ` : ''}
                  Dimensi: {item.details.width ? `${item.details.width}x${item.details.height} cm, ` : ''}
                  Bahan: {item.details.material}, Qty: {item.details.quantity}
                </span>
              </div>
              <div class="flex items-center gap-3">
                <span class="font-extrabold font-mono text-neutral-800 bg-neutral-100 px-2.5 py-1 rounded">
                  Rp {item.estimatedPrice.toLocaleString('id-ID')}
                </span>
                <a
                  href={`https://wa.me/${BUSINESS_INFO.phone1Intl}?text=${encodeURIComponent(`Halo Sriwijaya Grafika, saya ingin mengulang penawaran desain tersimpan dari website:\n\n*LAYANAN:* ${item.productName}\n- Estimasi lama proses/harga: Rp ${item.estimatedPrice.toLocaleString('id-ID')}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-1 py-1.5 px-3 bg-[#ff6634] hover:bg-[#e4511f] text-white font-bold rounded-lg text-[10px]"
                >
                  <Phone class="w-3 h-3 fill-white" />
                  <span>Kirim WA</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div class="pt-2 text-[11px] text-neutral-500 flex items-center gap-1.5">
          <Sparkles class="w-3.5 h-3.5 text-[#ff6634]" />
          <span>Mau desain lebih lanjut? Buka <a href="/layanan" class="font-bold text-[#224da8] hover:underline">Layanan</a> untuk menambah item.</span>
        </div>
      </div>
    </section>
  );
}
