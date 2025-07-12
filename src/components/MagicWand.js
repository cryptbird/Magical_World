import React, { useEffect, useRef } from 'react';
import './MagicWand.css';

const MagicWand = () => {
  const wandRef = useRef(null);
  const trailRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const wand = wandRef.current;
    
    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      
      // Update wand position
      if (wand) {
        wand.style.left = e.clientX - 10 + 'px';
        wand.style.top = e.clientY - 10 + 'px';
      }
      
      // Add trail effect
      trailRef.current.push({
        x: e.clientX,
        y: e.clientY,
        timestamp: Date.now()
      });
      
      // Keep only recent trail points
      const now = Date.now();
      trailRef.current = trailRef.current.filter(point => now - point.timestamp < 500);
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div ref={wandRef} className="magic-wand">
        <div className="wand-core"></div>
        <div className="wand-tip"></div>
        <div className="wand-sparkles">
          <div className="sparkle">✨</div>
          <div className="sparkle">⭐</div>
          <div className="sparkle">✨</div>
        </div>
      </div>
      
      {/* Trail effect */}
      {trailRef.current.map((point, index) => (
        <div
          key={index}
          className="wand-trail"
          style={{
            left: point.x - 2 + 'px',
            top: point.y - 2 + 'px',
            opacity: 1 - (index / trailRef.current.length)
          }}
        />
      ))}
    </>
  );
};

export default MagicWand; 