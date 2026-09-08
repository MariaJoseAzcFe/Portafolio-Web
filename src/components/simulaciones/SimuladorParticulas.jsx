import React from 'react';
import Sketch from 'react-p5';

function SimuladorParticulas() {
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(window.innerWidth, window.innerHeight).parent(canvasParentRef);
  };

  const draw = (p5) => {
    p5.background(20, 20, 20); // Un gris oscuro estilo retro
    p5.fill(255, 255, 0); // Amarillo arcade
    p5.ellipse(p5.width/2, p5.height/2, 100, 100);
  };

  return <Sketch setup={setup} draw={draw} />;
}

export default SimuladorParticulas;