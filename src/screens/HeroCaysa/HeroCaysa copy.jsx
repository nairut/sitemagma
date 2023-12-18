import React from "react";
import { Fraseentradaebot } from "../../components/Fraseentradaebot";
import { ImagemHeho } from "../../components/ImagemHeho";
import { useRef } from "react";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import "./style.css";



export const HeroCaysa = () => {


const targetRef = useRef(null);

const { scrollYProgress } = useScroll({
  target: targetRef,
  offset: ["end start", "end end"],
}); //segunda parte é para quando está voltando.
//o topo do elemento atingiu o começo da tela.






const x = useTransform(
  scrollYProgress,
  [0, 1],
  ["0vw", "100vw"]
);



///////////////////////////////////////////////////


return (


  <section useRef={targetRef} >
    <div  >
      <div >
        <div className="flex justify-center">


    <div className="hero-caysa">
    <motion.div style={{ x }} >



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
    </div>


 
        </div>
      </div>
    </div>
  </section>

);

}