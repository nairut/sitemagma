import React from "react";
import { ButtonPortugues } from "../../components/ButtonPortugues";
import "./style.css";

export const HomePt = ({titulo, primeiraFrase, segundaFrase, terceiraFrase, textCollor, textSize,
  textoBotao


}) => {


  const styles = {
    fontSize: textSize === 'small' ? '25px' : textSize === 'medium' ? '41px': textSize === 'large' ? '59,8px' : 22
    // Other styles...

  };


  return (
    <div className="home-pt">
      <div className="div-2">
        <div className="overlap-6">
          <img className="servio-de-traduo" alt="Servio de traduo" src="/img/magma-translation-png-1.png" />
          <div className="chamadadeentrada">
            <div className="overlap-group-3">
              <img className="agncia-de-traduo" alt="Agência de Tradução" src="/img/ag-ncia-de-tradu-o.png" />
              <div className="textoebotao">
                <div className="text-wrapper-7" style={styles} >{titulo}</div>
                <p className="element-idiomas-que" >
                  {primeiraFrase}
                  <br />
                  {segundaFrase}
                  <br />
                  {terceiraFrase}
                </p>
                <ButtonPortugues className="button-portugues-instance" property1="default" textoBotao={textoBotao} to="solicite-um-orcamento" />
              </div>
            </div>
          </div>
        </div>
        <div className="nossas-parcerias">
          <div className="text-wrapper-8">Nossas Parcerias</div>
          <img className="empresa-de-traduo" alt="Empresa de traduo" src="/img/empresa-de-tradu-o-parcerias.png" />
        </div>
        <div className="setores">
          <p className="text-wrapper-9">Veja alguns dos nossos setores de atuação</p>
          <div className="setores-de-servio-de">
            <div className="overlap-7">
              <div className="text-wrapper-10">Legal</div>
              <img className="law" alt="Law" src="/img/law.png" />
            </div>
            <div className="overlap-8">
              <img className="rectangle-5" alt="Rectangle" src="/img/rectangle-19.svg" />
              <div className="media-filmes">Media &amp; Filmes</div>
              <img className="next" alt="Next" src="/img/next.png" />
            </div>
            <div className="overlap-9">
              <div className="text-wrapper-11">Médica</div>
              <img className="img-2" alt="Medical bag" src="/img/medical-bag.png" />
            </div>
            <div className="overlap-10">
              <div className="text-wrapper-12">E-Learning</div>
              <img className="img-2" alt="Mba" src="/img/mba.png" />
            </div>
            <div className="overlap-11">
              <div className="text-wrapper-13">Empresarial</div>
              <img className="img-2" alt="Manufacturing" src="/img/manufacturing.png" />
            </div>
            <div className="overlap-12">
              <div className="text-wrapper-14">Automotiva</div>
              <img className="img-2" alt="Tesla model x" src="/img/tesla-model-x.png" />
            </div>
            <div className="overlap-group-4">
              <div className="text-wrapper-15">Financeira</div>
              <img className="money-bag-pounds" alt="Money bag pounds" src="/img/money-bag-pounds.png" />
            </div>
            <div className="overlap-13">
              <div className="text-wrapper-16">Marketing</div>
              <img className="img-2" alt="Commercial" src="/img/commercial.png" />
            </div>
            <div className="overlap-14">
              <div className="text-wrapper-13">IT &amp; Software</div>
              <img className="img-2" alt="Programming flag" src="/img/programming-flag.png" />
            </div>
            <div className="overlap-15">
              <div className="text-wrapper-17">Ciências</div>
              <img className="img-2" alt="Biotech" src="/img/biotech.png" />
            </div>
            <div className="overlap-16">
              <div className="text-wrapper-15">Turismo</div>
              <img className="img-2" alt="Plane" src="/img/plane.png" />
            </div>
            <div className="overlap-17">
              <div className="text-wrapper-18">E-commerce</div>
              <img className="img-2" alt="Buy" src="/img/buy.png" />
            </div>
          </div>
        </div>
        <ButtonPortugues className="botao-brasileiro" property1="default" to="solicite-um-orcamento"  textoBotao={textoBotao} />
        <div className="depoimentos">
          <div className="osdepoimentos">
            <p className="text-wrapper-19">
              Na Magma Translation, encontramos profissionalismo e precisão em cada projeto. Anton Paar agradece pela
              parceria e recomenda seus excelentes serviços de tradução.
            </p>
            <p className="text-wrapper-20">
              A Magma Translation tem sido uma aliada inestimável na nossa missão de difundir conhecimento. O Museu do
              Amanhã agradece pela excelência e dedicação em cada tradução.
            </p>
            <p className="text-wrapper-21">
              Com a expertise da Magma Translation, a Ambev elevou sua comunicação global a novos patamares. Valorizamos
              e recomendamos seus impecáveis serviços de tradução.
            </p>
            <div className="text-wrapper-22">Anton Paar</div>
            <div className="overlap-group-5">
              <div className="text-wrapper-23">Museu do Amanhã</div>
              <div className="text-wrapper-24">Ricardo de Aquino Silva</div>
            </div>
            <div className="text-wrapper-25">Ambev</div>
            <div className="text-wrapper-26">Elisabeth Vogel</div>
            <div className="marcelo-soares"> Marcelo Soares</div>
            <img
              className="empresa-de-traduo-2"
              alt="Empresa de traduo"
              src="/img/empresa-de-tradu-o-depoimentos3.png"
            />
            <img
              className="empresa-de-traduo-3"
              alt="Empresa de traduo"
              src="/img/empresa-de-tradu-o-depoimentos2.png"
            />
            <img
              className="empresa-de-traduo-4"
              alt="Empresa de traduo"
              src="/img/empresa-de-tradu-o-depoimentos.png"
            />
          </div>
          <div className="estrelas">
            <img className="star" alt="Star" src="/img/star-16.svg" />
            <img className="star-2" alt="Star" src="/img/star-16.svg" />
            <img className="star-3" alt="Star" src="/img/star-16.svg" />
            <img className="star-4" alt="Star" src="/img/star-16.svg" />
            <img className="star-5" alt="Star" src="/img/star-16.svg" />
          </div>
          <div className="estrelas-2">
            <img className="star" alt="Star" src="/img/star-16.svg" />
            <img className="star-2" alt="Star" src="/img/star-16.svg" />
            <img className="star-3" alt="Star" src="/img/star-16.svg" />
            <img className="star-4" alt="Star" src="/img/star-16.svg" />
            <img className="star-5" alt="Star" src="/img/star-16.svg" />
          </div>
          <div className="estrelas-3">
            <img className="star" alt="Star" src="/img/star-16.svg" />
            <img className="star-2" alt="Star" src="/img/star-16.svg" />
            <img className="star-3" alt="Star" src="/img/star-16.svg" />
            <img className="star-4" alt="Star" src="/img/star-16.svg" />
            <img className="star-5" alt="Star" src="/img/star-16.svg" />
          </div>
          <p className="cada-tradu-o-passa">
            Cada tradução passa por uma revisão minuciosa e validação tanto pela nossa <br />
            equipe de editores externos profissionais quanto pelos nossos especialistas internos em idiomas.
          </p>
          <div className="text-wrapper-27">Qualidade que dá gosto</div>
        </div>
        <div className="traduziveis">
          <div className="oquesetraduz">
            <div className="overlap-18">
              <div className="documentos"> Documentos</div>
              <img className="img-3" alt="Pdf" src="/img/pdf.png" />
            </div>
            <div className="overlap-19">
              <div className="text-wrapper-28">Marketing e Anúncios</div>
              <img className="img-3" alt="Goal" src="/img/goal.png" />
            </div>
            <div className="overlap-20">
              <div className="website-apps">Website &amp; Apps</div>
              <img className="img-3" alt="Website" src="/img/website.png" />
            </div>
            <div className="overlap-21">
              <div className="text-wrapper-29">Vídeos</div>
              <img className="img-3" alt="Video camera" src="/img/video-camera.png" />
            </div>
            <div className="overlap-group-6">
              <div className="text-wrapper-30">Descrições de produtos</div>
              <img className="img-3" alt="E commerce" src="/img/e-commerce.png" />
            </div>
            <div className="overlap-22">
              <div className="text-wrapper-31">Artigos e muito mais</div>
              <img className="biotech" alt="Biotech" src="/img/biotech.png" />
            </div>
          </div>
          <p className="text-wrapper-32">
            Nossos tradutores proficientes têm a capacidade de traduzir qualquer tipo de documento, com suporte aos
            tipos de arquivo abaixo mencionados.
          </p>
          <p className="text-wrapper-33">O que você pode traduzir?</p>
        </div>
        <ButtonPortugues className="design-component-instance-node" property1="default" to="solicite-um-orcamento" textoBotao={textoBotao} />
        <div className="group-4">
          <div className="group-5">
            <p className="text-wrapper-34">
              MAGMA é um fornecedor global de soluções de localização, permitindo que marcas estabeleçam uma presença
              autêntica em diversos mercados ao redor do mundo.
            </p>
            <p className="text-wrapper-35">Magma Translation | Todos os direitos reservados. ©Magma™</p>
          </div>
          <img className="magma-translation-3" alt="Magma translation" src="/img/magma-translation-png-1.png" />
        </div>
      </div>
    </div>
  );
};
