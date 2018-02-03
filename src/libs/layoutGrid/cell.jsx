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
 * mdc-layout-grid__cell
 * See:
 * https://material.io/components/web/catalog/layout-grid/
 *
 * TODO:
 * - span, order, align
 */

const MDC_GRIDCELL = "mdc-layout-grid__cell";

const Cell = ({ children, ...props }) => {
  const classes = MDC_GRIDCELL;
  return Rmdc.render(<div className={classes} >{children}</div>, props);
};

Cell.defaultProps = {
  mdcElement: MDC_GRIDCELL,
  children: null,
};

Cell.propTypes = {
  mdcElement: PropTypes.string,
  children: PropTypes.node,
};

export default Cell;
