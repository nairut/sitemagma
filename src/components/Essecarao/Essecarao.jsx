/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Botao } from "../Botao";
import "./style.css";

export const Essecarao = ({ property1, className, empresaDeTraduOClassName, empresaDeTraduOClassNameOverride }) => {
  return (
    <div className={`essecarao ${className}`}>
      <div className={`overlap ${property1}`}>
        <img className="img" alt="Rectangle" />
        {property1 === "variant-2" && (
          <div className="frame">
            <p className="tradu-es-bem">
              <span className="span">Traduções </span>
              <span className="text-wrapper-2">bem avaliadas</span>
              <span className="span">, rápidas, de pequeno e grande porte.</span>
            </p>
            <div className="frame-wrapper">
              <div className="resolva-seu-problema-wrapper">
                <p className="resolva-seu-problema">
                  <span className="text-wrapper-3">Resolva seu problema linguístico através do </span>
                  <span className="text-wrapper-4">gerenciamento de ponta</span>
                  <span className="text-wrapper-3">
                    {" "}
                    da Magma Translation, seja para tradução de uma página ou de uma plataforma de 2 milhões de
                    produtos.
                  </span>
                </p>
              </div>
            </div>
            <Botao className="botao-instance" />
          </div>
        )}

        <div className="group">
          {property1 === "default" && (
            <>
              <div className="overlap-group">
                <div className="overlap-group">
                  <div className="div" />
                  <div className="rectangle-2" />
                  <img className="ezgif" alt="Ezgif" />
                  <div className="empresa-de-tradu-o">
                    <img className="mask-group" alt="Mask group" />
                  </div>
                </div>
                <div className="mask-group-wrapper">
                  <img className="mask-group-2" alt="Mask group" />
                </div>
              </div>
              <img className="servi-o-de-trad-o" alt="Servi o de trad o" />
            </>
          )}

          {property1 === "variant-2" && (
            <div className="overlap-2">
              <div className="overlap-group">
                <div className="div" />
                <div className="rectangle-2" />
                <img className="servi-o-de-trad-o-2" alt="Servi o de trad o" />
                <img className="ezgif-2" alt="Ezgif" />
                <div className={`empresa-de-tradu-o-2 ${empresaDeTraduOClassName}`} />
              </div>
              <div className={`empresa-de-tradu-o-3 ${empresaDeTraduOClassNameOverride}`} />
            </div>
          )}
        </div>
      </div>
      <img className={`magma-translation property-1-1-${property1}`} alt="Magma translation" />
      {property1 === "default" && (
        <div className="frame-2">
          <p className="tradu-es-bem">
            <span className="span">Traduções </span>
            <span className="text-wrapper-2">bem avaliadas</span>
            <span className="span">, rápidas, de pequeno e grande porte.</span>
          </p>
          <div className="frame-wrapper">
            <div className="resolva-seu-problema-wrapper">
              <p className="resolva-seu-problema">
                <span className="text-wrapper-3">Resolva seu problema linguístico através do </span>
                <span className="text-wrapper-4">gerenciamento de ponta</span>
                <span className="text-wrapper-3">
                  {" "}
                  da Magma Translation, seja para tradução de uma página ou de uma plataforma de 2 milhões de produtos.
                </span>
              </p>
            </div>
          </div>
          <Botao className="botao-instance" />
        </div>
      )}
    </div>
  );
};

Essecarao.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
};
