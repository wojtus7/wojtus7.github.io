import React from 'react';
import './App.css';
import { useMousePos } from './useMousePos';

const shadowMaxOffset = 7;

function App() {
  const { relativeX, relativeY } = useMousePos();

  const shadowStyle = {
    textShadow: `${(relativeX || 0) * shadowMaxOffset}px ${(relativeY || 0) * shadowMaxOffset}px 10px rgba(255,255,255,0.5)`,
    // transform: `translate(${relativeX * -0.5}px, ${relativeY * -0.5}px)`
  };

  return (
    <div style={shadowStyle}>
      <div className="Surname">
        <div>K</div>
        <div>A</div>
        <div>N</div>
        <div>A</div>
        <div>P</div>
        <div>K</div>
        <div>A</div>
      </div>
    </div>
  );
}

export default App;
