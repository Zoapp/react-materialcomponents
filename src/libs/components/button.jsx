/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import PropTypes from "prop-types";

/*
See:
https://material.io/components/web/catalog/buttons/
http://material-components-web.appspot.com/button.html

TODO:
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
  disabled,
  ripple,
  cardAction,
  ...props
}) => {
  let classes = "mdc-button";
  // Special case for inner buttons of CardActions
  if (cardAction) {
    classes += " mdc-button--compact mdc-card__action";
  } else {
    // TODO raised, unelevated, stroked, dense, compact, disabled, ripple
  }
  if (className) {
    classes += ` ${className}`;
  }
  return (<button className={classes} disabled={disabled} {...props}>{children}</button>);
};

Button.defaultProps = {
  children: null,
  className: null,

  raised: false,
  unelevated: false,
  stroked: false,
  dense: false,
  compact: false,

  disabled: false,
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

  disabled: PropTypes.bool,
  ripple: PropTypes.bool,

  cardAction: PropTypes.bool,
};

export default Button;
