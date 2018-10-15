/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import PropTypes from "prop-types";
import Icon from "./icon";
import Zrmc from "../";

/**
 * mdc-button
 *
 * See:
 * https://material.io/develop/web/components/buttons/
 *
 *
 */

const MDC_BUTTON = "mdc-button";

class Button extends React.Component {
  render() {
    const {
      cardAction,
      children,
      dense,
      disabled,
      icon,
      id,
      link,
      onClick,
      raised,
      ripple,
      outlined,
      unelevated,
      type,
      ...props
    } = this.props;
    let classes = MDC_BUTTON;
    // Special case for inner buttons of CardActions
    if (cardAction) {
      classes += " mdc-button--dense mdc-card__action";
    } else if (dense) {
      classes += " mdc-button--dense";
    }
    if (raised) {
      classes += " mdc-button--raised";
    }
    if (unelevated) {
      classes += " mdc-button--unelevated";
    }
    if (outlined) {
      classes += " mdc-button--outlined";
    }
    let i = "";
    if (icon) {
      i = <Icon className="mdc-button__icon" name={icon} />;
    }
    let element;
    if (link) {
      element = (
        <a
          id={id}
          href={link}
          className={classes}
          ref={(e) => {
            this.innerRef = e;
          }}
        >
          {i}
          {children}
        </a>
      );
    } else {
      element = (
        <button
          id={id}
          className={classes}
          onClick={onClick}
          disabled={disabled}
          type={type}
          ref={(e) => {
            this.innerRef = e;
          }}
        >
          {i}
          {children}
        </button>
      );
    }
    return Zrmc.render(element, props);
  }
}

Button.defaultProps = {
  cardAction: false,
  children: null,
  dense: false,
  disabled: false,
  icon: null,
  id: null,
  link: null,
  mdcElement: MDC_BUTTON,
  onClick: null,
  raised: false,
  ripple: false,
  outlined: false,
  type: "button",
  unelevated: false,
};

Button.propTypes = {
  cardAction: PropTypes.bool,
  children: PropTypes.node,
  dense: PropTypes.bool,
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  link: PropTypes.string,
  mdcElement: PropTypes.string,
  onClick: PropTypes.func,
  raised: PropTypes.bool,
  ripple: PropTypes.bool,
  outlined: PropTypes.bool,
  unelevated: PropTypes.bool,
  type: PropTypes.string,
  id: PropTypes.string,
};

export default Button;
