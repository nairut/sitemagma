import React from "react";
import { FaleComUm } from "../../components/FaleComUm";
import "./style.css";

export const SegundaHero = () => {
  return (
    <div className="segunda-hero">
      <div className="div-4">
        <img className="turian-3" alt="Turian" src="/img/turian.png" />
        <div className="turian-4">
          <div className="ellipse-4" />
        </div>
        <FaleComUm className="fale-com-um-especialista-instance" property1="default" />
        <div className="group-2">
          <img className="imagenew" alt="Imagenew" src="/img/imagenew-1.png" />
          <img className="service-translation-2" alt="Service translation" src="/img/service-translation-1.png" />
          <img className="empresa-de" alt="Empresa de" src="/img/empresa-de-tradu-o1-2.png" />
          <div className="overlap-group-3">
            <div className="frame-5" />
            <img className="div-absolute-2" alt="Div absolute" src="/img/div-absolute-1.png" />
          </div>
          <img className="traducao-tecnica" alt="Traducao tecnica" src="/img/traducao-tecnica-1.png" />
          <img
            className="stock-photo-portrait"
            alt="Stock photo portrait"
            src="/img/stock-photo-portrait-of-happy-african-american-small-business-ow.png"
          />
          <div className="empresa-de-traduo-3" />
          <div className="empresa-de-traduo-4" />
        </div>
      </div>
    </div>
  );
};
