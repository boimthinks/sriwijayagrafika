import { useState } from 'react';
import { Newspaper, Video, Globe, Award, ShieldCheck, Heart, Check, Play, ExternalLink, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '@lib/data';

interface Props {
  mediaCoverages: typeof import('@lib/data').MEDIA_COVERAGES;
  videos: typeof import('@lib/data').VIDEOS;
  fullArticles: typeof import('@lib/data').FULL_ARTICLES;
  generalDescription: string;
}

export default function AboutAndMediaIsland({ mediaCoverages, videos, fullArticles, generalDescription }: Props) {
  const [activeArticle, setActiveArticle] = useState<number | null>(null);

  return (
    <section className="py-12 bg-neutral-50/50" id="media-coverage-section">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="bg-white border border-neutral-100 rounded-3xl p-6 md:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center" id="company-profile-box">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-[10px] font-bold font-mono uppercase">
              <Heart className="w-3.5 h-3.5 fill-emerald-500 text-emerald-500" />
              <span>Socio-Enterprise lokal</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-[#224da8] tracking-tight">
              Lebih Dekat Dengan <span className="text-[#ff6634]">Sriwijaya Grafika</span>
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed font-normal">
              {generalDescription}
            </p>
            <div className="space-y-3.5 text-xs">
              <div className="flex items-start gap-2 text-neutral-600">
                <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span><strong>Garansi 1 Tahun Penuh:</strong> Jaminan kualitas outdoor reklame tahan hujan, badai, serta kelistrikan lampu LED.</span>
              </div>
              <div className="flex items-start gap-2 text-neutral-600">
                <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span><strong>Pemberdayaan Disabilitas:</strong> Memberdayakan pengrajin lokal berbakat termasuk penyandang Tuna Rungu (tuli wicara) demi kemandirian ekonomi.</span>
              </div>
              <div className="flex items-start gap-2 text-neutral-600">
                <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span><strong>Aman &amp; Terpercaya:</strong> Selesai membungkus instalasi instansi penting seperti gedung Walikota Palembang, Kejati Sumsel, dan jaringan ritel nasional.</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-br from-[#224da8] to-[#10285a] rounded-2xl p-6 text-white text-center space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-10 -mt-10 w-32 h-32 bg-[#ff6634]/10 rounded-full blur-2xl" aria-hidden="true"></div>
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-wider font-mono text-[#ff6634] font-bold">CORE VALUE KAMI</span>
              <p className="text-lg font-bold">"Bukan Hanya Menjual Karya, Tapi Membangun Kedekatan Emosional"</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="block text-2xl font-extrabold text-[#ff6634]">2008</span>
                <span className="text-[10px] text-neutral-300">Rintisan awal bengkel</span>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="block text-2xl font-extrabold text-sky-300">Sumsel</span>
                <span className="text-[10px] text-neutral-300">Cakupan Wilayah</span>
              </div>
            </div>
            <div className="pt-2 text-xs text-neutral-300 italic font-mono">
              Jl. AMD Jl. Pertanian No.105, Kel. Talang Jambe, Sukarami, Palembang
            </div>
          </div>
        </div>

        <div className="space-y-8" id="pressroom-box">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-[#ff6634] uppercase tracking-widest font-mono">LIPUTAN PERS NASIONAL</span>
              <h3 className="text-2xl font-extrabold text-neutral-800 tracking-tight mt-1.5 flex items-center gap-2">
                <Newspaper className="w-6 h-6 text-[#224da8]" /> Sorotan di Media Cetak &amp; Online
              </h3>
            </div>
            <span className="text-xs text-neutral-400">Liputan resmi liputan jurnalistik Sumsel</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mediaCoverages.map((cover, idx) => (
              <div key={idx} className="bg-white rounded-3xl border border-neutral-100 shadow-sm p-6 flex flex-col justify-between hover:border-neutral-200 transition-colors">
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
                    <span className="px-3 py-1 text-[10px] font-bold text-neutral-700 bg-neutral-100 rounded-md font-mono">
                      {cover.publisher}
                    </span>
                    <span className="text-[10px] text-neutral-400 font-mono font-semibold">{cover.date}</span>
                  </div>
                  <h4 className="text-base font-extrabold text-[#224da8] hover:text-[#ff6634] leading-snug">
                    {cover.headline}
                  </h4>
                  <p className="text-xs text-neutral-500 leading-relaxed italic border-l-2 border-neutral-200 pl-3">
                    "{cover.contentSnippet}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between">
                  {activeArticle === idx ? (
                    <button onClick={() => setActiveArticle(null)} className="text-xs font-bold text-neutral-500 hover:text-neutral-800">
                      Tutup Transkrip
                    </button>
                  ) : (
                    <button onClick={() => setActiveArticle(idx)} className="text-xs font-bold text-[#224da8] hover:text-[#ff6634]">
                      Baca Transkrip Lengkap
                    </button>
                  )}
                  <a href={cover.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-neutral-400 hover:text-neutral-600 font-medium">
                    <span>Kunjungi Sumber</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {activeArticle === idx && fullArticles[idx] && (
                  <div className="mt-6 p-4 rounded-xl bg-neutral-50 border border-neutral-100 space-y-3 max-h-80 overflow-y-auto">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-400 block pb-1 border-b border-neutral-200 font-bold">
                      TRANSKRIP ORIGINAL:
                    </span>
                    <p className="text-xs text-neutral-600 whitespace-pre-wrap leading-relaxed font-normal">
                      {fullArticles[idx].content}
                    </p>
                    <span className="text-[9px] text-neutral-400 block pt-1 border-t border-neutral-100">
                      Editor: {fullArticles[idx].editor} | Paton Data Screenshot: {cover.screenshot}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8" id="video-cabinet-section">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-[#ff6634] uppercase tracking-widest font-mono">GALERI VIDEO &amp; REVIEW</span>
              <h3 className="text-2xl font-extrabold text-neutral-800 tracking-tight mt-1.5 flex items-center gap-2">
                <Video className="w-6 h-6 text-[#224da8]" /> Sorotan Video Liputan &amp; Liputan TV
              </h3>
            </div>
            <span className="text-xs text-neutral-400">Melihat langsung bengkel kerja kami</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((vid) => (
              <div key={vid.id} className="bg-white rounded-3xl border border-neutral-100 shadow-sm overflow-hidden flex flex-col justify-between hover:border-neutral-200 transition-colors">
                <div className="relative h-44 group">
                  {vid.url.includes('youtube.com/watch') ? (
                    <img
                      src={`https://img.youtube.com/vi/${vid.id}/hqdefault.jpg`}
                      alt={vid.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#224da8] to-[#10285a] flex items-center justify-center">
                      <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '20px 20px' }}></div>
                      <MessageCircle className="w-14 h-14 text-[#ff6634]" strokeWidth={1.25} />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#224da8]/30 to-black/80 z-0"></div>
                  <a href={vid.url} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-red-600 hover:bg-red-700 hover:scale-105 duration-200 flex items-center justify-center shadow-lg cursor-pointer z-10 transition-transform" aria-label={`Putar video: ${vid.title}`}>
                    <Play className="w-5 h-5 fill-white text-white ml-0.5" />
                  </a>
                  <span className="absolute bottom-3 left-4 text-[9px] font-mono tracking-widest font-bold bg-neutral-950/60 py-0.5 px-2 rounded uppercase border border-neutral-800">
                    {vid.channel}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-xs text-neutral-400 font-mono uppercase font-black">{vid.channel}</h4>
                    <h3 className="text-sm font-extrabold text-[#224da8] mt-1 line-clamp-2 leading-snug">
                      {vid.title}
                    </h3>
                    <p className="text-xs text-neutral-500 mt-2.5 leading-relaxed line-clamp-3">
                      {vid.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-neutral-100 text-right">
                    <a href={vid.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#ff6634] hover:text-[#e4511f]">
                      <span>Tonton Liputan Resmi</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
