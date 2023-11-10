import React from "react";
import { Fraseentradaebot } from "../../components/Fraseentradaebot";
import { ImagemHeho } from "../../components/ImagemHeho";
import { PremioImages } from "../../components/PremioImages";

import * as React from "react";
import { useEffect } from "react"; // Import useEffect
import { useState } from "react"; 
import { useMotionValue } from "framer-motion";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import { HeroCaysa } from "../HeroCaysa/HeroCaysa";
import { ComponenteInferior } from "../ComponenteInferior/ComponenteInferior";
import { TraducoesBem } from "../TraducoesBem";
import { Menu } from "../../components/Menu";
import { MenuComponent } from "../../components/MenuComponent";
import { LogoCloud } from "../LogoCloud/LogoCloud";
import { LogoCloudDois } from "../LogoCloudDois";
import "./style.css";

export const HeroCaysa = () => {



  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    // Update the scroll position when the user scrolls
    setScrollY(window.scrollY);
  };

  // Attach a scroll event listener to update scrollY
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0.11, 0.12], [1, 0.6]);
  const x = useTransform(scrollYProgress, [0.08, 0.2], [0, -400]);    
  //This means that when scrollYProgress is at 0.1, the output value will be 0, and when scrollYProgress is at 0.9, 
  //the output value will be 300

  const scaleSecond = useTransform(scrollYProgress, [0.1, 0.1], [0.7, 0.7]);
  const xSecond = useTransform(scrollYProgress, [0.1, 0.2], [0, 300]);



  const opacity = useTransform(scrollYProgress, [0.04,  0.05], [1, 1]);
  const controls = useAnimation();


  const zIndex = useTransform(scrollYProgress, [0, 0.7], [5, 1]);


  // Create a custom motion value for scrollY
  const customScrollY = useMotionValue(0);



///////////////////////////////////////////////////

  return (
    <div className="hero-caysa">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="turian-2" />
          <div className="ellipse-wrapper">
            <div className="ellipse" />
          </div>
          <div className="turian-3">
            <div className="ellipse-2" />
          </div>
    

              <div className="frame-3">
            <Fraseentradaebot className="frase-entrada-e" />
            <PremioImages className="premio-images-instance" topFastestClassName="design-component-instance-node" />
          </div>


          <ImagemHeho
            className="imagem-heho-component"
            empresaDeTraduOClassName="imagem-heho-instance"
            empresaDeTraduOClassNameOverride="imagem-heho-component-instance"
            frameClassName="imagem-heho-2"
          />
        </div>
      </div>
    </div>
  );
};
