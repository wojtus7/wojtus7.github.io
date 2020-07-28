import React from 'react';
import './App.css';
import './Dots.css';
import Colors from './Colors';
import SurnameLetters from './SurnameLetters';

const spaceBetweenDots = 50;
const dotSize = 16;
const dotOpacity = 0.3;

function App() {
  const someTableLol = [];

  for (let i = 0; i < 35; i++) {
    for (let j = 0; j < 50; j++) {
      someTableLol.push(
        <div
          class="BackgroundDot"
          style={{
            animationDuration: `${Math.floor(Math.random() * Colors.length * 4) + 2}s`,
            height: dotSize,
            width: dotSize,
            borderRadius: dotSize / 2,
            backgroundColor: Colors[Math.floor(Math.random() * Colors.length) + 1],
            top: i * spaceBetweenDots,
            left: j * spaceBetweenDots,
          }}
        />
      );
    }
  }

  return (
    <div className="App">
        <div class="DotsContainer">
          {someTableLol}
        </div>
        <SurnameLetters />
    </div>
  );
}

export default App;
