import React from "react";
import { Fraseentradaebot } from "../../components/Fraseentradaebot";
import { ImagemHeho } from "../../components/ImagemHeho";
import "./style.css";

export const HeroCaysa = () => {
  return (
    <div className="hero-caysa">
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
    </div>
  );
};
