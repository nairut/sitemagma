/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { ContatoRapido } from "../ContatoRapido";
import { FaleComUm } from "../FaleComUm";
import "./style.css";

export const Fraseentradaebot = ({ className }) => {
  return (
    <div className={`fraseentradaebot ${className}`}>
      <div className="frame-2">
        <p className="tradu-es-bem">
          <span className="span">Traduções </span>
          <span className="text-wrapper-3">bem avaliadas - </span>
          <span className="span">de pequeno e grande porte.</span>
        </p>
        <p className="p">
          Entre em contato com um especialista para um projeto de sua empresa ou clique em orçamento rápido para
          traduzir seu arquivo pessoal.
        </p>
      </div>
      <div className="dois-bot-es">
        <FaleComUm className="fale-com-um-especialista" divClassName="fale-com-um-instance" property1="default" />
        <ContatoRapido
          className="contato-rapido-instance"
          contatoRapidoClassName="design-component-instance-node"
          property1="default"
          text="Orçamento Rápido"
        />
      </div>
    </div>
  );
};
