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
const minScrollY = 4360; // Adjust this value as needed
const maxScrollY = 10552; // Adjust this value as needed



const minScrollTeclado = 4481; // Adjust this value as needed
const maxScrolleclado = 4980;  // Adjust this value as needed


const minScrollCladodois = 5538; // Adjust this value as needed
const maxScrollYCladodois = 9756;  // Adjust this value as needed



const yClado = useTransform(scrollY,
  [minScrollTeclado, maxScrolleclado, 
    minScrollCladodois, maxScrollYCladodois], 
  [4415, 4300,
  5056, 4556]);





const minScrollMeio = 14197 ; // Adjust this value as needed
const maxScrollYMeio = 14344 ; // Adjust this value as needed


const minScrollH1 = 13862 ; // Adjust this value as needed
const maxScrollYH1 = 14420; // Adjust this value as needed


const minScrollTexto = 14203 ; // Adjust this value as needed
const maxScrollYTexto = 14587; // Adjust this value as needed


const minScrollScale= 4415 ; // Adjust this value as needed
const maxScrollYScale = 4915; // Adjust this value as needed




// Map the scrollY value to a new range for animation
const y = useTransform(scrollY, [minScrollY, maxScrollY], [4360, 5852]);
const yMeio = useTransform(scrollY, [maxScrollYMeio, minScrollMeio], [4360, 5852]);
const yH1 = useTransform(scrollY, [minScrollH1, maxScrollYH1], [0, 500]);
const yTexto = useTransform(scrollY, [minScrollTexto, maxScrollYTexto], [0, -300]);

const ScaleTeclado = useTransform(scrollY, [minScrollScale, maxScrollYScale], [0.7, 1]);






console.log("Page Height: " + document.documentElement.scrollHeight + " pixels");

  return (
    <div className="containerteclado">
      <div className="div">


<motion.div
              className="stickyss"

  
              className="animated-div"
              style={{
                y: y, // Use the y variable to control the vertical position
              }}
            >
                <p className="textoH1parateclado">
                <span className="textobox1">Várias Soluções </span>
                <span className="textobox2">Ao alcance  - </span>
                <span className="textobox1">dos seus dedos.</span>
              </p>
              <p className="textoparateclado">
              iMac features a color-matched keyboard, mouse, and trackpad. 
              Magic Keyboard with Touch ID lets you easily and securely unlock your iMac, 
              switch users, use Apple Pay, and download apps.10 And Magic Mouse and Magic 
              Trackpad make navigation comfortable and intuitive.
              </p>  
              </motion.div>


              <motion.div
              className="cabendo"

              style={{
                y: yClado, // Use the y variable to control the vertical position
                scale: ScaleTeclado,
                
   
              }}    >
              
              <img className="tecladolargocomponente" alt="Turian" src="/img/teclado-largo.png" />
              </motion.div>

              </div>

    </div>
  );
};
