import React from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { LazyTagManager } from "./LazyTagManager";
import {
  Celular,
  CelularPt,
  DesktopForm,
  DesktopFormPT,
  Spanish,
  German,
  Testes,
  Depoimentos,
  HomePt,
} from "./screens";

const routes = [
  {
    path: "/*",
    component: "Main",
    isMobileComponent: "Celular",
    props: {},
  },
  {
    path: "/spanish-translation-services",
    component: "Spanish",
    isMobileComponent: "Celular",
    props: {},
  },
  {
    path: "/german-translation-services",
    component: "German",
    isMobileComponent: "Celular",
    props: {},
  },
  {
    path: "/desktop-form",
    component: "DesktopForm",
    isMobileComponent: "CellForm",
    props: {},
  },
  {
    path: "/testes",
    component: "Testes",
    isMobileComponent: "CellForm",
    props: {},
  },
  {
    path: "/depoimentos",
    component: "Depoimentos",
    isMobileComponent: "Celular",
    props: {},
  },
  {
    path: "/orcamento",
    component: "DesktopFormPT",
    isMobileComponent: "CelularPt",
    props: {},
  },
  {
    path: "/pt",
    component: "HomePt",
    isMobileComponent: "CelularPt",
    props: {
      titulo: "Serviço de Tradução Profissional",
      textSize: "large",
      primeiraFrase: "120 Idiomas que cabem no seu bolso",
      segundaFrase: "Traduzimos em mais de 60 áreas",
      terceiraFrase: "Linguistas com Mestrado",
    },
  },
  {
    path: "/pt/promocao",
    component: "PromocaoPt",
    isMobileComponent: "CelularPt",
    props: {
      titulo: "Serviço de Tradução Profissional",
      textSize: "large",
      textCollor: "large",
      primeiraFrase: (
        <span style={{ fontSize: "23px", color: "red" }}>
          Cupom: 15% Off no Cupon DESCONTO15
        </span>
      ),
      segundaFrase: "Insira o cupon DESCONTO15 na mensagem",
      terceiraFrase: "que você receberá a promoção",
      textoBotao: "Receba a promoção",
    },
  },
  // Add more routes here...
];

const App = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const renderComponent = (component, props) => {
    const Component = component;
    return <Component {...props} />;
  };

  const renderRoutes = () => {
    return routes.map((route, index) => {
      const { component, isMobileComponent, props } = route;
      const renderedComponent = isMobile ? isMobileComponent : component;
      return (
        <Route
          key={index}
          path={route.path}
          element={renderComponent(renderedComponent, props)}
        />
      );
    });
  };

  const router = createBrowserRouter(renderRoutes());

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <LazyTagManager />
      <RouterProvider router={router} />
    </React.Suspense>
  );
};

export default App;
