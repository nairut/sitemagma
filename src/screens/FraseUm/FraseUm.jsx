import * as React from "react";
import { useEffect } from "react"; // Import useEffect
import { useState } from "react"; 
import { useMotionValue } from "framer-motion";
import { useRef } from "react";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import "./style.css";
import { FaleComUm } from "../../components/FaleComUm";
import { ButtonPortugues } from "../../components/ButtonPortugues/ButtonPortugues";




export const FraseUm = () => {



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
const yHeroCaysa = useTransform(scrollY, [0, 455, 455, 455], [0, -50, -50, -50]);
const xHeroCaysa = useTransform(scrollY, [0, 400, 401, 855], [0, 0, 0, 300]);



const position = useTransform(scrollY, (pos) =>
  pos <= 2000 ? "fixed" : "relative"
);



  return (

    <section ref={extendedRef}  style={{ scale:scaleHeroCaysa, x:xHeroCaysa,  y:yHeroCaysa, position  }}   >

    <motion.div   >
    <div className="FraseUmbox">
    <p >
    <span className="TextoboxFraseUm">Quer destravar seus problemas linguísticos </span>
    <span className="TextoboxFraseUm2">avançar em um novo mercado - </span>
    <span className="TextoboxFraseUm">simplesmente traduzir um documento da empresa?</span>
      </p>

      <FaleComUm />
      </div>





      </motion.div>
      </section>




  );
};
