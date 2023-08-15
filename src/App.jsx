import React from "react";
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
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
import { Route, Routes } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';




 
// Lazy-loaded components
const LazyTagManager = React.lazy(() => import("./LazyTagManager"));


export const App = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });




  return (

    <BrowserRouter >
  <Routes>
    <Route path="/" element={isMobile ? <Celular /> : <Main />} />
    <Route path="/es" element={isMobile ? <Celular /> : <Depoimentos />} />
    <Route path="pt/pt" element={isMobile ? <Celular /> : <HomePt />} />
    {/* Other routes can be defined here */}
  </Routes>
  </BrowserRouter>


);




};






