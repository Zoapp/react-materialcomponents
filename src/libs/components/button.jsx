/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import PropTypes from "prop-types";
import Icon from "./icon";
import Rmdc from "../";

/*
See:
https://material.io/components/web/catalog/buttons/
http://material-components-web.appspot.com/button.html

TODO:
- secondary no related css in mdc.css
- Ripple effect
- Mixins
*/
const Button = ({
  children,
  className,
  raised,
  unelevated,
  stroked,
  dense,
  compact,
  secondary,
  icon,
  link,
  ripple,
  cardAction,
  ...props
}) => {
  let classes = "mdc-button";
  // Special case for inner buttons of CardActions
  if (cardAction) {
    classes += " mdc-button--compact mdc-card__action";
  } else {
    if (raised) {
      classes += " mdc-button--raised";
    }
    if (unelevated) {
      classes += " mdc-button--unelevated";
    }
    if (stroked) {
      classes += " mdc-button--stroked";
    }
    if (dense) {
      classes += " mdc-button--dense";
    }
    if (compact) {
      classes += " mdc-button--compact";
    }
    if (secondary) {
      classes += " secondary-filled-button";
    }
  }
  if (className) {
    classes += ` ${className}`;
  }
  let i = "";
  if (icon) {
    i = (<Icon className="mdc-button__icon" name={icon} />);
  }
  let element;
  if (link) {
    element = (<a href={link} className={classes}>{i}{children}</a>);
  } else {
    element = (<button className={classes}>{i}{children}</button>);
  }
  return Rmdc.render(element, props);
};

Button.defaultProps = {
  children: null,
  className: null,

  raised: false,
  unelevated: false,
  stroked: false,
  dense: false,
  compact: false,
  secondary: false,
  icon: null,
  link: null,
  ripple: false,

  cardAction: false,
};

Button.propTypes = {
// React component props
  children: PropTypes.node,
  className: PropTypes.string,

  raised: PropTypes.bool,
  unelevated: PropTypes.bool,
  stroked: PropTypes.bool,
  dense: PropTypes.bool,
  compact: PropTypes.bool,
  secondary: PropTypes.bool,
  icon: PropTypes.string,
  link: PropTypes.string,

  ripple: PropTypes.bool,

  cardAction: PropTypes.bool,
};

export default Button;
