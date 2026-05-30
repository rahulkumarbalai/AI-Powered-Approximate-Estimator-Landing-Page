import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
export default function Navbar() {
  useEffect(() => {
    ScrollTrigger.create({
      start: "top -80",
      end: 99999,
      toggleClass: { className: "navbar-scrolled", targets: "#navbar" }
    });
  }, []);
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md transition-colors duration-300" 
         style={{ backgroundColor: 'var(--navbar-bg)', borderBottom: '1px solid var(--border-soft)' }} id="navbar">
      <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand to-ai flex items-center justify-center shadow-lg">
            <span className="material-symbols-outlined text-white font-medium">explore</span>
          </div>
          <div className="font-display font-bold text-xl tracking-tight text-white">
            AEs <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brandLight">System</span>
          </div>
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="#hero" className="text-slate-400 hover:text-white transition-colors">Vision</a>
          <a href="#workflows" className="text-slate-400 hover:text-white transition-colors">Evolution</a>
          <a href="#problem" className="text-slate-400 hover:text-white transition-colors">The Friction</a>
          <a href="#architecture" className="text-slate-400 hover:text-white transition-colors">Architecture</a>
          <a href="#pipeline" className="text-slate-400 hover:text-white transition-colors">Hybrid Search</a>
          <div>
            <a href="/" className="px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-brand/10 border border-brand/30 hover:bg-brand/20 text-brand transition-all duration-300">
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
