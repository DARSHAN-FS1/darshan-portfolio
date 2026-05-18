import React, { useEffect, useState } from 'react';

const ParticlesBackground = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate random particles
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 15 : 50;
    const newParticles = Array.from({ length: particleCount }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * (isMobile ? 30 : 20) + 10,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-white opacity-20"
          style={{
            left: `${p.x}vw`,
            top: `${p.y}vh`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animation: `float-particle ${p.duration}s linear infinite`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float-particle {
          0% { transform: translateY(0vh) translateX(0vw); opacity: 0.2; }
          50% { opacity: 0.5; }
          100% { transform: translateY(-100vh) translateX(20vw); opacity: 0; }
        }
      `}} />
    </div>
  );
};

export default ParticlesBackground;
