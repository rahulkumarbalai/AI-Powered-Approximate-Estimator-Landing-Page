import { useEffect } from 'react';
import gsap from 'gsap';
import InteractiveBackground from '../components/InteractiveBackground';
import Navbar from '../components/Navbar';

export default function LiveDemo() {
  useEffect(() => {
    // Reveal animation
    gsap.fromTo('.coming-soon-content', 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.2 }
    );
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col">
      <InteractiveBackground />
      <Navbar />
      
      <main className="flex-1 relative z-10 flex items-center justify-center p-6 mt-16">
        <div className="coming-soon-content max-w-2xl w-full">
          <div className="glass-card p-10 md:p-14 rounded-3xl relative overflow-hidden group">
            {/* Animated Glow Border Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand via-ai to-brandLight opacity-30 group-hover:opacity-60 transition-opacity duration-1000" style={{ filter: 'blur(40px)', zIndex: -1 }}></div>
            
            <div className="relative z-10 text-center flex flex-col items-center">
              <div className="w-20 h-20 mb-8 rounded-2xl bg-gradient-to-br from-brand to-ai p-[1px] relative">
                <div className="absolute inset-0 bg-gradient-to-br from-brand to-ai blur-md opacity-50"></div>
                <div className="w-full h-full bg-darkBg rounded-2xl flex items-center justify-center relative z-10">
                  <span className="material-symbols-outlined text-4xl text-transparent bg-clip-text bg-gradient-to-br from-brand to-brandLight">rocket_launch</span>
                </div>
              </div>
              
              <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Building the Future
              </h1>
              
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-lg mb-10">
                We are actively building this feature. Stay tuned, Smart AEs will be available very soon!
              </p>
              
              <a href="/" className="px-8 py-3 rounded-full font-semibold tracking-wide bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all duration-300 flex items-center space-x-2 backdrop-blur-sm">
                <span className="material-symbols-outlined text-sm">arrow_back</span>
                <span>Return to Home</span>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
