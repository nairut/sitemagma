import React, { useRef, useState, useEffect } from 'react';

export function VideoPlayer() {
  const videoRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [normalizedScrollPosition, setNormalizedScrollPosition] = useState(0);

  const handleScroll = () => {
    // Calculate the new scroll position and normalized scroll position.
    const newPosition = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    setScrollPosition(newPosition);
    setNormalizedScrollPosition(newPosition / maxScroll);
  };

  useEffect(() => {
    const handleMetadataLoaded = () => {
      const videoDuration = videoRef.current.duration;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const newTime = (normalizedScrollPosition * maxScroll / videoDuration);
      videoRef.current.currentTime = newTime;
    };

    window.addEventListener('scroll', handleScroll);
    videoRef.current.addEventListener('loadedmetadata', handleMetadataLoaded);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      videoRef.current.removeEventListener('loadedmetadata', handleMetadataLoaded);
    };
  }, [normalizedScrollPosition]);

  return (
    <div>
      <video ref={videoRef} >
        
      </video>
      <p>Scroll position: {scrollPosition}</p>
      <p>Normalized Scroll position: {normalizedScrollPosition.toFixed(2)}</p>
    </div>
  );
}
