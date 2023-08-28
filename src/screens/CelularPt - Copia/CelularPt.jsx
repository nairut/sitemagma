import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const CelularPt = () => {
  return (
    <div className="celular">
      <div className="div-2">
        <h1 className="h-1">Serviço de Tradução Profissional</h1>
        <p className="element-languages-that-2">
          120 idiomas que cabem no seu bolso
          <br />
          Linguistas com Mestrado
          <br />
          Traduzimos em mais de 60 áreas
        </p>
        <Link className="click-to-discover-wrapper" to="/cell-form">
          <div className="click-to-discover">Clique para descobrir</div>
        </Link>
        <img className="magma-translation-3" alt="Magma translation" src="/img/magma-translation-png-1.png" />
      </div>
    </div>
  );
};
