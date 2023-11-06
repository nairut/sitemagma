import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { HeroCaysa } from "../HeroCaysa/HeroCaysa";
import { ComponenteInferior } from "../ComponenteInferior/ComponenteInferior";
import "./style.css";

export const Juntando = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.6]);
  const x = useTransform(scrollYProgress, [0.1, 0.2], [0, 300]);

  return (
    <div className="containerdois">
      <div className="juntandodois">  

          <div className="paratextbox">
            <div className="sticky">
              <motion.div
                style={{
                  scale: scale,    // Use the scale variable here
                  x: x,    // Use the x variable to control horizontal movement
                 }}>
                <HeroCaysa />
              </motion.div>

            </div>



   
          </div>

        <div className="componenteinferior">
        <ComponenteInferior/>
        </div>
        <div className="textobox"></div>

      </div>
    </div>
  );
};
