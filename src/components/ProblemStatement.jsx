import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
export default function ProblemStatement() {
  const containerRef = useRef(null);
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.utils.toArray('.section-header').forEach(header => {
        gsap.from(header, {
          y: 40,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: header,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        });
      });
      gsap.utils.toArray('.fade-up-elem').forEach(elem => {
        gsap.from(elem, {
          y: 60,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: elem,
            start: "top 85%"
          }
        });
      });
      gsap.from(".stagger-item-left", {
        x: -30, opacity: 0, duration: 0.8, stagger: 0.15,
        scrollTrigger: { trigger: ".stagger-item-left", start: "top 85%" }
      });
      gsap.from(".stagger-item-right", {
        x: 30, opacity: 0, duration: 0.8, stagger: 0.15,
        scrollTrigger: { trigger: ".stagger-item-right", start: "top 85%" }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);
  return (
    <section id="problem" ref={containerRef} className="min-h-screen flex flex-col justify-center py-24 px-6 relative">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-20 section-header">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Why Change Was Necessary?</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Transitioning from a highly manual, error-prone legacy process to an intelligent, centralized digital workspace.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          <div className="solid-card rounded-3xl p-8 lg:p-12 border-danger/20 glow-danger relative overflow-hidden fade-up-elem">
            <div className="absolute top-0 right-0 p-6 opacity-10">
              <span className="material-symbols-outlined text-9xl text-danger">history</span>
            </div>
            <div className="flex items-center space-x-3 mb-8 relative z-10">
              <span className="material-symbols-outlined text-danger text-3xl">warning</span>
              <h3 className="font-display text-2xl font-bold text-white">Legacy Process</h3>
            </div>
            <div className="space-y-8 relative z-10">
              <div className="flex items-start space-x-4 stagger-item-left">
                <div className="w-10 h-10 rounded-full bg-danger/10 flex items-center justify-center shrink-0 border border-danger/20">
                  <span className="material-symbols-outlined text-danger text-sm">menu_book</span>
                </div>
                <div>
                  <h4 className="font-medium text-white text-lg">Physical DSR Books</h4>
                  <p className="text-sm text-slate-400 mt-1">Manual searches through thick indexes. No semantic lookups or digital tagging.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 stagger-item-left">
                <div className="w-10 h-10 rounded-full bg-danger/10 flex items-center justify-center shrink-0 border border-danger/20">
                  <span className="material-symbols-outlined text-danger text-sm">grid_on</span>
                </div>
                <div>
                  <h4 className="font-medium text-white text-lg">Disconnected Excel Files</h4>
                  <p className="text-sm text-slate-400 mt-1">Prone to formula corruptions, copy-paste errors, and hard-to-maintain templates.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 stagger-item-left">
                <div className="w-10 h-10 rounded-full bg-danger/10 flex items-center justify-center shrink-0 border border-danger/20">
                  <span className="material-symbols-outlined text-danger text-sm">save</span>
                </div>
                <div>
                  <h4 className="font-medium text-white text-lg">Isolated Data Silos</h4>
                  <p className="text-sm text-slate-400 mt-1">Custom market rates stored locally on individual hard drives, impossible to reuse globally.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="solid-card rounded-3xl p-8 lg:p-12 border-brand/30 glow-cyan relative overflow-hidden fade-up-elem">
            <div className="absolute top-0 right-0 p-6 opacity-10">
              <span className="material-symbols-outlined text-9xl text-brand">bolt</span>
            </div>
            <div className="flex items-center space-x-3 mb-8 relative z-10">
              <span className="material-symbols-outlined text-brand text-3xl">check_circle</span>
              <h3 className="font-display text-2xl font-bold text-white">AEs Webapp Flow</h3>
            </div>
            <div className="space-y-8 relative z-10">
              <div className="flex items-start space-x-4 stagger-item-right">
                <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center shrink-0 border border-brand/30">
                  <span className="material-symbols-outlined text-brand text-sm">manage_search</span>
                </div>
                <div>
                  <h4 className="font-medium text-white text-lg">Intelligent Hybrid Search</h4>
                  <p className="text-sm text-slate-400 mt-1">Instantly fetches precise DSR items using natural language and semantic mapping.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 stagger-item-right">
                <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center shrink-0 border border-brand/30">
                  <span className="material-symbols-outlined text-brand text-sm">splitscreen</span>
                </div>
                <div>
                  <h4 className="font-medium text-white text-lg">Dual-Pane Workspace</h4>
                  <p className="text-sm text-slate-400 mt-1">Search catalog and draft builder side-by-side. Auto-aggregating totals and synced quantities.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 stagger-item-right">
                <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center shrink-0 border border-brand/30">
                  <span className="material-symbols-outlined text-brand text-sm">cloud_sync</span>
                </div>
                <div>
                  <h4 className="font-medium text-white text-lg">Centralized Cloud Reuse</h4>
                  <p className="text-sm text-slate-400 mt-1">Custom market rates instantly populate for all engineers. 1-click formatted Excel exports.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
