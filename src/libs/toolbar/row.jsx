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
https://material.io/components/web/catalog/toolbar/
https://material-components-web.appspot.com/toolbar/index.html

TODO:
- All
- Mixins
*/
const Row = ({
  children, className, ...props
}) => {
  const classes = "mdc-toolbar__row";
  // TODO all
  return (<div className={classes} {...props}>{children}</div>);
};

Row.defaultProps = {
  children: null,
  className: null,
};

Row.propTypes = {
// React component props
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Row;