import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const ContatoCelularPt = () => {


  const handleSubmit = (event) => {
    // You can include any form submission logic here
    // For now, just redirect to "/obrigado"
    window.location.href = "/obrigado";
    
  };


  return (
    <div className="iphone-SE">
      <div className="div">
        <div  className="controle">


          <div className="frase-de-entrada">Solicite um Orçamento</div>
            <img className="magma-translation" alt="Magma translation" src="/img/magma-translation-png.png" />

            <form  name="contato-brasil" action="/obrigado" method="post"  data-netlify="true" onSubmit={handleSubmit}>
                <input type="hidden" name="form-name" value="contato-brasil" />
                  <input required type="text" className="nome" name="Nome" placeholder="Seu Nome"    />
                  <input required type="text" className="cargo" name="Cargo" placeholder="Seu Cargo"  />
                  <input required type="email" className="e-mail" name="E-mail" placeholder="Seu E-mail"   />
                  <textarea name="Messagem" placeholder="Deixe sua mensagem" className="mensagem" cols="30" rows="10"></textarea>
                  <button type="submit"  className="button" >Enviar</button>
                </form>
         </div>
      </div>
    </div>
  );
};
