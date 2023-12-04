// App.js
import React, { useState, useEffect } from 'react';
import Background from './components/background';
import Shape from './components/shape';
import FinishLine from './components/finishLine';

const App = () => {
  const [shapePosition, setShapePosition] = useState(0);
  const [hasCrossedFinishLine, setHasCrossedFinishLine] = useState(false);

  const handleClick = () => {
    setShapePosition((prevPosition) => prevPosition + 10); // Move the shape downwards
    console.log(shapePosition);
  };

  useEffect(() => {
    const distanceToFinishLine = window.innerHeight;

    if (shapePosition >= distanceToFinishLine && !hasCrossedFinishLine) {
      setHasCrossedFinishLine(true);
    }

    if (shapePosition > distanceToFinishLine && hasCrossedFinishLine) {
      alert('You won!');
      setShapePosition(0); // Reset the shape position
      setHasCrossedFinishLine(false);
    }
  }, [shapePosition, hasCrossedFinishLine]);

  return (
    <div onClick={handleClick} style={{ height: '100vh', overflow: 'hidden' }}>
      <Background />
      <FinishLine />
      <Shape position={shapePosition} />
    </div>
  );
};

export default App;