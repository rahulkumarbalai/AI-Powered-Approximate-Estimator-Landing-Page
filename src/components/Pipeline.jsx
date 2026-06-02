import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
export default function Pipeline() {
  const sectionRef = useRef(null);
  const svgRef = useRef(null);
  const nodesRef = useRef({});
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(".pipeline-step",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".pipeline-container",
            start: "top 75%"
          }
        }
      );
    }, sectionRef);
    const svgContainer = svgRef.current;
    function drawLine(startEl, endEl, color) {
      if (!startEl || !endEl || !svgContainer) return;
      const containerRect = svgContainer.getBoundingClientRect();
      const startRect = startEl.getBoundingClientRect();
      const endRect = endEl.getBoundingClientRect();
      const startX = startRect.right - containerRect.left;
      const startY = startRect.top + startRect.height / 2 - containerRect.top;
      const endX = endRect.left - containerRect.left;
      const endY = endRect.top + endRect.height / 2 - containerRect.top;
      const controlX1 = startX + (endX - startX) / 2;
      const controlY1 = startY;
      const controlX2 = startX + (endX - startX) / 2;
      const controlY2 = endY;
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', `M ${startX} ${startY} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${endX} ${endY}`);
      path.setAttribute('fill', 'none');
      path.setAttribute('stroke', color);
      path.setAttribute('stroke-width', '2');
      path.setAttribute('stroke-dasharray', '1000');
      path.setAttribute('stroke-dashoffset', '1000');
      svgContainer.appendChild(path);
      gsap.to(path, {
        strokeDashoffset: 0,
        duration: 1,
        ease: "power2.inOut"
      });
    }
    function clearLines() {
      if (svgContainer) svgContainer.innerHTML = '';
    }
    function resetOpacity() {
      Object.values(nodesRef.current).forEach(n => {
        if (n) n.style.opacity = '1';
      });
    }
    function dimAll() {
      Object.values(nodesRef.current).forEach(n => {
        if (n) n.style.opacity = '0.3';
      });
    }
    function highlightNode(node) {
      if (node) node.style.opacity = '1';
    }
    const handleQueryClick = (e, type, btnEl) => {
      e.preventDefault();
      e.stopPropagation();
      clearLines();
      dimAll();
      highlightNode(nodesRef.current.query);
      highlightNode(nodesRef.current.result);
      if (type === 'exact') {
        highlightNode(nodesRef.current.mongo);
        drawLine(btnEl, nodesRef.current.mongo, '#0ea5e9');
        drawLine(nodesRef.current.mongo, nodesRef.current.result, '#0ea5e9');
      } else if (type === 'semantic') {
        highlightNode(nodesRef.current.fastapi);
        highlightNode(nodesRef.current.faiss);
        highlightNode(nodesRef.current.cross);
        drawLine(btnEl, nodesRef.current.faiss, '#a855f7');
        drawLine(nodesRef.current.faiss, nodesRef.current.cross, '#a855f7');
        drawLine(nodesRef.current.cross, nodesRef.current.result, '#a855f7');
      } else if (type === 'keyword') {
        highlightNode(nodesRef.current.fastapi);
        highlightNode(nodesRef.current.bm25);
        highlightNode(nodesRef.current.cross);
        drawLine(btnEl, nodesRef.current.bm25, '#38bdf8');
        drawLine(nodesRef.current.bm25, nodesRef.current.cross, '#38bdf8');
        drawLine(nodesRef.current.cross, nodesRef.current.result, '#38bdf8');
      }
    };
    const buttons = document.querySelectorAll('.query-btn');
    buttons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const type = btn.id.replace('query-', '');
        handleQueryClick(e, type, btn);
      });
    });
    const pipelineBox = document.getElementById('pipeline-box');
    const resetHandler = (e) => {
      if (!e.target.closest('.query-btn')) {
        clearLines();
        resetOpacity();
      }
    };
    if (pipelineBox) {
      pipelineBox.addEventListener('click', resetHandler);
    }
    window.addEventListener('resize', () => {
      clearLines();
      resetOpacity();
    });
    return () => {
      if (pipelineBox) {
        pipelineBox.removeEventListener('click', resetHandler);
      }
      ctx.revert();
    };
  }, []);
  return (
    <section id="pipeline" ref={sectionRef} className="min-h-screen py-24 px-6 relative flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="text-center mb-20 section-header">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Hybrid Search Pipeline</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Combining exact regex matches with dense vector and sparse keyword retrieval for unparalleled accuracy.</p>
        </div>
        <div id="pipeline-box" className="relative w-full neo-card rounded-3xl p-8 lg:p-12 overflow-hidden pipeline-container shadow-2xl">
          <svg ref={svgRef} id="pipeline-svg" className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ filter: 'drop-shadow(0px 0px 4px currentColor)' }}></svg>
          <div className="flex flex-col md:flex-row items-stretch justify-between relative z-10 gap-6">
            <div ref={el => nodesRef.current.query = el} className="flex-1 solid-card p-6 rounded-2xl border-[var(--border-color)] pipeline-step flex flex-col justify-center relative z-10 shadow-lg">
              <h4 className="font-bold text-white mb-4 text-center">Select a Query</h4>
              <div className="space-y-3 w-full">
                <button id="query-exact" className="query-btn w-full text-[10px] py-2 px-2 rounded-lg bg-[var(--bg-main)] hover:bg-brand/10 border border-[var(--border-color)] hover:border-brand transition-all text-left flex items-center justify-between group">
                  <span className="truncate text-[var(--text-primary)]">"Cement mortar 1:1"</span>
                  <span className="material-symbols-outlined text-[10px] opacity-0 group-hover:opacity-100 transition-opacity text-brand">arrow_forward</span>
                </button>
                <button id="query-semantic" className="query-btn w-full text-[10px] py-2 px-2 rounded-lg bg-[var(--bg-main)] hover:bg-ai/10 border border-[var(--border-color)] hover:border-ai transition-all text-left flex items-center justify-between group">
                  <span className="truncate text-[var(--text-primary)]">"Digging for foundation"</span>
                  <span className="material-symbols-outlined text-[10px] opacity-0 group-hover:opacity-100 transition-opacity text-ai">arrow_forward</span>
                </button>
                <button id="query-keyword" className="query-btn w-full text-[10px] py-2 px-2 rounded-lg bg-[var(--bg-main)] hover:bg-brandLight/10 border border-[var(--border-color)] hover:border-brandLight transition-all text-left flex items-center justify-between group">
                  <span className="truncate text-[var(--text-primary)]">"Trench 1.5m deep"</span>
                  <span className="material-symbols-outlined text-[10px] opacity-0 group-hover:opacity-100 transition-opacity text-brandLight">arrow_forward</span>
                </button>
              </div>
            </div>
            <div className="flex-[1.5] flex flex-col gap-4">
              <div ref={el => nodesRef.current.mongo = el} className="solid-card p-6 rounded-2xl border-brand/30 bg-brand/5 pipeline-step text-center flex-1 flex flex-col justify-center pipeline-node transition-opacity duration-300 relative z-10 shadow-lg">
                <h4 className="font-bold text-brand mb-1">Mongo Regex</h4>
                <p className="text-[10px] text-slate-400 font-mono">Node.js exact match DB</p>
              </div>
              <div ref={el => nodesRef.current.fastapi = el} className="solid-card p-6 rounded-2xl border-ai/30 bg-ai/5 pipeline-step text-center flex-1 pipeline-node transition-opacity duration-300 relative z-10 flex flex-col justify-center shadow-lg">
                <h4 className="font-bold text-ai mb-2">FastAPI Service</h4>
                <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
                  <div ref={el => nodesRef.current.faiss = el} className="bg-ai/10 p-2 rounded text-[var(--text-primary)] transition-opacity duration-300 pipeline-node relative z-10">FAISS Semantic<br />(Top 20)</div>
                  <div ref={el => nodesRef.current.bm25 = el} className="bg-ai/10 p-2 rounded text-[var(--text-primary)] transition-opacity duration-300 pipeline-node relative z-10">BM25 Keyword<br />(Top 20)</div>
                </div>
              </div>
            </div>
            <div ref={el => nodesRef.current.cross = el} className="flex-1 solid-card p-6 rounded-2xl border-ai/40 glow-purple pipeline-step text-center flex flex-col justify-center relative overflow-hidden pipeline-node transition-opacity duration-300 z-10 shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-ai/20 to-transparent opacity-50 pointer-events-none"></div>
              <div className="relative z-10">
                <span className="material-symbols-outlined text-ai text-3xl mb-2">layers</span>
                <h4 className="font-bold text-white mb-2">Cross-Encoder</h4>
                <p className="text-[10px] text-slate-400 font-mono">BAAI/bge-reranker-base<br />Merges & Scores</p>
              </div>
            </div>
            <div ref={el => nodesRef.current.result = el} className="flex-1 solid-card p-6 rounded-2xl border-success/30 pipeline-step text-center flex flex-col justify-center pipeline-node transition-opacity duration-300 relative z-10 shadow-lg">
              <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="material-symbols-outlined text-success">task_alt</span>
              </div>
              <h4 className="font-bold text-white mb-1">Top Results</h4>
              <p className="text-[10px] text-slate-400 font-mono">Returned to Client</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
