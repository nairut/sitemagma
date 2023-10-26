import React from "react";
import { ContatoRapido } from "../../components/ContatoRapido";
import { FaleComUm } from "../../components/FaleComUm";
import { Menu } from "../../components/Menu";
import "./style.css";

export const CaseZf = () => {
  return (
    <div className="case-ZF">
      <div className="div-4">
        <div className="overlap-11">
          <div className="rectangle-16" />
          <div className="rectangle-17" />
          <div className="group-11">
            <div className="ellipse-15" />
          </div>
          <div className="group-12">
            <div className="ellipse-16" />
          </div>
          <div className="group-13">
            <div className="ellipse-17" />
          </div>
          <div className="frame-53">
            <div className="frame-54">
              <p className="o-caso-ZF-e-o-servi">
                <span className="text-wrapper-49">
                  O caso ZF <br />
                </span>
                <span className="text-wrapper-50">E o Serviço de tradução automotiva</span>
              </p>
              <p className="text-wrapper-51">Faça como a ZF, abra um novo mercado com a gente</p>
            </div>
            <div className="dois-botes-3">
              <FaleComUm className="fale-com-um-3" property1="default" />
              <ContatoRapido className="contato-rapido-3" property1="default" text="Orçamento Rápido" />
            </div>
          </div>
          <div className="imagens-3">
            <div className="overlap-group-5">
              <div className="div-absolute-3" />
              <div className="frame-55">
                <div className="servio-de-traduo-wrapper">
                  <img
                    className="servio-de-traduo"
                    alt="Servio de traduo"
                    src="/img/servi-o-de-tradu-o-automotiva-1.png"
                  />
                </div>
              </div>
              <div className="empresa-de-traduo-16" />
              <div className="empresa-de-traduo-17" />
            </div>
            <div className="empresa-de-traduo-18" />
            <div className="empresa-de-traduo-19" />
            <div className="empresa-de-traduo-20" />
          </div>
          <div className="idiomas-2">
            <div className="text-wrapper-52">todos os dias</div>
            <div className="text-wrapper-53">10 idiomas traduzidos</div>
            <div className="text-wrapper-54">Setor Automotivo</div>
          </div>
          <div className="empresa-de-traduo-21" />
          <div className="empresa-de-traduo-22" />
          <div className="frame-56">
            <div className="frame-57">
              <img className="ellipse-18" alt="Ellipse" src="/img/ellipse-80-3.png" />
              <div className="frame-58">
                <div className="frame-59">
                  <div className="text-wrapper-55">Danielle Schmitt</div>
                  <div className="ZF-friedrichshafen">Zf Friedrichshafen</div>
                </div>
              </div>
            </div>
            <p className="text-wrapper-56">
              Somos uma empresa alemã, o maior fabricante de peças de automóveis do mundo. Para nós, a confiança na
              segurança de dados é essencial. A Magma Translation é uma empresa confiável.
            </p>
            <div className="frame-60">
              <img className="star-3" alt="Star" src="/img/star-21-4.png" />
              <img className="star-3" alt="Star" src="/img/star-22-4.png" />
              <img className="star-3" alt="Star" src="/img/star-23-4.png" />
              <img className="star-3" alt="Star" src="/img/star-24-4.png" />
              <img className="star-3" alt="Star" src="/img/star-25-4.png" />
            </div>
          </div>
          <img className="feature-section-2" alt="Feature section" src="/img/feature-section-236-1.png" />
          <div className="group-14">
            <div className="ellipse-17" />
          </div>
        </div>
        <FaleComUm className="fale-com-um-4" property1="default" />
        <div className="partners-3">
          <div className="group-15">
            <p className="outras-empresas-que-2">Outras Empresas Que Confiam Em Nós</p>
          </div>
          <img className="group-16" alt="Group" src="/img/group-22-2.png" />
        </div>
        <div className="group-17">
          <div className="overlap-12">
            <p className="text-wrapper-57">
              A MAGMA é uma fornecedora global de soluções de localização, que permite que as marcas estabeleçam uma
              presença autêntica em diversos mercados do mundo.
            </p>
            <p className="text-wrapper-58">Magma Translation | Todos os direitos reservados. ©Magma™</p>
          </div>
        </div>
        <img className="logo-preto-branco-5" alt="Logo preto branco" src="/img/logo-preto-branco-2.png" />
        <div className="rectangle-18" />
        <img className="logo-preto-branco-6" alt="Logo preto branco" src="/img/logo-preto-branco-2.png"/>
        <Menu
          className="menu-3"
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
