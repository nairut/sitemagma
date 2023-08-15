import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./style.css"

export const Testes = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

  return (

    <div className="turian">

      
    <div className="wrapper">
      <motion.div
        className="container"
        style={{
          scale
        }}
      >
        <motion.div
        
          className="item"
          style={{
            scaleY: scrollYProgress
          }}
          
        />

      
      </motion.div>
    </div>

    </div>
  );
};