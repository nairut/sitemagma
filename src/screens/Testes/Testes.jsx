import React, { useState, useRef } from 'react';

export const Testes = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const containerRef = useRef();
  const totalImages = 20;
  const imageChangeThreshold = 1; // Adjust this value to set the scroll threshold for image change

  const handleScroll = () => {
    const { scrollTop } = containerRef.current;
    const newIndex = Math.floor(scrollTop / imageChangeThreshold);
    if (newIndex !== currentImageIndex && newIndex >= 0 && newIndex < totalImages) {
      setCurrentImageIndex(newIndex);
    }
  };

  const getImageUrl = (index) => `/img/${index}.png`;

  return (
    <div
      ref={containerRef}
      onScroll={handleScroll}
      style={{ overflowY: 'scroll', height: '100px' }} // Adjust the height and overflow property as needed
    >
      <img src={getImageUrl(currentImageIndex + 1)} alt={`Image ${currentImageIndex + 1}`} />
    </div>
  );
};
