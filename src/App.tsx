import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Download, Github, Mail, Palette, Gamepad2, ChevronRight, Calendar, X, ZoomIn, ChevronLeft, Coffee } from "lucide-react";

const SKINS = [
  {
    id: 1,
    title: "WMII RESULT SKIN for beatoraja",
    category: "Beatoraja",
    description: "Beatoraja용 FHD 리절트스킨.  select키로 정보창 전환가능, 코스리절트 사용시 각 스테이지 정보는 WMII 리절트를 사용해야만 표시가능",
    images: [
      "/images/skins/wmii-result-beatoraja/01.webp",
      "/images/skins/wmii-result-beatoraja/02.webp",
      "/images/skins/wmii-result-beatoraja/03.webp",
      "/images/skins/wmii-result-beatoraja/04.webp",
    ],
    downloadUrl: "https://drive.google.com/file/d/1e4AIPBOWcz7fnAmEfeZdIIvnnLrMTlLX/view?usp=sharing",
    date: "26.07.17",
  },
  {
    id: 2,
    title: "WMII PLAY SKIN for beatoraja",
    category: "Beatoraja",
    description: "Beatoraja용 FHD 플레이스킨. AC,WIDE 비율, 7,14,5,10 keys 대응",
    images: [
      "/images/skins/wmii-play-beatoraja/01.webp",
      "/images/skins/wmii-play-beatoraja/02.webp",
      "/images/skins/wmii-play-beatoraja/03.webp",
      "/images/skins/wmii-play-beatoraja/04.webp",
    ],
    downloadUrl: "https://drive.google.com/file/d/1AKgyT6chZSJxVErOzQa75vYhhj2fZp5q/view?usp=sharing",
    date: "26.07.27",
  },
  {
    id: 3,
    title: "WMII PLAY SKIN for OpenLR2",
    category: "LunaticRave2",
    description: "OpenLR2 / LR2FHD용 FHD 플레이스킨. AC,WIDE 비율, DP는 AC스킨만. G-Battle은 싱글스킨사용, Battle은 AutoPlay용 미완성",
    images: [
      "/images/skins/wmii-play-lr2/01.webp",
      "/images/skins/wmii-play-lr2/02.webp",
      "/images/skins/wmii-play-lr2/03.webp",
    ],
    downloadUrl: "https://drive.google.com/file/d/118KuZe2oSiwB5DbURAHrolA6CVbtfC_s/view?usp=sharing",
    date: "26.07.27",
  },
  {
    id: 4,
    title: "WMIX SKIN SET",
    category: "LunaticRave2",
    description: "LR2 HD(720P) 스킨 세트.\n[OpenLR2 PATCH LINK(타 커뮤니티 제작)](https://drive.google.com/file/d/1jGERR1WL9ppRqqolMu0QMVYhBVC6xJOM/view?usp=sharing)",
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
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




const AcoffeeButton = ({ isLarge = false }: { isLarge?: boolean }) => {
  const [imgFailed, setImgFailed] = useState(false);

  if (imgFailed) {
    if (isLarge) {
      return (
        <a
          href="https://acoffee.shop/d/de61ecac-48f4-41bc-b408-ac04af8fc93e"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 px-8 py-4 bg-[#F4A261]/10 text-[#E76F51] hover:text-white rounded-2xl font-bold hover:bg-[#F4A261] transition-all w-full sm:w-auto h-[54px] sm:h-[60px] border border-[#F4A261]/20 shadow-sm"
        >
          <Coffee size={20} className="text-[#E76F51] group-hover:text-white" />
          <span>후원 한잔 (Acoffee)</span>
        </a>
      );
    }
    return (
      <a
        href="https://acoffee.shop/d/de61ecac-48f4-41bc-b408-ac04af8fc93e"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 px-4 py-2 bg-[#F4A261] text-white rounded-xl hover:bg-[#E76F51] hover:scale-[1.02] active:scale-[0.98] transition-all text-xs font-bold shadow-md shadow-[#F4A261]/15 h-9"
      >
        <Coffee size={14} />
        <span>후원 한잔</span>
      </a>
    );
  }

  return (
    <a
      href="https://acoffee.shop/d/de61ecac-48f4-41bc-b408-ac04af8fc93e"
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-center hover:scale-[1.02] active:scale-[0.98] transition-all select-none ${
        isLarge ? "w-full sm:w-auto h-[54px] sm:h-[60px]" : "h-9"
      }`}
    >
      <img
        src="https://acoffee.shop/api-coffee/img/ko/png/Button_S716.png"
        alt="후원 한잔"
        className={`${isLarge ? "h-full rounded-2xl" : "h-full rounded-xl"} object-contain shadow-sm`}
        onError={() => setImgFailed(true)}
      />
    </a>
  );
};


const renderDescription = (text: string) => {
  const parts = [];
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    const linkText = match[1];
    const linkUrl = match[2];
    parts.push(
      <a
        key={match.index}
        href={linkUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-600 hover:underline font-bold transition-all inline-flex items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {linkText}
      </a>
    );
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? parts : text;
};

const stripMarkdownLinks = (text: string) => {
  return text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1");
};
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

  const scrollToSkin = (skinId: number) => {
    setFilter("All");
    setTimeout(() => {
      const element = document.getElementById(`skin-${skinId}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        element.classList.add('ring-4', 'ring-point', 'ring-offset-[4px]', 'transition-all', 'duration-500');
        setTimeout(() => {
          element.classList.remove('ring-4', 'ring-point', 'ring-offset-[4px]');
        }, 2000);
      }
    }, 100);
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
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-point animate-pulse" />
            <span className="text-xl font-extrabold tracking-tighter text-point uppercase">wisp's Works</span>
          </div>
          <div className="hidden md:flex gap-8 items-center text-sm font-medium text-slate-600">
            <a href="#skins" className="hover:text-point transition-colors">BMS Skins</a>
            <a href="#contact" className="hover:text-point transition-colors">Contact</a>
            <div className="flex items-center gap-3">
  <a 
    href="https://ko-fi.com/wisp13" 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center gap-1.5 px-4 py-2 bg-[#FF5E5B] text-white rounded-xl hover:bg-[#FF5E5B]/90 hover:scale-[1.02] active:scale-[0.98] transition-all text-xs font-bold shadow-md shadow-[#FF5E5B]/15 h-9"
  >
    <Coffee size={14} />
    <span>Support on Ko-fi</span>
  </a>
  <AcoffeeButton />
</div>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        {/* Dynamic Hero Intro Section */}
        <section className="bg-white pt-8 sm:pt-14 pb-6 sm:pb-10 px-4 sm:px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-teal-50/20 via-transparent to-transparent pointer-events-none" />
          <div className="max-w-6xl mx-auto relative z-10">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-50 rounded-full text-xs sm:text-sm font-extrabold text-point mb-4 sm:mb-6 border border-teal-100/60 shadow-sm shadow-teal-500/5"
              >
                <Palette size={14} strokeWidth={2.5} />
                <span className="tracking-wider uppercase">BMS SKINS</span>
              </motion.div>

              {/* Smooth Scroll Shortcut Previews */}
              <div className="grid md:grid-cols-2 gap-4 sm:gap-8 max-w-4xl mt-1">
                {[1, 2].map((id) => {
                  const skin = SKINS.find(s => s.id === id);
                  if (!skin) return null;
                  return (
                    <motion.div
                      key={id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: id * 0.1 }}
                      onClick={() => scrollToSkin(id)}
                      className="group cursor-pointer bg-slate-50/80 hover:bg-white rounded-2xl sm:rounded-3xl p-3.5 sm:p-5 border border-slate-100 hover:border-teal-500/20 hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-300 flex flex-col gap-3 sm:gap-4"
                    >
                      <div className="aspect-video w-full rounded-xl sm:rounded-2xl overflow-hidden relative border border-slate-100 shadow-sm">
                        <img 
                          src={skin.images[0]} 
                          alt={skin.title} 
                          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="px-4 py-2 bg-black/60 backdrop-blur-md text-white text-xs font-extrabold rounded-xl flex items-center gap-1.5 shadow-md">
                            자세히 보기 <ChevronRight size={14} />
                          </span>
                        </div>
                      </div>
                      <div className="flex items-start justify-between gap-3 px-1">
                        <div>
                          <span className="text-[9px] font-black tracking-widest text-point uppercase bg-teal-50 px-2 py-0.5 rounded-md">
                            {skin.category}
                          </span>
                          <h4 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 group-hover:text-point transition-colors mt-2 leading-snug tracking-tight">
                            {skin.title}
                          </h4>
                          <p className="text-xs text-slate-400 mt-1 sm:mt-1.5 font-medium line-clamp-1">{stripMarkdownLinks(skin.description)}</p>
                        </div>
                        <div className="p-2 rounded-xl bg-slate-100 group-hover:bg-teal-50 text-slate-400 group-hover:text-point transition-all self-center shrink-0">
                          <ChevronRight size={18} />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* BMS Skins Section */}
        <section id="skins" className="pt-10 sm:pt-14 pb-16 px-4 sm:px-6 bg-slate-50 min-h-[60vh] border-t border-slate-100">
          <div className="max-w-6xl mx-auto">
            {/* Update */}
            <div className="mb-16 p-6 sm:p-8 bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/40 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-point" />
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-point/85 animate-ping absolute" />
                  <span className="w-2.5 h-2.5 rounded-full bg-point relative" />
                  <h3 className="text-base font-extrabold tracking-tight text-slate-900 uppercase">Changelog & Updates</h3>
                </div>
              </div>
              <div className="space-y-4 max-h-[260px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent">
                <div className="relative border-l-2 border-slate-100 pl-4 space-y-6 py-1">   
                       <div className="relative group">
                    <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-point ring-4 ring-white transition-all group-hover:scale-125" />
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                      <span className="text-xs font-mono font-bold text-point bg-teal-50 px-2.5 py-1 rounded-lg w-fit">26.07.27</span>
                      <p className="text-sm text-slate-700 font-medium">WMII PLAY SKIN에 다음 랭크까지 남은점수 표시 추가,judge 상세 패널 레이아웃 변경, Beatoraja Wide DP 스킨 추가</p>
                    </div> 
                  </div>      
                  <div className="relative group">
                    <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-point ring-4 ring-white transition-all group-hover:scale-125" />
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                      <span className="text-xs font-mono font-bold text-point bg-teal-50 px-2.5 py-1 rounded-lg w-fit">26.07.19</span>
                      <p className="text-sm text-slate-700 font-medium">WMII PLAY SKIN for OpenLR2용에 WIDE 비율 버전 추가</p>
                    </div> 
                  </div>       
                            <div className="relative group">
                    <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-point ring-4 ring-white transition-all group-hover:scale-125" />
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                      <span className="text-xs font-mono font-bold text-point bg-teal-50 px-2.5 py-1 rounded-lg w-fit">26.07.17</span>
                      <p className="text-sm text-slate-700 font-medium">WMII PLAY SKIN bisque 판정폰트 good이하 위치 픽셀단위 수정 / WMII RESULT SKIN 그래프 라벨 poor색 수정 </p>
                    </div> 
                  </div>    
                      <div className="relative group">
                    <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-point ring-4 ring-white transition-all group-hover:scale-125" />
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                      <span className="text-xs font-mono font-bold text-point bg-teal-50 px-2.5 py-1 rounded-lg w-fit">26.07.06</span>
                      <p className="text-sm text-slate-700 font-medium">WMII PLAY SKIN AC스킨 변속곡 green number 위치 수정 / WMII RESULT SKIN 다음랭크와의 차이점수 계산식 수정 </p>
                    </div> 
                  </div>    
                                      <div className="relative group">
                    <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-point ring-4 ring-white transition-all group-hover:scale-125" />
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                      <span className="text-xs font-mono font-bold text-point bg-teal-50 px-2.5 py-1 rounded-lg w-fit">26.06.26</span>
                      <p className="text-sm text-slate-700 font-medium">WMII PLAY SKIN AC DP스킨 2p측이 첫 노트일때 판정문자 반짝이지 않던것 수정, LR2FHD버전을 OpenLR2용으로 수정 </p>
                    </div> 
                  </div>
                              <div className="relative group">
                    <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-point ring-4 ring-white transition-all group-hover:scale-125" />
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                      <span className="text-xs font-mono font-bold text-point bg-teal-50 px-2.5 py-1 rounded-lg w-fit">26.06.26</span>
                      <p className="text-sm text-slate-700 font-medium">WMII PLAY SKIN for Beatoraja AC/WIDE 판정문자 깜박임 옵션 추가, 에폴리스풍,LR2기본 판정폰트파츠 추가 </p>
                    </div> 
                  </div>
                  <div className="relative group">
                    <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-point ring-4 ring-white transition-all group-hover:scale-125" />
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                      <span className="text-xs font-mono font-bold text-point bg-teal-50 px-2.5 py-1 rounded-lg w-fit">26.06.24</span>
                      <p className="text-sm text-slate-700 font-medium">WMII PLAY SKIN WIDE스킨 5keys 모드 대응 추가, BGA 4:3프레임 여백 생겼던것 프레임 비율 조정</p>
                    </div> 
                  </div>
                  <div className="relative group">
                    <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-point ring-4 ring-white transition-all group-hover:scale-125" />
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                      <span className="text-xs font-mono font-bold text-point bg-teal-50 px-2.5 py-1 rounded-lg w-fit">26.06.23</span>
                      <p className="text-sm text-slate-700 font-medium">WMII RESULT SKIN IR연결을 안하고 오프라인으로 할때 IR 랭킹 목록이 보이지 않도록 수정</p>
                    </div> 
                  </div>
                  <div className="relative group">
                    <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-point ring-4 ring-white transition-all group-hover:scale-125" />
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                      <span className="text-xs font-mono font-bold text-point bg-teal-50 px-2.5 py-1 rounded-lg w-fit">26.06.22</span>
                      <p className="text-sm text-slate-700 font-medium">WMII PLAY SKIN  WIDE스킨에 GHOST TYPE A 와 LIFT쪽 GREENNUMBER 수정, AC DP스킨 10key에서 2p 1번 키빔 오류 수정</p>
                    </div> 
                  </div>
                                            <div className="relative group">
                    <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-point ring-4 ring-white transition-all group-hover:scale-125" />
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                      <span className="text-xs font-mono font-bold text-point bg-teal-50 px-2.5 py-1 rounded-lg w-fit">26.06.21</span>
                      <p className="text-sm text-slate-700 font-medium">WMII PLAY SKIN WIDE SP스킨추가. AC스킨 턴테이블 픽셀수정 및  dp 스코어그래프창 rate간격 수정. 플레이스킨 경로수정이 많이되서 지우고 새로받는걸 추천. result스킨 filter=1옵션 추가</p>
                    </div> 
                  </div>
                                            <div className="relative group">
                    <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-point ring-4 ring-white transition-all group-hover:scale-125" />
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                      <span className="text-xs font-mono font-bold text-point bg-teal-50 px-2.5 py-1 rounded-lg w-fit">26.06.14</span>
                      <p className="text-sm text-slate-700 font-medium">WMII PLAY SKIN 숏빔추가(기존 숏빔은 베리숏으로 변경), 5/10키 2P일때 34567키를 쓰도록 수정, 기본 마디선 밝기조정 </p>
                    </div> 
                  </div>
                 <div className="relative group">
                    <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-point ring-4 ring-white transition-all group-hover:scale-125" />
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                      <span className="text-xs font-mono font-bold text-point bg-teal-50 px-2.5 py-1 rounded-lg w-fit">26.06.12</span>
                      <p className="text-sm text-slate-700 font-medium">WMII RESULT SKIN에 비토라자 버전 표시기능 추가  /  WMII PLAY SKIN 이펙터 beatoraja/LR2oraja/EndlessDream 변경기능 추가, 마디선 색 변경 별도화, Rate 소수점표시 등 </p>
                    </div> 
                  </div>
                  <div className="relative group">
                    <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-point ring-4 ring-white transition-all group-hover:scale-125" />
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                      <span className="text-xs font-mono font-bold text-point bg-teal-50 px-2.5 py-1 rounded-lg w-fit">26.06.10</span>
                      <p className="text-sm text-slate-700 font-medium">WMII RESULT SKIN 그래프/IR 탭 전환을 key config에서 select로 지정한 키로 할수있도록 변경(midi입력 제외) </p>
                    </div> 
                  </div>
                          <div className="relative group">
                    <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-point ring-4 ring-white transition-all group-hover:scale-125" />
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                      <span className="text-xs font-mono font-bold text-point bg-teal-50 px-2.5 py-1 rounded-lg w-fit">26.06.07</span>
                      <p className="text-sm text-slate-700 font-medium">WMII RESULT SKIN 인터넷 랭킹에서 "YOU" 대신 자기 이름 표시 기능 추가 </p>
                    </div> 
                  </div>
                  <div className="relative group">
                    <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-point ring-4 ring-white transition-all group-hover:scale-125" />
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                      <span className="text-xs font-mono font-bold text-point bg-teal-50 px-2.5 py-1 rounded-lg w-fit">26.05.29</span>
                      <p className="text-sm text-slate-700 font-medium">WMII RESULT SKIN 스테이지표시 아래 막대기 길이 축소, 날짜 및 시간 폰트 외곽선 변경 </p>
                    </div> 
                  </div>

                  <div className="relative group">
                    <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-point/70 ring-4 ring-white transition-all group-hover:scale-125" />
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                      <span className="text-xs font-mono font-bold text-point bg-teal-50 px-2.5 py-1 rounded-lg w-fit">26.05.28</span>
                      <p className="text-sm text-slate-700 font-medium">WMII RESULT SKIN 긴 제목이 프레임 침범하는걸 수정, Chart info쪽 내용 변경, expand 상단 도움말 select버튼을 키보드 W 또는 e2버튼이라고 변경</p>
                    </div> 
                  </div>

                  <div className="relative group">
                    <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-slate-300 ring-4 ring-white transition-all group-hover:scale-125" />
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                      <span className="text-xs font-mono font-bold text-point bg-teal-50 px-2.5 py-1 rounded-lg w-fit">26.05.25</span>
                      <p className="text-sm text-slate-700 font-medium">WMII RESULT SKIN 긴 테이블 난이도 표기 방법 수정 /  WMII PLAY SKIN의 서든플 및 녹색숫자, 고스트 표시 등 작은 숫자들 테두리를 더 굵게 변경, 비토라자버전 판정문자와 f/s 및 고스트가 같이 움직이게 수정</p>
                    </div> 
                  </div>

                  <div className="relative group">
                    <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-slate-300 ring-4 ring-white transition-all group-hover:scale-125" />
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                      <span className="text-xs font-mono font-bold text-point bg-teal-50 px-2.5 py-1 rounded-lg w-fit">26.05.22</span>
                      <p className="text-sm text-slate-700 font-medium">WMII PLAY SKIN에 새로운 custom pats로 Bomb종류 shock, twirl추가, 굵은 light 노트 추가</p>
                    </div> 
                  </div>

                  <div className="relative group">
                    <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-slate-300 ring-4 ring-white transition-all group-hover:scale-125" />
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                      <span className="text-xs font-mono font-bold text-point bg-teal-50 px-2.5 py-1 rounded-lg w-fit">26.05.21</span>
                      <p className="text-sm text-slate-700 font-medium">WMII RESULT SKIN ir이름 중앙정렬로 변경, 최초 플레이시 미스카운트부분 공백에 막대가 뜨도록 변경, max시 max+0000표시되도록 수정, 코스리절트 작은숫자관련 칸 크기 수정</p>
                    </div> 
                  </div>

                  <div className="relative group">
                    <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-slate-300 ring-4 ring-white transition-all group-hover:scale-125" />
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                      <span className="text-xs font-mono font-bold text-point bg-teal-50 px-2.5 py-1 rounded-lg w-fit">26.05.17</span>
                      <p className="text-sm text-slate-700 font-medium">WMII RESULT SKIN Solomon난이도표(✡)마크 폰트 대응</p>
                    </div> 
                  </div>

                  <div className="relative group">
                    <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-slate-300 ring-4 ring-white transition-all group-hover:scale-125" />
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                      <span className="text-xs font-mono font-bold text-point bg-teal-50 px-2.5 py-1 rounded-lg w-fit">26.05.16</span>
                      <p className="text-sm text-slate-700 font-medium">WMII RESULT SKIN 기록 갱신시 프레임 빛 들어오는거 더 어둡게 변경, 리플레이 아래 랭킹 인원 폰트표시 수정</p>
                    </div> 
                  </div>

                  <div className="relative group">
                    <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-slate-300 ring-4 ring-white transition-all group-hover:scale-125" />
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                      <span className="text-xs font-mono font-bold text-point bg-teal-50 px-2.5 py-1 rounded-lg w-fit">26.05.13</span>
                      <p className="text-sm text-slate-700 font-medium">WMII RESULT SKIN 코스 리절트 디자인 변경 / WMII PLAY SKIN LR2/beatoraja 공통으로 mine노트 이미지가 잘못 지정되있던것을 수정</p>
                    </div>   
                  </div>

                  <div className="relative group">
                    <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-slate-300 ring-4 ring-white transition-all group-hover:scale-125" />
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                      <span className="text-xs font-mono font-bold text-point bg-teal-50 px-2.5 py-1 rounded-lg w-fit">26.05.10</span>
                      <p className="text-sm text-slate-700 font-medium">WMII RESULT SKIN 코스 리절트 추가 / WMII PLAY SKIN sp스킨 스코어그래프 그래프 시작지점 1픽셀 틈 수정, 5스테이지짜리 코스를 할 경우 4th stage표시가 이상한것을 수정</p>
                    </div>  
                  </div>

                  <div className="relative group">
                    <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-slate-300 ring-4 ring-white transition-all group-hover:scale-125" />
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                      <span className="text-xs font-mono font-bold text-point bg-teal-50 px-2.5 py-1 rounded-lg w-fit">26.05.07</span>
                      <p className="text-sm text-slate-700 font-medium">WMII RESULT SKIN 코스모드 게이지명 정상적으로 표시되게 수정, misscount가 +1이상일때만 빨간색으로 뜨도록 변경, 랜덤 패턴이 버튼색도 바뀌도록 변경 1st~final표기 추가/ WMII PLAY SKIN Betoraja용 단위에서 게이지명 정상적으로 뜨도록 수정, BEGINNER 오타수정(lr2fhd버전 공통)</p>
                    </div>  
                  </div>

                  <div className="relative group">
                    <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-slate-300 ring-4 ring-white transition-all group-hover:scale-125" />
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                      <span className="text-xs font-mono font-bold text-point bg-teal-50 px-2.5 py-1 rounded-lg w-fit">26.05.06</span>
                      <p className="text-sm text-slate-700 font-medium">WMII RESULT SKIN 추가 /  WMII PLAY SKIN LR2FHD용 코스모드에서 judge가 veryhard로 무조건 뜨는걸 안뜨게 수정</p>
                    </div>  
                  </div>

                  <div className="relative group">
                    <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-slate-300 ring-4 ring-white transition-all group-hover:scale-125" />
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                      <span className="text-xs font-mono font-bold text-point bg-teal-50 px-2.5 py-1 rounded-lg w-fit">26.04.27</span>
                      <p className="text-sm text-slate-700 font-medium">WMII PLAY SKIN 스코어 그래프 배경 옵션 추가</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-2 uppercase text-slate-950 flex items-center gap-2">
                  <span>ALL SKINS</span>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-200 text-slate-700 font-mono">
                    {SKINS.length}
                  </span>
                </h2>
                <p className="text-slate-400 text-xs sm:text-sm font-medium">카테고리별로 필터링하여 스킨 목록을 탐색할 수 있습니다.</p>
              </div>
              <div className="flex p-1.5 bg-slate-200/60 rounded-xl backdrop-blur-sm self-start md:self-auto shadow-sm">
                {[
                  { id: "All", label: "All", count: SKINS.length },
                  { id: "LunaticRave2", label: "LR2", count: SKINS.filter(s => s.category === "LunaticRave2").length },
                  { id: "Beatoraja", label: "Beatoraja", count: SKINS.filter(s => s.category === "Beatoraja").length }
                ].map((tab) => (
                  <button 
                    key={tab.id}
                    onClick={() => setFilter(tab.id)}
                    className={`px-4 sm:px-6 py-2 rounded-lg text-xs font-extrabold transition-all duration-300 flex items-center gap-1.5 ${
                      filter === tab.id 
                        ? "bg-white text-point shadow-md shadow-teal-500/5 scale-[1.02]" 
                        : "text-slate-500 hover:text-slate-900"
                    }`}
                  >
                    <span>{tab.label}</span>
                    <span className={`text-[9px] font-mono px-1.5 py-0.2 rounded ${
                      filter === tab.id ? "bg-teal-50 text-point" : "bg-slate-300/40 text-slate-500"
                    }`}>
                      {tab.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredSkins.map((skin, idx) => (
                <motion.div
                  key={skin.id}
                  id={`skin-${skin.id}`}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05, duration: 0.3 }}
                  className="group bg-white rounded-2xl border border-slate-100 overflow-hidden hover:border-teal-500/20 hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div 
                      className="aspect-video overflow-hidden relative cursor-pointer group/img"
                      onClick={() => openModal(skin)}
                    >
                      <img 
                        src={skin.images[0]} 
                        alt={skin.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="flex flex-col items-center gap-2">
                          <ZoomIn className="text-white scale-90 group-hover/img:scale-100 transition-transform duration-300" size={32} />
                          <span className="text-white text-[10px] sm:text-xs font-bold bg-black/50 px-2.5 py-1 rounded-lg backdrop-blur-md shadow-sm">
                            {skin.images.length} Images
                          </span>
                        </div>
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/95 backdrop-blur-sm rounded-full text-[9px] font-black text-point uppercase tracking-widest shadow-sm">
                          {skin.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex flex-col mb-4">
                        <h3 className="text-lg sm:text-xl font-bold group-hover:text-point transition-colors whitespace-pre-wrap leading-snug">{skin.title}</h3>
                        <span className="text-[10px] font-mono font-bold text-slate-400 mt-1.5 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                          UPDATE {skin.date}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-500 mb-6 whitespace-pre-wrap leading-relaxed">
                       {renderDescription(skin.description)}
                      </p>
                    </div>
                  </div>
                  <div className="px-6 pb-6">
                    <a 
                      href={skin.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 bg-slate-50 text-slate-900 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-point hover:text-white transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] border border-slate-100 shadow-sm shadow-slate-200/20"
                    >
                      <Download size={16} /> Google Drive
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
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
  <a 
    href="https://x.com/wisp_13"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center gap-3 px-8 py-4 bg-slate-50 rounded-2xl font-semibold hover:bg-slate-900 hover:text-white transition-all w-full sm:w-auto h-[54px] sm:h-[60px]"
  >
    <XLogo size={20} /> @wisp_13
  </a>
  <a 
    href="https://ko-fi.com/wisp13"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center gap-3 px-8 py-4 bg-[#FF5E5B]/10 text-[#FF5E5B] rounded-2xl font-semibold hover:bg-[#FF5E5B] hover:text-white transition-all w-full sm:w-auto select-none h-[54px] sm:h-[60px]"
  >
    <Coffee size={20} /> Support on Ko-fi
  </a>
  <AcoffeeButton isLarge />
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
