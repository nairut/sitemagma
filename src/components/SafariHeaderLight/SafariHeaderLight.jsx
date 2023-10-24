/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const SafariHeaderLight = ({
  className,
  headerClassName,
  URLClassName,
  text = "https://www.weare3logy.com",
  left = "/img/left.png",
}) => {
  return (
    <div className={`safari-header-light ${className}`}>
      <div className="overlap">
        <div className={`header ${headerClassName}`}>
          <div className="website-title">
            <div className="overlap-group">
              <div className={`URL ${URLClassName}`}>
                <div className="sitename-com">{text}</div>
              </div>
              <img className="union" alt="Union" src="/img/union.png" />
            </div>
          </div>
        </div>
        <div className="right">
          <img className="share" alt="Share" src="/img/share.png" />
          <img className="window" alt="Window" src="/img/window.png" />
          <div className="down">
            <div className="oval-wrapper">
              <img className="oval" alt="Oval" src="/img/oval-7.png" />
            </div>
          </div>
        </div>
        <img className="left" alt="Left" src={left} />
      </div>
    </div>
  );
};

SafariHeaderLight.propTypes = {
  text: PropTypes.string,
  left: PropTypes.string,
};
