import React from "react";
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

import "./style.css";

export const LogoCloudDois = () => {


////     window.addEventListener("scroll", () => {console.log("ScrollY:", window.scrollY);});

  
  const { scrollY } = useScroll();

  // Calculate the range based on the scroll position of a specific element
  const minScrollY = 14864; // Adjust this value as needed
  const maxScrollY = 15315; // Adjust this value as needed


  
  const minScrollCima = 13720; // Adjust this value as needed
  const maxScrollYCima= 13920  ; // Adjust this value as needed


  const minScrollMeio = 14197 ; // Adjust this value as needed
  const maxScrollYMeio = 14344 ; // Adjust this value as needed


  const minScrollH1 = 13862 ; // Adjust this value as needed
  const maxScrollYH1 = 14420; // Adjust this value as needed


  const minScrollTexto = 14203 ; // Adjust this value as needed
  const maxScrollYTexto = 14587; // Adjust this value as needed

  // Map the scrollY value to a new range for animation
  const y = useTransform(scrollY, [minScrollY, maxScrollY], [0, -200]);
  const yMeio = useTransform(scrollY, [maxScrollYMeio, minScrollMeio], [0, -80]);
  const yH1 = useTransform(scrollY, [minScrollH1, maxScrollYH1], [0, 500]);
  const yTexto = useTransform(scrollY, [minScrollTexto, maxScrollYTexto], [0, -300]);


  const yCima = useTransform(scrollY, [minScrollCima, maxScrollYCima], [0, -250]);



  console.log("Page Height: " + document.documentElement.scrollHeight + " pixels");
  
  return (
    <div className="logo-cloud-dois">
    <div className="div">



    <motion.div
          className="animated-div"
          style={{
            y: y, // Use the y variable to control the vertical position
          }}
        >

      <div className="imagens-de-baixo">
        <img className="element" alt="Element" src="/img/21304097.png" />
        <img
          className="element-design-de"
          alt="Element design de"
          src="/img/21304096-design-de-icone-de-de-arquivo-html-gratis-vetor.png"
        />
        <img
          className="tiff-file-document"
          alt="Tiff file document"
          src="/img/tiff-file-document-icon-vector-24675841-2x.png"
        />
        <img className="images" alt="Images" src="/img/images-3-1.png" />
        <img className="image" alt="Image" src="/img/image-19.png" />
        <img className="img" alt="Image" src="/img/image-25.png" />
        <img className="image-2" alt="Image" src="/img/image-29.png" />
      </div>

      </motion.div>




      <div className="overlap-group">


        

      <motion.div
          className="animated-div"
          style={{
            y: yMeio, // Use the y variable to control the vertical position
          }}
        >
           <img className="imagens-quase-em" alt="Imagens quase em" src="/img/image.png" />
        </motion.div>


        <motion.div
          className="animated-div"
          style={{
            y: yCima, // Use the y variable to control the vertical position
          }}
        >
            <img className="de-cima" alt="De cima" src="/img/decima.png" />
        </motion.div>







        <div className="imagens-do-meio">
          <img className="traducao-de-psd" alt="Traducao de psd" src="/img/traducao-de-psd.png" />
          <img className="adobe-swf-icon" alt="Adobe swf icon" src="/img/adobe-swf-icon.png" />
          <img className="element-2" alt="Element" src="/img/29495.png" />
          <img className="i" alt="I" src="/img/i-441547.png" />
          <img className="element-3" alt="Element" src="/img/115692-200.png" />
          <img
            className="png-clipart-computer"
            alt="Png clipart computer"
            src="/img/png-clipart-computer-icons-music-mp3-mp3-text-logo.png"
          />
          <img className="image-3" alt="Image" src="/img/image-31.png" />
          <img className="image-4" alt="Image" src="/img/image-20.png" />
        </div>


        <motion.div
          className="animated-div"
          style={{
            y: yTexto, // Use the y variable to control the vertical position
          }}
        >
        <p className="text-wrapper">
          Todos os arquivos que você enviar serão traduzidos. Nossas tecnologias de manipulação de arquivos se
          estendem desde um simples PDF até um arquivo complexo, como um modelo 3D altamente detalhado.
        </p>
        </motion.div>


        

      </div>


      <motion.div
          className="animated-div"
          style={{
            y: yH1, // Use the y variable to control the vertical position
          }}
        >
             <div className="texto">
          <div className="hero-text-tradus">
            <p className="p">Nunca Tantos arquivos foram Traduzidos</p>
          </div>
        </div>
        </motion.div>





    </div>
  </div>
  );
};
