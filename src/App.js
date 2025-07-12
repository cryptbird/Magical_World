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
      title: "Chapter I: One who lives",
      content: `Once upon a time there was an angel girl.
She married to a boy younger to her.
They had sex and made babies.
A lot of babies 🙂.
One of their babies, a boy then married to a girl. 
And they had sex and made babies.
A lot of babies 🙂.
One of their babies, a girl then married to a boy.
And guess what, they had sex and made 2 babies.
One was a girl, other was a boy.
The boy was a devil. While the girl was a witch.

Our angel girl got shocked how her successors could turn out to witch and devil 🫢😶‍🌫.

Everyone was scared!! 😨
They called for a community meeting, and decided to kill the horror babies away.

One wise man stood up and asked to not do the devilous act of killing infants. He was heard, and hence the babies were decided to be sent to humanity.

NOT TOGETHER!! ~Angel girl said

They were thrown at two different places 336 kms away.
The witch baby was given in a home full of theists with another younger human baby boy.
The devil baby was also sent to a house of theist woman, with a son. 
Both parents were hypnotised and didn't realised that they were not their kids.


Even being infants, evil didn't stop. The witch went on to learn the dark skills and was able to get control over all the other kids with her addictive dance moves.

On the other hand, the devil starting cloning himself in thought of creating his own army, but couldn't go on with more than 1 clone due to lack of magical equipments.

The world was in danger 💀
The life was growing to take on the life of one who lives.`
    },
    {
      title: "Chapter II: Just got started!",
      content: `In the next couple of years, babies find it very difficult to understand the working of the human world.
Time goes on, evil rose in understandings of the world.
The angels were scared that if these evil witch and devil recognise their true potential they'll clear out the whole world. 
So they decided to jail them in their city and their home with restricted outings in order to control their prowess for domination.

After seventeen long years, witch rose up to power after she was released by her human captivators in a human jail. 

And this was the biggest mistake in the history of witchcraft and evil. 
Angels reach to intervene but failed miserably. 

Coincidence of dark lord, the devil kid walks in the same jail as the witch.
This created a catastrophic situation for angels.

The evil uprising in the world just got started!`
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