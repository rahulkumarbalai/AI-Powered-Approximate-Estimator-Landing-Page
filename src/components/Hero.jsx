import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const heroLines = document.querySelectorAll(".hero-text-line");
      gsap.from(heroLines, {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
        delay: 0.2
      });

      gsap.from(".reveal-up", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" ref={containerRef} className="min-h-screen flex items-center justify-center relative px-6 pt-20">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-card border border-brand/20 text-xs font-mono text-brandLight mb-8 reveal-up">
          <span className="w-2 h-2 rounded-full bg-brand animate-pulse"></span>
          <span>SYSTEM STATUS: ENTERPRISE PRESENTATION</span>
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight mb-6">
          <div className="hero-text-line">AI-Powered</div>
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-ai to-brandLight hero-text-line">
            Approximate Estimator
          </div>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed mb-12 reveal-up delay-200">
          Revolutionizing Civil Engineering estimate analysis through Hybrid Vector Search, centralized market rate consolidation, and automated workflows.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto reveal-up delay-300">
          <div className="glass-card p-5 rounded-2xl flex flex-col items-start hover:border-brand/40 transition-colors">
            <span className="material-symbols-outlined text-brand mb-3">search_spark</span>
            <div className="font-display font-medium text-sm text-white mb-1">Hybrid Search</div>
            <p className="text-[10px] text-slate-400 text-left">FAISS + BM25 Retrieval</p>
          </div>
          <div className="glass-card p-5 rounded-2xl flex flex-col items-start hover:border-ai/40 transition-colors">
            <span className="material-symbols-outlined text-ai mb-3">database</span>
            <div className="font-display font-medium text-sm text-white mb-1">Unified DB</div>
            <p className="text-[10px] text-slate-400 text-left">DSR + Market Rates</p>
          </div>
          <div className="glass-card p-5 rounded-2xl flex flex-col items-start hover:border-success/40 transition-colors">
            <span className="material-symbols-outlined text-success mb-3">table_chart</span>
            <div className="font-display font-medium text-sm text-white mb-1">Excel Automate</div>
            <p className="text-[10px] text-slate-400 text-left">One-click formatted exports</p>
          </div>
          <div className="glass-card p-5 rounded-2xl flex flex-col items-start hover:border-brandLight/40 transition-colors">
            <span className="material-symbols-outlined text-brandLight mb-3">psychology</span>
            <div className="font-display font-medium text-sm text-white mb-1">Predictive AI</div>
            <p className="text-[10px] text-slate-400 text-left">50-70% auto-population</p>
          </div>
        </div>

        {/* Scroll Cue */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-50 scroll-cue">
          <span className="text-[10px] uppercase tracking-[0.2em] mb-2 font-mono">Explore</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
