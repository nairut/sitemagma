/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { ExpandMore } from "../ExpandMore";
import "./style.css";

export const Menu = ({
  property1,
  className,
  expandMoreStyleRound = "/img/expand-more.png",
  expandMoreImg = "/img/expand-more-1.png",
  expandMoreStyleRound1 = "/img/expand-more-2.png",
  expandMoreStyleRound2 = "/img/expand-more-3.png",
  expandMoreStyleRound3 = "/img/expand-more-4.png",
  expandMoreStyleRound4 = "/img/expand-more-5.png",
  frameClassName,
  divClassName,
  expandMoreStyleFilledClassName,
  frameClassNameOverride,
  divClassNameOverride,
  expandMoreStyleFilledClassNameOverride,
  frameClassName1,
  divClassName1,
  expandMoreStyleOutlinedClassName,
  frameClassName2,
  divClassName2,
  expandMoreStyleOutlinedClassNameOverride,
  frameClassName3,
  divClassName3,
  expandMoreStyleRoundClassName,
  frameClassName4,
  divClassName4,
  expandMoreStyleRoundClassNameOverride,
}) => {
  return (
    <div className={`menu ${className}`}>
      <Link className={`frame ${frameClassName}`} to="/turian">
        <div className={`text-wrapper-2 ${divClassName}`}>Home</div>
        <ExpandMore className={expandMoreStyleFilledClassName} style="round" styleRound={expandMoreStyleRound} />
      </Link>
      <div className={`frame ${frameClassNameOverride}`}>
        <div className={`text-wrapper-2 ${divClassNameOverride}`}>ZF</div>
        <ExpandMore className={expandMoreStyleFilledClassNameOverride} style="round" styleRound={expandMoreImg} />
      </div>
      <div className={`frame ${frameClassName1}`}>
        <div className={`text-wrapper-2 ${divClassName1}`}>Shopee</div>
        <ExpandMore className={expandMoreStyleOutlinedClassName} style="round" styleRound={expandMoreStyleRound1} />
      </div>
      <div className={`frame ${frameClassName2}`}>
        <div className={`text-wrapper-2 ${divClassName2}`}>Legendagem</div>
        <ExpandMore
          className={expandMoreStyleOutlinedClassNameOverride}
          style="round"
          styleRound={expandMoreStyleRound2}
        />
      </div>
      <Link className={`frame ${frameClassName3}`} to="/traducaotecnica">
        <div className={`text-wrapper-2 ${divClassName3}`}>Tradução Técnica</div>
        <ExpandMore className={expandMoreStyleRoundClassName} style="round" styleRound={expandMoreStyleRound3} />
      </Link>
      <Link className={`frame ${frameClassName4}`} to="/sobre">
        <div className={`text-wrapper-2 ${divClassName4}`}>Sobre nós</div>
        <ExpandMore
          className={expandMoreStyleRoundClassNameOverride}
          style="round"
          styleRound={expandMoreStyleRound4}
        />
      </Link>
    </div>
  );
};

Menu.propTypes = {
  property1: PropTypes.oneOf(["default"]),
  expandMoreStyleRound: PropTypes.string,
  expandMoreImg: PropTypes.string,
  expandMoreStyleRound1: PropTypes.string,
  expandMoreStyleRound2: PropTypes.string,
  expandMoreStyleRound3: PropTypes.string,
  expandMoreStyleRound4: PropTypes.string,
};
