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
import { VideoPlayer } from "../VideoPlayer";
import { Fraseentradaebot } from "../../components/Fraseentradaebot";
import { ImagemHeho } from "../../components/ImagemHeho";
import { PremioImages } from "../../components/PremioImages";
import { SegundaParte } from "../SegundaParte";



export const Teclado = ({  }) => {



////     window.addEventListener("scroll", () => {console.log("ScrollY:", window.scrollY);});

  
const { scrollY } = useScroll();

// Calculate the range based on the scroll position of a specific element
const minScrollY = 4360; 
const maxScrollY = 10552; 

const { scrollYProgress } = useScroll();


const minScrollMeio = 14197 ; 
const maxScrollYMeio = 14344 ; 


const minScrollTexto = 14203 ; 
const maxScrollYTexto = 14587; 




// Map the scrollY value to a new range for animation
const y = useTransform(scrollY, [minScrollY, maxScrollY], [4360, 5852]);


const yMeio = useTransform(scrollY, [maxScrollYMeio, minScrollMeio], [4360, 5852]);
const yTexto = useTransform(scrollY, [minScrollTexto, maxScrollYTexto], [0, -300]);



//////////////////////////////  Scale Teclado   2113 ;    2313; 
const minScrollScale=  1876 ; 
const maxScrollYScale = 2313; 
const ScaleTeclado = useTransform(scrollY, [minScrollScale, maxScrollYScale], [0.7, 1]);

//////////////////////Controle da imagem do teclado
const minScrollTeclado = 0; 
const maxScrolleclado = 1661; 
const minScrollTecladoDois = 1661; 
const maxScrollecladoDois = 2300;   
const minScrollTecladoTres =  2300; 
const maxScrollecladoTres = 4000;   



const yClado = useTransform(scrollY, [minScrollTeclado, maxScrolleclado, minScrollTecladoDois, maxScrollecladoDois,
  minScrollTecladoTres, maxScrollecladoTres



],
  [-750, -750, -750, -1900, -1900, -1700]);




//////////////////////Controle do Y do texto do teclado
const minScrollH1 =  1 ; 
const maxScrollYH1 =  1441; 
const minScrollH1one =  1441 ; 
const maxScrollYH1one = 2000; 
const yH1 = useTransform(scrollY, [minScrollH1, maxScrollYH1, minScrollH1one, maxScrollYH1one],
  [740, 740, 1040, -150]);





  const opacityFraseEscondida = useTransform(scrollYProgress, [0.32, 0.323], [0, 1]);


console.log("Page Height: " + document.documentElement.scrollHeight + " pixels");

  return (
    <div className="containerteclado">
      <div className="divteclado">


          <motion.div
              style={{
                y: yH1,
       
              }}
            >
                <p className="textoH1paratecladodois">
                <span className="textobox1">Todos falam de </span>
                <span className="textobox2">Qualidade</span>
                <span className="textobox1">    Não é verdade?</span>
              </p>
              
              <p className="paragrafoteclado">
              Quando se trata de tradução, localização de sites e softwares, tradução cultural e todo 
              o tipo de conteúdo adaptado para outro idioma, sim, falar de qualidade é imporante.  </p>  
          </motion.div>


          <motion.div
              style={{
                opacity: opacityFraseEscondida
       
              }}
            >
                <p className="fraseEscondida"  style={{ zIndex: 0 }}>
                <span className="textobox1"> </span>
                <span className="textobox2">Qualidade é o Mais Importante</span>
                <span className="textobox1">  </span>
              </p>
              
      
          </motion.div>
          <motion.div
              className="cabendo"

              style={{
                 // Use the y variable to control the vertical position
                scale: ScaleTeclado,
                y: yClado,
             
      
   
              }}    >
              
              <img className="tecladolargocomponente" style={{ zIndex: 2 }} alt="Teclado de tradução" src="/img/teclado-largo.png" />
              </motion.div>


       
 


              </div>

    </div>
  );
};
