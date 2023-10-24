/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { StyleFilled1 } from "../../icons/StyleFilled1";
import { StyleOutlined1 } from "../../icons/StyleOutlined1";
import { StyleRound1 } from "../../icons/StyleRound1";
import { StyleTwoTone3 } from "../../icons/StyleTwoTone3";
import "./style.css";

export const Person = ({ style }) => {
  return (
    <>
      {["filled", "sharp"].includes(style) && <StyleFilled1 className="instance-node-5" />}

      {style === "outlined" && <StyleOutlined1 className="instance-node-5" />}

      {style === "round" && <StyleRound1 className="instance-node-5" />}

      {style === "two-tone" && <StyleTwoTone3 className="instance-node-5" />}
    </>
  );
};

Person.propTypes = {
  style: PropTypes.oneOf(["round", "sharp", "filled", "two-tone", "outlined"]),
};
