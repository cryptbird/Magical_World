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
      title: "Chapter III: Kots vs Gwals",
      content: `In this new world, both devil and witch find their own friends.
Both live their different lives at a completely different pace.
Just one day, finally they meet!
Smiling at each other's faces not knowing anything about each other.

Time passes, they join the same cult.
Spending more time together. 
But sharing the same cult has its own limitations. It ended the devil hating the witch for not giving him the primous solace of attention, the eternal charm, which devil loved.

The Devil of land of kots started planning the end of the witty witch of land of gwals.

`
    },
    {
      title: "Chapter IV: Witch and the gate of immortality",
      content: `The hate for the witch increased when devil was thrown out of the cult for protesting against witch’s friends.

Time passes, the cult fails, friends cheat, blood stained, fights went on.

Hate destroy the worlds of eternals, but emmense hate opens up the gates for immortality, where lies the potion of love.

At the end of the war against the cult, when devil was about to break, someone saves him, takes his hand and covers it over, it was the witch.

The witch saves the devil and elopes to the dark portal of clouds with no connections to the cult world. Leaving back her friends to save an enemy. 

This hate opened the gate of love.
`
    },
    {
      title: "Chapter V: Devil and the stone of eternal power of people",
      content: `Time passes, devil and witch starts their own cult👥.
They grew, they met new people, loved more and broader life.
Increased their connections to the outer world.
In the thirst of power they fought, they prayed, they lived, but never turned back.

Years passed, evil grew in power. Their goal was the stone of eternal power of people. No matter how much they meet people, they were not even close to the stone. Making them angrier ad frustrated.

Devil forgot the existence of witch in the thirst of completeness and finding the stone of eternal power of people, which could give him the full control of his world.

He walked and walked and never looked at the witch who was waiting for a friend she helped to return and talk.
She continued learning new skills and dark magic.

The life was struck and the jail time was towards the end. 
The never ending desire of the stone and never fulfilling desire of a friend was burning the dark hearts of evil.
`
    },
    {
      title: "Chapter VI: Angels cried",
      content: `The life was struck and the jail time was towards the end. 
Devil was still far from his beloved stone, lost in dark clouds of ignorance. 

One day while searching for the stone alone he realised the absence of the witch when he turns back to see her far away.
He walks towards her and she gets away. As much he walks, that much she gets far away. As if some force was pushing her away. 
Devil in frustration throws everything he had in his hands, including the only map for the stone of eternal power of people. 
As the devil throws the map, witch stops moving away, the force was no longer there, the devil was closer to the witch with each step it was taking. 
Closer and closer and closer and closer
And bam the devil hugs the witch, crying in agony of thoughts of losing her. 
The hug was tight, fulfilling for devil, satisfying for his tears, enough for his words, relaxation for his eyes, sensation for his hands, rejuvenation for his mind.
In that second the nature paused, the angels cried, the water paused, the air didn't flow, the light in the eyes was as bright as a blind. And within a blink of an eye a stone comes out of the heart of the witch.

The stone of people which the devil seeked around the world, was within the witch. Devil's witch!
`
    },
    {
      title: "Chapter VII: The witch's tale",
      content: `When I hugged you that day, it was complete. 
When I told you that day, about everything i thought, it was relaxing.
When I thought I lost you, you won me.
When I said laugh, you didn't, then we both laughed.
When I said, eat your shit, you said eat with me. (Your shit was tasty though :P )
When I slept, you stared.
When I cried, you slapped.
When I slapped, you cried ;).
When I needed, you came.
When I came, you didn't cum (yeah that's frustrating ;) ).
When you loved, I cried.
Because you are so special to me that I can't express them in mere words. What draupadi to krishna was, what Hermione to harry was, what Noah to Nick was ;) ,is what you are to me.
You are not unique, you are me ( without a dick and an extra hole :) ). Like I am a slow minded confused cute lovable devil, you are a slow minded confused ugly lovable witch and also cute bhi ;) . We are not unique, we are just one, can't be compared, can't be cloned, can't be copied, can't be seperated, can't be mended, can't be bitched about, can't be broken, can’t be mended with, can't be strangers. 
I know you, what you feel when I do such dumb things. I feel guilty of it, then I don't know what to do to make them right, then I go to my witch then she tells me how to mend things, then I try to mend things, then you laugh. It's a vicious cycle motu. And it will go on for ever. I am crying, I don't even know why, actually I know, I miss you. I want that complete hug, I want that stone of satisfaction which you carry with each hug of yours. 
I miss you witch
I love you!!!`
    }
    // ,
    // {
    //   title: "Chapter VIII: The Great Awakening",
    //   content: "As the final chapter unfolds, the apprentice realizes that the true magic was not in the spells or potions, but in the journey itself. The transformation from student to master is complete, and now it is time to pass on the knowledge, to become the teacher who will guide the next generation of dreamers and believers into the magical world."
    // }
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