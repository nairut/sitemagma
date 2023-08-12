import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Celular } from "./screens/Celular";
import { DesktopForm } from "./screens/DesktopForm";
import { CellForm } from "./screens/CellForm";
import {  Main } from "./screens/Main";
import { Obrigado } from "./screens/Obrigado";
import React, { useEffect } from "react";
import { Spanish } from "./screens/Spanish";
import { German } from "./screens/German";

import { Depoimentos } from "./screens/Depoimentos";
import { DesktopFormPT } from "./screens/DesktopFormPT";
import { HomePt } from "./screens/HomePt/HomePt";
import { CelularPt } from "./screens/CelularPt";

import { ContagemPalavra, Testes } from "./screens/Testes";





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
        path: "/spanish",
        element: isMobile ? <Celular /> : <Spanish />,
      },
      {
        path: "/german",
        element: isMobile ? <Celular /> : <German />,
      },
      {
        path: "/form",
        element: isMobile ? <CellForm /> : <DesktopForm />,
      },

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
        path: "/pt/promocao",
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
        path: "/pt/depoimentos",
        element: isMobile ? <Celular /> : <Depoimentos />,
      },
      {
        path: "/pt/orcamento",
        element: isMobile ? <Celular /> : <DesktopFormPT />,
      },
      // Add more pages here

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





