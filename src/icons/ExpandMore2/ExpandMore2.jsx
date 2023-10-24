/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const ExpandMore2 = ({ color = "#5857FF", className }) => {
  return (
    <svg
      className={`expand-more-2 ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M13.251 7.35022L10.1955 10.4057L7.14004 7.35022C6.83291 7.04309 6.33679 7.04309 6.02966 7.35022C5.72254 7.65734 5.72254 8.15347 6.02966 8.46059L9.64429 12.0752C9.95141 12.3823 10.4475 12.3823 10.7547 12.0752L14.3693 8.46059C14.6764 8.15347 14.6764 7.65734 14.3693 7.35022C14.0622 7.05097 13.5582 7.04309 13.251 7.35022Z"
        fill={color}
      />
    </svg>
  );
};

ExpandMore2.propTypes = {
  color: PropTypes.string,
};
