/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { DirectionDownSize16ThemeFilled } from "../../icons/DirectionDownSize16ThemeFilled";
import { DirectionDownSize20ThemeFilled } from "../../icons/DirectionDownSize20ThemeFilled";
import { DirectionDownSize48ThemeRegular } from "../../icons/DirectionDownSize48ThemeRegular";
import { DirectionLeftSize12ThemeFilled } from "../../icons/DirectionLeftSize12ThemeFilled";
import { DirectionLeftSize16ThemeFilled } from "../../icons/DirectionLeftSize16ThemeFilled";
import { DirectionLeftSize20ThemeFilled } from "../../icons/DirectionLeftSize20ThemeFilled";
import { DirectionLeftSize20ThemeRegular } from "../../icons/DirectionLeftSize20ThemeRegular";
import { DirectionLeftSize28ThemeFilled } from "../../icons/DirectionLeftSize28ThemeFilled";
import { DirectionRightSize16ThemeFilled } from "../../icons/DirectionRightSize16ThemeFilled";
import { DirectionRightSize20ThemeFilled } from "../../icons/DirectionRightSize20ThemeFilled";
import { DirectionRightSize20ThemeRegular } from "../../icons/DirectionRightSize20ThemeRegular";
import { DirectionRightSize24ThemeFilled } from "../../icons/DirectionRightSize24ThemeFilled";
import { DirectionRightSize28ThemeFilled } from "../../icons/DirectionRightSize28ThemeFilled";
import { DirectionRightSize48ThemeRegular } from "../../icons/DirectionRightSize48ThemeRegular";
import { DirectionUpSize12ThemeRegular } from "../../icons/DirectionUpSize12ThemeRegular";
import { DirectionUpSize16ThemeFilled } from "../../icons/DirectionUpSize16ThemeFilled";
import { DirectionUpSize20ThemeFilled } from "../../icons/DirectionUpSize20ThemeFilled";
import { DirectionUpSize20ThemeRegular } from "../../icons/DirectionUpSize20ThemeRegular";
import { DirectionUpSize48ThemeRegular } from "../../icons/DirectionUpSize48ThemeRegular";
import { IconEnd18 } from "../../icons/IconEnd18";
import { IconEnd1Medium } from "../../icons/IconEnd1Medium";
import "./style.css";

export const Chevron = ({ direction, size, theme }) => {
  return (
    <>
      {direction === "up" && ["forty-eight", "twenty-eight"].includes(size) && (
        <DirectionUpSize48ThemeRegular className={`${size === "twenty-eight" ? "instance-node" : "instance-node-2"}`} />
      )}

      {((direction === "up" && size === "sixteen" && theme === "regular") ||
        (direction === "up" && size === "twelve") ||
        (direction === "up" && size === "twenty-four")) && (
        <DirectionUpSize12ThemeRegular
          className={`${size === "sixteen" ? "instance-node-3" : size === "twelve" ? "class-3" : "class-4"}`}
        />
      )}

      {theme === "regular" && size === "twenty" && direction === "up" && (
        <DirectionUpSize20ThemeRegular className="instance-node-4" />
      )}

      {theme === "filled" && size === "twenty" && direction === "up" && (
        <DirectionUpSize20ThemeFilled className="instance-node-4" />
      )}

      {theme === "filled" && size === "sixteen" && direction === "up" && (
        <DirectionUpSize16ThemeFilled className="instance-node-3" />
      )}

      {direction === "right" && size === "forty-eight" && (
        <DirectionRightSize48ThemeRegular className="instance-node-2" />
      )}

      {direction === "right" && size === "twenty-eight" && (
        <DirectionRightSize28ThemeFilled className="instance-node" />
      )}

      {((direction === "right" && size === "sixteen" && theme === "regular") ||
        (direction === "right" && size === "twelve") ||
        (direction === "right" && size === "twenty-four")) && (
        <DirectionRightSize24ThemeFilled
          className={`${size === "sixteen" ? "instance-node-3" : size === "twelve" ? "class-3" : "class-4"}`}
        />
      )}

      {direction === "right" && theme === "regular" && size === "twenty" && (
        <DirectionRightSize20ThemeRegular className="instance-node-4" />
      )}

      {direction === "right" && theme === "filled" && size === "twenty" && (
        <DirectionRightSize20ThemeFilled className="instance-node-4" />
      )}

      {direction === "right" && theme === "filled" && size === "sixteen" && (
        <DirectionRightSize16ThemeFilled className="instance-node-3" />
      )}

      {((direction === "left" && size === "forty-eight") ||
        (direction === "left" && size === "sixteen" && theme === "regular") ||
        (direction === "left" && size === "twelve") ||
        (direction === "left" && size === "twenty-four")) && (
        <DirectionLeftSize12ThemeFilled
          className={`${
            size === "twenty-four"
              ? "class-4"
              : size === "sixteen"
              ? "instance-node-3"
              : size === "twelve"
              ? "class-3"
              : "instance-node-2"
          }`}
        />
      )}

      {direction === "left" && size === "twenty-eight" && <DirectionLeftSize28ThemeFilled className="instance-node" />}

      {direction === "left" && theme === "regular" && size === "twenty" && (
        <DirectionLeftSize20ThemeRegular className="instance-node-4" />
      )}

      {direction === "left" && theme === "filled" && size === "twenty" && (
        <DirectionLeftSize20ThemeFilled className="instance-node-4" />
      )}

      {direction === "left" && theme === "filled" && size === "sixteen" && (
        <DirectionLeftSize16ThemeFilled className="instance-node-3" />
      )}

      {size === "forty-eight" && direction === "down" && theme === "regular" && (
        <DirectionDownSize48ThemeRegular className="instance-node-2" />
      )}

      {((direction === "down" && size === "forty-eight" && theme === "filled") ||
        (direction === "down" && size === "sixteen" && theme === "regular") ||
        (direction === "down" && size === "twelve") ||
        (direction === "down" && size === "twenty-eight") ||
        (direction === "down" && size === "twenty-four")) && (
        <IconEnd18
          className={`${
            size === "twenty-eight"
              ? "instance-node"
              : size === "twenty-four"
              ? "class-4"
              : size === "sixteen"
              ? "instance-node-3"
              : size === "twelve"
              ? "class-3"
              : "instance-node-2"
          }`}
          color="#212121"
        />
      )}

      {theme === "regular" && direction === "down" && size === "twenty" && (
        <IconEnd1Medium className="instance-node-4" color="#212121" />
      )}

      {direction === "down" && theme === "filled" && size === "twenty" && (
        <DirectionDownSize20ThemeFilled className="instance-node-4" />
      )}

      {direction === "down" && theme === "filled" && size === "sixteen" && (
        <DirectionDownSize16ThemeFilled className="instance-node-3" />
      )}
    </>
  );
};

Chevron.propTypes = {
  direction: PropTypes.oneOf(["down", "up", "right", "left"]),
  size: PropTypes.oneOf(["sixteen", "twenty-four", "twenty-eight", "forty-eight", "twenty", "twelve"]),
  theme: PropTypes.oneOf(["filled", "regular"]),
};
