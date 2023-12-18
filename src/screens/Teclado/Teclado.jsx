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
import { FaleComUm } from "../../components/FaleComUm";
import { ContatoRapido } from "../../components/ContatoRapido";
import { TerceiraHero } from "../TerceiraHero";






export const Teclado = ({  }) => {

  const { scrollY } = useScroll()


  


  const yPosition = useTransform(scrollY, [0, 855, 855, 855 ], [1, 1, 1,0]);

////     window.addEventListener("scroll", () => {console.log("ScrollY:", window.scrollY);});

  







const yPositionFraseTeclado = useTransform(scrollY, [0, 1755, 2750, 3049, 3052, 3649], [0, 0, 0, 0, 0, 600])
const yPositionSegredo = useTransform(scrollY, [0, 1755, 2750, 3049, 3652, 4049], [1000, 1000, 1000, 1000, 1000, 1000])

const position = useTransform(scrollY, (pos) =>
  pos <= 4000 ? "fixed" : "relative"
);


const scale = useTransform(scrollY, [2000, 2000, 2372, 2750 ], [0.6, 0.6, 0.6, 1]);



const yPositionTeclado = useTransform(scrollY, [2750, 4550], [0, 2050]);

const yAvaliacoes = useTransform(scrollY, [2750, 4550], [0, 1800]);

const ySegredo = useTransform(scrollY, [2750, 4550], [0, 1800]);


const opacitySegredo = useTransform(scrollY, [2750, 2751], [0, 1]);

const opacityAvaliacoes = useTransform(scrollY, [2750, 2751], [0, 1]);



  return (


    <div className="teclado">
      <div className="div-2">
        <img className="turian" alt="Turian" src="/img/turian.png" />
        <div className="ellipse-wrapper">
          <div className="ellipse" />
        </div>
        <FaleComUm className="fale-com-um-especialista" property1="default" />
        <div className="group">
          <p className="quer-destravar-seus">
            <span className="span">Quer destravar seus problemas linguísticos </span>
            <span className="text-wrapper-2">avançar em um novo mercado - </span>
            <span className="span">ou implesmente traduzir um documento da empresa?</span>
          </p>
          <ContatoRapido
            className="contato-rapido-instance"
            contatoRapidoClassName="design-component-instance-node"
            property1="default"
            text="Orçamento Rápido"
          />
        </div>
        <img className="terceira-hero" alt="Terceira hero" src="/img/terceiraheroescalado.png" />








        <p className="todos-falam-de">
          <span className="span">Todos falam de </span>
          <span className="text-wrapper-2">Qualidade - </span>
          <span className="span">não é verdade?</span>
        </p>

        <div className="overlap-group">



        <motion.div         style={{ y:ySegredo, opacity:opacitySegredo}}                >
        <div className="segredo">Segredo</div>
 
          </motion.div>

          <p className="p">
            Quando se trata de tradução, localização de sites e softwares e uso de inteligência artificial, sim, falar
            de qualidade é importante.
          </p>

          <motion.div         style={{ y:yAvaliacoes, opacity:opacityAvaliacoes}}                >
          <p className="avaliacoes">Avaliações constantes são o nosso</p>
          </motion.div>

          <motion.div         style={{scale, y:yPositionTeclado}}                >
          <img className="img" alt="Teclado" src="/img/teclado.png" />
          </motion.div>




        </div>
      </div>
    </div>
 


  );
};
