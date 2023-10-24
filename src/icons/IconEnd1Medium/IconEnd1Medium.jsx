/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconEnd1Medium = ({ color = "#616161", className }) => {
  return (
    <svg
      className={`icon-end-1-medium ${className}`}
      fill="none"
      height="15"
      viewBox="0 0 16 15"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M12.101 5.92908C12.2436 6.0712 12.244 6.30205 12.1019 6.44468L8.11702 10.4438C7.96028 10.6011 7.70558 10.6011 7.54885 10.4438L3.56397 6.44468C3.42184 6.30204 3.42225 6.0712 3.56489 5.92908C3.70752 5.78695 3.93836 5.78737 4.08048 5.93L7.83293 9.69584L11.5854 5.93C11.7275 5.78737 11.9583 5.78695 12.101 5.92908Z"
        fill={color}
      />
    </svg>
  );
};

IconEnd1Medium.propTypes = {
  color: PropTypes.string,
};
