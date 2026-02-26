// GalaxyBackground.jsx
import React, { useEffect, useRef } from 'react';

const GalaxyBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set canvas size
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Star properties
    const stars = [];
    const starCount = 300;

    // Initialize stars
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2,
        speed: Math.random() * 0.5,
        brightness: Math.random() * 0.5 + 0.5
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);

      gradient.addColorStop(0, '#010929');     // deep navy blue
      gradient.addColorStop(0.4, '#090a30');   // dark indigo
      gradient.addColorStop(0.7, '#170829');   // lavender purple
      gradient.addColorStop(1, '#211134');     // deep space blue

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      // Lavender cloud
      const lavender = ctx.createRadialGradient(
        canvas.width * 0.7,
        canvas.height * 0.3,
        0,
        canvas.width * 0.7,
        canvas.height * 0.3,
        400
      );
      lavender.addColorStop(0, "rgba(128, 70, 236, 0.18)");
      lavender.addColorStop(1, "transparent");
      ctx.fillStyle = lavender;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Nebula pink (subtle, not center)
      const pink = ctx.createRadialGradient(
        canvas.width * 0.3,
        canvas.height * 0.7,
        0,
        canvas.width * 0.3,
        canvas.height * 0.7,
        300
      );
      pink.addColorStop(0, "rgba(91, 40, 70, 0.12)");
      pink.addColorStop(1, "transparent");
      ctx.fillStyle = pink;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw and update stars
      stars.forEach(star => {
        // Twinkling effect
        star.brightness += (Math.random() - 0.5) * 0.1;
        star.brightness = Math.max(0.3, Math.min(1, star.brightness));

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.brightness})`;
        ctx.fill();

        // Move stars
        star.y += star.speed;

        // Reset stars that go off screen
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

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

export default GalaxyBackground;