import React from "react";
import { ContatoRapido } from "../../components/ContatoRapido";
import { FaleComUm } from "../../components/FaleComUm";
import { Menu } from "../../components/Menu";
import "./style.css";

export const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <img className="background" alt="Background" src="/img/image.png" />
          <img className="logo-preto-branco" alt="Logo preto branco" src="/img/logo-preto-branco-2.png" />
          <Menu
            className="menu-instance"
            expandMoreImg="/img/expand-more-7.png"
            expandMoreStyleRound="/img/expand-more-6.png"
            expandMoreStyleRound1="/img/expand-more-8.png"
            expandMoreStyleRound2="/img/expand-more-9.png"
            expandMoreStyleRound3="/img/expand-more-10.png"
            expandMoreStyleRound4="/img/expand-more-11.png"
            property1="default"
          />
          <div className="hero-trad-tecnica-wrapper">
            <div className="hero-trad-tecnica">
              <div className="hero-text-tradu">
                <div className="text-wrapper-3">Serviço de Tradução Técnica</div>
                <p className="p">
                  Seja manuais de usuário, instruções para funcionários, tradução de patentes ou relatórios, faça com
                  que sua mensagem seja compreendida com os nossos serviços de tradução técnica.
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
    </div>
  );
};
