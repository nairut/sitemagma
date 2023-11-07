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
import "./style.css";
import { LogoCloud } from "../LogoCloud/LogoCloud";
import { LogoCloudDois } from "../LogoCloudDois";




export const Juntando = () => {




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
  const scale = useTransform(scrollYProgress, [0, 0.06], [1, 0.7]);
  const x = useTransform(scrollYProgress, [0.08, 0.2], [0, 200]);    
  //This means that when scrollYProgress is at 0.1, the output value will be 0, and when scrollYProgress is at 0.9, the output value will be 300

  const scaleSecond = useTransform(scrollYProgress, [0.1, 0.1], [0.7, 0.7]);
  const xSecond = useTransform(scrollYProgress, [0.1, 0.2], [0, 300]);



  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const controls = useAnimation();


  const zIndex = useTransform(scrollYProgress, [0, 0.8], [6, 0]);


  // Create a custom motion value for scrollY
  const customScrollY = useMotionValue(0);






  return (
    <div className="containerdois">
      <div className="juntandodois">  

      <div className="menudois">
      <MenuComponent/>

</div>



          <div className="paratextbox">
     
              <motion.div
              className="sticky primeiraHero"
                style={{
                  scale: scale,    // Use the scale variable here
                  x: x,    // Use the x variable to control horizontal movement
     
                  zIndex: zIndex,
                 }}>
                <HeroCaysa  /> {/* Apply animation to HeroCaysa */}
              </motion.div>

              <motion.div
              className="sticky segundaHeronew"
                style={{
                  scale: scaleSecond,    // Use the scale variable here
                  x: x,    // Use the x variable to control horizontal movement

                 }}>
                    <TraducoesBem/>
              </motion.div>

 
          </div>

        <div className="componenteinferior">
          
        <ComponenteInferior/>  
        <LogoCloudDois />
        <HeroCaysa  /> 

  
        </div>
        <div className="textobox"></div>

      </div>
    </div>
  );
};
