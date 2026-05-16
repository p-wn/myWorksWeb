import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Download, Github, Mail, Palette, Gamepad2, ChevronRight, Calendar, X, ZoomIn, ChevronLeft } from "lucide-react";

const SKINS = [
    {
    id: 1,
    title: "WMII RESULT SKIN for beatoraja",
    category: "Beatoraja",
    description: "Beatoraja용 FHD 리절트스킨. 컨트롤러 select나 키보드 w키로 정보창 전환가능, 코스리절트 사용시 각 스테이지 정보는 WMII 리절트를 사용해야만 표시가능",
    images: [
      "/images/skins/wmii-result-beatoraja/01.webp",
      "/images/skins/wmii-result-beatoraja/02.webp",
      "/images/skins/wmii-result-beatoraja/03.webp",
      "/images/skins/wmii-result-beatoraja/04.webp",
    ],
    downloadUrl: "https://drive.google.com/file/d/1MukW1skL68GIEU6bMTG3nQYxvJnh6MTL/view?usp=sharing",
    date: "26.05.16",
  },
  {
    id: 1,
    title: "WMII PLAY SKIN for beatoraja",
    category: "Beatoraja",
    description: "Beatoraja용 FHD 플레이스킨. SP/DP AC비율\nlr2skin기반으로 fast/slow 기능은 judge detail을 off로하고 Display F/S를 On으로 사용하길 권장",
    images: [
      "/images/skins/wmii-play-beatoraja/01.webp",
      "/images/skins/wmii-play-beatoraja/02.webp",
    ],
    downloadUrl: "https://drive.google.com/file/d/1R2YJ7cbEK1EBBoSeeXDlip_FsxM3zjiL/view?usp=sharing",
    date: "26.05.13",
  },
  {
    id: 2,
    title: "WMII PLAY SKIN for LR2FHD",
    category: "LunaticRave2",
    description: "LR2FHD(1080p) 플레이스킨. SP/DP AC비율",
    images: [
      "/images/skins/wmii-play-lr2/01.webp",
      "/images/skins/wmii-play-lr2/02.webp",
    ],
    downloadUrl: "https://drive.google.com/file/d/1dZN8hk3cTjl5FLFSZkdBXuI11HcDe5yJ/view?usp=sharing",
    date: "26.05.13",
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

const FeaturedCard = ({ skin, openModal, scrollToSkin }: { 
  skin: typeof SKINS[0], 
  openModal: (s: typeof SKINS[0]) => void,
  scrollToSkin: (s: typeof SKINS[0]) => void
}) => {
  const [imgIdx, setImgIdx] = useState(0);

  React.useEffect(() => {
    if (skin.images.length <= 1) return;
    const timer = setInterval(() => {
      setImgIdx((prev) => (prev + 1) % skin.images.length);
    }, 4000); // 4 seconds interval
    return () => clearInterval(timer);
  }, [skin.images.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative group cursor-pointer"
      onClick={() => openModal(skin)}
    >
      <div className="aspect-video overflow-hidden rounded-3xl border border-slate-100 shadow-2xl shadow-teal-500/10 relative">
        <AnimatePresence mode="wait">
          <motion.img 
            key={imgIdx}
            src={skin.images[imgIdx]} 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
          <span className="text-point font-black text-[10px] tracking-widest uppercase mb-2">{skin.category}</span>
          <h3 
            className="text-2xl font-bold text-white mb-2 hover:text-point transition-colors cursor-pointer inline-block"
            onClick={(e) => {
              e.stopPropagation();
              scrollToSkin(skin);
            }}
          >
            {skin.title}
          </h3>
          <p className="text-white/60 text-sm whitespace-pre-wrap line-clamp-1">{skin.description}</p>
        </div>
        
        {/* Progress indicators */}
        {skin.images.length > 1 && (
          <div className="absolute top-6 right-8 flex gap-1.5">
            {skin.images.map((_, i) => (
              <div 
                key={i}
                className={`h-1 rounded-full transition-all duration-500 ${
                  i === imgIdx ? "w-6 bg-point" : "w-2 bg-white/30"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default function App() {
  const [filter, setFilter] = useState("All");
  const [selectedSkin, setSelectedSkin] = useState<typeof SKINS[0] | null>(null);
  const [currentImgIdx, setCurrentImgIdx] = useState(0);

  const scrollToSkin = (skin: typeof SKINS[0]) => {
    setFilter("All");
    setTimeout(() => {
      const element = document.getElementById(`skin-${skin.id}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        element.classList.add('ring-4', 'ring-point', 'ring-offset-2');
        setTimeout(() => {
          element.classList.remove('ring-4', 'ring-point', 'ring-offset-2');
        }, 2000);
      }
    }, 100);
  };

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
              <h2 className="text-4xl font-black tracking-tighter uppercase text-slate-900">WMII SP/DP PLAY SKIN</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-10">
              {SKINS.filter(s => [1, 2].includes(s.id)).map((skin) => (
                <FeaturedCard 
                  key={`featured-${skin.id}`} 
                  skin={skin} 
                  openModal={openModal} 
                  scrollToSkin={scrollToSkin} 
                />
              ))}
            </div>
          </div>
        </section>

        {/* BMS Skins Section */}
        <section id="skins" className="py-24 px-6 bg-slate-50 min-h-[60vh] border-t border-slate-100">
          <div className="max-w-6xl mx-auto">
            {/* Update*/}
            <div className="mb-16 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-point" />
                <h3 className="text-sm font-black tracking-widest text-slate-900 uppercase">Update</h3>
              </div>
              <div className="space-y-3">
                  <div className="space-y-3">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                  <span className="text-xs font-mono font-bold text-point bg-teal-50 px-2 py-0.5 rounded w-fit">26.05.16</span>
                  <p className="text-sm text-slate-600 font-medium">WMII RESULT SKIN 기록 갱신시 프레임 빛 들어오는거 더 어둡게 변경, 리플레이 아래 랭킹 인원 폰트표시 수정</p>
                </div> 
                             <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                  <span className="text-xs font-mono font-bold text-point bg-teal-50 px-2 py-0.5 rounded w-fit">26.05.13</span>
                  <p className="text-sm text-slate-600 font-medium">WMII RESULT SKIN 코스 리절트 디자인 변경 / WMII PLAY SKIN LR2/beatoraja 공통으로 mine노트 이미지가 잘못 지정되있던것을 수정</p>
                </div>  
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                  <span className="text-xs font-mono font-bold text-point bg-teal-50 px-2 py-0.5 rounded w-fit">26.05.11</span>
                  <p className="text-sm text-slate-600 font-medium">WMII RESULT SKIN 점수차이나 인랭 총 인원수에 쓰이는 제일 작은 숫자 표시부분 수정,  hotfix / WMII PLAY SKIN beatroaja버전에서 class gauge표시가 어긋나 있던걸 수정 </p>
                </div>  
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                  <span className="text-xs font-mono font-bold text-point bg-teal-50 px-2 py-0.5 rounded w-fit">26.05.10</span>
                  <p className="text-sm text-slate-600 font-medium">WMII RESULT SKIN 코스리절트에서 기능하지않던 타겟 스코어 제거, 그외 미세 수정  </p>
                </div>  
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                  <span className="text-xs font-mono font-bold text-point bg-teal-50 px-2 py-0.5 rounded w-fit">26.05.10</span>
                  <p className="text-sm text-slate-600 font-medium">WMII RESULT SKIN 코스 리절트 추가 / WMII PLAY SKIN sp스킨 스코어그래프 그래프 시작지점 1픽셀 틈 수정, 5스테이지짜리 코스를 할 경우 4th stage표시가 이상한것을 수정</p>
                </div>  
                 <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                  <span className="text-xs font-mono font-bold text-point bg-teal-50 px-2 py-0.5 rounded w-fit">26.05.07</span>
                  <p className="text-sm text-slate-600 font-medium">WMII RESULT SKIN 코스모드 게이지명 정상적으로 표시되게 수정, misscount가 +1이상일때만 빨간색으로 뜨도록 변경, 랜덤 패턴이 버튼색도 바뀌도록 변경 1st~final표기 추가/ WMII PLAY SKIN Betoraja용 단위에서 게이지명 정상적으로 뜨도록 수정, BEGINNER 오타수정(lr2fhd버전 공통)</p>
                </div>  
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                  <span className="text-xs font-mono font-bold text-point bg-teal-50 px-2 py-0.5 rounded w-fit">26.05.06</span>
                  <p className="text-sm text-slate-600 font-medium">WMII RESULT SKIN 추가 /  WMII PLAY SKIN LR2FHD용 코스모드에서 judge가 veryhard로 무조건 뜨는걸 안뜨게 수정</p>
                </div>  
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                  <span className="text-xs font-mono font-bold text-point bg-teal-50 px-2 py-0.5 rounded w-fit">26.04.27</span>
                  <p className="text-sm text-slate-600 font-medium">WMII PLAY SKIN 스코어 그래프 배경 옵션 추가</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <h2 className="text-3xl font-black tracking-tight mb-2">ALL SKINS</h2>
                <p className="text-slate-400 text-sm">만들었던 스킨들</p>
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
                  id={`skin-${skin.id}`}
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
                    <div className="flex flex-col mb-4">
                      <h3 className="text-xl font-bold group-hover:text-point transition-colors whitespace-pre-wrap">{skin.title}</h3>
                      <span className="text-xs font-mono text-slate-400 mt-1">
                        UPDATE {skin.date}
                      </span>
                    </div>
                    <p className="text-sm text-slate-500 mb-6 whitespace-pre-wrap">
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
