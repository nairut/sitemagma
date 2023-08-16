import React from "react";
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route, ErrorBoundary  } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Celular } from "./screens/Celular";
import { DesktopForm } from "./screens/DesktopForm";
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

  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      loader: rootLoader,
      children: [
        {
          path: "pt",
          element: <HomePt />,
          loader: teamLoader,
        },
      ],
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






