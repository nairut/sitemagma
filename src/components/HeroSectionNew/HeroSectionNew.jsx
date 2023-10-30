/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ContatoRapido } from "../ContatoRapido";
import { FaleComUm } from "../FaleComUm";
import { Menu } from "../Menu";
import "./style.css";

export const HeroSectionNew = ({
  menuExpandMoreStyleRound,
  menuExpandMoreImg,
  menuExpandMoreStyleRound1,
  menuExpandMoreStyleRound2,
  menuExpandMoreStyleRound3,
  menuExpandMoreStyleRound4,
}) => {
  return (
    <div className="hero-section-new">
      <div className="overlap-group">
        <img className="background" alt="Background" />
        <img className="logo-preto-branco" alt="Logo preto branco" />
        <Menu
          className="menu-instance"
          expandMoreImg={menuExpandMoreStyleRound1}
          expandMoreStyleRound={menuExpandMoreImg}
          expandMoreStyleRound1={menuExpandMoreStyleRound3}
          expandMoreStyleRound2={menuExpandMoreStyleRound}
          expandMoreStyleRound3={menuExpandMoreStyleRound4}
          expandMoreStyleRound4={menuExpandMoreStyleRound2}
          property1="default"
        />
        <div className="hero-trad-tecnica-wrapper">
          <div className="hero-trad-tecnica">
            <div className="hero-text-tradu">
              <div className="text-wrapper-3">Serviço de Tradução Técnica</div>
              <p className="p">
                Seja manuais de usuário, instruções para funcionários, tradução de patentes ou relatórios, faça com que
                sua mensagem seja compreendida com os nossos serviços de tradução técnica.
              </p>
            </div>
          </div>
        </div>
        <div className="frame-2">
          <FaleComUm className="fale-com-um-especialista" property1="default" />
          <ContatoRapido className="contato-rapido-instance" property1="default" />
        </div>
      </div>
    </div>
  );
};

HeroSectionNew.propTypes = {
  menuExpandMoreStyleRound: PropTypes.string,
  menuExpandMoreImg: PropTypes.string,
  menuExpandMoreStyleRound1: PropTypes.string,
  menuExpandMoreStyleRound2: PropTypes.string,
  menuExpandMoreStyleRound3: PropTypes.string,
  menuExpandMoreStyleRound4: PropTypes.string,
};
