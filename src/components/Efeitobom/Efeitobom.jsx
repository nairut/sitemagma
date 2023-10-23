/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Efeitobom = ({ property1, className }) => {
  return (
    <div className={`efeitobom property-1-${property1} ${className}`}>
      {["cinco", "tres"].includes(property1) && (
        <div className="overlap-group">
          {property1 === "tres" && (
            <>
              <div className="text-wrapper">Magic.</div>
              <img className="keyboard" alt="Keyboard"  src="/img/keyboard.png" /> />
            </>
          )}

          {property1 === "cinco" && <>Magic.</>}
        </div>
      )}

      {["cinco", "quatro", "tres"].includes(property1) && (
        <div className="like-we-said">
          {["cinco", "tres"].includes(property1) && <>Like we said.</>}

          {property1 === "quatro" && <>Magic.</>}
        </div>
      )}

      {["cinco", "tres"].includes(property1) && (
        <div className="scrollbar">
          {property1 === "cinco" && (
            <>
              <img className="img" alt="Keyboard" />
              <img className="hand" alt="Hand" src="/img/hand.png" />
              <div className="div" />
            </>
          )}
        </div>
      )}

      {property1 === "quatro" && <div className="text-wrapper-2">Like we said.</div>}

      {["dois", "quatro", "um"].includes(property1) && (
        <img className="keyboard-2" alt="Keyboard" src="/img/keyboard.png" />
      )}

      {property1 === "quatro" && <img className="hand-2" alt="Hand" src="/img/hand-1.png" />}

      {["quatro", "um"].includes(property1) && <div className="scrollbar-2" />}

      {property1 === "dois" && (
        <>
          <div className="text-wrapper-3">Like we said.</div>
          <div className="scrollbar-3" />
        </>
      )}
    </div>
  );
};

Efeitobom.propTypes = {
  property1: PropTypes.oneOf(["dois", "tres", "cinco", "quatro", "um"]),
};
