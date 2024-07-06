// Fireworks.js
import React, { useEffect, useRef, useState } from 'react';
import { Firework } from './Firework';

const Fireworks = () => {
  const canvasRef = useRef(null);
  const fireworks = useRef([]);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const addFirework = () => {
      fireworks.current.push(new Firework(canvas.width, canvas.height, hasInteracted));
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      fireworks.current.forEach((firework, index) => {
        if (firework.done) {
          fireworks.current.splice(index, 1);
        } else {
          firework.update();
          firework.draw(ctx);
        }
      });

      requestAnimationFrame(animate);
    };

    addFirework();
    setInterval(addFirework, 1000);
    animate();

    const handleInteraction = () => {
      setHasInteracted(false); // Did intentionally, to pause cracker sound
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('keydown', handleInteraction);
    };

    document.addEventListener('click', handleInteraction);
    document.addEventListener('keydown', handleInteraction);

    return () => {
      fireworks.current = [];
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('keydown', handleInteraction);
    };
  }, [hasInteracted]);

  return <canvas ref={canvasRef} style={{ width: '100%', height: '100vh', display: 'block' }} />;
};

export default Fireworks;
