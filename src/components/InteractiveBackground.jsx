import React, { useEffect, useRef } from 'react';

export default function InteractiveBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    let mouse = { x: null, y: null, radius: 150 };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    class Particle {
      constructor(x, y, dx, dy, size, color) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.size = size;
        this.color = color;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
      update() {
        if (this.x > canvas.width || this.x < 0) this.dx = -this.dx;
        if (this.y > canvas.height || this.y < 0) this.dy = -this.dy;
        this.x += this.dx;
        this.y += this.dy;

        // Mouse interaction
        let distX = mouse.x - this.x;
        let distY = mouse.y - this.y;
        let distance = Math.sqrt(distX * distX + distY * distY);
        if (distance < mouse.radius) {
          if (mouse.x < this.x && this.x < canvas.width - this.size * 10) this.x += 1;
          if (mouse.x > this.x && this.x > this.size * 10) this.x -= 1;
          if (mouse.y < this.y && this.y < canvas.height - this.size * 10) this.y += 1;
          if (mouse.y > this.y && this.y > this.size * 10) this.y -= 1;
        }
        this.draw();
      }
    }

    const initCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = [];
      const numberOfParticles = (canvas.width * canvas.height) / 15000;
      for (let i = 0; i < numberOfParticles; i++) {
        let size = Math.random() * 2 + 1;
        let x = Math.random() * (canvas.width - size * 2) + size;
        let y = Math.random() * (canvas.height - size * 2) + size;
        let dx = (Math.random() - 0.5) * 0.5;
        let dy = (Math.random() - 0.5) * 0.5;
        // Cyan (#0ea5e9) and Purple (#a855f7)
        let color = Math.random() > 0.5 ? '#0ea5e9' : '#a855f7';
        particles.push(new Particle(x, y, dx, dy, size, color));
      }
    };

    const connect = () => {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          let distance = ((particles[a].x - particles[b].x) * (particles[a].x - particles[b].x))
                       + ((particles[a].y - particles[b].y) * (particles[a].y - particles[b].y));
          if (distance < (canvas.width / 7) * (canvas.height / 7)) {
            let opacity = 1 - (distance / 15000);
            ctx.strokeStyle = `rgba(14, 165, 233, ${opacity * 0.2})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
      }
      connect();
    };

    window.addEventListener('resize', initCanvas);
    initCanvas();
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', initCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 bg-[#020202] overflow-hidden parallax-bg pointer-events-none">
      {/* Blueprint Grid */}
      <div 
        className="absolute inset-0 opacity-[0.15]" 
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(14, 165, 233, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(14, 165, 233, 0.2) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      ></div>
      
      {/* Neural Network Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full"></canvas>
      
      {/* Atmospheric Glows */}
      <div className="absolute w-[600px] h-[600px] -top-48 -left-48 rounded-full bg-brand/10 blur-[120px] mix-blend-screen animate-[pulse_15s_infinite_ease-in-out]"></div>
      <div className="absolute w-[500px] h-[500px] bottom-0 -right-24 rounded-full bg-ai/10 blur-[120px] mix-blend-screen animate-[pulse_20s_infinite_ease-in-out_reverse]"></div>
      
      {/* Scanlines */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          background: 'linear-gradient(to bottom, transparent 50%, rgba(255, 255, 255, 0.5) 51%, transparent 51%)',
          backgroundSize: '100% 4px'
        }}
      ></div>
    </div>
  );
}
