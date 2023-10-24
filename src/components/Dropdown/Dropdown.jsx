/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconEnd18 } from "../../icons/IconEnd18";
import { IconEnd1Medium16 } from "../../icons/IconEnd1Medium16";
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
  textClassName,
  divClassName,
  text = "Placeholder text",
  iconEndClassName,
  iconEnd1Medium16StyleOverrideClassName,
  iconEnd1Medium16Color = "#616161",
  thinUnderlineClassName,
  icon = <IconEnd1Medium16 className={iconEnd1Medium16StyleOverrideClassName} color={iconEnd1Medium16Color} />,
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
                {["large", "small"].includes(size) && (
                  <IconEnd18
                    className={`${size === "large" ? "class" : "class-2"}`}
                    color={theme === "dark-mode" ? "#ADADAD" : "#616161"}
                  />
                )}

                {size === "medium" && (
                  <IconEnd1Medium16 className="icon-end-medium" color={theme === "dark-mode" ? "#ADADAD" : "#616161"} />
                )}
              </div>
            </div>
            <div className={`in-focus size-2-${size} appearance-0-${appearance} theme-0-${theme}`} />
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
        <div className={`input-2 size-3-${size} appearance-1-${appearance} theme-14-${theme} ${inputClassName}`}>
          {["outline", "transparent"].includes(appearance) && (
            <>
              <div className={`contents-2 ${contentsClassName}`}>
                <div className="icon-text-stack-2">
                  <div className={`placeholder-text-wrapper ${textClassName}`}>
                    <div className={`placeholder-text ${divClassName}`}>{text}</div>
                  </div>
                </div>
                <div className={`icon-end-2 ${iconEndClassName}`}>{icon}</div>
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
              <div className="icon-end-3">
                {["large", "small"].includes(size) && (
                  <IconEnd18
                    className={`${size === "large" ? "class" : "class-2"}`}
                    color={theme === "dark-mode" ? "#ADADAD" : "#616161"}
                  />
                )}

                {size === "medium" && (
                  <IconEnd1Medium16 className="icon-end-medium" color={theme === "dark-mode" ? "#ADADAD" : "#616161"} />
                )}
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
  iconEnd1Medium16Color: PropTypes.string,
  inputType: PropTypes.string,
};
