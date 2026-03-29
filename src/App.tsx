import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Download, Github, Mail, Palette, Gamepad2, ChevronRight, Calendar, X, ZoomIn, ChevronLeft } from "lucide-react";

const SKINS = [
  {
    id: 1,
    title: "WMII PLAY SKIN",
    category: "Beatoraja",
    description: "Beatoraja용으로 변환한 lr2skin스킨. SP AC 비율만",
    images: [
      "/images/skins/wmii-play-beatoraja/01.webp",
      "/images/skins/wmii-play-beatoraja/02.webp",
    ],
    downloadUrl: "https://drive.google.com/file/d/1p4nIKF2HTnJgJHsasUrsb1FQTcgTbLKp/view?usp=sharing",
    date: "26.03.28",
  },
  {
    id: 2,
    title: "WMII PLAY SKIN",
    category: "LunaticRave2",
    description: "LR2FHD(1080p) 플레이스킨. SP AC비율만 완성되어있음",
    images: [
      "/images/skins/wmii-play-lr2/01.webp",
      "/images/skins/wmii-play-lr2/02.webp",
    ],
    downloadUrl: "https://drive.google.com/file/d/1VzsPuIfWGFZ5fWV6kWemFDYQY6EuGl_a/view?usp=sharing",
    date: "26.03.28",
  },
  {
    id: 3,
    title: "WMIX SKIN SET",
    category: "LunaticRave2",
    description: "LR2 HD(720P) 스킨 세트",
    images: [
      "/images/skins/wmix-hd/01.webp",
      "/images/skins/wmix-hd/02.webp",
      "/images/skins/wmix-hd/03.webp",
      "/images/skins/wmix-hd/04.webp",
    ],
    downloadUrl: "https://drive.google.com/file/d/14moYPndPvCT9S0vLmwD_3P7PPZBw0Or7/view?usp=sharing",
    date: "16.03.21",
  },
  {
    id: 4,
    title: "SPD FRAME PLAY SKIN",
    category: "LunaticRave2",
    description: "SD스킨. iidx21스타일을 오마쥬한 SP/DP플레이스킨",
    images: [
      "/images/skins/spd-frame/01.webp",
      "/images/skins/spd-frame/02.webp",
      "/images/skins/spd-frame/03.webp",
    ],
    downloadUrl: "https://drive.google.com/file/d/1DJqWOwfqVtUKOQ2LbfM5_QPlBx4p4Tnq/view?usp=sharing",
    date: "14.11.13",
  },
  {
    id: 5,
    title: "SPD RESULT SKIN",
    category: "LunaticRave2",
    description: "SD스킨. iidx21스타일을 오마쥬한 리절트스킨",
    images: [
      "/images/skins/spd-result/01.webp",
      "/images/skins/spd-result/02.webp",
    ],
    downloadUrl: "https://drive.google.com/file/d/1aZV06dcWqiJgO5PVbXjezcSfIGJLLzxN/view?usp=sharing",
    date: "14.05.07",
  },
  {
    id: 6,
    title: "tori FRAME PLAY SKIN",
    category: "LunaticRave2",
    description: "SD스킨. iidx20스타일을 오마쥬한 SP플레이스킨.",
    images: [
      "/images/skins/tori-frame/01.webp",
      "/images/skins/tori-frame/02.webp",
      "/images/skins/tori-frame/03.webp",
    ],
    downloadUrl: "https://drive.google.com/file/d/1-18khJQ5GWD5OysVyIIS0mJxO53OgLKo/view?usp=sharing",
    date: "14.08.07",
  },
  {
    id: 7,
    title: "toricolor RESULT SKIN",
    category: "LunaticRave2",
    description: "SD스킨. iidx20스타일을 오마쥬한 리절트스킨",
    images: [
      "/images/skins/tori-result/01.webp",
      "/images/skins/tori-result/02.webp",
    ],
    downloadUrl: "https://drive.google.com/file/d/1Bc12vea7PL-jnDnXfr2RUDwJuVN6fxka/view?usp=sharing",
    date: "14.04.24",
  },
];

