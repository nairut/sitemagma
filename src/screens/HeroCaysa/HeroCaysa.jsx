import React from "react";
import { ContatoRapido } from "../../components/ContatoRapido";
import { FaleComUm } from "../../components/FaleComUm";
import { Menu } from "../../components/Menu";
import "./style.css";

export const HeroCaysa = ({ scrollY }) => {


  const componentStyle = {
    // Example: Change the background color based on scrollY
    left: scrollY > 100 ? 331 : 13,

  };



  return (
    <div className="hero-caysa"  >
      <div className="div-3"   style={componentStyle}>
        <div className="overlap-5">
          <div className="turian-2" />
          <div className="turian-3">
            <div className="ellipse-4" />
          </div>
          <div className="turian-4">
            <div className="ellipse-5" />
          </div>
          <div className="frame-8">
            <div className="frame-9">
              <p className="tradu-es-bem">
                <span className="text-wrapper-19">Traduções </span>
                <span className="text-wrapper-20">bem avaliadas - </span>
                <span className="text-wrapper-19">de pequeno e grande porte.</span>
              </p>
              <p className="text-wrapper-21">
                Entre em contato com um especialista para um projeto de sua empresa ou clique em orçamento rápido para
                traduzir seu arquivo pessoal.
              </p>
            </div>
            <div className="dois-botes-2">
              <FaleComUm className="fale-com-um-instance" property1="default" />
              <ContatoRapido className="design-component-instance-node" property1="default" text="Orçamento Rápido" />
            </div>
            <div className="div-rewards-icons-2">
              <img className="slator-svg-2" alt="Slator svg" src="/img/slator-2023-svg-1.png" />
              <div className="top-fastest-2" />
              <img className="nimdzi-svg-2" alt="Nimdzi svg" src="/img/nimdzi-2023-svg-1.png" />
              <img className="frame-svg-2" alt="Frame svg" src="/img/frame-14349-svg-1.png" />
            </div>
          </div>
          <div className="overlap-group-wrapper">
            <div className="overlap-group-2">
              <div className="div-absolute-4" />
              <div className="frame-wrapper">
                <div className="servio-de-trado-wrapper">
                  <img
                    className="servio-de-trado"
                    alt="Servio de trado"
                    src="/img/servi-o-de-trad-o-profissional-1.png"
                  />
                </div>
              </div>
              <img className="ezgif" alt="Ezgif" src="/img/ezgif-2.gif" />
              <div className="empresa-de-traduo-9" />
              <div className="empresa-de-traduo-10" />
            </div>
          </div>
          <div className="frame-10" />
        </div>
        <img className="turian-5" alt="Turian" src="/img/logo-preto-branco-2.png" />
        <Menu
          className="turian-6"
          expandMoreImg="/img/expand-more-13.png"
          expandMoreStyleRound="/img/expand-more-12.png"
          expandMoreStyleRound1="/img/expand-more-14.png"
          expandMoreStyleRound2="/img/expand-more-15.png"
          expandMoreStyleRound3="/img/expand-more-16.png"
          expandMoreStyleRound4="/img/expand-more-17.png"
          property1="default"
          to="/legendagem"
        />
      </div>
    </div>
  );
};
