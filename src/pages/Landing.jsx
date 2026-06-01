import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Workflows from '../components/Workflows';
import ProblemStatement from '../components/ProblemStatement';
import Architecture from '../components/Architecture';
import Pipeline from '../components/Pipeline';
import Roadmap from '../components/Roadmap';
import Impact from '../components/Impact';
import Footer from '../components/Footer';
import InteractiveBackground from '../components/InteractiveBackground';

gsap.registerPlugin(ScrollTrigger);

export default function Landing() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });
    
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0, 0);
    
    let ctx = gsap.context(() => {
      gsap.to(".scroll-progress", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: 0.3
        }
      });
      gsap.to(".parallax-bg", {
        y: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: true
        }
      });
    });
    
    return () => {
      ctx.revert();
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return (
    <>
      <InteractiveBackground />
      <Navbar />
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-brand via-ai to-success scale-x-0 scroll-progress" style={{ zIndex: 60 }}></div>
      <main className="relative z-10">
        <Hero />
        <Workflows />
        <ProblemStatement />
        <Architecture />
        <Pipeline />
        <Roadmap />
        <Impact />
      </main>
      <Footer />
    </>
  );
}