const XLogo = ({ size = 20 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function App() {
  const [filter, setFilter] = useState("All");
  const [selectedSkin, setSelectedSkin] = useState<typeof SKINS[0] | null>(null);
  const [currentImgIdx, setCurrentImgIdx] = useState(0);

  const filteredSkins = filter === "All" 
    ? SKINS 
    : SKINS.filter(skin => skin.category === filter);

  const openModal = (skin: typeof SKINS[0]) => {
    setSelectedSkin(skin);
    setCurrentImgIdx(0);
  };

  const closeModal = () => {
    setSelectedSkin(null);
    setCurrentImgIdx(0);
  };

  const nextImg = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!selectedSkin) return;
    setCurrentImgIdx((prev) => (prev + 1) % selectedSkin.images.length);
  };

  const prevImg = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!selectedSkin) return;
    setCurrentImgIdx((prev) => (prev - 1 + selectedSkin.images.length) % selectedSkin.images.length);
  };

  return (
    <div className="min-h-screen selection:bg-teal-100 selection:text-teal-900">
      {/* Image Preview Modal */}
      <AnimatePresence>
        {selectedSkin && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 md:p-8 cursor-zoom-out"
          >
            <div className="relative w-full max-w-5xl flex flex-col items-center gap-6" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors p-2 z-[110]"
              >
                <X size={32} />
              </button>

              {/* Main Image Container */}
              <div className="relative w-full aspect-video flex items-center justify-center group/modal">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImgIdx}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                    src={selectedSkin.images[currentImgIdx]}
                    alt={`Preview ${currentImgIdx + 1}`}
                    className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl"
                    referrerPolicy="no-referrer"
                  />
                </AnimatePresence>

                {/* Navigation Arrows */}
                {selectedSkin.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImg}
                      className="absolute left-4 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-all opacity-0 group-hover/modal:opacity-100"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={nextImg}
                      className="absolute right-4 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-all opacity-0 group-hover/modal:opacity-100"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnails */}
              {selectedSkin.images.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-2 max-w-full">
                  {selectedSkin.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImgIdx(idx)}
                      className={`relative w-20 aspect-video rounded-md overflow-hidden border-2 transition-all flex-shrink-0 ${
                        currentImgIdx === idx ? "border-point scale-110" : "border-transparent opacity-50 hover:opacity-100"
                      }`}
                    >
                      <img src={img} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </button>
                  ))}
                </div>
              )}

              {/* Info */}
              <div className="text-center text-white">
                <h3 className="text-xl font-bold mb-1">{selectedSkin.title}</h3>
                <p className="text-sm text-white/60">
                  {currentImgIdx + 1} / {selectedSkin.images.length}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold tracking-tighter text-point uppercase">wisp's Works</span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <a href="#skins" className="hover:text-point transition-colors">BMS Skins</a>
            <a href="#contact" className="hover:text-point transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        {/* New Featured Section */}
        <section className="pt-20 pb-12 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-10">
              <motion.span 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="px-3 py-1 bg-point text-white text-[10px] font-black rounded-full uppercase tracking-widest animate-pulse"
              >
                New
              </motion.span>
              <h2 className="text-4xl font-black tracking-tighter uppercase text-slate-900">WMII</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-10">
              {SKINS.filter(s => [1, 2].includes(s.id)).map((skin) => (
                <motion.div
                  key={`featured-${skin.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="relative group cursor-pointer"
                  onClick={() => openModal(skin)}
                >
                  <div className="aspect-video overflow-hidden rounded-3xl border border-slate-100 shadow-2xl shadow-teal-500/10">
                    <img 
                      src={skin.images[0]} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
                      <span className="text-point font-black text-[10px] tracking-widest uppercase mb-2">{skin.category}</span>
                      <h3 className="text-2xl font-bold text-white mb-2">{skin.title}</h3>
                      <p className="text-white/60 text-sm line-clamp-1">{skin.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* BMS Skins Section */}
        <section id="skins" className="py-24 px-6 bg-slate-50 min-h-[60vh] border-t border-slate-100">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <h2 className="text-3xl font-black tracking-tight mb-2">ALL SKINS</h2>
                <p className="text-slate-400 text-sm">전체 스킨 라이브러리</p>
              </div>
              <div className="flex p-1 bg-slate-200/50 rounded-xl backdrop-blur-sm">
                {["All", "LunaticRave2", "Beatoraja"].map((tab) => (
                  <button 
                    key={tab}
                    onClick={() => setFilter(tab)}
                    className={`px-6 py-2 rounded-lg text-xs font-bold transition-all ${
                      filter === tab 
                        ? "bg-white text-point shadow-sm" 
                        : "text-slate-500 hover:text-slate-900"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredSkins.map((skin, idx) => (
                <motion.div
                  key={skin.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="group bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl hover:shadow-teal-500/5 transition-all"
                >
                  <div 
                    className="aspect-[4/3] overflow-hidden relative cursor-pointer group/img"
                    onClick={() => openModal(skin)}
                  >
                    <img 
                      src={skin.images[0]} 
                      alt={skin.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="flex flex-col items-center gap-2">
                        <ZoomIn className="text-white" size={32} />
                        <span className="text-white text-xs font-bold bg-black/40 px-2 py-1 rounded-md backdrop-blur-sm">
                          {skin.images.length} Images
                        </span>
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-bold text-point uppercase tracking-wider">
                        {skin.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold group-hover:text-point transition-colors">{skin.title}</h3>
                      <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                        <Calendar size={12} /> {skin.date}
                      </span>
                    </div>
                    <p className="text-sm text-slate-500 mb-6 line-clamp-2">
                      {skin.description}
                    </p>
                    <a 
                      href={skin.downloadUrl}
                      className="w-full py-3 bg-slate-50 text-slate-900 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-point hover:text-white transition-all"
                    >
                      <Download size={18} /> Google Drive
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">Contact</h2>
            <div className="flex justify-center">
              <a 
                href="https://x.com/wisp_13"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-12 py-4 bg-slate-50 rounded-2xl font-semibold hover:bg-slate-900 hover:text-white transition-all"
              >
                <XLogo size={20} /> @wisp_13
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-100 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-slate-400">
            © 2026 Wisp's Works. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
