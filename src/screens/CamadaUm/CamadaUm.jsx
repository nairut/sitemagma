import React from "react";
import { Fraseentradaebot } from "../../components/Fraseentradaebot";
import { ImagemHeho } from "../../components/ImagemHeho";
import { useRef } from "react";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import "./style.css";
import { HeroCaysa } from "../HeroCaysa/HeroCaysa";
import { FraseUm } from "../FraseUm/FraseUm";



export const CamadaUm = () => {

  const targetRef = useRef(null);
  const extendedRef  =  useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });
  const { scrollYProgress: scrollYProgressIncludingOverlap } = useScroll({
    target: extendedRef,
    offset: ["end end", "end start"],
  });  

//"end end": It means the animation starts when the end of the element reaches the end of the viewport. 
///In other words, as the user scrolls and the bottom of the element scrolls out of view, the animation begins.

// "start start":  It indicates that the animation should end when the start (top) of 
// the element reaches the start (top) of the viewport. 
// So, as the user continues to scroll and the top of the element comes into view, the animation ends.


const x = useTransform(
  scrollYProgressIncludingOverlap,
  [0.8 , 1],
  ["0px", "280px" ]
);

const scale = useTransform(
  scrollYProgressIncludingOverlap,
  [0, 0.5],
  [1, 0.55]
);


const y = useTransform(
  scrollYProgressIncludingOverlap,
  [0, 1],
  ["0px", "500px"]
);


const position = useTransform(scrollYProgress, (pos) =>
  pos > 0 && pos < 1 ? "relative" : "fixed"
);


const opacity = useTransform(scrollYProgress, [0.6, 1], [0, 1]);

///////////////////////////////////////////////////


return (




    <motion.section   className="camadaUm"  >





          <motion.div ref={extendedRef}  style={{ scale, x, y }}  className="divCamada"  >
          <HeroCaysa/>
          </motion.div>

          
          <motion.div ref={targetRef}  style={{ opacity }}    >
          <FraseUm/>
          </motion.div>





</motion.section>

);

}