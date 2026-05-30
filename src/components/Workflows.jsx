import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Workflows() {
  const horizontalSectionRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const horizontalSection = horizontalSectionRef.current;
    const wrapper = wrapperRef.current;

    let ctx = gsap.context(() => {
      function getScrollAmount() {
        let wrapperWidth = wrapper.scrollWidth;
        return -(wrapperWidth - window.innerWidth);
      }

      const tween = gsap.to(wrapper, {
        x: () => getScrollAmount(),
        ease: "none"
      });

      ScrollTrigger.create({
        trigger: horizontalSection,
        start: "top top",
        end: () => `+=${getScrollAmount() * -1}`,
        pin: true,
        animation: tween,
        scrub: 1,
        invalidateOnRefresh: true
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="workflows" className="horizontal-section border-y border-white/5 bg-[#020202]" ref={horizontalSectionRef}>
      <div className="horizontal-wrapper" ref={wrapperRef}>

        {/* Slide 1: Manual Process */}
        <div className="horizontal-slide px-6 lg:px-24">
          <div className="absolute w-[600px] h-[600px] bg-danger/5 rounded-full blur-[150px] pointer-events-none"></div>
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-3 gap-12 items-center relative z-10">
            <div className="space-y-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-danger">Evolution Phase 01</div>
              <h3 className="font-display text-4xl lg:text-5xl font-bold text-white leading-tight">Traditional Approximate Estimation</h3>
              <p className="text-slate-400 font-light leading-relaxed">Manual, repetitive, and time-consuming. A fragmented workflow dependent on books and single spreadsheets.</p>
            </div>

            <div className="lg:col-span-2 relative flex items-center justify-between w-full p-8 glass-card border-danger/20 rounded-3xl">
              <div className="absolute top-1/2 left-0 w-full h-1 bg-white/5 -translate-y-1/2"></div>
              
              <div className="flow-node">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/20 flex items-center justify-center mb-3 text-white">
                  <span className="material-symbols-outlined">assignment</span>
                </div>
                <span className="text-xs uppercase text-slate-400 font-mono">SOC Received</span>
              </div>

              <div className="flow-node">
                <div className="w-16 h-16 rounded-full bg-danger/10 border border-danger/40 flex items-center justify-center mb-3 text-danger shadow-[0_0_20px_rgba(244,63,94,0.3)] animate-pulse">
                  <span className="material-symbols-outlined text-2xl">menu_book</span>
                </div>
                <span className="text-xs uppercase text-white font-mono">Manual Search<br/>(DSR Book)</span>
              </div>

              <div className="flow-node">
                <div className="w-12 h-12 rounded-full bg-warning/10 border border-warning/40 flex items-center justify-center mb-3 text-warning">
                  <span className="material-symbols-outlined">calculate</span>
                </div>
                <span className="text-xs uppercase text-slate-400 font-mono">Calculate</span>
              </div>

              <div className="flow-node">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/20 flex items-center justify-center mb-3 text-white">
                  <span className="material-symbols-outlined">save</span>
                </div>
                <span className="text-xs uppercase text-slate-400 font-mono">Local Save</span>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2: V1.0 */}
        <div className="horizontal-slide px-6 lg:px-24 bg-[#050914]">
          <div className="absolute w-[800px] h-[800px] bg-brand/5 rounded-full blur-[150px] pointer-events-none top-[-20%] right-[-10%]"></div>
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-3 gap-12 items-center relative z-10">
            <div className="space-y-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand">Evolution Phase 02</div>
              <h3 className="font-display text-4xl lg:text-5xl font-bold text-white leading-tight">AEs Webapp V1.0</h3>
              <p className="text-slate-400 font-light leading-relaxed">From fragmented manual work to intelligent digital estimation. Centralized drafts, market rates, and one-click cloud exports.</p>
            </div>

            <div className="lg:col-span-2 relative flex items-center justify-between w-full p-8 glass-card border-brand/30 rounded-3xl glow-cyan">
              <div className="absolute top-1/2 left-0 w-full h-1 bg-brand/20 -translate-y-1/2"></div>

              <div className="flow-node">
                <div className="w-12 h-12 rounded-full bg-brand/10 border border-brand/40 flex items-center justify-center mb-3 text-brand">
                  <span className="material-symbols-outlined">login</span>
                </div>
                <span className="text-xs uppercase text-slate-300 font-mono">Secure Login</span>
              </div>

              <div className="flow-node">
                <div className="w-20 h-20 rounded-2xl bg-brand flex items-center justify-center mb-3 text-white shadow-[0_0_30px_rgba(14,165,233,0.5)]">
                  <span className="material-symbols-outlined text-3xl">splitscreen</span>
                </div>
                <span className="text-xs uppercase text-white font-bold font-mono">Dual-Pane<br/>Workspace</span>
              </div>

              <div className="flow-node">
                <div className="w-12 h-12 rounded-full bg-brand/10 border border-brand/40 flex items-center justify-center mb-3 text-brand">
                  <span className="material-symbols-outlined">functions</span>
                </div>
                <span className="text-xs uppercase text-slate-300 font-mono">Auto-Calc</span>
              </div>

              <div className="flow-node">
                <div className="w-16 h-16 rounded-full bg-success/20 border border-success flex items-center justify-center mb-3 text-success shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                  <span className="material-symbols-outlined text-2xl">cloud_done</span>
                </div>
                <span className="text-xs uppercase text-success font-mono font-bold">Cloud Sync &<br/>Export</span>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 3: Future */}
        <div className="horizontal-slide px-6 lg:px-24 bg-[#080512]">
          <div className="absolute w-[600px] h-[600px] bg-ai/10 rounded-full blur-[150px] pointer-events-none left-1/4 bottom-0"></div>
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-3 gap-12 items-center relative z-10">
            <div className="space-y-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-ai">Evolution Phase 03</div>
              <h3 className="font-display text-4xl lg:text-5xl font-bold text-white leading-tight">Phase 2 Predictive AI</h3>
              <p className="text-slate-400 font-light leading-relaxed">The system learns, predicts, and accelerates estimate preparation. Upload a Scope of Work and watch it auto-populate 50-70% of standard items.</p>
            </div>

            <div className="lg:col-span-2 relative flex items-center justify-between w-full p-8 glass-card border-ai/40 rounded-3xl glow-purple">
              <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-ai/20 via-ai to-ai/20 -translate-y-1/2"></div>

              <div className="flow-node">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/20 flex items-center justify-center mb-3 text-white">
                  <span className="material-symbols-outlined">upload_file</span>
                </div>
                <span className="text-xs uppercase text-slate-300 font-mono">Upload SOC</span>
              </div>

              <div className="flow-node relative">
                <div className="absolute inset-0 w-full h-full border border-ai/50 rounded-full animate-spin [animation-duration:3s]"></div>
                <div className="absolute -inset-4 border border-dashed border-ai/30 rounded-full animate-spin [animation-duration:5s] [animation-direction:reverse]"></div>

                <div className="w-24 h-24 rounded-full bg-ai flex items-center justify-center mb-5 text-white shadow-[0_0_50px_rgba(168,85,247,0.6)] relative z-10">
                  <span className="material-symbols-outlined text-4xl">model_training</span>
                </div>
                <span className="text-sm uppercase text-white font-bold font-mono">Prediction Engine</span>
              </div>

              <div className="flow-node">
                <div className="px-4 py-2 rounded bg-ai/20 border border-ai/50 mb-3 text-ai font-bold text-lg animate-pulse">50-70%</div>
                <span className="text-xs uppercase text-ai font-mono">Auto-Populate</span>
              </div>

              <div className="flow-node">
                <div className="w-12 h-12 rounded-full bg-success/20 border border-success flex items-center justify-center mb-3 text-success">
                  <span className="material-symbols-outlined">task_alt</span>
                </div>
                <span className="text-xs uppercase text-success font-mono">Human Review</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
