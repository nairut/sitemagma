import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Celular } from "./screens/Celular";
import { DesktopForm } from "./screens/DesktopForm";
import { CellForm } from "./screens/CellForm";
import {  Main } from "./screens/Main";
import React, { useEffect } from "react";
import { Depoimentos } from "./screens/Depoimentos";
import { HomePt } from "./screens/HomePt/HomePt";
import { CelularPt } from "./screens/CelularPt";
import { ContagemPalavra, Testes } from "./screens/Testes";
import { OrcamentoPt } from "./screens/OrcamentoPt";




 
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



      {path:"/depoimentos",
      element: isMobile ? <Celular /> :<Depoimentos/>,
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
        path: "/falaserio",
        element: isMobile ? <CelularPt /> : (
          <HomePt
            titulo="falaserio"
            textSize="large"
            primeiraFrase="120 Idiomas que cabem no seu bolso"
            segundaFrase="Traduzimos em mais de 60 áreas"
            terceiraFrase="Linguistas com Mestrado"
          />
        ),
      },




      {
        path: "/ingles",
        element: isMobile ? <CelularPt /> : (
          <HomePt
            titulo="Serviço de Tradução de Inglês"
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
        path: "/pt/servicos/traducao-espanhol-portugues",
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






////////////Páginas de Formulário em PT


{
  path: "/pt/orcamento",
  element: isMobile ? <Celular /> : <OrcamentoPt
  
  titulo="Testes da porra"
  
  />,
},





////////////Páginas de Promoções em PT1

{
  path: "/pt/promocoes/cupon",
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









      /////////////////Abaixo tudo de teste ////////////////////////////////

      {
        path: "/testes",
        element: isMobile ? <Celular /> : <Testes />,
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





