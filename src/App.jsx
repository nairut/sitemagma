import React from "react";
import { createBrowserRouter, RouterProvider, BrowserRouter, Routes, Route, router    } from "react-router-dom";
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
  const isMobile = useMediaQuery({ maxWidth: 767 });



return (   
  
  
  <BrowserRouter basename="/pt/" >
  <Routes>
    <Route
      path="/en"
      element={isMobile ? <Celular /> : <Main />}
    />


<Route
      path="/en/pt"
      element={isMobile ? <Celular /> : <HomePt />}
    />

    {/* Define other routes here */}
  </Routes>
</BrowserRouter>);





  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      {/* Lazy-load and render the TagManager component */}
      <LazyTagManager />
      <RouterProvider router={router} />
    </React.Suspense>
  );

};






