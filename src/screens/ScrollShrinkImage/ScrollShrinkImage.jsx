import React, { useEffect, useState } from "react";
import "./style.css"; // Import your CSS file

const ScrollShrinkImage = () => {
  const [imageWidth, setImageWidth] = useState(100);

  // Update the image width based on scroll position
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const newWidth = 100 - scrollY * 0.1; // Adjust the factor to control the shrinking speed

    // Ensure the image width stays within a certain range (e.g., between 50% and 100%)
    setImageWidth(Math.max(50, Math.min(100, newWidth)));
  };

  // Add scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="scroll-shrink-image">
      <img
        alt="Hardware"
        src="/img/hardware-c3gyf06xrno2-large-2.png"
        style={{ width: `${imageWidth}%` }}
      />
    </div>
  );
};

export default ScrollShrinkImage;
