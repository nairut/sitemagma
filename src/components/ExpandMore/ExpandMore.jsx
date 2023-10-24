/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ExpandMore = ({ style, className, styleRound = "/img/style-round.png" }) => {
  return (
    <img
      className={`expand-more ${className}`}
      alt="Style filled"
      src={style === "round" ? styleRound : style === "two-tone" ? "/img/style-two-tone.png" : "/img/style-filled.png"}
    />
  );
};

ExpandMore.propTypes = {
  style: PropTypes.oneOf(["round", "sharp", "filled", "two-tone", "outlined"]),
  styleRound: PropTypes.string,
};
