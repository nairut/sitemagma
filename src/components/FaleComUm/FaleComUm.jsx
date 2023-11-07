/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const FaleComUm = ({ property1, className, divClassName }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <a
      className={`fale-com-um ${state.property1} ${className}`}
      href="https://pages.magmatranslation.com/solicite-um-orcamento"
      rel="noopener noreferrer"
      target="_blank"
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <div className={`text-wrapper ${divClassName}`}>Fale com um especialista</div>
    </a>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        property1: "variant-2",
      };

    case "mouse_leave":
      return {
        ...state,
        property1: "default",
      };
  }

  return state;
}

FaleComUm.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
};
