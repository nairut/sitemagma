import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Celular } from "./screens/Celular";
import { DesktopForm } from "./screens/DesktopForm";
import {  Main } from "./screens/Main";
import React, { useEffect } from "react";
import { Depoimentos } from "./screens/Depoimentos";
import { HomePt } from "./screens/HomePt/HomePt";
import { CelularPt } from "./screens/CelularPt";
import { Testes } from "./screens/Testes";
import { OrcamentoPt } from "./screens/OrcamentoPt";
import { ChatGpt, ContagemPalavras } from "./screens/ContagemPalavras";
import ContagemEChatGpt from "./screens/ContagemPalavras/ContagemEChatGpt";
import { HomePtPreco } from "./screens/HomePtPreco";






 
// Lazy-loaded components
const LazyTagManager = React.lazy(() => import("./LazyTagManager"));


export const App = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });



  const router = createBrowserRouter([
    
      {
        path: "/",
        element: isMobile ? <Celular /> : <Main />,
      },


      {
        path: "/desktop-form",
        element: isMobile ? <Celular /> : <DesktopForm />,
      },


      //////////////////////Abaixo tudo de Português//////////////////////////////

      {
        path: "/pt",
        element: isMobile ? <CelularPt /> : (
          <HomePt
            titulo="Serviço de Tradução Profissional"
            textSize="large"
            primeiraFrase="120 Idiomas que cabem no seu bolso"
            segundaFrase="Traduzimos em mais de 60 áreas"
            terceiraFrase="Linguistas com Mestrado"
          />
        ),

      },



      {
        path: "/ingles/teste",
        element: isMobile ? <CelularPt /> : (
          <HomePt
            titulo="testetestestestestset"
            textSize="large"
            primeiraFrase="120 Idiomas que cabem no seu bolso"
            segundaFrase="Traduzimos em mais de 60 áreas"
            terceiraFrase="Linguistas com Mestrado"
          />
        ),
      },




      {
        path: "pt/servicos/traducao-espanhol",
        element: isMobile ? <CelularPt /> : (
          <HomePt
            titulo="Serviço de Tradução de Espanhol"
            textSize="large"
            primeiraFrase="120 Idiomas que cabem no seu bolso"
            segundaFrase="Traduzimos em mais de 60 áreas"
            terceiraFrase="Linguistas com Mestrado"
          />
        ),
      },



      {
        path: "/pt/servicostraducao-ingles-portugues",
        element: isMobile ? <CelularPt /> : (
          <HomePt
            titulo="Tradução de Inglês para Português"
            textSize="large"
            primeiraFrase="120 Idiomas que cabem no seu bolso"
            segundaFrase="Traduzimos em mais de 60 áreas"
            terceiraFrase="Linguistas com Mestrado"
          />
        ),
      },



      {
        path: "traducao-espanhol-portugues",
        element: isMobile ? <CelularPt /> : (
          <HomePt
            titulo="Tradução de Espanhol para Português"
            textSize="medium"
            primeiraFrase="120 Idiomas que cabem no seu bolso"
            segundaFrase="Traduzimos em mais de 60 áreas"
            terceiraFrase="Linguistas com Mestrado"
          />
        ),
      },


      {
        path: "/traducao-para-espanhol",
        element: isMobile ? <CelularPt /> : (
          <HomePt
            titulo="Serviço de Tradução para Espanhol"
            textSize="large"
            textCollor="large"
            primeiraFrase="120 Idiomas que cabem no seu bolso"
            segundaFrase="Traduzimos em mais de 60 áreas"
            terceiraFrase="Linguistas com Mestrado"
          />
        ),
      },


    


      {
        path: "/traducao-para-ingles",
        element: isMobile ? <CelularPt /> : (
          <HomePt
            titulo="Serviço de Tradução para Inglês"
            textSize="large"
            primeiraFrase="120 Idiomas que cabem no seu bolso"
            segundaFrase="Traduzimos em mais de 60 áreas"
            terceiraFrase="Linguistas com Mestrado"
          />
        ),
      },


      
      {
        path: "/traducao-ingles-portugues",
        element: isMobile ? <CelularPt /> : (
          <HomePt
            titulo="Tradução de Inglês para Português"
            textSize="large"
            primeiraFrase="120 Idiomas que cabem no seu bolso"
            segundaFrase="Traduzimos em mais de 60 áreas"
            terceiraFrase="Linguistas com Mestrado"
          />
        ),
      },


      {
        path: "/traducao-de-alemao",
        element: isMobile ? <CelularPt /> : (
          <HomePt
            titulo="Serviço de Tradução do Alemão"
            textSize="large"
            primeiraFrase="120 Idiomas que cabem no seu bolso"
            segundaFrase="Traduzimos em mais de 60 áreas"
            terceiraFrase="Linguistas com Mestrado"
          />
        ),
      },







      {path:"/depoimentos",
      element: isMobile ? <Celular /> :<Depoimentos/>,
      },



////////////Páginas de Formulário em PT


{
  path: "/solicite-um-orcamento",
  element: isMobile ? <Celular /> : <OrcamentoPt
  
  titulo="Orçamento Grátis"
  
  />,
},


{
  path: "/entre-em-contato",
  element: isMobile ? <Celular /> : <OrcamentoPt
  
  titulo="Entre em Contato"
  
  />,
},






////////////Páginas de Promoções em PT1

{
  path: "/promocoes",
  element: isMobile ? <CelularPt /> : (
    <HomePt
      titulo="Serviço de Tradução Profissional"
      textSize="large"
      textCollor="large"
      primeiraFrase={<span style={{ fontSize: '23px', color: 'red' }}>Cupom: 15% Off no Cupon DESCONTO15</span>}
      segundaFrase='Insira o cupon DESCONTO15 na mensagem'
      terceiraFrase="que você receberá a promoção"
      textoBotao="Receba a promoção"
    />
  ),
},




{
  path: "/preco-de-traducao",
  element: isMobile ? <CelularPt /> : (
    <HomePtPreco
      titulo="Quanto custa a tradução?"
      textSize="large"
      primeiraFrase="120 Idiomas que cabem no seu bolso"
      segundaFrase="Traduzimos em mais de 60 áreas"
      terceiraFrase="Linguistas com Mestrado"
    />
  ),
},







      /////////////////Abaixo tudo de teste ////////////////////////////////

      {
        path: "/testes",
        element: isMobile ? <Celular /> : <Testes />,
      },


      {
        path: "/chatmagma",
        element: isMobile ? <Celular /> : <ChatGpt />,
      },




 

  ]);



  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      {/* Lazy-load and render the TagManager component */}
      <LazyTagManager />
      <RouterProvider router={router} />
    </React.Suspense>
  );

};






