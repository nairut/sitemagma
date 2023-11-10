import React from "react";
import { ContatoRapido } from "../../components/ContatoRapido";
import { FaleComUm } from "../../components/FaleComUm";
import "./style.css";

export const SoFrases = () => {
  return (
    <div className="so-frases">
      <div className="div-2">
        <div className="frase-entrada-e">
          <div className="frame-2">
            <p className="tradu-es-bem">
              <span className="span">Traduções </span>
              <span className="text-wrapper-2">bem avaliadas - </span>
              <span className="span">de pequeno e grande porte.</span>
            </p>
            <p className="p">
              Entre em contato com um especialista para um projeto de sua empresa ou clique em orçamento rápido para
              traduzir seu arquivo pessoal.
            </p>
          </div>
          <div className="dois-botes">
            <FaleComUm className="fale-com-um-especialista" divClassName="fale-com-um-instance" property1="default" />
            <ContatoRapido
              className="contato-rapido-instance"
              contatoRapidoClassName="design-component-instance-node"
              property1="default"
              text="Orçamento Rápido"
            />
          </div>
        </div>
        <div className="div-rewards-icons">
          <img className="img" alt="Slator svg" src="/img/slator-2023-svg-6.png" />
          <div className="top-fastest" />
          <img className="img" alt="Nimdzi svg" src="/img/nimdzi-2023-svg-6.png" />
          <img className="frame-svg" alt="Frame svg" src="/img/frame-14349-svg-6.png" />
        </div>
      </div>
    </div>
  );
};
