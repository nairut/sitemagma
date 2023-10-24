/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const ExpandMore1 = ({ color = "#5857FF", className }) => {
  return (
    <svg
      className={`expand-more-1 ${className}`}
      fill="none"
      height="19"
      viewBox="0 0 18 19"
      width="18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M11.9062 7.00014L8.9962 9.91014L6.0862 7.00014C5.7937 6.70764 5.3212 6.70764 5.0287 7.00014C4.7362 7.29264 4.7362 7.76514 5.0287 8.05764L8.4712 11.5001C8.7637 11.7926 9.2362 11.7926 9.5287 11.5001L12.9712 8.05764C13.2637 7.76514 13.2637 7.29264 12.9712 7.00014C12.6787 6.71514 12.1987 6.70764 11.9062 7.00014Z"
        fill={color}
      />
    </svg>
  );
};

ExpandMore1.propTypes = {
  color: PropTypes.string,
};
