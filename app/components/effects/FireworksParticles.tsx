'use client';

import { useEffect, useState, useCallback } from 'react';

interface Spark {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  size: number;
  opacity: number;
  life: number;
}

interface Firework {
  id: number;
  x: number;
  y: number;
  sparks: Spark[];
}

const COLORS = ['#ff0000', '#ffffff', '#0000ff', '#ffd700', '#ff6b6b', '#4ecdc4'];

export function FireworksParticles() {
  const [fireworks, setFireworks] = useState<Firework[]>([]);

  const createFirework = useCallback((id: number): Firework => {
    const x = Math.random() * 80 + 10;
    const y = Math.random() * 40 + 10;
    const sparkCount = Math.floor(Math.random() * 20) + 15;
    const color = COLORS[Math.floor(Math.random() * COLORS.length)];
    
    const sparks: Spark[] = Array.from({ length: sparkCount }, (_, i) => {
      const angle = (i / sparkCount) * Math.PI * 2;
      const speed = Math.random() * 2 + 1;
      return {
        id: i,
        x: 0,
        y: 0,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        color,
        size: Math.random() * 3 + 2,
        opacity: 1,
        life: 1,
      };
    });

    return { id, x, y, sparks };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFireworks(prev => {
        const newFireworks = [...prev, createFirework(Date.now())];
        return newFireworks.slice(-5);
      });
    }, 1500);

    return () => clearInterval(interval);
  }, [createFirework]);

  useEffect(() => {
    let animationId: number;
    
    const animate = () => {
      setFireworks(prev => 
        prev.map(fw => ({
          ...fw,
          sparks: fw.sparks.map(spark => ({
            ...spark,
            x: spark.x + spark.vx,
            y: spark.y + spark.vy + 0.05,
            vy: spark.vy + 0.02,
            opacity: spark.opacity * 0.98,
            life: spark.life - 0.01,
          })).filter(spark => spark.life > 0),
        })).filter(fw => fw.sparks.length > 0)
      );
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div 
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden"
      aria-hidden="true"
    >
      {fireworks.map(fw => (
        <div
          key={fw.id}
          className="absolute"
          style={{ left: `${fw.x}%`, top: `${fw.y}%` }}
        >
          {fw.sparks.map(spark => (
            <div
              key={spark.id}
              className="absolute rounded-full"
              style={{
                left: `${spark.x}px`,
                top: `${spark.y}px`,
                width: `${spark.size}px`,
                height: `${spark.size}px`,
                backgroundColor: spark.color,
                opacity: spark.opacity,
                boxShadow: `0 0 ${spark.size * 2}px ${spark.color}`,
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
