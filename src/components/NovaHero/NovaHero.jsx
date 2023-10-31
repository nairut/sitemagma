/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { HeroTradTecnica } from "../HeroTradTecnica";
import { Menu } from "../Menu";
import "./style.css";

export const NovaHero = ({ className }) => {
  return (
    <div className={`nova-hero ${className}`}>
      <div className="overlap-group">
        <img className="background" alt="Background"     src="/img/background-7.png"/>
        <img className="logo-preto-branco" alt="Logo preto branco" src="./img/logo-preto-branco-2.png"/>
        <Menu className="menu-instance" property1="default" />
        <HeroTradTecnica className="hero-trad-tecnica-instance" />
        <div className="rectangle" />
      </div>
    </div>
  );
};
