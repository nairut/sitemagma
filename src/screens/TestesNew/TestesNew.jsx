import React, { useState } from 'react';
import "./style.css";
import { Cotacao } from '../Cotacao/Cotacao';
import { CotacaoDois } from '../CotacaoDois/CotacaoDois';
import { CotacaoTres } from '../CotacaoTres/CotacaoTres';
import { ComponenteCotacao } from '../ComponenteCotacao';

export const TestesNew = () => {
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedLanguagesPara, setSelectedLanguagesPara] = useState([]);
  const [selectedAssunto, setSelectedAssunto] = useState([]);
  const [page, setPage] = useState(0);


  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    username: "",
    nationality: "",
    other: "",
  });



  

  const FormTitles = ["Sign Up", "Personal Info", "Other"];

  const handleLanguageChange = (selectedLanguages) => {
    setSelectedLanguages(selectedLanguages);
  };

  const handleLanguageChangePara = (selectedLanguagesPara) => {
    setSelectedLanguagesPara(selectedLanguagesPara);
  };

  const handleAssunto = (selectedAssunto) => {
    setSelectedAssunto(selectedAssunto);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Include selectedLanguages in the form data
    const formData = new FormData(event.target);
    formData.append("SelectedLanguages", JSON.stringify(selectedLanguages));

    const formDataPara = new FormData(event.target);
    formDataPara.append("SelectedLanguagesPara", JSON.stringify(selectedLanguagesPara));

    const formDataAssunto = new FormData(event.target);
    formDataAssunto.append("SelectedAssunto", JSON.stringify(selectedAssunto));

    // Determine if it's the last page
    const isLastPage = page === FormTitles.length - 1;

    if (isLastPage) {
      // Send the form data to the server or perform any other actions
      // For now, you can console.log the form data
      console.log("Form Data:", formData);

      // Optionally, you can redirect to a "Thank You" page
      window.location.href = "/obrigado";
    } else {
      // Move to the next page
      setPage((currPage) => currPage + 1);
    }
  };

  const PageDisplay = () => {
    if (page === 0) {
      return <div className="de"> <Cotacao/> </div>;
    } else if (page === 1) {
      return <div className="para"> <CotacaoDois/> </div>;
    } else {
      return <div className="assunto"> <CotacaoTres/> </div>;
    }
  };

  return (
    <div className='testesNew'>
      <div className='div-2'>



        <div>{PageDisplay()}</div>


        
        <div className='parabotao'>
          {/* The form to display selected languages */}
          <form
            name="contato-brasil"
            action="/obrigado"
            method="post"
            data-netlify="true"
            onSubmit={handleSubmit}
          >
            <input hidden type="email" name="E-mail" placeholder="Seu E-mail" />
            <textarea hidden name="Mensagem" placeholder="Deixe sua mensagem" cols="30" rows="10"></textarea>
            <input  name="De" value={JSON.stringify(selectedLanguages)} />
            <input hidden name="Para" value={JSON.stringify(selectedLanguagesPara)} />
            <input hidden name="assunto" value={JSON.stringify(selectedAssunto)} />


            <input hidden name="De" value={selectedLanguages.join(', ')} />
<input hidden name="Para" value={selectedLanguagesPara.join(', ')} />

            <button type="submit" className='texto-45'>
              {page === FormTitles.length - 1 ? "Enviar" : "Próximo"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
