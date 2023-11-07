/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Menu } from "../Menu";
import "./style.css";

export const MenuComponent = ({
  className,
  menuExpandMoreStyleRound,
  menuExpandMoreImg,
  menuExpandMoreStyleRound1,
  menuExpandMoreStyleRound2,
  menuExpandMoreStyleRound3,
  menuExpandMoreStyleRound4,
  to,
}) => {
  return (
    <div className={`menu-component ${className}`}>
      <div className="ellipse-wrapper">
        <div className="ellipse" />
      </div>
      <img className="img" alt="Turian" />
      <Menu
        className="menu-instance"
        divClassName="design-component-instance-node"
        divClassNameOverride="design-component-instance-node"
        expandMoreImg={menuExpandMoreStyleRound4}
        expandMoreStyleFilledClassName="turian-2"
        expandMoreStyleFilledClassNameOverride="turian-2"
        expandMoreStyleOutlinedClassName="turian-2"
        expandMoreStyleOutlinedClassNameOverride="turian-2"
        expandMoreStyleRound={menuExpandMoreStyleRound2}
        expandMoreStyleRound1={menuExpandMoreStyleRound}
        expandMoreStyleRound2={menuExpandMoreStyleRound3}
        expandMoreStyleRound3={menuExpandMoreImg}
        expandMoreStyleRound4={menuExpandMoreStyleRound1}
        expandMoreStyleRoundClassName="turian-2"
        expandMoreStyleRoundClassNameOverride="turian-2"
        frameClassName="design-component-instance-node"
        frameClassName1="design-component-instance-node"
        frameClassName2="design-component-instance-node"
        frameClassNameOverride="design-component-instance-node"
        property1="default"
        to={to}
      />
    </div>
  );
};

MenuComponent.propTypes = {
  menuExpandMoreStyleRound: PropTypes.string,
  menuExpandMoreImg: PropTypes.string,
  menuExpandMoreStyleRound1: PropTypes.string,
  menuExpandMoreStyleRound2: PropTypes.string,
  menuExpandMoreStyleRound3: PropTypes.string,
  menuExpandMoreStyleRound4: PropTypes.string,
  to: PropTypes.string,
};
