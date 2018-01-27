/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import PropTypes from "prop-types";

/*
mdc-layout-grid__cell
See:
https://material.io/components/web/catalog/layout-grid/

TODO:
- span, order, align
- Mixins
*/
const Cell = ({
  children, className, ...props
}) => {
  const classes = "mdc-layout-grid__cell";
  return (<div className={classes} {...props}>{children}</div>);
};

Cell.defaultProps = {
  children: null,
  className: null,
};

Cell.propTypes = {
// React component props
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Cell;
