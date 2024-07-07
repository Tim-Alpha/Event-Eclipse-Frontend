// FireworksBackground.js
import React, { useEffect, useRef, useState } from 'react';
import { Firework } from './Firework';
import IsMobile from '../../../helper/mobileDetection';

const FireworksBackground = () => {
  const mobile = IsMobile();
  const [isMobile, setIsMobile] = useState(mobile);
  const canvasRef = useRef(null);
  const fireworks = useRef([]);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    setIsMobile(mobile);
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
  }, [mobile, hasInteracted]);

  return (
    <canvas 
      ref={canvasRef} 
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: isMobile ? '40vh' : '100vh', 
        pointerEvents: 'none', 
        zIndex: -1 
      }} 
    />
  );
};

export default FireworksBackground;
 