import React from "react";
import { FaleComUm } from "../../components/FaleComUm";
import { useRef } from "react";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import "./style.css";








export const SegundaHero = () => {






  const { scrollY } = useScroll()

  const position = useTransform(scrollY, (pos) =>
  pos <= 2000 ? "fixed" : "relative"
);




  return (

    <motion.div  style={{ position  }} >
    <div   className="segunda-hero">
      <div className="div">
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
          <FaleComUm
            className="fale-com-um-especialista-instance"
            divClassName="fale-com-um-instance"
            property1="default"
          />
        </div>
        <img className="img" alt="Segunda hero" src="/img/segundaheroescalado.png" />
      </div>
    </div>
    </motion.div>
  );
};
