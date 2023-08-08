import React, { useState, useRef } from 'react';

export const Testes = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const containerRef = useRef();
  const imageUrls = [
    'url_of_image_1.jpg',
    'url_of_image_2.jpg',
    // Add the URLs of the rest of your images here
  ];
  const imageChangeThreshold = 200; // Adjust this value to set the scroll threshold for image change

  const handleScroll = () => {
    const { scrollTop } = containerRef.current;
    const newIndex = Math.floor(scrollTop / imageChangeThreshold);
    if (newIndex !== currentImageIndex) {
      setCurrentImageIndex(newIndex);
    }
  };

  return (
    <div
      ref={containerRef}
      onScroll={handleScroll}
      style={{ overflowY: 'scroll', height: '400px' }} // Adjust the height and overflow property as needed
    >
      <img src={imageUrls[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
    </div>
  );
};
