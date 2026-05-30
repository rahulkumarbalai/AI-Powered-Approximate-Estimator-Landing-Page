import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Architecture() {
  useEffect(() => {
    gsap.from(".arch-node", {
      scale: 0.8,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".architecture-container",
        start: "top 70%"
      }
    });
  }, []);

  return (
    <section id="architecture" className="min-h-screen py-24 px-6 relative flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16 section-header">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">System Architecture</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">A modern microservices-inspired stack ensuring high performance, secure authorization, and scalable intelligence.</p>
        </div>

        <div className="relative w-full max-w-5xl mx-auto h-[600px] flex items-center justify-center architecture-container">
          {/* Decorative Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid meet">
            <path id="line1" d="M 200 300 Q 350 300 500 150" fill="none" stroke="rgba(14, 165, 233, 0.2)" strokeWidth="2" className="arch-line" />
            <path id="line2" d="M 200 300 Q 350 300 500 450" fill="none" stroke="rgba(14, 165, 233, 0.2)" strokeWidth="2" className="arch-line" />
            <path id="line3" d="M 500 150 Q 650 150 800 300" fill="none" stroke="rgba(168, 85, 247, 0.2)" strokeWidth="2" className="arch-line" />
            <path id="line4" d="M 500 450 Q 650 450 800 300" fill="none" stroke="rgba(168, 85, 247, 0.2)" strokeWidth="2" className="arch-line" />

            {/* Animated flow particles */}
            <circle r="3" fill="#0ea5e9">
              <animateMotion dur="3s" repeatCount="indefinite">
                <mpath href="#line1" />
              </animateMotion>
            </circle>
            <circle r="3" fill="#0ea5e9">
              <animateMotion dur="3s" repeatCount="indefinite" begin="1.5s">
                <mpath href="#line2" />
              </animateMotion>
            </circle>
            <circle r="3" fill="#a855f7">
              <animateMotion dur="3s" repeatCount="indefinite" begin="0.75s">
                <mpath href="#line3" />
              </animateMotion>
            </circle>
            <circle r="3" fill="#a855f7">
              <animateMotion dur="3s" repeatCount="indefinite" begin="2.25s">
                <mpath href="#line4" />
              </animateMotion>
            </circle>
          </svg>

          {/* Nodes */}
          {/* Client */}
          <div className="absolute left-0 lg:left-[5%] top-1/2 -translate-y-1/2 w-64 solid-card p-6 rounded-2xl arch-node z-10 border-brand/30">
            <div className="flex items-center space-x-3 mb-4">
              <span className="material-symbols-outlined text-brand text-2xl">laptop_mac</span>
              <h3 className="font-display font-bold text-white">Client Tier</h3>
            </div>
            <ul className="text-xs text-slate-400 space-y-2 font-mono">
              <li><span className="text-brand mr-2">▶</span>React + Vite</li>
              <li><span className="text-brand mr-2">▶</span>Tailwind CSS v4</li>
              <li><span className="text-brand mr-2">▶</span>React Router</li>
              <li><span className="text-brand mr-2">▶</span>Supabase Auth</li>
            </ul>
          </div>

          {/* Backend API */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[15%] w-64 solid-card p-6 rounded-2xl arch-node z-10 border-white/10">
            <div className="flex items-center space-x-3 mb-4">
              <span className="material-symbols-outlined text-slate-300 text-2xl">dns</span>
              <h3 className="font-display font-bold text-white">API Gateway</h3>
            </div>
            <ul className="text-xs text-slate-400 space-y-2 font-mono">
              <li><span className="text-white/50 mr-2">▶</span>Node.js</li>
              <li><span className="text-white/50 mr-2">▶</span>Express.js</li>
              <li><span className="text-white/50 mr-2">▶</span>exceljs & xlsx</li>
              <li><span className="text-white/50 mr-2">▶</span>JWT Verification</li>
            </ul>
          </div>

          {/* AI Service */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[70%] w-64 solid-card p-6 rounded-2xl arch-node z-10 border-ai/30 glow-purple">
            <div className="flex items-center space-x-3 mb-4">
              <span className="material-symbols-outlined text-ai text-2xl">neurology</span>
              <h3 className="font-display font-bold text-white">AI Microservice</h3>
            </div>
            <ul className="text-xs text-slate-400 space-y-2 font-mono">
              <li><span className="text-ai mr-2">▶</span>Python FastAPI</li>
              <li><span className="text-ai mr-2">▶</span>BAAI/bge-small-en-v1.5</li>
              <li><span className="text-ai mr-2">▶</span>Cross-Encoder Reranker</li>
              <li><span className="text-ai mr-2">▶</span>FAISS + rank-bm25</li>
            </ul>
          </div>

          {/* Database */}
          <div className="absolute right-0 lg:right-[5%] top-1/2 -translate-y-1/2 w-64 solid-card p-6 rounded-2xl arch-node z-10 border-success/30">
            <div className="flex items-center space-x-3 mb-4">
              <span className="material-symbols-outlined text-success text-2xl">database</span>
              <h3 className="font-display font-bold text-white">Data Tier</h3>
            </div>
            <ul className="text-xs text-slate-400 space-y-2 font-mono">
              <li><span className="text-success mr-2">▶</span>MongoDB (Mongoose)</li>
              <li><span className="text-success mr-2">▶</span>DSR Datasets</li>
              <li><span className="text-success mr-2">▶</span>Market Rates DB</li>
              <li><span className="text-success mr-2">▶</span>Supabase Users</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
