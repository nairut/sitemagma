import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Celular } from "./screens/Celular";
import { DesktopForm } from "./screens/DesktopForm";
import { CellForm } from "./screens/CellForm";
import { Main } from "./screens/Main";
import { Obrigado } from "./screens/Obrigado";
import React, { useEffect } from "react";
import { Spanish } from "./screens/Spanish";
import { German } from "./screens/German";
import { Testes } from "./screens/Testes";



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

  const router = createBrowserRouter([
    {
      path: "/*",
      element: renderMainPage(),
    },

    {
      path: "/spanish-translation-service",
      element: renderSpanishPage(),
    },

    {
      path: "/german-translation-services ",
      element: renderGermanPage(),
    },


    {
      path: "/desktop-form",
      element: renderFormPage(),
    },

    {
      path: "/testes",
      element: <Testes/>,
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



