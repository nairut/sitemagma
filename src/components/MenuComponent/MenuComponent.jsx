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
  turianClassName,
  ellipseClassName,
  turianClassNameOverride,
  menuFrameClassName,
  menuExpandMoreStyleRound = "/img/expand-more-15.png",
  menuExpandMoreStyleFilledClassName,
  menuPropertyDefaultClassName,
  menuExpandMoreImg = "/img/expand-more-12.png",
  menuFrameClassNameOverride,
  menuDivClassName,
  menuExpandMoreStyleFilledClassNameOverride,
  menuDivClassNameOverride,
  menuExpandMoreStyleOutlinedClassName,
  menuExpandMoreStyleOutlinedClassNameOverride,
  menuExpandMoreStyleRound1 = "/img/expand-more-16.png",
  menuExpandMoreStyleRound2 = "/img/expand-more-14.png",
  menuExpandMoreStyleRoundClassName,
  menuFrameClassName1,
  menuExpandMoreStyleRound3 = "/img/expand-more-13.png",
  menuFrameClassName2,
  menuExpandMoreStyleRoundClassNameOverride,
  menuExpandMoreStyleRound4 = "/img/expand-more-17.png",
}) => {
  return (
    <div className={`menu-component ${className}`}>
      <div className={`ellipse-wrapper ${turianClassName}`}>
        <div className={`ellipse ${ellipseClassName}`} />
      </div>
      <img className={`img ${turianClassNameOverride}`} alt="Turian" src="/img/logo-preto-branco-2.png" />
      <Menu
        className={menuPropertyDefaultClassName}
        divClassName="menu-instance"
        divClassName1="menu-instance"
        divClassName2="menu-instance"
        divClassName3="menu-instance"
        divClassName4="menu-instance"
        divClassNameOverride="menu-instance"
        expandMoreImg={menuExpandMoreStyleRound3}
        expandMoreStyleFilledClassName={menuExpandMoreStyleRoundClassName}
        expandMoreStyleFilledClassNameOverride={menuExpandMoreStyleFilledClassNameOverride}
        expandMoreStyleOutlinedClassName={menuExpandMoreStyleFilledClassName}
        expandMoreStyleOutlinedClassNameOverride={menuExpandMoreStyleOutlinedClassNameOverride}
        expandMoreStyleRound={menuExpandMoreImg}
        expandMoreStyleRound1={menuExpandMoreStyleRound2}
        expandMoreStyleRound2={menuExpandMoreStyleRound}
        expandMoreStyleRound3={menuExpandMoreStyleRound1}
        expandMoreStyleRound4={menuExpandMoreStyleRound4}
        expandMoreStyleRoundClassName={menuExpandMoreStyleOutlinedClassName}
        expandMoreStyleRoundClassNameOverride={menuExpandMoreStyleRoundClassNameOverride}
        frameClassName={menuFrameClassName2}
        frameClassName1={menuFrameClassNameOverride}
        frameClassName2={menuDivClassName}
        frameClassName3={menuDivClassNameOverride}
        frameClassName4={menuFrameClassName}
        frameClassNameOverride={menuFrameClassName1}
        property1="default"
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
};
