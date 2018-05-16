/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import Zrmc from "../";

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

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false,
      active: false,
      min: this.props.min,
      max: this.props.max,
      value: this.props.value,
    };
    this.contentWidth = 0;
  }

  componentDidMount() {
    this.updateContent();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { min, max, value } = nextProps;
    if (
      min !== prevState.min ||
      max !== prevState.max ||
      value !== prevState.value
    ) {
      return { min, max, value };
    }
    return null;
  }

  componentDidUpdate() {
    this.updateContent();
  }

  onBlur = () => {
    this.setState({ focused: false, active: false });
  };

  onFocus = () => {
    if (!this.props.disabled) {
      this.setState({ focused: true });
    }
  };

  setRef = (c) => {
    this.thumbRef = c;
  };

  setSliderThumbPosition(min, max, value) {
    let position = 0;
    if (this.contentWidth > 0 && max > 0 && max > min) {
      position = this.contentWidth / (max - min) * value;
    }
    return `transform: translateX(${position}px) translateX(-50%);`;
  }

  handleMoveStart = (event) => {
    if (!this.props.disabled && this.state.focused) {
      event.preventDefault();
      this.setState({ active: true });
      const value = this.moveThumbPosition(event);
      if (this.props.onChange) {
        this.props.onChange(value);
      }
    }
  };

  handleMoveChange = (event) => {
    if (!this.props.disabled && this.state.active) {
      event.preventDefault();
      const value = this.moveThumbPosition(event);
      if (this.props.onChange) {
        this.props.onChange(value);
      }
    }
  };

  handleMoveEnd = (event) => {
    if (!this.props.disabled) {
      event.preventDefault();
      this.setState({ active: false });
      const value = this.moveThumbPosition(event);
      if (this.props.onInput) {
        this.props.onInput(value);
      }
    }
  };

  moveThumbPosition(event) {
    const bounds = this.contentRef.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const { min, max } = this.state;
    let value = 0;
    if (this.contentWidth > 0 && max > 0 && min < this.state.max) {
      value = (max - min) / this.contentWidth * x + min;
      if (value > max) {
        value = max;
      } else if (value < min) {
        value = min;
      }
      if (this.props.discrete) {
        value = Math.round(value);
      }
    }
    if (value !== this.state.value) {
      this.setState({ value });
    }
  }

  updateContent() {
    if (this.contentRef && this.thumbRef) {
      const width = this.contentRef.clientWidth;
      this.contentWidth = width;
      const { min, max, value } = this.state;
      this.thumbRef.style = this.setSliderThumbPosition(min, max, value);
    }
  }

  render() {
    const {
      discrete,
      disabled,
      label,
      displayMarker,
      onChange,
      onInput,
      ...props
    } = this.props;
    let classes = MDC_SLIDER;
    let container;
    const { focused, active, min, max, value } = this.state;
    if (discrete) {
      classes += " mdc-slider--discrete";
      container = (
        <div className="mdc-slider__thumb-container" ref={this.setRef}>
          <div className="mdc-slider__pin">
            <span className="mdc-slider__pin-value-marker">{value}</span>
          </div>
          <svg className="mdc-slider__thumb" width="21" height="21">
            <circle cx="10.5" cy="10.5" r="7.875" />
          </svg>
          <div className="mdc-slider__focus-ring" />
        </div>
      );
    } else {
      container = (
        <div className="mdc-slider__thumb-container" ref={this.setRef}>
          <svg className="mdc-slider__thumb" width="21" height="21">
            <circle cx="10.5" cy="10.5" r="7.875" />
          </svg>
          <div className="mdc-slider__focus-ring" />
        </div>
      );
    }
    const p = {
      tabIndex: "0",
      role: "slider",
      "aria-valuemin": min,
      "aria-valuemax": max,
      "aria-valuenow": value,
      "aria-label": label,
      onBlur: this.onBlur,
      onFocus: this.onFocus,
      onMouseDown: this.handleMoveStart,
      onMouseUp: this.handleMoveEnd,
      onMouseMove: this.handleMoveChange,
      onTouchStart: this.handleMoveStart,
      onTouchEnd: this.handleMoveEnd,
      onTouchMove: this.handleMoveChange,
      onTouchCancel: this.handleMoveEnd,

      ref: (c) => {
        this.contentRef = c;
      },
    };
    if (disabled) {
      classes += " mdc-slider--disabled";
      p["aria-disabled"] = "true";
    } else if (focused) {
      classes += " mdc-slider--focus";
    }
    if (active) {
      classes += " mdc-slider--active";
    }
    let styleTrack;
    let marker;
    if (discrete && displayMarker) {
      if (max > 0) {
        const scale = value / max;
        styleTrack = { transform: `scaleX(${scale})` };
      }
      classes += " mdc-slider--display-markers";
      const markers = [];
      for (let i = 0; i < max; i += 1) {
        const key = `marker_${i}`;
        markers.push(<div className="mdc-slider__track-marker" key={key} />);
      }
      marker = (
        <div className="mdc-slider__track-marker-container">{markers}</div>
      );
    }
    return Zrmc.render(
      <div className={classes} {...p}>
        <div className="mdc-slider__track-container">
          <div className="mdc-slider__track" style={styleTrack} />
          {marker}
        </div>
        {container}
      </div>,
      props,
    );
  }
}

Slider.defaultProps = {
  mdcElement: MDC_SLIDER,
  discrete: false,
  disabled: false,
  min: 0,
  max: 100,
  value: 0,
  label: "",
  displayMarker: false,
  onInput: null,
  onChange: null,
};

Slider.propTypes = {
  mdcElement: PropTypes.string,
  discrete: PropTypes.bool,
  disabled: PropTypes.bool,
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.number,
  label: PropTypes.string,
  displayMarker: PropTypes.bool,
  onInput: PropTypes.func,
  onChange: PropTypes.func,
};
