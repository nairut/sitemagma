import React from "react";
import "./style.css";
import { Link } from 'react-router-dom';

export const ContatoPt = ({titulo}) => {

  return (
    <div className="contato-pt">
      <div className="div">
        <div className="overlap">
          <img className="servio-de-traduo" alt="Servio de traduo" src="/img/magma-translation-png-1.png" />
          <div className="overlap-group">
            <div className="chamadadeentrada">
              <div className="textoebotao">
                <div className="overlap-group-2">
                  <div className="text-wrapper">{titulo}</div>
                  <p className="element-idiomas-que">
                    120 Idiomas que cabem no seu bolso
                    <br />
                    Linguistas com Mestrado
                    <br />
                    Traduzimos em mais de 60 áreas
                  </p>
                </div>
              </div>
            </div>
            <div className="rectangle" />


            <form  name="contato-brasil" action="https://pages.magmatranslation.com" method="post"  data-netlify="true" 
            onSubmit="submit">

            <input type="hidden" name="form-name" value="contato-brasil" />

              <input required type="text" className="nome" name="Nome" placeholder="Seu Nome"    />

              <input required type="text" className="cargo" name="Cargo" placeholder="Seu Cargo"  />

              <input required type="email" className="e-mail" name="E-mail" placeholder="Seu E-mail"   />

              <textarea name="Messagem" placeholder="Deixe sua mensagem" className="mensagem" cols="30" rows="10"></textarea>
          
              <button   className="botaoenviar" >Enviar</button>




            </form>




            


          </div>
        </div>
        <div className="group">
          <div className="text-wrapper-2">Você sabia?</div>
          <p className="como-relatado-pela">
            Como relatado pela CSA Research, a preferência <br />
            pelo idioma nativo varia de acordo com a oferta:
          </p>
          <div className="text-wrapper-3">71%</div>
          <div className="text-wrapper-4">71%</div>
          <p className="j">
            <span className="span">JÁ</span>
            <span className="text-wrapper-5">71%</span>
          </p>
          <p className="dos-consumidores">
            dos consumidores fazem
            <br />
            uma pesquisa on-line antes
            <br /> de fazer uma compra
          </p>
          <p className="p">Quando falamos em produtos, o valor aumenta para</p>
          <p className="text-wrapper-6">dizem que informações em seu idioma nativo é mais importante do que o preço</p>
        </div>
        <div className="nossas-parcerias">
          <div className="text-wrapper-7">Nossas Parcerias</div>
          <img className="empresa-de-traduo" alt="Empresa de traduo" src="/img/empresa-de-tradu-o-parcerias.png" />
        </div>
        <div className="group-wrapper">
          <div className="group-2">
            <p className="text-wrapper-8">
              Na Magma Translation, encontramos profissionalismo e precisão em cada projeto. Anton Paar agradece pela
              parceria e recomenda seus excelentes serviços de tradução.
            </p>
            <p className="text-wrapper-9">
              A Magma Translation tem sido uma aliada inestimável na nossa missão de difundir conhecimento. O Museu do
              Amanhã agradece pela excelência e dedicação em cada tradução.
            </p>
            <p className="text-wrapper-10">
              Com a expertise da Magma Translation, a Ambev elevou sua comunicação global a novos patamares. Valorizamos
              e recomendamos seus impecáveis serviços de tradução.
            </p>
            <div className="text-wrapper-11">Anton Paar</div>
            <div className="overlap-group-3">
              <div className="text-wrapper-12">Museu do Amanhã</div>
              <div className="text-wrapper-13">Ricardo de Aquino</div>
            </div>
            <div className="text-wrapper-14">Ambev</div>
            <div className="text-wrapper-15">Elisabeth Vogel</div>
            <div className="marcelo-soares"> Marcelo Soares</div>
            <img className="ellipse" alt="Ellipse" src="/img/empresa-de-tradu-o-depoimentos3.png" />
            <img className="img" alt="Ellipse" src="/img/empresa-de-tradu-o-depoimentos2.png" />
            <img className="ellipse-2" alt="Ellipse" src="/img/empresa-de-tradu-o-depoimentos.png" />
            <img className="star" alt="Star" src="/img/image.svg" />
            <img className="star-2" alt="Star" src="/img/image.svg" />
            <img className="star-3" alt="Star" src="/img/image.svg" />
            <img className="star-4" alt="Star" src="/img/image.svg" />
            <img className="star-5" alt="Star" src="/img/image.svg" />
            <img className="star-6" alt="Star" src="/img/image.svg" />
            <img className="star-7" alt="Star" src="/img/image.svg" />
            <img className="star-8" alt="Star" src="/img/image.svg" />
            <img className="star-9" alt="Star" src="/img/image.svg" />
            <img className="star-10" alt="Star" src="/img/image.svg" />
            <img className="star-11" alt="Star" src="/img/image.svg" />
            <img className="star-12" alt="Star" src="/img/image.svg" />
            <img className="star-13" alt="Star" src="/img/image.svg" />
            <img className="star-14" alt="Star" src="/img/image.svg" />
            <img className="star-15" alt="Star" src="/img/image.svg" />
          </div>
        </div>
        <div className="group-3">
          <div className="group-4">
            <p className="text-wrapper-16">
              MAGMA é um fornecedor global de soluções de localização, permitindo que marcas estabeleçam uma presença
              autêntica em diversos mercados ao redor do mundo.
            </p>
            <p className="text-wrapper-17">Magma Translation | Todos os direitos reservados. ©Magma™</p>
          </div>
          <img className="magma-translation" alt="Magma translation" src="/img/magma-translation-png-1.png" />
        </div>
        <p className="text-wrapper-18">O que dizem nossos clientes</p>
      </div>
    </div>
  );
};
