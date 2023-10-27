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
  to,
}) => {
  return (
    <div className={`menu ${className}`}>
      <Link className="frame" to="/turian">
        <div className="text-wrapper">Home</div>
        <ExpandMore className="expand-more-instance" style="round" styleRound={expandMoreStyleRound} />
      </Link>
      <Link className="frame" to="/casezf">
        <div className="text-wrapper">ZF</div>
        <ExpandMore className="expand-more-instance" style="round" styleRound={expandMoreImg} />
      </Link>
      <Link className="frame" to="/caseshopee">
        <div className="text-wrapper">Shopee</div>
        <ExpandMore className="expand-more-instance" style="round" styleRound={expandMoreStyleRound1} />
      </Link>
      <Link className="frame" to="/legendagem">
        <Link className="text-wrapper" to={to}>
          Legendagem
        </Link>
        <ExpandMore className="expand-more-instance" style="round" styleRound={expandMoreStyleRound2} />
      </Link>
      <Link className="frame" to="/traducaotecnica">
        <div className="text-wrapper">Tradução Técnica</div>
        <ExpandMore className="expand-more-instance" style="round" styleRound={expandMoreStyleRound3} />
      </Link>
      <Link className="frame" to="/sobre">
        <div className="text-wrapper">Sobre nós</div>
        <ExpandMore className="expand-more-instance" style="round" styleRound={expandMoreStyleRound4} />
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
  to: PropTypes.string,
};
