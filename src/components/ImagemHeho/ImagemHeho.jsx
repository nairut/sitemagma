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
            <div className="servi-o-de-trad-o-wrapper">
              <img className="servi-o-de-trad-o" alt="Servi o de trad o" src="/img/servi-o-de-trad-o-profissional-1.png" />
            </div>
          </div>
          <img className="ezgif" alt="Ezgif" src="./img/ezgif-2.gif"   />
          <div className={`empresa-de-tradu-o ${empresaDeTraduOClassName}`} />
          <div className={`empresa-de-tradu-o-2 ${empresaDeTraduOClassNameOverride}`} />
        </div>
      </div>
      <div className={`frame-3 ${frameClassName}`} />
    </div>
  );
};
