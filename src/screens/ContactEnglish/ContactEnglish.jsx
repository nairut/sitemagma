import React from "react";
import "./style.css";
import ReactWhatsapp from 'react-whatsapp';

export const ContactEnglish = () => {






  const handleSubmit = (event) => {

    
    // Get the email input value
    const email = event.target.elements['E-mail'].value.toLowerCase(); // Convert to lowercase for case insensitivity
    
    // Check if the email contains "hotmail," "gmail," or "yahoo"
    if (email.includes('hotmail') || email.includes('gmail') || email.includes('yahoo')) {
      // Redirect to "/obrigadodois" for the specified email domains
      window.location.href = "/um-obrigado-da-magma";
    } else {
      // Redirect to "/obrigado" for other email domains
      window.location.href = "/thank-you";
    }
  };


  

  return (
    <div className="contato-pt">
      <div className="div">
        <div className="overlap">
          <img className="servio-de-traduo" alt="Servio de traduo" src="/img/magma-translation-png-1.png" />
          <div className="overlap-group">
            <div className="chamadadeentrada">
              <div className="textoebotao">
                <div className="overlap-group-2">
                  <div className="text-wrapper">Request a Free Quote</div>
                  <p className="element-idiomas-que">
                  120 Languages that fit in your pocket
                    <br />
                    Linguists with Master's degrees
                    <br />
                    We translate in more than 60 areas
                  </p>
                </div>
              </div>
            </div>
            <div className="rectangle" />


            <form  name="contact-english-br" action="/thank-you" method="post"  data-netlify="true" onSubmit={handleSubmit}>
            <input type="hidden" name="form-name" value="contato-brasil" />

              <input required type="text" className="nome" name="Nome" placeholder="Your Name"    />

              <input required type="text" className="cargo" name="Cargo" placeholder="Your job title"  />

              <input required type="email" className="e-mail" name="E-mail" placeholder="Your E-mail"   />

              <textarea name="Messagem" placeholder="Write your message" className="mensagem" cols="30" rows="10"></textarea>
          
              <button type="submit"  className="botaoenviar" >Send</button>

            </form>




            


          </div>
        </div>
      </div>
    </div>
  );
};
