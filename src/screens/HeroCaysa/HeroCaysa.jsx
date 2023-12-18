import React from "react";
import { Fraseentradaebot } from "../../components/Fraseentradaebot";
import { ImagemHeho } from "../../components/ImagemHeho";
import { useRef } from "react";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import "./style.css";



export const HeroCaysa = () => {

  const targetRef = useRef(null);
  const extendedRef  =  useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "start end"],
  });
  const { scrollYProgress: scrollYProgressIncludingOverlap } = useScroll({
    target: extendedRef,
    offset: ["end end", "end start"],
  });  

  const { scrollY } = useScroll()

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
  [0, 0.5],
  ["0px", "0px"]
);



///////////////////////////////////////////////////

//const opacity = useTransform(scrollYProgressIncludingOverlap, [0, 1], [1, 1]);

const yPositionHeroCaysa= useTransform(scrollY, [0, 864], [0, 64])

//const yPositionHeroCaysa= useTransform(scrollY, [0, 1755, 2750, 3049, 3052, 3649], [0, 0, 0, 0, 0, 600])



const opacity = useTransform(scrollY, [0, 1000, 1000, 1000 ], [1, 1, 1,0]);
const scaleHeroCaysa = useTransform(scrollY, [0, 455], [1, 0.55]);
const yHeroCaysa = useTransform(scrollY, [0, 455, 455, 455], [0, -36, -36, -36]);
const xHeroCaysa = useTransform(scrollY, [0, 400, 401, 855], [0, 0, 0, 312]);



const position = useTransform(scrollY, (pos) =>
  pos <= 2000 ? "fixed" : "relative"
);



return (




    <motion.section  className="hero-caysa">

    <motion.div  ref={extendedRef}  style={{ scale:scaleHeroCaysa, x:xHeroCaysa,  y:yHeroCaysa, position  }}   >



          <div className="div-3">
        <div className="div-wrapper">
          <div className="ellipse-2" />
        </div>
        <div className="overlap-2">
          <div className="turian-2">
            <div className="ellipse-3" />
          </div>
          <div className="frame-4">
            <Fraseentradaebot className="frase-entrada-e" />
            <div className="div-rewards-icons">
              <img className="img-2" alt="Slator svg" src="/img/slator-2023-svg.png" />
              <div className="top-fastest" />
              <img className="img-2" alt="Nimdzi svg" src="/img/nimdzi-2023-svg.png" />
              <img className="frame-svg" alt="Frame svg" src="/img/frame-14349-svg.png" />
            </div>
          </div>
          <ImagemHeho
            className="imagem-heho-component"
            empresaDeTraduOClassName="imagem-heho-instance"
            empresaDeTraduOClassNameOverride="imagem-heho-component-instance"
            frameClassName="design-component-instance-node"
          />
        </div>
      </div>




 


      </motion.div>


</motion.section>

);

}