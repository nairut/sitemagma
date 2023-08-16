import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Main } from "./screens/Main";
import { HomePt } from "./screens/HomePt/HomePt";

const App = () => {
  return (

      <BrowserRouter>
        <Routes>
          <Route 
            path="/" 
            element={<Main />} 
          />
          
          <Route 
            path="/team"
            element={<HomePt />}
          />
        </Routes>
      </BrowserRouter>


  );
};

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
