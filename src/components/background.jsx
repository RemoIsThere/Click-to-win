// Background.jsx
import React from 'react';
const Background = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: window.innerWidth/2-100,
        width: '100%',
        height: '100%',
        backgroundImage: "url('../components/track.png')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto 100%',
        
        
      }}
    ></div>
  );
};

export default Background;
