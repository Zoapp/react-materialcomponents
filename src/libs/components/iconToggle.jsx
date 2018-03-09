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
 * mdc-icon-toggle
 *
 * See:
 * https://material.io/components/web/catalog/buttons/icon-toggle-buttons/
 * https://material-components-web.appspot.com/icon-toggle.html
 *
 */

const MDC_ICONTOGGLE = "mdc-icon-toggle";

export default class IconToggle extends Component {
  constructor(props) {
    super(props);
    this.state = { pressed: this.props.pressed };
  }

  handleClick = (event) => {
    event.preventDefault();
    const pressed = !this.state.pressed;
    this.setState({ pressed });
    if (this.props.onChange) {
      this.props.onChange(pressed);
    }
  };

  render() {
    const {
      pressed,
      disabled,
      name,
      nameOff,
      label,
      labelOff,
      onChange,
      color,
      ...props
    } = this.props;
    // TODO Font Awesome
    let classes = `${MDC_ICONTOGGLE} material-icons`;
    if (disabled) {
      classes += " mdc-icon-toggle--disabled";
    }
    const style = {};
    if (color) {
      style.color = color;
    }
    const n = this.state.pressed ? name : nameOff;
    const l = this.state.pressed ? label : labelOff;
    const element = (
      <i
        className={classes}
        role="button"
        aria-pressed={this.state.pressed}
        arria-label={l}
        tabIndex="0"
        style={style}
        onKeyUp={(e) => {
          e.preventDefault();
        }}
        onClick={(e) => {
          if (!disabled) {
            this.handleClick(e);
          }
        }}
      >
        {n}
      </i>
    );
    return Zrmc.render(element, props);
  }
}

IconToggle.defaultProps = {
  mdcElement: MDC_ICONTOGGLE,
  pressed: false,
  disabled: false,
  label: null,
  labelOff: null,
  onChange: null,
  color: null,
};

IconToggle.propTypes = {
  mdcElement: PropTypes.string,
  pressed: PropTypes.bool,
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  nameOff: PropTypes.string.isRequired,
  label: PropTypes.string,
  labelOff: PropTypes.string,
  onChange: PropTypes.func,
  color: PropTypes.string,
};
