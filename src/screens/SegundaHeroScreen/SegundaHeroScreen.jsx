import React from "react";
import { FaleComUm } from "../../components/FaleComUm";
import "./style.css";

export const SegundaHeroScreen = () => {
  return (
    <div className="segunda-hero-screen">
      <div className="segunda-hero-2">
        <img className="turian-5" alt="Turian" src="/img/turian.png" />
        <div className="turian-6">
          <div className="ellipse-5" />
        </div>
        <FaleComUm className="fale-com-um-2" divClassName="fale-com-um-3" property1="default" />
        <div className="group-3">
          <img className="imagenew-2" alt="Imagenew" />
          <img className="service-translation-3" alt="Service translation" src="/img/service-translation-1-1.png" />
          <img className="empresa-de-2" alt="Empresa de" src="/img/empresa-de-tradu-o1-2-1.png" />
          <div className="overlap-group-4">
            <div className="frame-6" />
            <img className="div-absolute-3" alt="Div absolute" src="/img/div-absolute-2.png" />
          </div>
          <img className="traducao-tecnica-2" alt="Traducao tecnica" src="/img/traducao-tecnica-1-1.png" />
          <img
            className="stock-photo-portrait-2"
            alt="Stock photo portrait"
            src="/img/stock-photo-portrait-of-happy-african-american-small-business-ow-1.png"
          />
          <div className="empresa-de-traduo-5" />
          <div className="empresa-de-traduo-6" />
        </div>
      </div>
    </div>
  );
};
