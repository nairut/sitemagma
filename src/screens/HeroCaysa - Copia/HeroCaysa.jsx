import React from "react";
import { ContatoRapido } from "../../components/ContatoRapido";
import { FaleComUm } from "../../components/FaleComUm";
import { Menu } from "../../components/Menu";
import "./style.css";

export const HeroCaysa = ({ scrollY }) => {


  //In this modified code, the left property will change to 331 when scrollY is between 
  //180 and 300 (inclusive), and it will change to 13 otherwise.

  const leftValue = scrollY >= 500 && scrollY <= 6000 ? 731 : 1;

  const stickyClass = scrollY >= 180 && scrollY <= 3000 ? "sticky" : "";

  // Add the component-transition class conditionally
  const componentStyle = {
    left: leftValue,
  };

  const stickyStyle = {
    position: "sticky",
    top: "1", // You can adjust the top value as needed
  };



  // Toggle the component-transition class based on scrollY
  const containerClassName = `componente-inferior ${
    leftValue === 331 ? "component-transition" : ""
  }`;

//className={`hero-caysa ${stickyClass}`}


  return (
    <div className="hero-caysa"   className={`hero-caysa ${stickyClass}`}>
      <div   className="div-3dois"   style={componentStyle}>
        <div className="overlap-5"    >
          <div  className="turian-2" />
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

      </div>
    </div>
  );
};
