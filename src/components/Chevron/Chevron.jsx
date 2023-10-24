/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { DirectionLeftSize28ThemeFilled } from "../../icons/DirectionLeftSize28ThemeFilled";
import { DirectionRightSize28ThemeFilled } from "../../icons/DirectionRightSize28ThemeFilled";
import "./style.css";

export const Chevron = ({
  direction,
  size,
  theme,
  directionUpSizeClassName,
  directionDownSize = "/img/direction-down-size-20-theme-regular.png",
  img = "/img/direction-down-size-16-theme-regular.png",
  directionDownSize1 = "/img/direction-down-size-24-theme-regular.png",
}) => {
  return (
    <>
      {((direction === "down" && size === "twenty-eight") ||
        (direction === "up" && size === "twenty-eight") ||
        size === "forty-eight" ||
        size === "sixteen" ||
        size === "twelve" ||
        size === "twenty-four" ||
        size === "twenty") && (
        <img
          className={`chevron ${size} ${directionUpSizeClassName}`}
          alt="Direction up size"
          src={
            size === "forty-eight" && theme === "filled" && direction === "up"
              ? "/img/direction-up-size-48-theme-filled.png"
              : theme === "regular" && size === "twenty-eight" && direction === "up"
              ? "/img/direction-up-size-28-theme-regular.png"
              : theme === "filled" && size === "twenty-eight" && direction === "up"
              ? "/img/direction-up-size-28-theme-filled.png"
              : theme === "regular" && size === "twenty-four" && direction === "up"
              ? "/img/direction-up-size-24-theme-regular.png"
              : size === "twenty-four" && direction === "up" && theme === "filled"
              ? "/img/direction-up-size-24-theme-filled.png"
              : theme === "regular" && size === "twenty" && direction === "up"
              ? "/img/direction-up-size-20-theme-regular.png"
              : theme === "filled" && size === "twenty" && direction === "up"
              ? "/img/direction-up-size-20-theme-filled.png"
              : theme === "regular" && size === "sixteen" && direction === "up"
              ? "/img/direction-up-size-16-theme-regular.png"
              : theme === "filled" && size === "sixteen" && direction === "up"
              ? "/img/direction-up-size-16-theme-filled.png"
              : theme === "regular" && direction === "up" && size === "twelve"
              ? "/img/direction-up-size-12-theme-regular.png"
              : direction === "up" && theme === "filled" && size === "twelve"
              ? "/img/direction-up-size-12-theme-filled.png"
              : direction === "right" && theme === "regular" && size === "forty-eight"
              ? "/img/direction-right-size-48-theme-regular.png"
              : direction === "right" && theme === "filled" && size === "forty-eight"
              ? "/img/direction-right-size-48-theme-filled.png"
              : direction === "right" && size === "twenty-four" && theme === "regular"
              ? "/img/direction-right-size-24-theme-regular.png"
              : direction === "right" && size === "twenty-four" && theme === "filled"
              ? "/img/direction-right-size-24-theme-filled.png"
              : direction === "right" && theme === "regular" && size === "twenty"
              ? "/img/direction-right-size-20-theme-regular.png"
              : direction === "right" && theme === "filled" && size === "twenty"
              ? "/img/direction-right-size-20-theme-filled.png"
              : direction === "right" && theme === "regular" && size === "sixteen"
              ? "/img/direction-right-size-16-theme-regular.png"
              : direction === "right" && theme === "filled" && size === "sixteen"
              ? "/img/direction-right-size-16-theme-filled.png"
              : direction === "right" && theme === "regular" && size === "twelve"
              ? "/img/direction-right-size-12-theme-regular.png"
              : direction === "right" && theme === "filled" && size === "twelve"
              ? "/img/direction-right-size-12-theme-filled.png"
              : direction === "left" && theme === "regular" && size === "forty-eight"
              ? "/img/direction-left-size-48-theme-regular.png"
              : direction === "left" && theme === "filled" && size === "forty-eight"
              ? "/img/direction-left-size-48-theme-filled.png"
              : direction === "left" && size === "twenty-four" && theme === "regular"
              ? "/img/direction-left-size-24-theme-regular.png"
              : direction === "left" && size === "twenty-four" && theme === "filled"
              ? "/img/direction-left-size-24-theme-filled.png"
              : direction === "left" && theme === "regular" && size === "twenty"
              ? "/img/direction-left-size-20-theme-regular.png"
              : direction === "left" && theme === "filled" && size === "twenty"
              ? "/img/direction-left-size-20-theme-filled.png"
              : direction === "left" && theme === "regular" && size === "sixteen"
              ? "/img/direction-left-size-16-theme-regular.png"
              : direction === "left" && theme === "filled" && size === "sixteen"
              ? "/img/direction-left-size-16-theme-filled.png"
              : direction === "left" && theme === "regular" && size === "twelve"
              ? "/img/direction-left-size-12-theme-regular.png"
              : direction === "left" && theme === "filled" && size === "twelve"
              ? "/img/direction-left-size-12-theme-filled.png"
              : size === "forty-eight" && direction === "down" && theme === "regular"
              ? "/img/direction-down-size-48-theme-regular.png"
              : size === "forty-eight" && direction === "down" && theme === "filled"
              ? "/img/direction-down-size-48-theme-filled.png"
              : theme === "regular" && direction === "down" && size === "twenty-eight"
              ? "/img/direction-down-size-28-theme-regular.png"
              : direction === "down" && theme === "filled" && size === "twenty-eight"
              ? "/img/direction-down-size-28-theme-filled.png"
              : theme === "regular" && direction === "down" && size === "twenty-four"
              ? directionDownSize1
              : direction === "down" && size === "twenty-four" && theme === "filled"
              ? "/img/direction-down-size-24-theme-filled.png"
              : theme === "regular" && direction === "down" && size === "twenty"
              ? directionDownSize
              : direction === "down" && theme === "filled" && size === "twenty"
              ? "/img/direction-down-size-20-theme-filled.png"
              : theme === "regular" && direction === "down" && size === "sixteen"
              ? img
              : direction === "down" && theme === "filled" && size === "sixteen"
              ? "/img/direction-down-size-16-theme-filled.png"
              : theme === "regular" && direction === "down" && size === "twelve"
              ? "/img/direction-down-size-12-theme-regular.png"
              : direction === "down" && theme === "filled" && size === "twelve"
              ? "/img/direction-down-size-12-theme-filled.png"
              : "/img/direction-up-size-48-theme-regular.png"
          }
        />
      )}

      {direction === "right" && size === "twenty-eight" && (
        <DirectionRightSize28ThemeFilled className="instance-node" />
      )}

      {direction === "left" && size === "twenty-eight" && <DirectionLeftSize28ThemeFilled className="instance-node" />}
    </>
  );
};

Chevron.propTypes = {
  direction: PropTypes.oneOf(["down", "up", "right", "left"]),
  size: PropTypes.oneOf(["sixteen", "twenty-four", "twenty-eight", "forty-eight", "twenty", "twelve"]),
  theme: PropTypes.oneOf(["filled", "regular"]),
  directionDownSize: PropTypes.string,
  img: PropTypes.string,
  directionDownSize1: PropTypes.string,
};
