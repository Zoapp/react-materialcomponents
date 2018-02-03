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
 * mdc-layout-grid__inner
 * See:
 * https://material.io/components/web/catalog/layout-grid/
 *
 */

const MDC_GRIDINNER = "mdc-layout-grid__inner";

const Inner = ({ children, ...props }) => {
  const classes = MDC_GRIDINNER;
  return Rmdc.render(<div className={classes} >{children}</div>, props);
};

Inner.defaultProps = {
  mdcElement: MDC_GRIDINNER,
  children: null,
};

Inner.propTypes = {
  mdcElement: PropTypes.string,
  children: PropTypes.node,
};

export default Inner;
