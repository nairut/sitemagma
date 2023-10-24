/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconEnd18 = ({ color = "#ADADAD", className }) => {
  return (
    <svg
      className={`icon-end-1-8 ${className}`}
      fill="none"
      height="48"
      viewBox="0 0 48 48"
      width="48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M8.43934 15.9393C9.02513 15.3536 9.97487 15.3536 10.5607 15.9393L24 29.3787L37.4393 15.9393C38.0251 15.3536 38.9749 15.3536 39.5607 15.9393C40.1464 16.5251 40.1464 17.4749 39.5607 18.0607L25.0607 32.5607C24.4749 33.1464 23.5251 33.1464 22.9393 32.5607L8.43934 18.0607C7.85355 17.4749 7.85355 16.5251 8.43934 15.9393Z"
        fill={color}
      />
    </svg>
  );
};

IconEnd18.propTypes = {
  color: PropTypes.string,
};
