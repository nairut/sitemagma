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
import { HomePtPreco } from "./screens/HomePtPreco";
import { ContatoPt } from "./screens/ContatoPt";



 
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
        path: "/empresa-de-traducao",
        element: isMobile ? <CelularPt /> : (
          <HomePt
            titulo="Empresa de Tradução Profissional"
            textSize="large-medium"
            primeiraFrase="120 Idiomas que cabem no seu bolso"
            segundaFrase="Traduzimos em mais de 60 áreas"
            terceiraFrase="Linguistas com Mestrado"
          />
        ),

      },


      {
        path: "/agencia-de-traducao",
        element: isMobile ? <CelularPt /> : (
          <HomePt
            titulo="Agência de Tradução Profissional"
            textSize="large"
            primeiraFrase="120 Idiomas que cabem no seu bolso"
            segundaFrase="Traduzimos em mais de 60 áreas"
            terceiraFrase="Linguistas com Mestrado"
          />
        ),

      },



      {
        path: "/traducao-de-documentos",
        element: isMobile ? <CelularPt /> : (
          <HomePt
            titulo="Empresa de Tradução de Documentos"
            textSize="large-medium"
            primeiraFrase="120 Idiomas que cabem no seu bolso"
            segundaFrase="Traduzimos em mais de 60 áreas"
            terceiraFrase="Linguistas com Mestrado"
          />
        ),

      },


      {
        path: "/preco-por-palavra",
        element: isMobile ? <CelularPt /> : (
          <HomePt
            titulo="Descubra rapidamente nosso Preço por Palavra"
            textSize="medium"
            primeiraFrase="120 Idiomas que cabem no seu bolso"
            segundaFrase="Traduzimos em mais de 60 áreas"
            terceiraFrase="Linguistas com Mestrado"
          />
        ),

      },

      {
        path: "/preco-por-pagina",
        element: isMobile ? <CelularPt /> : (
          <HomePt
            titulo="Descubra rapidamente nosso Preço por Página"
            textSize="medium"
            primeiraFrase="120 Idiomas que cabem no seu bolso"
            segundaFrase="Traduzimos em mais de 60 áreas"
            terceiraFrase="Linguistas com Mestrado"
          />
        ),

      },


      {
        path: "/preco-por-lauda",
        element: isMobile ? <CelularPt /> : (
          <HomePt
            titulo="Descubra rapidamente nosso Preço por Lauda"
            textSize="medium"
            primeiraFrase="120 Idiomas que cabem no seu bolso"
            segundaFrase="Traduzimos em mais de 60 áreas"
            terceiraFrase="Linguistas com Mestrado"
          />
        ),

      },




      {
        path: "/traducao-tecnica",
        element: isMobile ? <CelularPt /> : (
          <HomePt
            titulo="Empresa de Tradução Técnica"
            textSize="large"
            primeiraFrase="120 Idiomas que cabem no seu bolso"
            segundaFrase="Traduzimos em mais de 60 áreas"
            terceiraFrase="Linguistas com Mestrado"
          />
        ),

      },



      {
        path: "/empresa-de-legendagem",
        element: isMobile ? <CelularPt /> : (
          <HomePt
            titulo="Empresa de Legendagem"
            textSize="large-medium"
            primeiraFrase="120 Idiomas que cabem no seu bolso"
            segundaFrase="Legendamos em mais de 60 áreas"
            terceiraFrase="Linguistas com Mestrado"
          />
        ),
      },

        


      {
        path: "/orcamento-de-traducao",
        element: isMobile ? <CelularPt /> : (
          <HomePt
            titulo="Orçamento Grátis de Tradução"
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
  element: isMobile ? <Celular /> : <ContatoPt
  
  titulo="Solicite um Orçamento Grátis"
  
  />,
},


{
  path: "/entre-em-contato",
  element: isMobile ? <Celular /> : <ContatoPt
  
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





 

  ]);



  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      {/* Lazy-load and render the TagManager component */}
      <LazyTagManager />
      <RouterProvider router={router} />
    </React.Suspense>
  );

};






