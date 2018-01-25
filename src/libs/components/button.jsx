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
  children, className, raised, unelevated, stroked, dense, compact, disabled, ripple, ...props
}) => {
  const classes = "mdc-button";
  // TODO raised, unelevated, stroked, dense, compact, disabled, ripple
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
};

export default Button;
