import React from "react";

import "./style.css";
import { ButtonPortuguesCelular } from "../../components/ButtonPortuguesCelular";


export const CelularPtpronto =  ({titulo, primeiraFrase, segundaFrase, terceiraFrase, textCollor, textSize,
  textoBotao


}) => {


  /*
  const styles = {
    fontSize: textSize === 'small' ? '25px' : textSize === 'medium' ? '41px': textSize === 'large-medium' ? '48px': textSize === 'large' ? '59,8px' : 22
    // Other styles...

  };
  */


  return (
    <div className="celular-ptpronto">
      <div className="div">
        <img className="magma-translation" alt="Magma translation" src="/img/magma-translation-png.png" />
        <div className="overlap">
          <div className="text-wrapper"  >{titulo}</div>
          <p className="element-idiomas-que">
            {primeiraFrase}
            <br />
            {segundaFrase}
            <br />
           {terceiraFrase}
          </p>
        </div>
        <ButtonPortuguesCelular
          className="button-portugues-instance"
          entreEmContatoClassName="design-component-instance-node"
          property1="default" 
  
          textoBotao={textoBotao} to="/solicite-um-orcamento" />
   


        <ButtonPortuguesCelular
          className="button-portugues-2"
          entreEmContatoClassName="design-component-instance-node"
          textoBotao={textoBotao} to="/solicite-um-orcamento"
        />
        <ButtonPortuguesCelular
          className="button-portugues-3"
          entreEmContatoClassName="design-component-instance-node"
          textoBotao={textoBotao} to="/solicite-um-orcamento"
        />
        <ButtonPortuguesCelular
          className="button-portugues-4"
          entreEmContatoClassName="design-component-instance-node"
          textoBotao={textoBotao} to="/solicite-um-orcamento"
        />
        <img className="agncia-de-traduo" alt="Agncia de traduo" src="/img/ag-ncia-de-tradu-o.png" />
        <div className="text-wrapper-2">Qualidade que dá gosto</div>
        <p className="p">Cada tradução passa por uma revisão minuciosa e validação da nossa equipe</p>
        <div className="group">
          <p className="text-wrapper-3">
            Na Magma Translation, encontramos profissionalismo e precisão em cada projeto. Anton Paar agradece pela
            parceria e recomenda seus excelentes serviços de tradução.
          </p>
          <div className="text-wrapper-4">Anton Paar</div>
          <div className="text-wrapper-5">Elisabeth Vogel</div>
          <img className="empresa-de-traduo" alt="Empresa de traduo" src="/img/empresa-de-tradu-o-depoimentos3.png" />
          <div className="estrelas">
            <img className="star" alt="Star" src="/img/star-16.svg" />
            <img className="img" alt="Star" src="/img/star-16.svg" />
            <img className="star-2" alt="Star" src="/img/star-16.svg" />
            <img className="star-3" alt="Star" src="/img/star-16.svg" />
            <img className="star-4" alt="Star" src="/img/star-16.svg" />
          </div>
        </div>
        <div className="group-2">
          <p className="text-wrapper-6">
            A Magma Translation tem sido uma aliada inestimável na nossa missão de difundir conhecimento. O Museu do
            Amanhã agradece pela excelência e dedicação em cada tradução.
          </p>
          <div className="overlap-group">
            <div className="text-wrapper-7">Museu do Amanhã</div>
            <div className="text-wrapper-8">Ricardo de Aquino Silva</div>
          </div>
          <img className="empresa-de-traduo-2" alt="Empresa de traduo" src="/img/empresa-de-tradu-o-depoimentos2.png" />
          <div className="estrelas-2">
            <img className="star" alt="Star" src="/img/star-16.svg" />
            <img className="img" alt="Star" src="/img/star-16.svg" />
            <img className="star-2" alt="Star" src="/img/star-16.svg" />
            <img className="star-3" alt="Star" src="/img/star-16.svg" />
            <img className="star-4" alt="Star" src="/img/star-16.svg" />
          </div>
        </div>
        <div className="group-3">
          <p className="text-wrapper-9">
            Com a expertise da Magma Translation, a Ambev elevou sua comunicação global a novos patamares. Valorizamos e
            recomendamos seus impecáveis serviços de tradução.
          </p>
          <div className="text-wrapper-10">Ambev</div>
          <div className="marcelo-soares"> Marcelo Soares</div>
          <img className="empresa-de-traduo-3" alt="Empresa de traduo" src="/img/empresa-de-tradu-o-depoimentos.png" />
          <div className="estrelas-3">
            <img className="star" alt="Star" src="/img/star-16.svg" />
            <img className="img" alt="Star" src="/img/star-16.svg" />
            <img className="star-2" alt="Star" src="/img/star-16.svg" />
            <img className="star-3" alt="Star" src="/img/star-16.svg" />
            <img className="star-4" alt="Star" src="/img/star-16.svg" />
          </div>
        </div>
        <div className="group-4">
          <div className="overlap-2">
            <div className="text-wrapper-11">Legal</div>
            <img className="law" alt="Law" src="/img/law.png" />
          </div>
          <div className="overlap-3">
            <div className="media-filmes">Media &amp; Filmes</div>
            <img className="next" alt="Next" src="/img/next.png" />
          </div>
          <div className="overlap-4">
            <div className="text-wrapper-12">Médica</div>
            <img className="img-2" alt="Medical bag" src="/img/medical-bag.png" />
          </div>
          <div className="overlap-5">
            <div className="text-wrapper-13">E-Learning</div>
            <img className="img-2" alt="Mba" src="/img/mba.png" />
          </div>
          <div className="overlap-6">
            <div className="text-wrapper-14">Empresarial</div>
            <img className="img-2" alt="Manufacturing" src="/img/manufacturing.png" />
          </div>
          <div className="overlap-7">
            <div className="text-wrapper-15">Financeira</div>
            <img className="money-bag-pounds" alt="Money bag pounds" src="/img/money-bag-pounds.png" />
          </div>
          <div className="overlap-8">
            <div className="text-wrapper-14">IT &amp; Software</div>
            <img className="img-2" alt="Programming flag" src="/img/programming-flag.png" />
          </div>
          <div className="overlap-9">
            <div className="text-wrapper-15">Turismo</div>
            <img className="img-2" alt="Plane" src="/img/plane.png" />
          </div>
          <div className="overlap-group-wrapper">
            <div className="overlap-group-2">
              <div className="text-wrapper-16">Automotiva</div>
              <img className="img-2" alt="Tesla model x" src="/img/tesla-model-x.png" />
            </div>
          </div>
          <div className="overlap-wrapper">
            <div className="overlap-group-2">
              <div className="text-wrapper-17">Marketing</div>
              <img className="img-2" alt="Commercial" src="/img/commercial.png" />
            </div>
          </div>
          <div className="div-wrapper">
            <div className="overlap-group-2">
              <div className="text-wrapper-18">Ciências</div>
              <img className="img-2" alt="Biotech" src="/img/biotech.png" />
            </div>
          </div>
          <div className="group-5">
            <div className="overlap-group-2">
              <div className="text-wrapper-19">E-commerce</div>
              <img className="img-2" alt="Buy" src="/img/buy.png" />
            </div>
          </div>
        </div>
        <p className="text-wrapper-20">O que você pode traduzir?</p>
        <p className="text-wrapper-21">
          Nossos tradutores proficientes têm a capacidade de traduzir qualquer tipo de documento, com suporte aos tipos
          de arquivo abaixo mencionados.
        </p>
        <div className="group-6">
          <div className="overlap-10">
            <div className="website-apps">Website &amp; Apps</div>
            <img className="img-3" alt="Website" src="/img/website.png" />
          </div>
          <div className="overlap-11">
            <div className="text-wrapper-22">Vídeos</div>
            <img className="img-3" alt="Video camera" src="/img/video-camera.png" />
          </div>
          <div className="overlap-12">
            <div className="text-wrapper-23">Descrições de produtos</div>
            <img className="img-3" alt="E commerce" src="/img/e-commerce.png" />
          </div>
          <div className="overlap-13">
            <div className="text-wrapper-24">Artigos e muito mais</div>
            <img className="biotech" alt="Biotech" src="/img/biotech.png" />
          </div>
          <div className="overlap-14">
            <div className="documentos"> Documentos</div>
            <img className="img-3" alt="Pdf" src="/img/pdf.png" />
          </div>
          <div className="overlap-15">
            <div className="text-wrapper-25">Marketing e Anúncios</div>
            <img className="img-3" alt="Goal" src="/img/goal.png" />
          </div>
        </div>
        <img className="magma-translation-2" alt="Magma translation" src="/img/magma-translation-png-1.png" />
        <div className="group-7">
          <div className="overlap-16">
            <p className="text-wrapper-26">
              MAGMA é um fornecedor global de soluções de localização, permitindo que marcas estabeleçam uma presença
              autêntica em diversos mercados ao redor do mundo.
            </p>
            <p className="text-wrapper-27">Magma Translation | Todos os direitos reservados. ©Magma™</p>
          </div>
        </div>
      </div>
    </div>
  );
};
