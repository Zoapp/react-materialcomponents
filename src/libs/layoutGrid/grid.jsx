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
 * mdc-layout-grid
 * See:
 * https://material.io/components/web/catalog/layout-grid/
 *
 */

const MDC_GRID = "mdc-layout-grid";

const Grid = ({ children, ...props }) => {
  const classes = MDC_GRID;
  return Rmdc.render(<div className={classes} >{children}</div>, props);
};

Grid.defaultProps = {
  mdcElement: MDC_GRID,
  children: null,
};

Grid.propTypes = {
  mdcElement: PropTypes.string,
  children: PropTypes.node,
};

export default Grid;
