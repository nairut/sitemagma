import React from "react";
import { Lady } from "../../components/Lady";
import "./style.css";

export const DesktopFormPT = () => {
  return (
    <div className="desktop-form">
      <div className="div">
        <form name="contato-brasil" action="/depoimentos" method="post">
          <input type="hidden" name="form-name" value="contato" />

          <div className="group">
            <button className="overlap-group" type="submit">
              <div className="text-wrapper">Enviar</div>
            </button>
          </div>

          

          <div className="overlap">
            <textarea required name="mensagem" placeholder="" className="textarea-style" cols="30" rows="10"></textarea>
            <div className="overlap-wrapper">
              <div className="overlap-2">
                <div className="rectangle-2" />
                <div className="text-wrapper-2">Mensagem</div>
              </div>
            </div>
          </div>

          <div className="overlap-3">
            <input required type="email" className="rectangle-3" name="email" placeholder="Seu E-mail"/>
            <div className="overlap-group-wrapper">
              <div className="div-wrapper">
                <div className="text-wrapper-3">Email</div>
              </div>
            </div>
          </div>

          <div className="overlap-4">
            <input required type="text" className="rectangle-4" name="sobrenome" placeholder="   Cooper"/>
            <div className="group-2">
              <div className="overlap-5">
                <div className="text-wrapper-4">Sobrenome</div>
              </div>
            </div>
          </div>

          <div className="overlap-6">
            <input required type="text" className="rectangle-5" name="nome" placeholder="   Sheldon"/>
            <div className="group-3">
              <div className="overlap-5">
                <div className="text-wrapper-5">Nome</div>
              </div>
            </div>
          </div>

        </form>

        <img className="line" alt="Linha" src="/img/line-1.png" />
        <Lady className="lady-instance" />
        <img className="magma-translation" alt="Tradução Magma" src="/img/magma-translation-png.png" />
        <h1 className="h-1">Receba um Orçamento Gratuito</h1>
        <p className="p">
          MAGMA é um fornecedor global de soluções de localização, permitindo que marcas estabeleçam uma presença autêntica
          em diversos mercados ao redor do mundo.
        </p>
        <p className="text-wrapper-6">Magma Translation | Todos os direitos reservados. ©Magma™</p>
        <img className="img" alt="Tradução Magma" src="/img/magma-translation-png-1.png" />
      </div>
    </div>
  );
};
