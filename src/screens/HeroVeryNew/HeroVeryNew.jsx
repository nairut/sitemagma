import React from "react";
import { ContatoRapido } from "../../components/ContatoRapido";
import { FaleComUm } from "../../components/FaleComUm";
import { Menu } from "../../components/Menu";
import "./style.css";

export const HeroVeryNew = () => {
  return (
    <div className="hero-very-new">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <img className="background" alt="Background" src="/img/background-1.png" />
          <div className="rectangle" />
          <div className="hero-trad-tecnica-wrapper">

              <div className="hero-text-tradu">
                <div className="text-wrapper-3">Serviço de Tradução Técnica</div>
                <p className="p">
                  Seja manuais de usuário, instruções para funcionários, tradução de patentes ou relatórios, faça com
                  que sua mensagem seja compreendida com os nossos serviços de tradução técnica.
                </p>
              </div>
            </div>
 
          <img className="logo-preto-branco" alt="Logo preto branco" />
          <div className="frame-2">
            <FaleComUm className="fale-com-um-especialista" property1="default" />
            <ContatoRapido className="contato-rapido-instance" property1="default" />
          </div>
          <Menu
            className="menu-instance"
            expandMoreImg="/img/expand-more-13.png"
            expandMoreStyleRound="/img/expand-more-12.png"
            expandMoreStyleRound1="/img/expand-more-14.png"
            expandMoreStyleRound2="/img/expand-more-15.png"
            expandMoreStyleRound3="/img/expand-more-16.png"
            expandMoreStyleRound4="/img/expand-more-17.png"
            property1="default"
          />
        </div>
      </div>
    </div>
  );
};
