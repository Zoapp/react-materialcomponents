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
 * https://material.io/develop/web/components/buttons/icon-toggle-buttons/
 *
 */

const MDC_ICONTOGGLE = "mdc-icon-toggle";

export default class IconToggle extends Component {
  state = { pressed: this.props.pressed };

  static getDerivedStateFromProps(nextProps, prevState) {
    const { pressed } = nextProps;
    if (pressed !== prevState.pressed && !nextProps.derivedState) {
      return { pressed };
    }
    return null;
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
      disabled,
      name,
      label,
      labelOff,
      onChange,
      color,
      fa,
      children,
      off,
      ...props
    } = this.props;
    let classes = MDC_ICONTOGGLE;
    let ch = this.state.pressed ? children : off;
    if (name) {
      ch = this.state.pressed ? name : off;
      classes += " material-icons";
    } else if (fa) {
      let cn = "fa";
      let icon = ` fa-${fa}`;
      if (this.state.pressed) {
        if (!off) {
          cn = "fas";
        }
      } else if (off) {
        icon = ` fa-${off}`;
      } else {
        cn = "far";
      }
      ch = <i className={`${cn}${icon}`} />;
    }
    if (disabled) {
      classes += " mdc-icon-toggle--disabled";
    }
    const style = {};
    if (color) {
      style.color = color;
    }
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
        {ch}
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
  fa: null,
  children: null,
  off: null,
  onChange: null,
  color: null,
};

IconToggle.propTypes = {
  mdcElement: PropTypes.string,
  pressed: PropTypes.bool,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  fa: PropTypes.string,
  children: PropTypes.node,
  off: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  label: PropTypes.string,
  labelOff: PropTypes.string,
  onChange: PropTypes.func,
  color: PropTypes.string,
};
