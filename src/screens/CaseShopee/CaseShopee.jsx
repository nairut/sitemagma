import React from "react";
import { ContatoRapido } from "../../components/ContatoRapido";
import { FaleComUm } from "../../components/FaleComUm";
import { Menu } from "../../components/Menu";
import "./style.css";

export const CaseShopee = () => {
  return (
    <div className="case-shopee">
      <div className="div-3">
        <div className="overlap-9">
          <div className="rectangle-13" />
          <div className="rectangle-14" />
          <div className="group-6">
            <div className="ellipse-11" />
          </div>
          <div className="group-7">
            <div className="ellipse-12" />
          </div>
          <div className="group-8">
            <div className="ellipse-13" />
          </div>
          <div className="frame-45">
            <div className="frame-46">
              <p className="case-shopee-e-o">
                <span className="text-wrapper-39">
                  Case Shopee
                  <br />
                </span>
                <span className="text-wrapper-40">E o Serviço de tradução de E-commerce</span>
              </p>
              <p className="text-wrapper-41">Faça como a Shopee, abra um novo mercado com a gente</p>
            </div>
            <div className="dois-botes-2">
              <FaleComUm className="fale-com-um-especialista-instance" property1="default" />
              <ContatoRapido className="contato-rapido-2" property1="default" text="Orçamento Rápido" />
            </div>
          </div>
          <div className="imagens-2">
            <div className="overlap-group-4">
              <div className="div-absolute-2" />
              <div className="frame-47">
                <div className="servio-de-traduo-de-wrapper">
                  <img
                    className="servio-de-traduo-de"
                    alt="Servio de traduo de"
                    src="/img/servi-o-de-tradu-o-de-e-commerce-1.png"
                  />
                </div>
              </div>
              <div className="empresa-de-traduo-9" />
              <div className="empresa-de-traduo-10" />
            </div>
            <div className="empresa-de-traduo-11" />
            <div className="empresa-de-traduo-12" />
            <div className="empresa-de-traduo-13" />
          </div>
          <div className="idiomas">
            <div className="text-wrapper-42">Mais de</div>
            <div className="text-wrapper-43">30 milhões de</div>
            <div className="text-wrapper-43">palavras traduzidas</div>
            <div className="adesivo-redondo" />
          </div>
          <div className="empresa-de-traduo-14" />
          <div className="empresa-de-traduo-15" />
          <div className="frame-48">
            <div className="frame-49">
              <img className="ellipse-14" alt="Ellipse" src="/img/ellipse-80-2.png" />
              <div className="frame-50">
                <div className="frame-51">
                  <div className="text-wrapper-44">Milton Santana</div>
                  <div className="text-wrapper-45">Shoppee</div>
                </div>
              </div>
            </div>
            <p className="text-wrapper-46">
              Sem a Magma Translation, nosso crescimento e processo de internacionalização não teriam sido
              bem-sucedidos, devido à competência de sua equipe.
            </p>
            <div className="frame-52">
              <img className="star-2" alt="Star" src="/img/star-21-3.png" />
              <img className="star-2" alt="Star" src="/img/star-22-3.png" />
              <img className="star-2" alt="Star" src="/img/star-23-3.png" />
              <img className="star-2" alt="Star" src="/img/star-24-3.png" />
              <img className="star-2" alt="Star" src="/img/star-25-3.png" />
            </div>
          </div>
          <img className="feature-section" alt="Feature section" src="/img/feature-section-236.png" />
        </div>
        <FaleComUm className="fale-com-um-2" property1="default" />
        <div className="partners-2">
          <div className="outras-empresas-que-wrapper">
            <p className="outras-empresas-que">Outras Empresas Que Confiam Em Nós</p>
          </div>
          <img className="group-9" alt="Group" src="/img/group-22-1.png" />
        </div>
        <div className="group-10">
          <div className="overlap-10">
            <p className="text-wrapper-47">
              A MAGMA é uma fornecedora global de soluções de localização, que permite que as marcas estabeleçam uma
              presença autêntica em diversos mercados do mundo.
            </p>
            <p className="text-wrapper-48">Magma Translation | Todos os direitos reservados. ©Magma™</p>
          </div>
        </div>
        <img className="logo-preto-branco-3" alt="Logo preto branco" src="/img/logo-preto-branco-2.png" />
        <div className="rectangle-15" />
        <img className="logo-preto-branco-4" alt="Logo preto branco" src="/img/logo-preto-branco-2.png"/>
        <Menu
          className="menu-2"
          expandMoreImg="/img/expand-more-15.png"
          expandMoreStyleRound="/img/expand-more-14.png"
          expandMoreStyleRound1="/img/expand-more-16.png"
          expandMoreStyleRound2="/img/expand-more-17.png"
          expandMoreStyleRound3="/img/expand-more-18.png"
          expandMoreStyleRound4="/img/expand-more-19.png"
          property1="default"
          to="/legendagem"
          to1="/traducaotecnica"
        />
      </div>
    </div>
  );
};
