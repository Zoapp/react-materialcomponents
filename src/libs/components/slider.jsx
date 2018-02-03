/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import PropTypes from "prop-types";
import Rmdc from "../";

/**
 * mdc-slider
 *
 * See:
 * https://material.io/components/web/catalog/input-controls/sliders/
 * https://material-components-web.appspot.com/slider.html
 *
 * TODO:
 * - move cursor, onchange
 */

const MDC_SLIDER = "mdc-slider";

const Slider = ({
  discrete, disabled, valueMin, valueMax, valueNow, label, ...props
}) => {
  let classes = MDC_SLIDER;
  let container;
  if (discrete) {
    classes += " mdc-slider--discrete";
    container = (
      <div className="mdc-slider__thumb-container">
        <div className="mdc-slider__pin">
          <span className="mdc-slider__pin-value-marker" />
        </div>
        <svg className="mdc-slider__thumb" width="21" height="21">
          <circle cx="10.5" cy="10.5" r="7.875" />
        </svg>
        <div className="mdc-slider__focus-ring" />
      </div>);
  } else {
    container = (
      <div className="mdc-slider__thumb-container">
        <svg className="mdc-slider__thumb" width="21" height="21">
          <circle cx="10.5" cy="10.5" r="7.875" />
        </svg>
        <div className="mdc-slider__focus-ring" />
      </div>);
  }
  if (disabled) {
    classes += " mdc-slider--disabled";
  }
  return Rmdc.render((
    <div
      className={classes}
      tabIndex="0"
      role="slider"
      aria-valuemin={valueMin}
      aria-valuemax={valueMax}
      aria-valuenow={valueNow}
      aria-label={label}
    >
      <div className="mdc-slider__track-container">
        <div className="mdc-slider__track" />
      </div>
      {container}
    </div>), props);
};

Slider.defaultProps = {
  mdcElement: MDC_SLIDER,
  discrete: false,
  disabled: false,
  valueMin: 0,
  valueMax: 100,
  valueNow: 0,
  label: "",
};

Slider.propTypes = {
  mdcElement: PropTypes.string,
  discrete: PropTypes.bool,
  disabled: PropTypes.bool,
  valueMin: PropTypes.number,
  valueMax: PropTypes.number,
  valueNow: PropTypes.number,
  label: PropTypes.string,
};

export default Slider;
