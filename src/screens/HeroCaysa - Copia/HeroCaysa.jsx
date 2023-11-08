import React from "react";
import { ContatoRapido } from "../../components/ContatoRapido";
import { FaleComUm } from "../../components/FaleComUm";
import "./style.css";

export const HeroCaysa = () => {


  
  return (
    <div className="hero-caysa">
      <div className="overlap-wrapper-2">
        <div className="overlap-6">
          <div className="turian-5" />
          <div className="turian-6">
            <div className="ellipse-11" />
          </div>
          <div className="turian-7">
            <div className="ellipse-12" />
          </div>
          <div className="frame-29">
            <div className="frame-30">
              <p className="tradu-es-bem">
                <span className="text-wrapper-29">Traduções </span>
                <span className="text-wrapper-30">bem avaliadas - </span>
                <span className="text-wrapper-29">de pequeno e grande porte.</span>
              </p>
              <p className="text-wrapper-31">
                Entre em contato com um especialista para um projeto de sua empresa ou clique em orçamento rápido para
                traduzir seu arquivo pessoal.
              </p>
            </div>
            <div className="dois-botes-2">
              <FaleComUm className="fale-com-um-instance" property1="default" />
              <ContatoRapido className="contato-rapido-2" property1="default" text="Orçamento Rápido" />
            </div>
            <div className="div-rewards-icons-2">
              <img className="slator-svg-2" alt="Slator svg" src="/img/slator-2023-svg-3.png" />
              <div className="top-fastest-2" />
              <img className="nimdzi-svg-2" alt="Nimdzi svg" src="/img/nimdzi-2023-svg-3.png" />
              <img className="frame-svg-2" alt="Frame svg" src="/img/frame-14349-svg-3.png" />
            </div>
          </div>
          <div className="frame-31">
            <div className="overlap-group-3">
              <div className="div-absolute-4" />
              <div className="frame-32">
                <div className="servio-de-trado-wrapper">
                  <img className="servio-de-trado" alt="Servio de trado" src="/img/servi-o-de-trad-o-profissional-1.png"/>
                </div>
              </div>
              <img className="ezgif" alt="Ezgif" src="/img/ezgif-2.gif" />
              <div className="empresa-de-traduo-9"         src="/img/mask-group-54.png"          />
              <div className="empresa-de-traduo-10"         src="/img/servi-o-de-trad-o-profissional-1.png"                  />
            </div>
          </div>
          <div className="frame-33" />
        </div>
      </div>
    </div>
  );
};
