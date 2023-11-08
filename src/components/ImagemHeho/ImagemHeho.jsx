/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const ImagemHeho = ({
  className,
  empresaDeTraduOClassName,
  empresaDeTraduOClassNameOverride,
  frameClassName,
}) => {
  return (
    <div className={`imagem-heho ${className}`}>
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="div-absolute" />
          <div className="frame-wrapper">
            <div className="imagem-caysa-wrapper">
              <img className="imagem-caysa" alt="Imagem caysa" />
            </div>
          </div>
          <img className="giv-de-idiomas" alt="Giv de idiomas" />
          <div className={`empresa-de-tradu-o ${empresaDeTraduOClassName}`} />
          <div className={`empresa-de-tradu-o-2 ${empresaDeTraduOClassNameOverride}`} />
        </div>
      </div>
      <div className={`frame-2 ${frameClassName}`} />
    </div>
  );
};
