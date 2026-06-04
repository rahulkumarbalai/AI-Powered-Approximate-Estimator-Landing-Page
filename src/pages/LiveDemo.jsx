import { useEffect } from 'react';
import gsap from 'gsap';
import InteractiveBackground from '../components/InteractiveBackground';
import Navbar from '../components/Navbar';

export default function LiveDemo() {
  useEffect(() => {
    // Reveal animation
    gsap.fromTo('.demo-content',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.2 }
    );
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col">
      <InteractiveBackground />
      <Navbar />

      <main className="flex-1 relative z-10 flex flex-col items-center justify-center p-6 mt-16 pb-20">
        <div className="demo-content w-full max-w-5xl flex flex-col items-center">

          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight text-center">
            Try the Live App
          </h1>
          <a
            href="https://worksestimatorapp.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full glass-card p-4 md:p-6 rounded-3xl relative overflow-hidden group block cursor-pointer transition-transform duration-500 hover:scale-[1.02]"
          >
            {/* Animated Glow Border Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand via-ai to-brandLight opacity-30 group-hover:opacity-80 transition-opacity duration-1000" style={{ filter: 'blur(30px)', zIndex: -1 }}></div>

            <div className="relative z-10 w-full aspect-video rounded-2xl overflow-hidden border border-white/10 bg-darkBg shadow-2xl relative">

              {/* App Screen Iframe */}
              <iframe
                src="https://worksestimatorapp.vercel.app/"
                title="Works Estimator App"
                className="w-full h-full border-none pointer-events-none"
                tabIndex={-1}
              />

              {/* Overlay with Launch Icon */}
              <div className="absolute inset-0 bg-darkBg/10 group-hover:bg-transparent transition-colors duration-500 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-brand/90 backdrop-blur-md flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.2)] transform scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300">
                  <span className="material-symbols-outlined text-white text-3xl">open_in_new</span>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4 px-2 text-center md:text-left">
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">Works Estimator App</h3>
              </div>
              <span className="px-6 py-2 rounded-full font-semibold bg-brand text-white shadow-lg shadow-brand/20 group-hover:shadow-brand/40 transition-all flex items-center gap-2">
                Launch App
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </span>
            </div>
          </a>
        </div>
      </main>
    </div>
  );
}
