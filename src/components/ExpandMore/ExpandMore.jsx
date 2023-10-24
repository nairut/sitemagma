/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ExpandMore1 } from "../../icons/ExpandMore1";
import { StyleTwoTone } from "../../icons/StyleTwoTone";
import "./style.css";

export const ExpandMore = ({ style }) => {
  return (
    <>
      {["filled", "outlined", "sharp", "two-tone"].includes(style) && <StyleTwoTone className="instance-node-6" />}

      {style === "round" && <ExpandMore1 className="instance-node-6" color="black" />}
    </>
  );
};

ExpandMore.propTypes = {
  style: PropTypes.oneOf(["round", "sharp", "filled", "two-tone", "outlined"]),
};
