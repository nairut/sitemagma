/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Chevron } from "../Chevron";
import "./style.css";

export const Dropdown = ({
  headers = true,
  divider = false,
  appearance,
  size,
  theme,
  expanded,
  className,
  inputClassName,
  contentsClassName,
  divClassName,
  text = "Placeholder text",
  chevronDirectionDownSize = "/img/icon-end-1-medium.png",
  thinUnderlineClassName,
  override = (
    <Chevron
      direction="down"
      directionDownSize={chevronDirectionDownSize}
      directionUpSizeClassName="chevron-instance"
      size="twenty"
      theme="regular"
    />
  ),
  inputType = "text",
}) => {
  return (
    <div className={`dropdown ${className}`}>
      {expanded && (
        <>
          <div className={`input ${appearance} ${size}`}>
            <div className={`contents size-${size} appearance-${appearance} ${theme}`}>
              <div className="icon-text-stack">
                <input className="text" placeholder={text} type={inputType} />
              </div>
              <div className="icon-end">
                <Chevron
                  direction="down"
                  directionDownSize={
                    size === "medium" && theme === "light-mode"
                      ? "/img/icon-end-1-medium.png"
                      : theme === "dark-mode" && size === "medium"
                      ? "/img/icon-end-1-medium-8.png"
                      : undefined
                  }
                  directionDownSize1={
                    theme === "light-mode" && size === "large"
                      ? "/img/icon-end-1-large.png"
                      : theme === "dark-mode" && size === "large"
                      ? "/img/icon-end-1-large-8.png"
                      : undefined
                  }
                  directionUpSizeClassName="chevron-instance"
                  img={
                    size === "small" && theme === "light-mode"
                      ? "/img/icon-end-1.png"
                      : theme === "dark-mode" && size === "small"
                      ? "/img/icon-end-1-8.png"
                      : undefined
                  }
                  size={size === "medium" ? "twenty" : size === "large" ? "twenty-four" : "sixteen"}
                  theme="regular"
                />
              </div>
            </div>
            <div className={`in-focus appearance-0-${appearance} theme-0-${theme}`} />
          </div>
          <div className={`list-sections theme-1-${theme}`}>
            <div className="top-section">
              {headers && (
                <div className="listitem-light">
                  <div className="list-container">
                    <div className="list-item-text">Action</div>
                  </div>
                </div>
              )}

              <div className="list-container-wrapper">
                <div className="div">
                  <div className="checkmark-control" />
                  <div className="list-item-text-wrapper">
                    <div className="text-wrapper">Action</div>
                  </div>
                </div>
              </div>
              <div className="div-wrapper">
                <div className="div">
                  <div className="checkmark-control" />
                  <div className="list-item-text-wrapper">
                    <div className="list-item-text-2">Action</div>
                  </div>
                </div>
              </div>
              <div className="listitem-light-2">
                <div className="div">
                  <div className="checkmark-control" />
                  <div className="list-item-text-wrapper">
                    <div className="list-item-text-3">Action</div>
                  </div>
                </div>
              </div>
              <div className="listitem-light-3">
                <div className="div">
                  <div className="checkmark-control" />
                  <div className="list-item-text-wrapper">
                    <div className="list-item-text-4">Action</div>
                  </div>
                </div>
              </div>
              <div className="listitem-light-4">
                <div className="div">
                  <div className="checkmark-control" />
                  <div className="list-item-text-wrapper">
                    <div className="list-item-text-5">Action</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {!expanded && (
        <div className={`input-2 size-2-${size} appearance-1-${appearance} theme-14-${theme} ${inputClassName}`}>
          {["outline", "transparent"].includes(appearance) && (
            <>
              <div className={`contents-2 ${contentsClassName}`}>
                <div className="icon-text-stack-2">
                  <div className="placeholder-text-wrapper">
                    <div className={`placeholder-text ${divClassName}`}>{text}</div>
                  </div>
                </div>
                <div className="icon-end-2">{override}</div>
              </div>
              <div className={`thin-underline ${thinUnderlineClassName}`} />
            </>
          )}

          {["fill-darker", "fill-lighter"].includes(appearance) && (
            <div className="contents-3">
              <div className="icon-text-stack-3">
                <div className="text-2">
                  <div className="placeholder-text-2">{text}</div>
                </div>
              </div>
              <div className="icon-end-wrapper">
                <Chevron
                  direction="down"
                  directionDownSize={
                    theme === "light-mode" && size === "medium"
                      ? "/img/icon-end-1-medium.png"
                      : theme === "dark-mode" && size === "medium"
                      ? "/img/icon-end-1-medium-8.png"
                      : undefined
                  }
                  directionDownSize1={
                    theme === "light-mode" && size === "large"
                      ? "/img/icon-end-1-large.png"
                      : theme === "dark-mode" && size === "large"
                      ? "/img/icon-end-1-large-8.png"
                      : undefined
                  }
                  directionUpSizeClassName="chevron-instance"
                  img={
                    size === "small" && theme === "light-mode"
                      ? "/img/icon-end-1.png"
                      : theme === "dark-mode" && size === "small"
                      ? "/img/icon-end-1-8.png"
                      : undefined
                  }
                  size={size === "medium" ? "twenty" : size === "large" ? "twenty-four" : "sixteen"}
                  theme="regular"
                />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  headers: PropTypes.bool,
  divider: PropTypes.bool,
  appearance: PropTypes.oneOf(["fill-lighter", "fill-darker", "outline", "transparent"]),
  size: PropTypes.oneOf(["large", "medium", "small"]),
  theme: PropTypes.oneOf(["light-mode", "dark-mode"]),
  expanded: PropTypes.bool,
  text: PropTypes.string,
  chevronDirectionDownSize: PropTypes.string,
  inputType: PropTypes.string,
};
