import { useTransform, useScroll, motion } from "framer-motion";
import { useRef } from "react";
import "./style.css";
import { useTransform, useScroll } from "framer-motion";
import { HeroCaysa } from "../HeroCaysa/HeroCaysa";
import { LogoCloud } from "../LogoCloud/LogoCloud";
import { LogoCloudDois } from "../LogoCloudDois";
import { VideoPlayer } from "../VideoPlayer";
import { MenuNaoComponent } from "../MenuNaoComponent";
import { FraseUm } from "../FraseUm";
import { CamadaUm } from "../CamadaUm";
import { SegundaHero } from "../SegundaHero";
import { TerceiraHero } from "../TerceiraHero";
import { Teclado } from "../Teclado";
import { FraseDois } from "../FraseDois";
import { useTransform, useScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { QualidadeShopee } from "../QualidadeShopee";
import { Footer } from "../Footer";



export const AoFrameMotion = () => {
  const { scrollY } = useScroll();
  const [variation, setVariation] = useState('HeroCaysa');

  useEffect(() => {
    const unsubscribe = scrollY.onChange(v => {
      if (v <= 1000) {
        setVariation('HeroCaysa');
      } else if (v > 1000 && v <= 1400) {
        setVariation('SegundaHero');
      } else if (v > 1400 && v <= 1500) {
        setVariation('TerceiraHero');
      } else if (v > 1500 && v <=6000) {
        setVariation('QuartoElemento');
      } else {
        setVariation('none');
      }
    });

    return () => unsubscribe();
  }, [scrollY]);


  const [variationDois, setVariationDois,] = useState('HeroCaysa');

  useEffect(() => {
    const unsubscribe = scrollY.onChange(v => {
      if (v >= 7000) {
        setVariationDois('HeroCaysa');
      } else if (v > 7000 && v <= 9000) {
        setVariationDois('SegundaHero');
      } else if (v > 7500 && v <= 7500) {
        setVariationDois('TerceiraHero');
      } else if (v > 7500 && v <=7500) {
        setVariationDois('QuartoElemento');
      } else {
        setVariationDois('none');
      }
    });

    return () => unsubscribe();
  }, [scrollY]);




  //<div className="espaco"></div>



  return (
    <div   className="containerframe">

      <div className="menudois"><MenuNaoComponent /></div>


      <div className={`variacao ${variation}`} style={{ zIndex: 1 }}>

        {variation === 'HeroCaysa' && <HeroCaysa />}
        {variation === 'SegundaHero' && (<><SegundaHero /></>)}
        {variation === 'TerceiraHero' && <TerceiraHero />}
        {variation === 'QuartoElemento' &&  (<><Teclado/></>) }
        {variation === 'QuartoElemento' &&  (<><QualidadeShopee/></>) }

      </div>




      <div className="espaco"></div>
      <LogoCloud/>



<Footer/>

    </div>
  );
};