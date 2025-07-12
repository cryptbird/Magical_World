import React, { useState, useEffect, useRef } from 'react';
import './MagicalScroll.css';

const MagicalScroll = ({ title, content, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const scrollRef = useRef(null);
  const contentRef = useRef(null);

  // Function to format content with line breaks after each full stop
  const formatContent = (text) => {
    return text.replace(/\. +/g, '.<br><br>');
  };

  const handleClick = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setIsOpen(!isOpen);
    
    // Reset animation flag after animation completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  };

  // Add entrance animation delay based on index
  useEffect(() => {
    const timer = setTimeout(() => {
      if (scrollRef.current) {
        scrollRef.current.style.opacity = '1';
        scrollRef.current.style.transform = 'translateY(0)';
      }
    }, index * 200);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div 
      ref={scrollRef}
      className={`magical-scroll ${isOpen ? 'open' : ''} ${isAnimating ? 'animating' : ''}`}
      onClick={handleClick}
      style={{
        opacity: 0,
        transform: 'translateY(50px)',
        transition: 'opacity 0.8s ease, transform 0.8s ease'
      }}
    >
      {/* Scroll body */}
      <div className="scroll-body">
        {/* Scroll edges with magical glow */}
        <div className="scroll-edge left-edge">
          <div className="magical-rune">✧</div>
          <div className="magical-rune">✦</div>
          <div className="magical-rune">✧</div>
        </div>
        
        <div className="scroll-edge right-edge">
          <div className="magical-rune">✧</div>
          <div className="magical-rune">✦</div>
          <div className="magical-rune">✧</div>
        </div>

        {/* Scroll content area */}
        <div className="scroll-content">
          <h2 className="scroll-title">{title}</h2>
          
          <div 
            ref={contentRef}
            className={`scroll-text ${isOpen ? 'visible' : ''}`}
          >
            <div 
              className="text-content"
              dangerouslySetInnerHTML={{ __html: formatContent(content) }}
            />
            
            {/* Magical sparkles around text */}
            <div className="text-sparkles">
              <div className="sparkle">✨</div>
              <div className="sparkle">⭐</div>
              <div className="sparkle">✨</div>
              <div className="sparkle">⭐</div>
            </div>
          </div>
        </div>

        {/* Scroll handles */}
        <div className="scroll-handle left-handle">
          <div className="handle-ornament">❈</div>
        </div>
        <div className="scroll-handle right-handle">
          <div className="handle-ornament">❈</div>
        </div>
      </div>

      {/* Hover glow effect */}
      <div className="hover-glow"></div>
      
      {/* Click sparkle effect */}
      {isAnimating && (
        <div className="click-sparkles">
          <div className="sparkle">✨</div>
          <div className="sparkle">⭐</div>
          <div className="sparkle">✨</div>
          <div className="sparkle">⭐</div>
        </div>
      )}
    </div>
  );
};

export default MagicalScroll; 