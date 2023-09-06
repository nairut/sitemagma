import React, { useState, useEffect } from "react";
import "./style.css";
import { Main } from "../Main";

export const Testes = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [imageScale, setImageScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition);

      // Calculate the scale based on scroll position
      const maxScale = 2; // Maximum scale factor
      const maxScrollPosition = 150; // Maximum scroll position to stop scaling
      const scaleFactor = Math.min(
        1 + Math.min(currentPosition, maxScrollPosition) / 500,
        maxScale
      );
      setImageScale(scaleFactor);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="frame">
      <div className="div">
        {/* ... other elements ... */}


        


        <img
          className="keyboard"
          alt="Keyboard"
          style={{ transform: `scale(${imageScale})` }}
          src="/img/teclado.png"
        />

<Main/>





      </div>
    </div>
  );
};
