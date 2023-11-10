import React from "react";
import { FaleComUm } from "../../components/FaleComUm";
import "./style.css";

export const TerceiraHero = () => {
  return (
    <div className="terceira-hero">
      <div className="div-2">
        <img className="turian" alt="Turian" src="/img/turian.png" />
        <div className="ellipse-wrapper">
          <div className="ellipse" />
        </div>
        <FaleComUm className="fale-com-um-especialista" divClassName="fale-com-um-instance" property1="default" />
        <div className="overlap">
          <div className="group">
            <div className="overlap-group-2">
              <div className="frame-3" />
              <img className="img" alt="Div absolute" src="/img/div-absolute.png" />
            </div>
            <div className="empresa-de-traduo" />
            <div className="empresa-de-traduo-2" />
          </div>
          <img className="normais-traducao" alt="Normais traducao" src="/img/normais-traducao-1-1.png" />
          <img className="translation-normal" alt="Translation normal" src="/img/translation-normal-people-1-1.png" />
          <img className="service-translation" alt="Service translation" src="/img/service-translation-2.png" />
          <img className="alltranslation" alt="Alltranslation" src="/img/alltranslation.png" />
        </div>
      </div>
    </div>
  );
};
