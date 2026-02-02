
import React, { useEffect, useRef } from 'react';
import { Player } from '../types';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  alpha: number;
  decay: number;
}

interface ZenConfettiProps {
  winner: Player;
  winningLine: number[];
}

const ZenConfetti: React.FC<ZenConfettiProps> = ({ winner, winningLine }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!winner || !canvasRef.current || !winningLine) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const particles: Particle[] = [];
    // Increase particle count for a richer effect radiating from 3 points
    const particleCountPerSquare = 25; 
    const color = winner === 'X' ? '99, 102, 241' : '244, 63, 94';

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (rect) {
        canvas.width = rect.width;
        canvas.height = rect.height;
      }
    };
    resize();

    // Helper to get center of a square by index (0-8)
    const getSquareCenter = (index: number) => {
      const row = Math.floor(index / 3);
      const col = index % 3;
      const stepX = canvas.width / 3;
      const stepY = canvas.height / 3;
      return {
        x: col * stepX + stepX / 2,
        y: row * stepY + stepY / 2
      };
    };

    // Initialize particles from each winning square
    winningLine.forEach((idx) => {
      const center = getSquareCenter(idx);
      for (let i = 0; i < particleCountPerSquare; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 3 + 1;
        particles.push({
          x: center.x,
          y: center.y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          radius: Math.random() * 3 + 1,
          color: color,
          alpha: 1,
          decay: Math.random() * 0.01 + 0.005
        });
      }
    });

    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      let activeParticles = false;
      particles.forEach((p) => {
        if (p.alpha <= 0) return;
        activeParticles = true;

        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.02; // Very gentle gravity
        p.vx *= 0.99; // Minimal air resistance
        p.vy *= 0.99;
        p.alpha -= p.decay;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`;
        ctx.fill();
        
        // Add a very subtle glow to each particle
        if (p.alpha > 0.5) {
          ctx.shadowBlur = 4;
          ctx.shadowColor = `rgba(${p.color}, ${p.alpha * 0.5})`;
        } else {
          ctx.shadowBlur = 0;
        }
      });

      if (activeParticles) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    // Small delay to let the 'Victory Reveal' animation pop first
    const timer = setTimeout(() => {
        render();
    }, 150);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(animationFrameId);
    };
  }, [winner, winningLine]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-20"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default ZenConfetti;
