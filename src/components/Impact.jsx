import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
export default function Impact() {
  useEffect(() => {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
      ScrollTrigger.create({
        trigger: counter,
        start: "top 90%",
        once: true,
        onEnter: () => {
          const target = +counter.getAttribute('data-target');
          gsap.to(counter, {
            innerHTML: target,
            duration: 2,
            snap: { innerHTML: 1 },
            ease: "power2.out"
          });
        }
      });
    });
  }, []);
  return (
    <section id="impact" className="py-24 px-6 relative" style={{ background: 'linear-gradient(to bottom, transparent, #020202)' }}>
      <div className="max-w-6xl mx-auto w-full text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-16 text-white section-header">Engineering Impact</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="neo-card p-8 rounded-3xl border-brand/20 glow-cyan">
            <div className="text-4xl md:text-5xl font-display font-bold text-brand mb-2 counter" data-target="90">0</div>
            <div className="text-brand text-xl font-bold">%</div>
            <p className="text-xs text-slate-400 mt-2 uppercase tracking-widest font-mono">Faster Lookups</p>
          </div>
          <div className="neo-card p-8 rounded-3xl border-success/20 glow-emerald">
            <div className="text-4xl md:text-5xl font-display font-bold text-success mb-2 counter" data-target="100">0</div>
            <div className="text-success text-xl font-bold">%</div>
            <p className="text-xs text-slate-400 mt-2 uppercase tracking-widest font-mono">Standardized</p>
          </div>
          <div className="neo-card p-8 rounded-3xl border-ai/20 glow-purple">
            <div className="text-4xl md:text-5xl font-display font-bold text-ai mb-2 counter" data-target="1">0</div>
            <div className="text-ai text-xl font-bold">Click</div>
            <p className="text-xs text-slate-400 mt-2 uppercase tracking-widest font-mono">Excel Export</p>
          </div>
          <div className="neo-card p-8 rounded-3xl border-white/10">
            <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2 counter" data-target="70">0</div>
            <div className="text-white text-xl font-bold">%</div>
            <p className="text-xs text-slate-400 mt-2 uppercase tracking-widest font-mono">Future Auto-Fill</p>
          </div>
        </div>
      </div>
    </section>
  );
}
