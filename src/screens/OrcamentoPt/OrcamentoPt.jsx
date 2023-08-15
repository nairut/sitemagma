import React from "react";
import { Lady } from "../../components/Lady";
import "./style.css";

export const OrcamentoPt = ({titulo}) => {
  return (
    
    
    
    
    <div className="desktop-form">
      <div className="div">

      <form  name="contact-brasil" action="/" method="post">
      <input type="hidden" name="form-name" value="contact" />

        <div className="group">
          <button className="overlap-group" type="submit">
            <div className="text-wrapper">Enviar</div>
          </button>
        </div>




          <div className="overlap">
        
          <textarea required name="message" placeholder="" className="textarea-style" cols="30" rows="10"></textarea>

          <div className="overlap-wrapper">
            <div className="overlap-2">
              <div className="rectangle-2" />
              <div className="text-wrapper-2">Mensagem</div>
            </div>
          </div>


        </div>
        <div className="overlap-3">
        <input required type="email" className="rectangle-3" name="email" placeholder="Your E-mail"/>

          <div className="overlap-group-wrapper">
            <div className="div-wrapper">
              <div className="text-wrapper-3">E-mail</div>
            </div>
          </div>
        </div>



        <div className="overlap-4">
          <input required type="text" className="rectangle-4" name="name" placeholder="   Cooper"/>

          <div className="group-2">
            <div className="overlap-5">
              <div className="text-wrapper-4">Sobrenome</div>
            </div>
          </div>
        </div>




        <div className="overlap-6">
          <input required type="text" className="rectangle-5" name="name" placeholder="   Sheldon"/>

          <div className="group-3">
            <div className="overlap-5">
              <div className="text-wrapper-5">Nome</div>
            </div>
          </div>
        </div>


        </form>

        <img className="line" alt="Line" src="/img/line-1.png" />
        <Lady className="lady-instance" />
        <img className="magma-translation" alt="Magma translation" src="/img/magma-translation-png.png" />
        <h1 className="h-1">{titulo}</h1>
        <p className="p">
        MAGMA é um fornecedor global de soluções de localização, permitindo que marcas estabeleçam uma presença autêntica em diversos mercados ao redor do mundo.
        </p>
        <p className="text-wrapper-6">Magma Translation | Todos os direitos reservados. ©Magma™</p>
        <img className="img" alt="Magma translation" src="/img/magma-translation-png-1.png" />
      </div>
    </div>
  );
};
