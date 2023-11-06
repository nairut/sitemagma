import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { HeroCaysa } from "../HeroCaysa/HeroCaysa";
import { ComponenteInferior } from "../ComponenteInferior/ComponenteInferior";
import "./style.css";





export const Juntando = () => {


  return (
<div className="containerdois">
  <div className="juntandodois">
    <div className="sticky">
    <div className="cabeaherocaysa">
  <HeroCaysa/> 
  </div>
  </div>

  <div className="baixando"></div>



  

  </div>
</div>
   );
  };