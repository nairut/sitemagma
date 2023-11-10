import * as React from "react";
import { useEffect } from "react"; // Import useEffect
import { useState } from "react"; 
import { useMotionValue } from "framer-motion";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import { HeroCaysa } from "../HeroCaysa/HeroCaysa";
import { ComponenteInferior } from "../ComponenteInferior/ComponenteInferior";
import { TraducoesBem } from "../TraducoesBem";
import { Menu } from "../../components/Menu";

import { LogoCloud } from "../LogoCloud/LogoCloud";
import { LogoCloudDois } from "../LogoCloudDois";
import { VideoPlayer } from "../VideoPlayer";
import { Fraseentradaebot } from "../../components/Fraseentradaebot";
import { ImagemHeho } from "../../components/ImagemHeho";
import { PremioImages } from "../../components/PremioImages";
import { SegundaParte } from "../SegundaParte";
import { Teclado } from "../Teclado";
import { SegundaHero } from "../SegundaHero";
import { MenuComponent } from "../../components/MenuComponent";
import { MenuNaoComponent } from "../MenuNaoComponent";
import { TerceiraHero } from "../TerceiraHero";
import "./style.css";
import { AreasDeAtuacao } from "../AreasDeAtuacao";
import { HeroCaysaScreen } from "../HeroCaysaScreen/HeroCaysaScreen";
import { MosaicoClientes } from "../MosaicoClientes/MosaicoClientes";
import { OqFazemos } from "../OqFazemos";
import { OsDepoimentos } from "../OsDepoimentos";
import { OsDepoimentosScreen } from "../OsDepoimentosScreen";
import { QualidadeShopee } from "../QualidadeShopee";
import { QualidadeShopeeScreen } from "../QualidadeShopeeScreen/QualidadeShopeeScreen";
import { SegundaHeroScreen } from "../SegundaHeroScreen/SegundaHeroScreen";
import { TerceiraHeroScreen } from "../TerceiraHeroScreen/TerceiraHeroScreen";
import { TiposdeMateriais } from "../TiposdeMateriais/TiposdeMateriais";
import { TiposdeMateriaisScreen } from "../TiposdeMateriaisScreen/TiposdeMateriaisScreen";
import { FaleComUm } from "../../components/FaleComUm";





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
  const scaleHeroCaysa = useTransform(scrollYProgress, [0, 0.05], [1, 0.5]);
  const scale = useTransform(scrollYProgress, [0, 0.05], [1, 0.5]);
  const x = useTransform(scrollYProgress, [0.0, 0.14], [0, 290]); 
  const xSecond = useTransform(scrollYProgress, [0.1, 0.2], [0, 300]);  

  //Teclado Abaixo
 
  const yTextosTeclado = useTransform(scrollYProgress, [0.06, 0.08], [1, 200]); 
  const yTerceiraHero = useTransform(scrollYProgress, [0.20, 0.25], [1, -700]); 


  const opacityFraseTeclado = useTransform(scrollYProgress, [0.27, 0.30], [1, 1]);
  
  //This means that when scrollYProgress is at 0.1, the output value will be 0, and when scrollYProgress is at 0.9, 
  //the output value will be 300

  const scaleSecond = useTransform(scrollYProgress, [0.1, 0.1], [0.7, 0.7]);


  const opacity = useTransform(scrollYProgress, [0.159,  0.16], [1, 0]);
  const opacityFraseDois = useTransform(scrollYProgress, [0.159, 0.16, 0.179, 0.18], [0, 1, 1, 0]);
  const opacityFraseTres = useTransform(scrollYProgress, [0.179, 0.18, 0.24, 0.26], [0, 1, 1, 0]);

  
  const  OpacitySegHero = useTransform(scrollYProgress, [0.179, 0.18], [1, 0]);
  const  OpacityTercHero = useTransform(scrollYProgress, [0.28,  0.29], [1, 0]);

  const controls = useAnimation();

  const zIndex = useTransform(scrollYProgress, [0, 0.7], [5, 1]);

  // Create a custom motion value for scrollY
  const customScrollY = useMotionValue(0);

///////////////////////////////////////////////////


  return (
    <div className="containerdois">
      <div className="juntandodois">  
        <div className="menudois">
        <MenuNaoComponent/> 
                <div className="videoplayer">
                            <VideoPlayer/> 
          </div>
        </div>
        <div className="paratextboxdois">
          <motion.div
            className="sticky primeiraHero"
              style={{
                scale: scaleHeroCaysa,    // Use the scale variable here
                x: x,    // Use the x variable to control horizontal movement
                zIndex: zIndex,
                opacity: opacity,
                 }}>
                <HeroCaysa  /> {/* Apply animation to HeroCaysa */}
          </motion.div>




          <motion.div
            className="sticky segundaHeronew"
              style={{
                scale: scale,   
                  x: x,    
                  opacity: OpacitySegHero,
                }}>
                  <SegundaHero/>
          </motion.div>


              <motion.div
              className="sticky TerceiraHeronew "
                style={{
                  scale: scale,    
                  x: x,    
                  opacity: OpacityTercHero,
                  y: yTerceiraHero,
                  
                 }}>
                   <TerceiraHero/>
                 
              </motion.div>

            
        </div>

        <div className="sticksdsdfy">
              <Teclado/>
              </div>

        <div className="componenteinferior">

          
  
  <QualidadeShopee/>
            


        <LogoCloudDois />
        <HeroCaysa  /> 

  
        </div>

            <motion.div
              className="sticky primeiraHero"
                style={{
                    // Use the scale variable here
                 // Use the x variable to control horizontal movement
                  opacity: opacityFraseDois,

                 }}>
                  <FaleComUm  />
                 <p className="textoboxOne">
                <span className="textobox1">Quer destravar seus problemas linguísticos </span>
                <span className="textobox2">avançar em um novo mercado - </span>
                <span className="textobox1">simplesmente traduzir um documento da empresa?</span>
                  </p>
           
            </motion.div>
     


            <motion.div
              className="sticky primeiraHero"
                style={{
                    // Use the scale variable here
                 // Use the x variable to control horizontal movement
                  opacity: opacityFraseTres,
                  y: yTerceiraHero,

                 }}>
                 <p className="textoboxTres">
                <span className="textobox1">XXXXXXXQuer destravar seus problemas linguísticos </span>
                <span className="textobox2">avançar em um novo mercado - </span>
                <span className="textobox1">simplesmente traduzir um documento da empresa?</span>
                  </p>
            </motion.div>

              

      </div>
    </div>
  );
};
