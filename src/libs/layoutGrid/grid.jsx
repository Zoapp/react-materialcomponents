/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import PropTypes from "prop-types";
import Rmdc from "../";

/*
mdc-layout-grid
See:
https://material.io/components/web/catalog/layout-grid/

TODO:
- Ripple effect
- Mixins
*/
const Grid = ({
  children, className, ...props
}) => {
  let classes = "mdc-layout-grid";
  if (className) {
    classes += ` ${className}`;
  }
  return Rmdc.render(<div className={classes} {...props}>{children}</div>, props);
};

Grid.defaultProps = {
  children: null,
  className: null,
};

Grid.propTypes = {
// React component props
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Grid;
