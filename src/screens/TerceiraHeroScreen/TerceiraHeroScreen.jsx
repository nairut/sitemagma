import React from "react";
import { FaleComUm } from "../../components/FaleComUm";
import "./style.css";

export const TerceiraHeroScreen = () => {
  return (
    <div className="terceira-hero-screen">
      <div className="terceira-hero-2">
        <img className="turian-7" alt="Turian" src="/img/turian.png" />
        <div className="turian-8">
          <div className="ellipse-6" />
        </div>
        <FaleComUm className="fale-com-um-4" property1="default" />
        <div className="overlap-3">
          <div className="group-4">
            <div className="overlap-group-5">
              <div className="frame-7" />
              <img className="div-absolute-4" alt="Div absolute" src="/img/div-absolute-1.png" />
            </div>
            <div className="empresa-de-traduo-7" />
            <div className="empresa-de-traduo-8" />
          </div>
          <img className="normais-traducao-2" alt="Normais traducao" src="/img/normais-traducao-1.png" />
          <img className="translation-normal-2" alt="Translation normal" src="/img/translation-normal-people-1.png" />
          <img className="service-translation-4" alt="Service translation" src="/img/service-translation.png" />
          <img className="alltranslation-2" alt="Alltranslation" src="/img/alltranslation-1.png" />
        </div>
      </div>
    </div>
  );
};
