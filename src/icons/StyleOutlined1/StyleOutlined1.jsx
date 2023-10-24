/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const StyleOutlined1 = ({ color = "black", className }) => {
  return (
    <svg
      className={`style-outlined-1 ${className}`}
      fill="none"
      height="17"
      viewBox="0 0 16 17"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M7.95019 4.8999C8.67207 4.8999 9.26269 5.49053 9.26269 6.2124C9.26269 6.93428 8.67207 7.5249 7.95019 7.5249C7.22832 7.5249 6.63769 6.93428 6.63769 6.2124C6.63769 5.49053 7.22832 4.8999 7.95019 4.8999ZM7.95019 11.4624C9.72207 11.4624 11.7564 12.309 11.8877 12.7749H4.0127C4.16363 12.3024 6.18488 11.4624 7.95019 11.4624ZM7.95019 3.5874C6.49988 3.5874 5.3252 4.76209 5.3252 6.2124C5.3252 7.66271 6.49988 8.8374 7.95019 8.8374C9.40051 8.8374 10.5752 7.66271 10.5752 6.2124C10.5752 4.76209 9.40051 3.5874 7.95019 3.5874ZM7.95019 10.1499C6.19801 10.1499 2.7002 11.0293 2.7002 12.7749V14.0874H13.2002V12.7749C13.2002 11.0293 9.70238 10.1499 7.95019 10.1499Z"
        fill={color}
      />
    </svg>
  );
};

StyleOutlined1.propTypes = {
  color: PropTypes.string,
};
