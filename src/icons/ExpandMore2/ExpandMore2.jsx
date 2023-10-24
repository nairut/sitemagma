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
      height="19"
      viewBox="0 0 19 19"
      width="19"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M12.2422 7.2499L9.41303 10.0791L6.58386 7.2499C6.29948 6.96553 5.84011 6.96553 5.55573 7.2499C5.27136 7.53428 5.27136 7.99365 5.55573 8.27803L8.90261 11.6249C9.18698 11.9093 9.64636 11.9093 9.93073 11.6249L13.2776 8.27803C13.562 7.99365 13.562 7.53428 13.2776 7.2499C12.9932 6.97282 12.5266 6.96553 12.2422 7.2499Z"
        fill={color}
      />
    </svg>
  );
};

ExpandMore2.propTypes = {
  color: PropTypes.string,
};
