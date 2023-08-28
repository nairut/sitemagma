import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const CelularPt = () => {
  return (
    <div className="iphone-SE">
      <div className="div">
        <img className="magma-translation" alt="Magma translation" src="/img/magma-translation-png.png" />
        <div className="overlap-group">
          <div className="frase-entrada">Serviço de Tradução Profissional</div>
          <p className="frases">
            120 Idiomas que cabem no seu bolso
            <br />
            Traduzimos em mais de 60 áreas
            <br />
            Linguistas com Mestrado
          </p>
        </div>
        <Link to="/solicite-um-orcamento" className="button">
          <div className="clique-para">DESCUBRA</div>
        </Link>
        
      </div>
    </div>
  );
};
