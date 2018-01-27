/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import PropTypes from "prop-types";

/*
mdc-layout-grid__inner
See:
https://material.io/components/web/catalog/layout-grid/

TODO:
- Mixins
*/
const Inner = ({
  children, className, ...props
}) => {
  const classes = "mdc-layout-grid__inner";
  return (<div className={classes} {...props}>{children}</div>);
};

Inner.defaultProps = {
  children: null,
  className: null,
};

Inner.propTypes = {
// React component props
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Inner;
