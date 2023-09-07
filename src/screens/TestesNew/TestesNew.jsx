import React, { useState } from 'react';
import { ComponenteCotacao } from '../ComponenteCotacao';
import { ContagemPalavrasDocx } from '../Testes/Conta palarvas de word   - nunca alterar';
import "./style.css";

export const TestesNew = () => {
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  const handleLanguageChange = (selectedLanguages) => {
    setSelectedLanguages(selectedLanguages);
  };


  const [selectedLanguagesPara, setSelectedLanguagesPara] = useState([]);

  const handleLanguageChangePara = (selectedLanguagesPara) => {
    setSelectedLanguagesPara(selectedLanguagesPara);
  };


  const handleSubmit = (event) => {
    event.preventDefault();

    // Include selectedLanguages in the form data
    const formData = new FormData(event.target);
    formData.append("SelectedLanguages", JSON.stringify(selectedLanguages));

    const formDataPara = new FormData(event.target);
    formData.append("SelectedLanguagesPara", JSON.stringify(selectedLanguagesPara));

    // Send the form data to the server or perform any other actions
    // For now, you can console.log the form data
    console.log("Form Data:", formData);

    // Optionally, you can redirect to a "Thank You" page
    window.location.href = "/obrigado";
  };





  return (

    <div className="componente-cotacao">
      <div className="frame-wrapper">
        <div className="frame">


        <form
        name="contato-brasil"
        action="/obrigado"
        method="post"
        data-netlify="true"
        onSubmit={handleSubmit}
      >


          <div className="de" ><ComponenteCotacao onLanguageChange={handleLanguageChange} /></div>
          <div className="assunto" ><ComponenteCotacao onLanguageChange={handleLanguageChangePara} /></div>
          <div className="para"><ComponenteCotacao onLanguageChange={handleLanguageChangePara} /></div>
          <div className="entrega" />
          <div className="palavras" />
          <div className="rectangle" />
          <div className="text-wrapper">Idioma de Origem</div>
          <div className="div">Traduzir para</div>
          <div className="text-wrapper-2">Contagem de palavras</div>
          <div className="text-wrapper-3">Assunto</div>
          <div className="text-wrapper-4">Data de entrega</div>



          </form>


        </div>


      <h1>TesteNew Component</h1>
  
      

      
      {/* The form to display selected languages */}
      <form
        name="contato-brasil"
        action="/obrigado"
        method="post"
        data-netlify="true"
        onSubmit={handleSubmit}
      >

        <label>Nome:</label>
        <input required type="text" name="Nome" placeholder="Seu Nome" />

        <label>Cargo:</label>
        <input type="text" name="Cargo" placeholder="Seu Cargo" />

        <label>E-mail:</label>
        <input type="email" name="E-mail" placeholder="Seu E-mail" />

        <label>Mensagem:</label>
        <textarea name="Mensagem" placeholder="Deixe sua mensagem" cols="30" rows="10"></textarea>

        <input  hidden name="De" value={JSON.stringify(selectedLanguages)} />
        <input hidden name="Para" value={JSON.stringify(selectedLanguagesPara)} />

        <button type="submit" className="botaoenviar">Enviar</button>
      </form>


      </div>
    </div>


  );
};
