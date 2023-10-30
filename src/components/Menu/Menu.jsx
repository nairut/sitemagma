/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ExpandMore } from "../ExpandMore";
import "./style.css";

export const Menu = ({
  property1,
  className,
  expandMoreStyleRound = "/img/expand-more-6.png",
  expandMoreImg = "/img/expand-more-7.png",
  expandMoreStyleRound1 = "/img/expand-more-8.png",
  expandMoreStyleRound2 = "/img/expand-more-9.png",
  expandMoreStyleRound3 = "/img/expand-more-10.png",
  expandMoreStyleRound4 = "/img/expand-more-11.png",
}) => {
  return (
    <div className={`menu ${className}`}>
      <div className="frame">
        <div className="text-wrapper-2">Home</div>
        <ExpandMore className="expand-more-instance" style="round" styleRound={expandMoreStyleRound} />
      </div>
      <div className="frame">
        <div className="text-wrapper-2">ZF</div>
        <ExpandMore className="expand-more-instance" style="round" styleRound={expandMoreImg} />
      </div>
      <div className="frame">
        <div className="text-wrapper-2">Shopee</div>
        <ExpandMore className="expand-more-instance" style="round" styleRound={expandMoreStyleRound1} />
      </div>
      <div className="frame">
        <div className="text-wrapper-2">Legendagem</div>
        <ExpandMore className="expand-more-instance" style="round" styleRound={expandMoreStyleRound2} />
      </div>
      <div className="frame">
        <div className="text-wrapper-2">Tradução Técnica</div>
        <ExpandMore className="expand-more-instance" style="round" styleRound={expandMoreStyleRound3} />
      </div>
      <div className="frame">
        <div className="text-wrapper-2">Sobre nós</div>
        <ExpandMore className="expand-more-instance" style="round" styleRound={expandMoreStyleRound4} />
      </div>
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
