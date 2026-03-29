import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Download, Github, Mail, Palette, Gamepad2, ChevronRight, Twitter, Calendar, X, ZoomIn } from "lucide-react";

const SKINS = [
  {
    id: 1,
    title: "WMII PLAY SKIN",
    category: "LunaticRave2",
    description: "LR2FHD(1080p) 플레이스킨. SP AC비율만 완성되어있음",
    image: "https://picsum.photos/seed/wmii-lr2/600/400",
    downloadUrl: "https://drive.google.com/file/d/1VzsPuIfWGFZ5fWV6kWemFDYQY6EuGl_a/view?usp=sharing",
    date: "26.03.28",
  },
  {
    id: 2,
    title: "WMII PLAY SKIN",
    category: "Beatoraja",
    description: "FHD skin. Beatoraja용으로 변환한 lr2skin스킨. SP AC 비율만",
    image: "https://picsum.photos/seed/wmii-beato/600/400",
    downloadUrl: "https://drive.google.com/file/d/1p4nIKF2HTnJgJHsasUrsb1FQTcgTbLKp/view?usp=sharing",
    date: "26.03.28",
  },
  {
    id: 3,
    title: "WMIX SKIN SET",
    category: "LunaticRave2",
    description: "LR2 HD(720P) 스킨 세트",
    image: "https://picsum.photos/seed/wmix-hd/600/400",
    downloadUrl: "https://drive.google.com/file/d/14moYPndPvCT9S0vLmwD_3P7PPZBw0Or7/view?usp=sharing",
    date: "16.03.21",
  },
  {
    id: 4,
    title: "SPD FRAME PLAY SKIN",
    category: "LunaticRave2",
    description: "SD스킨. iidx21스타일을 오마쥬한 SP플레이스킨",
    image: "https://picsum.photos/seed/spd-frame/600/400",
    downloadUrl: "https://drive.google.com/file/d/1DJqWOwfqVtUKOQ2LbfM5_QPlBx4p4Tnq/view?usp=sharing",
    date: "14.11.13",
  },
  {
    id: 5,
    title: "SPD RESULT SKIN",
    category: "LunaticRave2",
    description: "SD스킨. iidx21스타일을 오마쥬한 리절트스킨",
    image: "https://picsum.photos/seed/spd-result/600/400",
    downloadUrl: "https://drive.google.com/file/d/1aZV06dcWqiJgO5PVbXjezcSfIGJLLzxN/view?usp=sharing",
    date: "14.05.07",
  },
  {
    id: 6,
    title: "tori FRAME PLAY SKIN",
    category: "LunaticRave2",
    description: "SD스킨. iidx20스타일을 오마쥬한 SP플레이스킨",
    image: "https://picsum.photos/seed/tori-frame/600/400",
    downloadUrl: "https://drive.google.com/file/d/1-18khJQ5GWD5OysVyIIS0mJxO53OgLKo/view?usp=sharing",
    date: "14.08.07",
  },
  {
    id: 7,
    title: "toricolor RESULT SKIN",
    category: "LunaticRave2",
    description: "SD스킨. iidx20스타일을 오마쥬한 리절트스킨",
    image: "https://picsum.photos/seed/tori-result/600/400",
    downloadUrl: "https://drive.google.com/file/d/1Bc12vea7PL-jnDnXfr2RUDwJuVN6fxka/view?usp=sharing",
    date: "14.04.24",
  },
];

export default function App() {
  const [filter, setFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredSkins = filter === "All" 
    ? SKINS 
    : SKINS.filter(skin => skin.category === filter);

  return (
    <div className="min-h-screen selection:bg-teal-100 selection:text-teal-900">
      {/* Image Preview Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-full max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors p-2"
              >
                <X size={32} />
              </button>
              <img
                src={selectedImage}
                alt="Preview"
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
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
        {/* BMS Skins Section */}
        <section id="skins" className="py-24 px-6 bg-slate-50 min-h-[60vh]">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <h2 className="text-3xl font-bold mb-4">BMS Skins</h2>
                <p className="text-slate-500">현재 공개중인 BMS 스킨들</p>
              </div>
              <div className="flex gap-2">
                {["All", "LunaticRave2", "Beatoraja"].map((tab) => (
                  <button 
                    key={tab}
                    onClick={() => setFilter(tab)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all ${
                      filter === tab 
                        ? "bg-point border-point text-white" 
                        : "bg-white border-slate-100 text-slate-600 hover:border-point hover:text-point"
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
                    onClick={() => setSelectedImage(skin.image)}
                  >
                    <img 
                      src={skin.image} 
                      alt={skin.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                      <ZoomIn className="text-white" size={32} />
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
                <Twitter size={20} /> @wisp_13
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
