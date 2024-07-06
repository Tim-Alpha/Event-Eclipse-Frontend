import React from 'react';
import '../../css/Star.css';

const Star = ({ size, position, duration }) => {
  const style = {
    left: `${position.x}%`,
    top: `${position.y}%`,
    width: `${size}px`,
    height: `${size}px`,
    animationDuration: `${duration}s`
  };

  return <div className="star" style={style}></div>;
};

export default Star;
