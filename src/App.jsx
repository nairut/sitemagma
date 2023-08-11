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
import { Testes } from "./screens/Testes";
import { Depoimentos } from "./screens/Depoimentos";
import { DesktopFormPT } from "./screens/DesktopFormPT";
import { HomePt } from "./screens/HomePt/HomePt";
import { CelularPt } from "./screens/CelularPt";




// Lazy-loaded components
const LazyTagManager = React.lazy(() => import("./LazyTagManager"));


export const App = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const renderMainPage = () => {
    if (isMobile) {
      return <Celular />;
    } else {
      return <Main/>;
      
    }
  };


  const renderSpanishPage = () => {
    if (isMobile) {
      return <Celular />;
    } else {
      return <Spanish/>;
      
    }
  };

  const renderGermanPage = () => {
    if (isMobile) {
      return <Celular />;
    } else {
      return <German/>;
      
    }
  };


  const renderFormPage = () => {
    if (isMobile) {
      return <CellForm />;
    } else {
      return <DesktopForm />;
    }
  };

  const renderTestesPage = () => {
    if (isMobile) {
      return <CellForm />;
    } else {
      return <Testes />;
    }
  };

//Abaixo as páginas em português


const renderHomePtPage = () => {
  if (isMobile) {
    return <CelularPt />;
  } else {
    return <HomePt   
    titulo="Serviço de Tradução Profissional" 
    textSize="large"
    primeiraFrase="120 Idiomas que cabem no seu bolso"
    segundaFrase="  Traduzimos em mais de 60 áreas"
    terceiraFrase="Linguistas com Mestrado"
     />;


    
  }
};


const PromocaoPt = () => {
  if (isMobile) {
    return <CelularPt />;
  } else {

    return <HomePt   
    titulo="Serviço de Tradução Profissional" 
    textSize="large" 
    textCollor="large" 
    primeiraFrase={<span style={{ fontSize: '23px', color: 'red' }}>Cupom: 15% Off no Cupon DESCONTO15</span>}
    segundaFrase='Insira o cupon DESCONTO15 na mensagem'
    terceiraFrase="que você receberá a promoção"
    textoBotao="Receba a promoção"
    />;
    
  }
};








const renderDepoimentosPage = () => {
  if (isMobile) {
    return <Celular />;
  } else {
    return <Depoimentos />;
  }
};


const renderOrcamentoPage = () => {
  if (isMobile) {
    return <Celular />;
  } else {
    return <DesktopFormPT />;
  }
};





  const router = createBrowserRouter([
    {
      path: "/*",
      element: renderMainPage(),
    },

    {
      path: "/spanish-translation-services",
      element: renderSpanishPage(),
    },

    {
      path: "/german-translation-services",
      element: renderGermanPage(),
    },


    {
      path: "/desktop-form",
      element: renderFormPage(),
    },

    {
      path: "/testes",
      element: renderTestesPage(),
    },


//Abaixo as páginas em português

    {
      path: "/depoimentos",
      element: renderDepoimentosPage(),
    },
    

    {
      path: "/orcamento",
      element: renderOrcamentoPage(),
    },




    {
      path: "/pt",
      element: renderHomePtPage(),
    },

    {
      path: "/pt/promocao",
      element: PromocaoPt(),
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





