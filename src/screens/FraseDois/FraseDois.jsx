import * as React from "react";
import { useEffect } from "react"; // Import useEffect
import { useState } from "react"; 
import { useMotionValue } from "framer-motion";
import { useRef } from "react";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import "./style.css";
import { ContatoRapido } from "../../components/ContatoRapido";







export const FraseDois = () => {


  const { scrollY } = useScroll()



  //O End do viwport é em cima!

//"end end": It means the animation starts when the end of the element reaches the end of the viewport. 
///In other words, as the user scrolls and the bottom of the element scrolls out of view, the animation begins.

// "start start":  It indicates that the animation should end when the start (top) of 
// the element reaches the start (top) of the viewport. 
// So, as the user continues to scroll and the top of the element comes into view, the animation ends.




//Opacity 0 é quando desaparece

//scroww 1 é quando está em baixo.



///////////////////////////////////////////////////


const scaleSegundahero = useTransform(scrollY, [0, 455], [1, 0.55]);
const ySegundaHero= useTransform(scrollY, [0, 1500, 1800, 2000], [-550, -550, -4050,  -4050]);
const xHeroCaysa = useTransform(scrollY, [0, 400, 401, 855], [0, 0, 0, 300]);


const opacitySegundaHero = useTransform(scrollY, [0, 1000, 1000, 1500, 1500, 1501 ], [0, 0, 0,0, 1, 1]);

const opacity = useTransform(scrollY, [0, 1500, 1500, 1500 ], [1, 1, 1,0]);



  return (

    <section    >

    <motion.div  style={{ y:ySegundaHero, opacity:opacitySegundaHero  }}   >
    <div className="FraseUmbox">
    <p >

    <span className="TextoboxFraseUm">XXXXQuer destravar seus problemas linguísticos </span>
    <span className="TextoboxFraseUm2">avançar em um novo mercado - </span>
    <span className="TextoboxFraseUm">simplesmente traduzir um documento da empresa?XX</span>
      </p>
      <ContatoRapido
          className="fale-com-um-especialista"
          contatoRapidoClassName="fale-com-um-instance"
          
          text="Orçamento Rápido"
        />
      </div>

      </motion.div>
      </section>
  );
};
