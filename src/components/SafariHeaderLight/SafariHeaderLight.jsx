/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const SafariHeaderLight = ({
  className,
  overlapClassName,
  headerClassName,
  websiteTitleClassName,
  overlapGroupClassName,
  URLClassName,
  sitenameComClassName,
  text = "https://www.weare3logy.com",
  unionClassName,
  union = "/img/union.svg",
  rightClassName,
  shareClassName,
  share = "/img/share.png",
  windowClassName,
  window = "/img/window.png",
  downClassName,
  overlapGroupClassNameOverride,
  ovalClassName,
  oval = "/img/oval-7.svg",
  leftClassName,
  left = "/img/left.png",
}) => {
  return (
    <div className={`safari-header-light ${className}`}>
      <div className={`overlap ${overlapClassName}`}>
        <div className={`header ${headerClassName}`}>
          <div className={`website-title ${websiteTitleClassName}`}>
            <div className={`overlap-group ${overlapGroupClassName}`}>
              <div className={`URL ${URLClassName}`}>
                <div className={`sitename-com ${sitenameComClassName}`}>{text}</div>
              </div>
              <img className={`union ${unionClassName}`} alt="Union" src={union} />
            </div>
          </div>
        </div>
        <div className={`right ${rightClassName}`}>
          <img className={`share ${shareClassName}`} alt="Share" src={share} />
          <img className={`window ${windowClassName}`} alt="Window" src={window} />
          <div className={`down ${downClassName}`}>
            <div className={`oval-wrapper ${overlapGroupClassNameOverride}`}>
              <img className={`oval ${ovalClassName}`} alt="Oval" src={oval} />
            </div>
          </div>
        </div>
        <img className={`left ${leftClassName}`} alt="Left" src={left} />
      </div>
    </div>
  );
};

SafariHeaderLight.propTypes = {
  text: PropTypes.string,
  union: PropTypes.string,
  share: PropTypes.string,
  window: PropTypes.string,
  oval: PropTypes.string,
  left: PropTypes.string,
};
