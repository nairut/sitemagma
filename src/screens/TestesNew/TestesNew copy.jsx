import React, { useState } from 'react';
import { ComponenteCotacao } from '../ComponenteCotacao';
import { ContagemPalavrasDocx } from '../Testes/Conta palarvas de word   - nunca alterar';
import "./style.css";
import { ComponenteCotacaoDois } from '../ComponenteCotacao/ComponenteCotacaoDois';
import { ComponenteAssunto } from '../ComponenteCotacao/ComponenteAssunto';

export const TestesNew = () => {
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  const handleLanguageChange = (selectedLanguages) => {
    setSelectedLanguages(selectedLanguages);
  };



 
  const [selectedLanguagesPara, setSelectedLanguagesPara] = useState([]);

  const handleLanguageChangePara = (selectedLanguagesPara) => {
    setSelectedLanguagesPara(selectedLanguagesPara);
  };


  const [selectedAssunto, setSelectedAssunto] = useState([]);

  const handleAssunto = (selectedAssunto) => {
    setSelectedAssunto(selectedAssunto);
  };


  const handleSubmit = (event) => {
    event.preventDefault();

    // Include selectedLanguages in the form data
    const formData = new FormData(event.target);
    formData.append("SelectedLanguages", JSON.stringify(selectedLanguages));

    const formDataPara = new FormData(event.target);
    formData.append("SelectedLanguagesPara", JSON.stringify(selectedLanguagesPara));


    const formDataAssunto = new FormData(event.target);
    formData.append("SelectedAssunto", JSON.stringify(selectedAssunto));

    // Send the form data to the server or perform any other actions
    // For now, you can console.log the form data
    console.log("Form Data:", formData);

    // Optionally, you can redirect to a "Thank You" page
    window.location.href = "/obrigado";
  };


  const [page, setPage] = useState(0);
  const PageDisplay = () => {
    if (page === 0) {
      return <div className="de" ><ComponenteCotacao onLanguageChange={handleLanguageChange} /></div>;
    } else if (page === 1) {
      return <div className="para" ><ComponenteCotacaoDois onLanguageChange={handleLanguageChangePara} /></div>;
    } else {
      return <div className="assunto"><ComponenteAssunto onLanguageChange={handleAssunto} /></div>;
    }
  };



  const FormTitles = ["Sign Up", "Personal Info", "Other"];




  return (

    <div className="componente-cotacao">
      <div className="frame-wrapper">
        <div className="frame">




          <div className="body">{PageDisplay()}</div>
          <div className="entrega" />
          <div className="palavras" />
          <div className="rectangle" />
          <div className="text-wrapper">Idioma de Origem</div>
          <div className="div">Traduzir para</div>
          <div className="text-wrapper-2">Contagem de palavras</div>
          <div className="text-wrapper-3">Assunto</div>
          <div className="text-wrapper-4">Data de entrega</div>

          <div className="footer">
          <button
            disabled={page == 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </button>
          <button
            onClick={() => {
              if (page === FormTitles.length - 1) {
                alert("FORM SUBMITTED");
                console.log(formData);
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "Submit" : "Next"}
          </button>


          




          
        </div>




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


        <label>E-mail:</label>
        <input type="email" name="E-mail" placeholder="Seu E-mail" />

        <label>Mensagem:</label>
        <textarea name="Mensagem" placeholder="Deixe sua mensagem" cols="30" rows="10"></textarea>

        <input  hidden name="De" value={JSON.stringify(selectedLanguages)} />
        <input hidden name="Para" value={JSON.stringify(selectedLanguagesPara)} />
        <input hidden name="assunto" value={JSON.stringify(selectedAssunto)} />

        <button type="submit" className="botaoenviar">Enviar</button>
      </form>


      </div>
    </div>
  );
};
