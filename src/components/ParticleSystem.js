import React, { useEffect, useRef } from 'react';
import './ParticleSystem.css';

const ParticleSystem = () => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle class
    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 3 + 1;
        this.opacity = Math.random() * 0.5 + 0.3;
        this.life = Math.random() * 100 + 50;
        this.maxLife = this.life;
        this.type = Math.random() > 0.5 ? 'sparkle' : 'dust';
        this.angle = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.angle += this.rotationSpeed;
        this.life--;
        
        // Attract to mouse
        const dx = mouseRef.current.x - this.x;
        const dy = mouseRef.current.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          const force = (100 - distance) / 100;
          this.vx += dx * force * 0.001;
          this.vy += dy * force * 0.001;
        }
        
        // Damping
        this.vx *= 0.99;
        this.vy *= 0.99;
        
        // Wrap around screen
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      }

      draw() {
        const alpha = (this.life / this.maxLife) * this.opacity;
        ctx.save();
        ctx.globalAlpha = alpha;
        
        if (this.type === 'sparkle') {
          // Draw sparkle
          ctx.translate(this.x, this.y);
          ctx.rotate(this.angle);
          ctx.fillStyle = '#ffd700';
          ctx.shadowColor = '#ffd700';
          ctx.shadowBlur = 10;
          
          for (let i = 0; i < 4; i++) {
            ctx.beginPath();
            ctx.moveTo(0, -this.size);
            ctx.lineTo(0, this.size);
            ctx.strokeStyle = '#ffd700';
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.rotate(Math.PI / 2);
          }
        } else {
          // Draw dust particle
          ctx.fillStyle = '#ffffff';
          ctx.shadowColor = '#ffffff';
          ctx.shadowBlur = 5;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
        }
        
        ctx.restore();
      }

      isDead() {
        return this.life <= 0;
      }
    }

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < 50; i++) {
        particlesRef.current.push(
          new Particle(
            Math.random() * canvas.width,
            Math.random() * canvas.height
          )
        );
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particlesRef.current.forEach((particle, index) => {
        particle.update();
        particle.draw();
        
        if (particle.isDead()) {
          particlesRef.current[index] = new Particle(
            Math.random() * canvas.width,
            Math.random() * canvas.height
          );
        }
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };

    // Mouse move handler
    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    // Initialize and start
    initParticles();
    animate();
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-canvas" />;
};

export default ParticleSystem; 