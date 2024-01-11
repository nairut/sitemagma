import React from "react";
import "./style.css";

export const MenuAutomatic = () => {
  return (
    <div className="menu-automatic">
      <div className="div">
      <img className="MagmaLogo" alt="Turian" src="/img/logo-preto-branco-2.png" />
        <div className="frame">
          <div className="text-wrapper">Home</div>
          <div className="text-wrapper">Pedidos</div>
          <div className="text-wrapper">Tradutores</div>
          <div className="div-wrapper">
            <div className="text-wrapper-2">Contato</div>
          </div>
          <div className="frame-2">
            <div className="shopee">Logout</div>
          </div>
        </div>

      </div>
    </div>
  );
};