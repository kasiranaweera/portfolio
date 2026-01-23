'use client';

import { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';

export default function AnimatedBackground() {
  const canvasRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Detect theme
    const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

    // Create particles/lines
    const particles = [];
    const particleCount = 50;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 1.5 + 0.5;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off walls
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        // Keep in bounds
        this.x = Math.max(0, Math.min(canvas.width, this.x));
        this.y = Math.max(0, Math.min(canvas.height, this.y));
      }

      draw() {
        // Dark theme: blue, Light theme: darker blue/purple
        const particleColor = isDark ? 'rgba(59, 130, 246, ' : 'rgba(37, 99, 235, ';
        ctx.fillStyle = particleColor + this.opacity + ')';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Draw connecting lines
    const drawLines = () => {
      const maxDistance = 150;
      // Dark theme: light blue, Light theme: darker blue
      const lineColor = isDark ? 'rgba(59, 130, 246, ' : 'rgba(37, 99, 235, ';

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.3;
            ctx.strokeStyle = lineColor + opacity + ')';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    // Animation loop
    const animate = () => {
      // Clear canvas with subtle background
      // Dark theme: darker fade, Light theme: lighter fade
      const clearColor = isDark ? 'rgba(0, 0, 0, 0.02)' : 'rgba(255, 255, 255, 0.01)';
      ctx.fillStyle = clearColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw connecting lines
      drawLines();

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [mounted, theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-50"
      style={{ 
        background: 'transparent',
        zIndex: 0 
      }}
    />
  );
}
