import React, { useState } from 'react';
import { ComponenteCotacao } from '../ComponenteCotacao';

export const TestesNew = () => {
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  const handleLanguageChange = (selectedLanguages) => {
    setSelectedLanguages(selectedLanguages);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Include selectedLanguages in the form data
    const formData = new FormData(event.target);
    formData.append("SelectedLanguages", JSON.stringify(selectedLanguages));

    // Send the form data to the server or perform any other actions
    // For now, you can console.log the form data
    console.log("Form Data:", formData);

    // Optionally, you can redirect to a "Thank You" page
    window.location.href = "/obrigado";
  };

  return (
    <div>
      <h1>TesteNew Component</h1>
      <ComponenteCotacao onLanguageChange={handleLanguageChange} />
      
      {/* The form to display selected languages */}
      <form
        name="contato-brasil"
        action="/obrigado"
        method="post"
        data-netlify="true"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="SelectedLanguages" value={JSON.stringify(selectedLanguages)} />

        <label>Nome:</label>
        <input required type="text" name="Nome" placeholder="Seu Nome" />

        <label>Cargo:</label>
        <input type="text" name="Cargo" placeholder="Seu Cargo" />

        <label>E-mail:</label>
        <input type="email" name="E-mail" placeholder="Seu E-mail" />

        <label>Mensagem:</label>
        <textarea name="Mensagem" placeholder="Deixe sua mensagem" cols="30" rows="10"></textarea>

        <button type="submit" className="botaoenviar">Enviar</button>
      </form>
    </div>
  );
};
