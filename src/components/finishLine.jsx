// FinishLine.jsx
import React from 'react';

const FinishLine = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '10px', // Adjust the position as needed
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100px',
        height: '10px',
        backgroundColor: '#27ae60', // Set your preferred color
      }}
    ></div>
  );
};

export default FinishLine;
