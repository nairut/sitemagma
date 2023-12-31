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

import { ContatoPt } from "./screens/ContatoPt";
import { ContatoCelularPt } from "./screens/ContatoCelularPt";
import { CelularPtpronto } from "./screens/CelularPtpronto";
import { TestesNew } from "./screens/TestesNew/TestesNew";
import { ComponenteCotacao } from "./screens/ComponenteCotacao";





 
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
        element: isMobile ? <CelularPtpronto 
      
        textoBotao="Descubra"
        titulo="Serviço de Tradução Profissional"
        textSize="large"
        primeiraFrase="120 Idiomas que cabem no seu bolso"
        segundaFrase="Traduzimos em mais de 60 áreas"
        terceiraFrase="Linguistas com Mestrado"
        
        
        
        /> : (
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
        element: isMobile ? <CelularPtpronto 
        textoBotao="Descubra"

        titulo="Empresa de Tradução Profissional"
        textSize="large-medium"
        primeiraFrase="120 Idiomas que cabem no seu bolso"
        segundaFrase="Traduzimos em mais de 60 áreas"
        terceiraFrase="Linguistas com Mestrado"

        /> : (
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
        element: isMobile ? <CelularPtpronto 
        textoBotao="Descubra"
        titulo="Agência de Tradução Profissional"
        textSize="large"
        primeiraFrase="120 Idiomas que cabem no seu bolso"
        segundaFrase="Traduzimos em mais de 60 áreas"
        terceiraFrase="Linguistas com Mestrado"



        /> : (
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
        element: isMobile ? <CelularPtpronto 
        textoBotao="Descubra"
        titulo="Empresa de Tradução de Documentos"
        textSize="large-medium"
        primeiraFrase="120 Idiomas que cabem no seu bolso"
        segundaFrase="Traduzimos em mais de 60 áreas"
        terceiraFrase="Linguistas com Mestrado"
        
        /> : (
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
        element: isMobile ? <CelularPtpronto 
        textoBotao="Descubra"
        titulo="Custo do Preço por Palavra de Tradução"
        textSize="medium"
        primeiraFrase="120 Idiomas que cabem no seu bolso"
        segundaFrase="Traduzimos em mais de 60 áreas"
        terceiraFrase="Linguistas com Mestrado"
        
        /> : (
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
        element: isMobile ? <CelularPtpronto
        textoBotao="Descubra"
        titulo="Custo do Preço por Página de Tradução"
        textSize="medium"
        primeiraFrase="120 Idiomas que cabem no seu bolso"
        segundaFrase="Traduzimos em mais de 60 áreas"
        terceiraFrase="Linguistas com Mestrado"
        
        /> : (
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
        element: isMobile ? <CelularPtpronto 
        textoBotao="Descubra"
        titulo="Custo do Preço por Página de Tradução"
        textSize="medium"
        primeiraFrase="120 Idiomas que cabem no seu bolso"
        segundaFrase="Traduzimos em mais de 60 áreas"
        terceiraFrase="Linguistas com Mestrado"
        
        /> : (
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
        element: isMobile ? <CelularPtpronto
        textoBotao="Descubra"
        titulo="Empresa de Tradução Técnica"
        textSize="large"
        primeiraFrase="120 Idiomas que cabem no seu bolso"
        segundaFrase="Traduzimos em mais de 60 áreas"
        terceiraFrase="Linguistas com Mestrado"
        
        /> : (
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
        element: isMobile ? <CelularPtpronto 
        textoBotao="Descubra"
        titulo="Empresa de Legendagem"
        textSize="large-medium"
        primeiraFrase="120 Idiomas que cabem no seu bolso"
        segundaFrase="Legendamos em mais de 60 áreas"
        terceiraFrase="Linguistas com Mestrado"
        
        /> : (
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
        element: isMobile ? <CelularPtpronto 
        textoBotao="Descubra"
        titulo="Orçamento de Tradução"
        textSize="large"
        primeiraFrase="120 Idiomas que cabem no seu bolso"
        segundaFrase="Traduzimos em mais de 60 áreas"
        terceiraFrase="Linguistas com Mestrado"
        
        /> : (
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
        element: isMobile ? <CelularPtpronto 
        textoBotao="Descubra"
        titulo="Tradução de Espanhol para Português"
        textSize="medium"
        primeiraFrase="120 Idiomas que cabem no seu bolso"
        segundaFrase="Traduzimos em mais de 60 áreas"
        terceiraFrase="Linguistas com Mestrado"
        
        /> : (
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
        element: isMobile ? <CelularPtpronto
        textoBotao="Descubra"
        titulo="Serviço de Tradução para Espanhol"
        textSize="large"
        textCollor="large"
        primeiraFrase="120 Idiomas que cabem no seu bolso"
        segundaFrase="Traduzimos em mais de 60 áreas"
        terceiraFrase="Linguistas com Mestrado"
        
        /> : (
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
        element: isMobile ? <CelularPtpronto 
        textoBotao="Descubra"
        titulo="Serviço de Tradução para Inglês"
        textSize="large"
        primeiraFrase="120 Idiomas que cabem no seu bolso"
        segundaFrase="Traduzimos em mais de 60 áreas"
        terceiraFrase="Linguistas com Mestrado"
        
        /> : (
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
        element: isMobile ? <CelularPtpronto
        textoBotao="Descubra"
        titulo="Tradução de Inglês para Português"
        textSize="large"
        primeiraFrase="120 Idiomas que cabem no seu bolso"
        segundaFrase="Traduzimos em mais de 60 áreas"
        terceiraFrase="Linguistas com Mestrado"
        
        /> : (
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
        element: isMobile ? <CelularPtpronto 
        textoBotao="Descubra"
        titulo="Serviço de Tradução do Alemão"
        textSize="large"
        primeiraFrase="120 Idiomas que cabem no seu bolso"
        segundaFrase="Traduzimos em mais de 60 áreas"
        terceiraFrase="Linguistas com Mestrado"
        
        /> : (
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
      element: isMobile ? <CelularPtpronto 
      textoBotao="Descubra"
      
      /> :<Depoimentos/>,
      },



////////////Páginas de Formulário em PT


{
  path: "/solicite-um-orcamento",
  element: isMobile ? <ContatoCelularPt /> : <ContatoPt
  
  titulo="Solicite um Orçamento Grátis"
  
  />,
},


{
  path: "/entre-em-contato",
  element: isMobile ? <ContatoCelularPt /> : <ContatoPt
  
  titulo="Entre em Contato"
  
  />,
},






////////////Páginas de Promoções em PT1

{
  path: "/promocoes",
  element: isMobile ? <CelularPtpronto 
  textoBotao="Descubra"
  titulo="Serviço de Tradução Profissional"
  textSize="large"
  textCollor="large"
  primeiraFrase={<span style={{ fontSize: '23px', color: 'red' }}>Cupom: 15% Off no Cupon DESCONTO15</span>}
  segundaFrase='Insira o cupon DESCONTO15 na mensagem'

  textoBotao="APROVEITE"
  
  
  
  
  /> : (
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
  element: isMobile ? <CelularPtpronto
  textoBotao="Descubra"
  titulo="Quanto custa a tradução?"
  textSize="large"
  primeiraFrase="120 Idiomas que cabem no seu bolso"
  segundaFrase="Traduzimos em mais de 60 áreas"
  terceiraFrase="Linguistas com Mestrado"
  
  
  
  /> : (
    <HomePt
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
        element: isMobile ? <Celular /> : <TestesNew 
        
        
        
        titulo="Serviço de Tradução Profissional"
        textSize="large"
        primeiraFrase="120 Idiomas que cabem no seu bolso"
        segundaFrase="Traduzimos em mais de 60 áreas"
        terceiraFrase="Linguistas com Mestrado"
        
        />,
      },


      {
        path: "/componente",
        element: isMobile ? <Celular /> : <ComponenteCotacao />,
      },


    
      {
        path: "/obrigado",
        element: isMobile ? <CelularPt /> : (
          <HomePt
            titulo="Orçamento Recebido!"
            textSize="large"
            primeiraFrase="Estamos analisando com cuidado seu pedido"
            segundaFrase="Entraremos em contato"
            terceiraFrase=""
          />
        ),
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






