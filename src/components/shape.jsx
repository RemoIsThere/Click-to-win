// Shape.jsx
import React from 'react';

const Shape = ({ position }) => {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: position,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '50px',
        height: '30px',
        backgroundColor: '#3498db', // Set your preferred shape color
      }}
    ></div>
  );
};

export default Shape;
