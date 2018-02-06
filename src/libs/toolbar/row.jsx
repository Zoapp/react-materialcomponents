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
 * mdc-toolbar__row
 * See:
 * https://material.io/components/web/catalog/toolbar/
 * https://material-components-web.appspot.com/toolbar/index.html
 *
 */

const MDC_TBROW = "mdc-toolbar__row";

const Row = ({
  children, ...props
}) => {
  const classes = MDC_TBROW;
  return Rmdc.render(<div className={classes}>{children}</div>, props);
};

Row.defaultProps = {
  mdcElement: MDC_TBROW,
  children: null,
};

Row.propTypes = {
  mdcElement: PropTypes.string,
  children: PropTypes.node,
};

export default Row;
