import { useState, useEffect } from 'react';
import { X, Send, Calculator, ShieldCheck, Phone, CheckCircle } from 'lucide-react';
import type { CatalogProduct, OrderItem } from '@lib/types';
import { BUSINESS_INFO } from '@lib/data';

interface Props {
  product: CatalogProduct;
  onClose: () => void;
}

export default function CalculatorModal({ product, onClose }: Props) {
  const [success, setSuccess] = useState(false);
  const [calculatedPrice, setCalculatedPrice] = useState(0);

  const [custName, setCustName] = useState('');
  const [custPhone, setCustPhone] = useState('');
  const [custAddress, setCustAddress] = useState('');
  const [installNeeded, setInstallNeeded] = useState(false);
  const [notes, setNotes] = useState('');

  const [htWording, setHtWording] = useState('LOGOKU');
  const [htHeight, setHtHeight] = useState(25);
  const [htMaterial, setHtMaterial] = useState('Akrilik');
  const [htIllumination, setHtIllumination] = useState('LED Backlit');

  const [nbWidth, setNbWidth] = useState(100);
  const [nbHeight, setNbHeight] = useState(60);
  const [nbShape, setNbShape] = useState('Persegi / Rectangular');
  const [nbMaterial, setNbMaterial] = useState('Akrilik Oracal Sticker');
  const [nbSides, setNbSides] = useState('Dua Sisi (Double Sided)');

  const [rbShape, setRbShape] = useState('Segitiga / Warning');
  const [rbSize, setRbSize] = useState('45 cm');
  const [rbSticker, setRbSticker] = useState('Asahi Reflective Standard');
  const [rbQty, setRbQty] = useState(5);

  const [ptQty, setPtQty] = useState(20);
  const [ptPages, setPtPages] = useState('2 Ply (Rangkap Dua)');

  useEffect(() => {
    let total = 0;
    if (product.calculatorType === 'huruf_timbul') {
      const charCount = htWording.replace(/\s+/g, '').length;
      let unitPrice = 0;
      switch (htMaterial) {
        case 'Stainless Steel': unitPrice = 12000; break;
        case 'Akrilik': unitPrice = 14000; break;
        case 'Kuningan': unitPrice = 18000; break;
        case 'Galvanil': unitPrice = 10000; break;
        default: unitPrice = 12000;
      }
      const illuminationPrice = htIllumination === 'LED Backlit' || htIllumination === 'LED Frontlit' ? 3000 : 0;
      total = charCount * htHeight * (unitPrice + illuminationPrice);
    } else if (product.calculatorType === 'neon_box') {
      const areaM2 = (nbWidth * nbHeight) / 10000;
      const standardArea = Math.max(areaM2, 0.5);
      let basePricePerM2 = 1400000;
      if (nbMaterial === 'Akrilik Oracal Sticker') {
        basePricePerM2 = 1800000;
      } else if (nbMaterial === 'Backlit Vinyl Printing') {
        basePricePerM2 = 1350000;
      }
      const sidesMultiplier = nbSides === 'Dua Sisi (Double Sided)' ? 1.5 : 1.0;
      const shapePremium = nbShape === 'Bulat / Round' ? 1.15 : 1.0;
      total = Math.round(standardArea * basePricePerM2 * sidesMultiplier * shapePremium);
    } else if (product.calculatorType === 'rambu') {
      let base = 120000;
      if (rbSize === '45 cm') base = 160000;
      if (rbSize === '60 cm') base = 210000;
      const stickerMultiplier = rbSticker === '3M Scotchlite Premium' ? 1.6 : 1.0;
      total = Math.round(base * rbQty * stickerMultiplier);
    } else if (product.calculatorType === 'printing_standard') {
      let bookPrice = 16000;
      if (ptPages === '3 Ply (Rangkap Tiga)') bookPrice = 22000;
      if (ptQty >= 50) bookPrice *= 0.85;
      else if (ptQty >= 20) bookPrice *= 0.92;
      total = Math.round(bookPrice * ptQty);
    }
    setCalculatedPrice(total);
  }, [
    product, htWording, htHeight, htMaterial, htIllumination,
    nbWidth, nbHeight, nbShape, nbMaterial, nbSides,
    rbShape, rbSize, rbSticker, rbQty,
    ptQty, ptPages,
  ]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const handleSubmitWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!custName || !custPhone) {
      alert('Mohon isi Nama dan Nomor WhatsApp Anda terlebih dahulu.');
      return;
    }

    let detailString = '';
    if (product.calculatorType === 'huruf_timbul') {
      detailString = `*Huruf Timbul 3D*\n- Tulisan: "${htWording}"\n- Tinggi: ${htHeight} cm\n- Bahan: ${htMaterial}\n- Penerangan: ${htIllumination}\n- Estimasi Karakter: ${htWording.replace(/\s+/g, '').length} huruf`;
    } else if (product.calculatorType === 'neon_box') {
      detailString = `*Neon Box Custom*\n- Dimensi: ${nbWidth} x ${nbHeight} cm\n- Bentuk: ${nbShape}\n- Cover Visual: ${nbMaterial}\n- Sisi: ${nbSides}`;
    } else if (product.calculatorType === 'rambu') {
      detailString = `*Rambu-Rambu & Safety Sign*\n- Jenis: ${rbShape}\n- Ukuran: ${rbSize}\n- Tipe Stiker: ${rbSticker}\n- Jumlah: ${rbQty} pcs`;
    } else if (product.calculatorType === 'printing_standard') {
      detailString = `*Cetak Dokumen & Nota*\n- Layanan: ${product.name}\n- Jumlah Pesanan: ${ptQty} buku\n- Spesifikasi: ${ptPages}`;
    } else {
      detailString = `*Layanan:* ${product.name}`;
    }

    const newItem: OrderItem = {
      id: Math.random().toString(36).substring(2, 9),
      productName: product.name,
      calculatorType: product.calculatorType || 'custom',
      details: {
        wording: htWording,
        height: htHeight,
        width: nbWidth,
        shape: nbShape,
        material: htMaterial || nbMaterial || rbSticker || ptPages,
        illumination: htIllumination,
        sides: nbSides,
        quantity: rbQty || ptQty || 1,
        customNote: notes,
      },
      estimatedPrice: calculatedPrice,
    };

    try {
      const existing = JSON.parse(localStorage.getItem('sg_order_queries') || '[]');
      const updated = [newItem, ...existing];
      localStorage.setItem('sg_order_queries', JSON.stringify(updated));
      window.dispatchEvent(new CustomEvent('sg-cart-updated'));
    } catch {}

    const formattedMessage = `Halo Sriwijaya Grafika, saya ingin bertanya dan memesan layanan media promosi melalui Website Resmi.\n\n*DATA PEMESAN:*\n- Nama: ${custName}\n- No. WA: ${custPhone}\n- Alamat: ${custAddress || '-'}\n- Membutuhkan Jasa Pasang di Palembang: ${installNeeded ? 'Ya' : 'Tidak'}\n\n*RINCIAN KEBUTUHAN PRODUK:*\n${detailString}\n- Catatan Khusus: ${notes || '-'}\n\n*ESTIMASI PENAWARAN HARGA BARANG:* Rp ${calculatedPrice.toLocaleString('id-ID')}\n\n_(Mohon konfirmasi ketersediaan pengerjaan, lama produksi, dan survei lokasi jika dibutuhkan. Terima kasih!)_`;

    const encodedText = encodeURIComponent(formattedMessage);
    const waUrl = `https://wa.me/${BUSINESS_INFO.phone1Intl}?text=${encodedText}`;
    window.open(waUrl, '_blank');

    setSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-neutral-900/60 backdrop-blur-sm flex items-center justify-center p-4" role="dialog" aria-modal="true">
      <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full overflow-hidden border border-neutral-100 flex flex-col md:flex-row max-h-[90vh]" id="calculator-modal-container">
        <div className="flex-1 p-6 md:p-8 overflow-y-auto border-b md:border-b-0 md:border-r border-neutral-100 max-h-[80vh] md:max-h-none">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Calculator className="w-5 h-5 text-[#224da8]" />
              <h2 className="text-xl font-bold text-neutral-900">Custom Order Builder</h2>
            </div>
            <button onClick={onClose} className="md:hidden p-1.5 rounded-full hover:bg-neutral-100 text-neutral-400 hover:text-neutral-600" aria-label="Tutup kalkulator">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="mb-4">
            <span className="text-xs text-[#ff6634] uppercase font-bold tracking-widest block mb-1">
              {product.subcategory}
            </span>
            <h3 className="text-lg font-extrabold text-neutral-800">{product.name}</h3>
            <p className="text-xs text-neutral-500 mt-1">{product.description}</p>
          </div>

          {!success ? (
            <form onSubmit={handleSubmitWhatsApp} className="space-y-5">
              {product.calculatorType === 'huruf_timbul' && (
                <div className="space-y-4 p-4 rounded-2xl bg-neutral-50 border border-neutral-100">
                  <span className="text-xs font-bold text-neutral-700 block">Konfigurasi Desain Huruf</span>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-600 mb-1">Tulisan / Wording Huruf Timbul</label>
                    <input
                      type="text"
                      value={htWording}
                      onChange={(e) => setHtWording(e.target.value.toUpperCase())}
                      className="w-full px-3 py-2 border border-neutral-200 rounded-xl bg-white text-sm font-bold tracking-wider"
                      placeholder="CONTOH: CAFE 123"
                    />
                    <span className="text-[10px] text-neutral-400 mt-0.5 block">Karakter terhitung (Tanpa spasi): {htWording.replace(/\s+/g, '').length} huruf</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-600 mb-1">Tinggi Huruf (cm)</label>
                      <input type="number" min="10" max="200" value={htHeight} onChange={(e) => setHtHeight(Number(e.target.value))} className="w-full px-3 py-2 border border-neutral-200 rounded-xl bg-white text-sm font-semibold" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-600 mb-1">Pilihan Bahan</label>
                      <select value={htMaterial} onChange={(e) => setHtMaterial(e.target.value)} className="w-full px-3 py-2 border border-neutral-200 rounded-xl bg-white text-sm">
                        <option value="Akrilik">Akrilik Premium</option>
                        <option value="Stainless Steel">Stainless Steel Mirror</option>
                        <option value="Kuningan">Kuningan Mewah</option>
                        <option value="Galvanil">Plat Galvanil oven</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-600 mb-1">Penerangan / Lighting</label>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {['Tanpa Lampu (Unlit)', 'LED Backlit'].map((opt) => (
                        <button key={opt} type="button" onClick={() => setHtIllumination(opt)}
                          className={`py-2 px-3 rounded-lg border text-center font-medium ${
                            htIllumination === opt ? 'border-[#224da8] bg-[#224da8]/5 text-[#224da8]' : 'border-neutral-200 bg-white text-neutral-600'
                          }`}>
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {product.calculatorType === 'neon_box' && (
                <div className="space-y-4 p-4 rounded-2xl bg-neutral-50 border border-neutral-100">
                  <span className="text-xs font-bold text-neutral-700 block">Konfigurasi Ukuran &amp; Material</span>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-600 mb-1">Lebar Box (cm)</label>
                      <input type="number" min="30" max="500" value={nbWidth} onChange={(e) => setNbWidth(Number(e.target.value))} className="w-full px-3 py-2 border border-neutral-200 rounded-xl bg-white text-sm" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-600 mb-1">Tinggi Box (cm)</label>
                      <input type="number" min="30" max="500" value={nbHeight} onChange={(e) => setNbHeight(Number(e.target.value))} className="w-full px-3 py-2 border border-neutral-200 rounded-xl bg-white text-sm" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-600 mb-1">Bentuk Neon Box</label>
                      <select value={nbShape} onChange={(e) => setNbShape(e.target.value)} className="w-full px-3 py-2 border border-neutral-200 rounded-xl bg-white text-sm">
                        <option value="Persegi / Rectangular">Persegi / Rectangular</option>
                        <option value="Bulat / Round">Bulat / Round (+15%)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-600 mb-1">Cover Visual</label>
                      <select value={nbMaterial} onChange={(e) => setNbMaterial(e.target.value)} className="w-full px-3 py-2 border border-neutral-200 rounded-xl bg-white text-sm font-semibold">
                        <option value="Akrilik Oracal Sticker">Akrilik Cutting Sticker Oracal</option>
                        <option value="Backlit Vinyl Printing">Backlit Vinyl High-Res Printing</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-600 mb-1">Konstruksi Sisi Pemasangan</label>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {['Satu Sisi (Single Sided)', 'Dua Sisi (Double Sided)'].map((sidesOption) => (
                        <button key={sidesOption} type="button" onClick={() => setNbSides(sidesOption)}
                          className={`py-2 px-3 rounded-lg border text-center font-medium ${
                            nbSides === sidesOption ? 'border-[#224da8] bg-[#224da8]/5 text-[#224da8]' : 'border-neutral-200 bg-white text-neutral-600'
                          }`}>
                          {sidesOption}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {product.calculatorType === 'rambu' && (
                <div className="space-y-4 p-4 rounded-2xl bg-neutral-50 border border-neutral-100">
                  <span className="text-xs font-bold text-neutral-700 block">Spesifikasi Standar Rambu</span>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-600 mb-1">Jenis Rambu</label>
                      <select value={rbShape} onChange={(e) => setRbShape(e.target.value)} className="w-full px-3 py-2 border border-neutral-200 rounded-xl bg-white text-sm">
                        <option value="Segitiga / Warning">Segitiga (Himbauan/Peringatan)</option>
                        <option value="Bulat / Prohibition">Lingkaran (Larangan)</option>
                        <option value="Persegi / Evakuasi">Persegi (Petunjuk / K3)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-600 mb-1">Standard Ukuran Penampang</label>
                      <select value={rbSize} onChange={(e) => setRbSize(e.target.value)} className="w-full px-3 py-2 border border-neutral-200 rounded-xl bg-white text-sm">
                        <option value="30 cm">Kecil (Diameter/Sisi 30cm)</option>
                        <option value="45 cm">Sedang (Diameter/Sisi 45cm)</option>
                        <option value="60 cm">Besar (Diameter/Sisi 60cm)</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-600 mb-1">Tipe Stiker Reflective (Pantul)</label>
                      <select value={rbSticker} onChange={(e) => setRbSticker(e.target.value)} className="w-full px-3 py-2 border border-neutral-200 rounded-xl bg-white text-sm">
                        <option value="Asahi Reflective Standard">Asahi Reflective Standard</option>
                        <option value="3M Scotchlite Premium">3M Scotchlite Premium (+60%)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-600 mb-1">Jumlah Pemesanan (Pcs)</label>
                      <input type="number" min="1" max="1000" value={rbQty} onChange={(e) => setRbQty(Math.max(1, Number(e.target.value)))} className="w-full px-3 py-2 border border-neutral-200 rounded-xl bg-white text-sm" />
                    </div>
                  </div>
                </div>
              )}

              {product.calculatorType === 'printing_standard' && (
                <div className="space-y-4 p-4 rounded-2xl bg-neutral-50 border border-neutral-100">
                  <span className="text-xs font-bold text-neutral-700 block">Setting Buku Reklame</span>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-600 mb-1">Model Buku NCR</label>
                      <select value={ptPages} onChange={(e) => setPtPages(e.target.value)} className="w-full px-3 py-2 border border-neutral-200 rounded-xl bg-white text-sm font-semibold">
                        <option value="2 Ply (Rangkap Dua)">2 Ply (Putih - Merah)</option>
                        <option value="3 Ply (Rangkap Tiga)">3 Ply (Putih - Merah - Kuning)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-600 mb-1">Jumlah Cetak (Buku)</label>
                      <input type="number" min="10" step="10" max="5000" value={ptQty} onChange={(e) => setPtQty(Math.max(10, Number(e.target.value)))} className="w-full px-3 py-2 border border-neutral-200 rounded-xl bg-white text-sm" />
                      <span className="text-[10px] text-neutral-400 mt-1 block">*Makin banyak jumlah, diskon makin berlipat!</span>
                    </div>
                  </div>
                </div>
              )}

              <div className="space-y-3.5 p-4 rounded-2xl border-2 border-[#224da8]/20 bg-[#224da8]/5">
                <span className="text-xs font-bold text-[#224da8] block">Lengkapi Informasi Kontak Anda</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-neutral-600 mb-1">Nama Lengkap Pemesan *</label>
                    <input type="text" required value={custName} onChange={(e) => setCustName(e.target.value)} className="w-full px-3 py-1.5 border border-neutral-200 rounded-lg bg-white text-xs font-medium" placeholder="CONTOH: Ibu Rina Sriwijaya" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-neutral-600 mb-1">No. WhatsApp Aktif *</label>
                    <input type="tel" required value={custPhone} onChange={(e) => setCustPhone(e.target.value)} className="w-full px-3 py-1.5 border border-neutral-200 rounded-lg bg-white text-xs font-bold text-neutral-800" placeholder="CONTOH: 0812XXXXXXXX" />
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-neutral-600 mb-1">Alamat Pengiriman / Pemasangan</label>
                  <input type="text" value={custAddress} onChange={(e) => setCustAddress(e.target.value)} className="w-full px-3 py-1.5 border border-neutral-200 rounded-lg bg-white text-xs font-medium" placeholder="Alamat lengkap usaha atau kantor Anda di Palembang" />
                </div>
                <div className="flex items-center gap-2 pt-1">
                  <input type="checkbox" id="chk-install" checked={installNeeded} onChange={(e) => setInstallNeeded(e.target.checked)} className="w-4 h-4 rounded text-[#224da8] focus:ring-[#224da8]" />
                  <label htmlFor="chk-install" className="text-xs font-medium text-neutral-700 cursor-pointer select-none">
                    Butuh Jasa Instalasi / Pemasangan dari staf Sriwijaya Grafika? (Area Palembang)
                  </label>
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-neutral-600 mb-1">Catatan Khusus (Logo, Pilihan Warna, Dll)</label>
                  <textarea value={notes} onChange={(e) => setNotes(e.target.value)} className="w-full px-3 py-1.5 border border-neutral-200 rounded-lg bg-white text-xs font-medium h-14 resize-none" placeholder="Tuliskan jika ada permintaan tata letak, warna lampu LED, ketebalan frame, dll..." />
                </div>
              </div>

              <div className="md:hidden pt-2 border-t border-neutral-100">
                <button type="submit" className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#ff6634] hover:bg-[#e4511f] text-white font-bold text-sm shadow-md">
                  <Send className="w-4 h-4" />
                  <span>Kirim Pesanan ke WhatsApp</span>
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-neutral-800">Berhasil Mengirimkan Pesanan!</h4>
              <p className="text-sm text-neutral-500 max-w-md mx-auto leading-relaxed">
                Rincian pesanan Anda telah ditransmisikan ke WhatsApp Sriwijaya Grafika. Staff kami akan segera mengkonfirmasi ketersediaan pengerjaan, lama produksi, dan survei lokasi jika diperlukan.
              </p>
              <div className="flex gap-3 justify-center pt-4">
                <button onClick={() => setSuccess(false)} className="px-5 py-2.5 rounded-xl border border-neutral-200 hover:bg-neutral-50 text-neutral-600 text-xs font-semibold">
                  Ubah Parameter Desain
                </button>
                <button onClick={onClose} className="px-5 py-2.5 rounded-xl bg-[#224da8] hover:bg-[#183c84] text-white text-xs font-semibold">
                  Tutup Kalkulator
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="w-full md:w-80 bg-neutral-900 text-white p-6 md:p-8 flex flex-col justify-between relative overflow-hidden" id="calculator-summary-sidebar">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#224da8]/20 rounded-full blur-2xl" aria-hidden="true"></div>
          <button type="button" onClick={onClose} className="absolute top-6 right-6 hidden md:flex p-1 bg-neutral-800 hover:bg-neutral-700 rounded-full text-neutral-400 hover:text-white transition-colors" aria-label="Tutup kalkulator">
            <X className="w-4 h-4" />
          </button>

          <div className="space-y-6 relative z-10 pt-4 md:pt-10">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#ff6634] font-bold">
              KUMPULAN DAFTAR HARGA ESTIMASI
            </span>
            <hr className="border-neutral-800" />

            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-xs text-neutral-400">Total Harga Estimasi</span>
                <p className="text-3xl md:text-4xl font-black text-white">
                  Rp {calculatedPrice.toLocaleString('id-ID')}
                </p>
                <span className="text-[10px] text-neutral-500 italic block">
                  *Harga di luar biaya ongkir &amp; instalasi kargo, survei lokasi resmi di luar kota Palembang.
                </span>
              </div>

              <div className="p-4 rounded-xl bg-neutral-800/50 border border-neutral-800 space-y-3.5 text-xs">
                <div className="flex justify-between">
                  <span className="text-neutral-400">Bahan Utama:</span>
                  <span className="font-semibold text-neutral-200">
                    {product.calculatorType === 'huruf_timbul' ? htMaterial : ''}
                    {product.calculatorType === 'neon_box' ? nbMaterial : ''}
                    {product.calculatorType === 'rambu' ? rbSticker : ''}
                    {product.calculatorType === 'printing_standard' ? ptPages : ''}
                  </span>
                </div>
                {product.calculatorType === 'huruf_timbul' && (
                  <>
                    <div className="flex justify-between"><span className="text-neutral-400">Tulisan:</span><span className="font-semibold text-neutral-200 font-mono tracking-wider">"{htWording}"</span></div>
                    <div className="flex justify-between"><span className="text-neutral-400">Tinggi Huruf:</span><span className="font-semibold text-neutral-200">{htHeight} cm</span></div>
                    <div className="flex justify-between"><span className="text-neutral-400">Pencahayaan:</span><span className="font-semibold text-[#ff6634]">{htIllumination}</span></div>
                  </>
                )}
                {product.calculatorType === 'neon_box' && (
                  <>
                    <div className="flex justify-between"><span className="text-neutral-400">Dimensi Box:</span><span className="font-semibold text-neutral-200">{nbWidth} x {nbHeight} cm</span></div>
                    <div className="flex justify-between"><span className="text-neutral-400">Rasio Model:</span><span className="font-semibold text-neutral-200">{nbShape}</span></div>
                    <div className="flex justify-between"><span className="text-neutral-400">Konstruksi Sisi:</span><span className="font-semibold text-[#ff6634]">{nbSides}</span></div>
                  </>
                )}
                {product.calculatorType === 'rambu' && (
                  <>
                    <div className="flex justify-between"><span className="text-neutral-400">Ukuran Sisi:</span><span className="font-semibold text-neutral-200">{rbSize}</span></div>
                    <div className="flex justify-between"><span className="text-neutral-400">Tipe Visual:</span><span className="font-semibold text-neutral-200">{rbShape}</span></div>
                    <div className="flex justify-between"><span className="text-neutral-400">Jumlah Volume:</span><span className="font-semibold text-[#ff6634]">{rbQty} pcs</span></div>
                  </>
                )}
                {product.calculatorType === 'printing_standard' && (
                  <div className="flex justify-between"><span className="text-neutral-400">Target Order:</span><span className="font-semibold text-[#ff6634]">{ptQty} buku</span></div>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 md:pt-0 relative z-10">
            <div className="flex gap-2 p-3 rounded-xl bg-neutral-800/40 border border-neutral-800 text-[11px] text-neutral-400">
              <ShieldCheck className="w-5 h-5 text-emerald-500 flex-shrink-0" />
              <span>
                Pemasangan reklame luar ruangan dilindungi <strong>Garansi Kelistrikan &amp; Alam Resmi selama 1 Tahun</strong>.
              </span>
            </div>
            {!success && (
              <button
                onClick={handleSubmitWhatsApp}
                className="hidden md:flex w-full items-center justify-center gap-2 py-4 rounded-xl bg-[#ff6634] hover:bg-[#e4511f] text-white font-bold font-sans text-sm shadow-lg shadow-[#ff6634]/15 transition-all duration-200"
                id="sidebar-btn-submit"
              >
                <Phone className="w-4 h-4 fill-white text-white" />
                <span>Kirim Pesanan (WA)</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
