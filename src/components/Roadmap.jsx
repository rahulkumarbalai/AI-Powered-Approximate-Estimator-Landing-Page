import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
export default function Roadmap() {
  useEffect(() => {
    gsap.from(".roadmap-item", {
      x: (i) => i % 2 === 0 ? -50 : 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.3,
      scrollTrigger: {
        trigger: "#roadmap",
        start: "top 60%"
      }
    });
  }, []);
  return (
    <section id="roadmap" className="min-h-screen py-24 px-6 relative flex flex-col justify-center">
      <div className="max-w-4xl mx-auto w-full text-center">
        <div className="mb-16 section-header">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[var(--text-primary)] to-[var(--text-secondary)]">
            Roadmap to Intelligence
          </h2>
        </div>
        <div className="relative border-l-2 pl-8 ml-4 md:mx-auto md:border-l-0 md:pl-0 space-y-12 before:hidden md:before:block md:before:absolute md:before:left-1/2 md:before:top-0 md:before:bottom-0 md:before:w-[2px] md:before:-translate-x-1/2 roadmap-line">
          <div className="relative md:w-1/2 md:pr-12 md:text-right roadmap-item">
            <div className="absolute -left-[41px] md:left-auto md:-right-[7px] top-1 w-4 h-4 rounded-full bg-brand shadow-[0_0_15px_rgba(14,165,233,0.8)] border-4 border-[var(--bg-main)] z-10"></div>
            <h4 className="text-brand font-mono text-sm mb-1 uppercase tracking-wider">Current</h4>
            <h3 className="font-display text-2xl font-bold text-[var(--text-primary)] mb-2">AEs Webapp V1.0</h3>
            <p className="text-sm text-[var(--text-secondary)]">Hybrid Search, Centralized Databases, Cloud Drafts, Excel Generation.</p>
          </div>
          <div className="relative md:w-1/2 md:ml-auto md:pl-12 md:text-left roadmap-item">
            <div className="absolute -left-[41px] md:-left-[7px] top-1 w-4 h-4 rounded-full bg-ai shadow-[0_0_15px_rgba(168,85,247,0.8)] border-4 border-[var(--bg-main)] z-10"></div>
            <h4 className="text-ai font-mono text-sm mb-1 uppercase tracking-wider">Upcoming Phase</h4>
            <h3 className="font-display text-2xl font-bold text-[var(--text-primary)] mb-2">Predictive Scope Analysis</h3>
            <p className="text-sm text-[var(--text-secondary)]">Upload PDF scopes, neural extraction auto-populates drafts based on historical patterns.</p>
          </div>
          <div className="relative md:w-1/2 md:pr-12 md:text-right roadmap-item">
            <div className="absolute -left-[41px] md:left-auto md:-right-[7px] top-1 w-4 h-4 rounded-full bg-slate-600 border-4 border-[var(--bg-main)] z-10"></div>
            <h4 className="text-slate-500 font-mono text-sm mb-1 uppercase tracking-wider">Future</h4>
            <h3 className="font-display text-2xl font-bold text-[var(--text-primary)] mb-2">Continuous Learning Loop</h3>
            <p className="text-sm text-[var(--text-secondary)]">System refines predictions based on JE corrections, creating an ever-smarter institutional brain.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
