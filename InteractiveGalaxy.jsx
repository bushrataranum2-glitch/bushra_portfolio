// InteractiveGalaxy.jsx
import React, { useEffect, useRef, useState } from 'react';

const InteractiveGalaxy = () => {
  const canvasRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    const handleMouseMove = (e) => {
      setMousePos({
        x: e.clientX,
        y: e.clientY
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    // Create particles
    const particles = [];
    const particleCount = 150;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 1,
        color: `hsl(${Math.random() * 60 + 200}, 70%, 60%)`, // Blue/purple range
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        originalX: Math.random() * canvas.width,
        originalY: Math.random() * canvas.height
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Dark space background
      ctx.fillStyle = '#030014';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw nebula clouds
      const gradient = ctx.createRadialGradient(
        mousePos.x, mousePos.y, 0,
        mousePos.x, mousePos.y, canvas.width * 0.5
      );
      gradient.addColorStop(0, 'rgba(100, 50, 200, 0.1)');
      gradient.addColorStop(0.5, 'rgba(50, 20, 100, 0.05)');
      gradient.addColorStop(1, 'transparent');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw and update particles
      particles.forEach(particle => {
        // Interactive movement based on mouse
        const dx = mousePos.x - particle.x;
        const dy = mousePos.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 200) {
          const force = (200 - distance) / 2000;
          particle.vx -= dx * force * 0.01;
          particle.vy -= dy * force * 0.01;
        }

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Return to original position slowly
        particle.vx += (particle.originalX - particle.x) * 0.001;
        particle.vy += (particle.originalY - particle.y) * 0.001;

        // Boundary check
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -0.5;
          particle.originalX = Math.random() * canvas.width;
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -0.5;
          particle.originalY = Math.random() * canvas.height;
        }

        // Draw particle with glow effect
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 15;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });

      // Reset shadow for next frame
      ctx.shadowBlur = 0;

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mousePos]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1
      }}
    />
  );
};

export default InteractiveGalaxy;