import React, { useState, useEffect } from 'react';
import MagicalScroll from './components/MagicalScroll';
import ParticleSystem from './components/ParticleSystem';
import MagicWand from './components/MagicWand';
import BackgroundElements from './components/BackgroundElements';
import './App.css';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMusicEnabled, setIsMusicEnabled] = useState(false);

  // Scroll data with magical chapter content
  const scrollsData = [
    {
      title: "Chapter I: The Awakening",
      content: "In the depths of an ancient library, where dust motes dance in beams of golden light, a young apprentice discovers a tome bound in leather as old as time itself. The pages whisper secrets of forgotten magic, and as the first chapter unfolds, the very air seems to crackle with potential. Here begins the journey into realms where reality bends and imagination takes flight."
    },
    {
      title: "Chapter II: The First Spell",
      content: "With trembling hands and a heart full of wonder, the apprentice speaks the ancient words. The air shimmers like morning dew, and for the first time, magic becomes more than just stories told by candlelight. The spell takes shape—a gentle orb of light that dances and weaves through the air, carrying with it the promise of infinite possibilities."
    },
    {
      title: "Chapter III: The Hidden Library",
      content: "Beyond the ordinary shelves lies a door that appears only to those who truly believe. The hidden library stretches into impossible dimensions, its corridors lined with books that write themselves and scrolls that unroll to reveal new knowledge with each reading. Here, time itself seems to pause, allowing scholars to study for centuries in what feels like moments."
    },
    {
      title: "Chapter IV: The Master's Teachings",
      content: "The wise master, whose eyes hold the wisdom of countless lifetimes, begins the true education. Not just spells and incantations, but the deeper understanding of magic's nature—how it flows like water, burns like fire, and connects all things in an endless web of possibility. The apprentice learns that magic is not about power, but about harmony."
    },
    {
      title: "Chapter V: The Crystal Caverns",
      content: "Deep beneath the earth, in caverns where crystals grow like trees and glow with their own inner light, the apprentice discovers the source of magical energy. The crystals pulse with ancient power, each one containing memories of spells cast long ago. Here, the very essence of magic can be felt, tasted, and understood in ways that transcend mere words."
    },
    {
      title: "Chapter VI: The Flying Books",
      content: "In the highest towers of the magical academy, books have learned to fly. They flutter through the air like butterflies, their pages rustling with knowledge eager to be shared. Some books choose their readers, landing gently in open hands, while others lead seekers on merry chases through corridors that seem to change with every turn."
    },
    {
      title: "Chapter VII: The Potion Master's Workshop",
      content: "Steam rises from bubbling cauldrons, and the air is thick with the scent of herbs and spices from worlds both near and far. The potion master moves with practiced grace, adding ingredients that spark and sizzle, creating brews that can heal wounds, grant wisdom, or make the drinker see through time itself. Every potion tells a story."
    },
    {
      title: "Chapter VIII: The Great Awakening",
      content: "As the final chapter unfolds, the apprentice realizes that the true magic was not in the spells or potions, but in the journey itself. The transformation from student to master is complete, and now it is time to pass on the knowledge, to become the teacher who will guide the next generation of dreamers and believers into the magical world."
    }
  ];

  useEffect(() => {
    // Simulate loading time for magical entrance effect
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const toggleMusic = () => {
    setIsMusicEnabled(!isMusicEnabled);
    // Here you would add actual audio functionality
    console.log('Music toggled:', !isMusicEnabled);
  };

  if (isLoading) {
    return (
      <div className="loading">
        <div className="loading-text">
          <span>✨</span>
          <span>Welcome to the Magical World</span>
          <span>✨</span>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      {/* Background elements */}
      <BackgroundElements />
      
      {/* Particle system */}
      <ParticleSystem />
      
      {/* Magic wand cursor */}
      <MagicWand />
      
      {/* Music toggle button */}
      <button 
        className="music-toggle"
        onClick={toggleMusic}
        title={isMusicEnabled ? "Disable Music" : "Enable Music"}
      >
        {isMusicEnabled ? "🔇" : "🎵"}
      </button>

      {/* Main content */}
      <div className="scrolls-container">
        <header className="app-header">
          <h1 className="main-title">
            <span className="title-sparkle">✨</span>
            The Magical World
            <span className="title-sparkle">✨</span>
          </h1>
          <p className="subtitle">A Journey Through Enchanted Scrolls</p>
        </header>

        <main className="scrolls-main">
          {scrollsData.map((scroll, index) => (
            <MagicalScroll
              key={index}
              title={scroll.title}
              content={scroll.content}
              index={index}
            />
          ))}
        </main>

        <footer className="app-footer">
          <p className="footer-text">
            <span className="footer-sparkle">✨</span>
            May your journey through these magical scrolls inspire wonder and imagination
            <span className="footer-sparkle">✨</span>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App; 