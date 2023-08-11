/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const ButtonPortugues = ({ property1, className, to, textoBotao = "ENTRE EM CONTATO" }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <Link
      className={`button-portugues ${state.property1} ${className}`}
      to={to}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      <div className="entre-em-contato">{textoBotao}</div>
    </Link>
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

ButtonPortugues.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
  to: PropTypes.string,
};
