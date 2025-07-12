import React from 'react';
import './BackgroundElements.css';

const BackgroundElements = () => {
  return (
    <div className="background-elements">
      {/* Floating books */}
      <div className="floating-book book-1">
        <div className="book-cover">
          <div className="book-title">Ancient Spells</div>
          <div className="book-sparkle">📚</div>
        </div>
      </div>
      
      <div className="floating-book book-2">
        <div className="book-cover">
          <div className="book-title">Magic Theory</div>
          <div className="book-sparkle">📖</div>
        </div>
      </div>
      
      <div className="floating-book book-3">
        <div className="book-cover">
          <div className="book-title">Potions Guide</div>
          <div className="book-sparkle">🔮</div>
        </div>
      </div>

      {/* Potion bottles */}
      <div className="potion-bottle bottle-1">
        <div className="bottle-body">
          <div className="potion-liquid blue-potion"></div>
          <div className="bottle-neck"></div>
          <div className="bottle-cork"></div>
        </div>
        <div className="bottle-glow"></div>
      </div>
      
      <div className="potion-bottle bottle-2">
        <div className="bottle-body">
          <div className="potion-liquid green-potion"></div>
          <div className="bottle-neck"></div>
          <div className="bottle-cork"></div>
        </div>
        <div className="bottle-glow"></div>
      </div>
      
      <div className="potion-bottle bottle-3">
        <div className="bottle-body">
          <div className="potion-liquid purple-potion"></div>
          <div className="bottle-neck"></div>
          <div className="bottle-cork"></div>
        </div>
        <div className="bottle-glow"></div>
      </div>

      {/* Candles */}
      <div className="candle candle-1">
        <div className="candle-body"></div>
        <div className="candle-flame">
          <div className="flame-core"></div>
          <div className="flame-outer"></div>
        </div>
        <div className="candle-base"></div>
      </div>
      
      <div className="candle candle-2">
        <div className="candle-body"></div>
        <div className="candle-flame">
          <div className="flame-core"></div>
          <div className="flame-outer"></div>
        </div>
        <div className="candle-base"></div>
      </div>

      {/* Glowing orbs */}
      <div className="glowing-orb orb-1">
        <div className="orb-core"></div>
        <div className="orb-aura"></div>
        <div className="orb-sparkles">
          <div className="sparkle">✨</div>
          <div className="sparkle">⭐</div>
        </div>
      </div>
      
      <div className="glowing-orb orb-2">
        <div className="orb-core"></div>
        <div className="orb-aura"></div>
        <div className="orb-sparkles">
          <div className="sparkle">✨</div>
          <div className="sparkle">⭐</div>
        </div>
      </div>
      
      <div className="glowing-orb orb-3">
        <div className="orb-core"></div>
        <div className="orb-aura"></div>
        <div className="orb-sparkles">
          <div className="sparkle">✨</div>
          <div className="sparkle">⭐</div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundElements; 