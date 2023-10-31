import React, { useEffect, useState } from "react";
import "./style.css";
import { NovaHero } from "../../components/NovaHero";
import { ComponenteInferior } from "../ComponenteInferior";
import { LogoCloud } from "../LogoCloud/LogoCloud";



export const Juntando = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const maxScale = 1;
  const minScale = 0.5;
  const maxTranslateY = 200;

  const scale = Math.max(
    minScale,
    maxScale - (scrollY / maxTranslateY) * (maxScale - minScale)
  );

  const translateY = Math.min(maxTranslateY, scrollY);

  return (
    <div className="juntando-container">
      <div
        className="ellipse on-top"
        style={{
          transform: `scale(${scale}) translateY(${translateY}px)`,
        }}
      >
        <div className="centered-content">
          <NovaHero />
        </div>
      </div>
      <ComponenteInferior />
      <LogoCloud />
      <ComponenteInferior />
    </div>
  );
};
