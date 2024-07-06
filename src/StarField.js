import React from 'react';
import Star from './Star';

const StarField = () => {
  const numStars = 100; // Adjust the number of stars here

  const randomPosition = () => ({
    x: Math.random() * 100,
    y: Math.random() * 100
  });

  const randomSize = () => Math.random() * 3 + 2; // Stars size between 1px and 4px

  const randomDuration = () => Math.random() * 5 + 1; // Animation duration between 5s and 10s

  return (
    <div className="star-field">
      {Array.from({ length: numStars }).map((_, index) => (
        <Star
          key={index}
          size={randomSize()}
          position={randomPosition()}
          duration={randomDuration()}
        />
      ))}
    </div>
  );
};

export default StarField;
