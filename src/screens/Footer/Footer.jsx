import React from "react";
import { FaleComUm } from "../../components/FaleComUm";
import "./style.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="div">
        <img className="turian" alt="Turian" src="/img/turian.png" />
        <div className="ellipse-wrapper">
          <div className="ellipse" />
        </div>
        <FaleComUm className="fale-com-um-especialista" property1="default" />
        <div className="frame">
          <FaleComUm className="fale-com-um-instance" property1="default" />
          <img className="logo-preto-branco" alt="Logo preto branco" src="/img/logo-preto-branco-2.png" />
          <div className="group">
            <div className="overlap-group">
              <p className="p">
                A MAGMA é uma fornecedora global de soluções de localização, que permite que as marcas estabeleçam uma
                presença autêntica em diversos mercados do mundo.
              </p>
              <p className="text-wrapper-2">Magma Translation | Todos os direitos reservados. ©Magma™</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
