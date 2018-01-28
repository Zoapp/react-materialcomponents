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
const Title = ({
  children, className, ...props
}) => {
  let classes = "mdc-toolbar__title";
  if (className) {
    classes += ` ${className}`;
  }
  // TODO all
  return (<span className={classes} {...props}>{children}</span>);
};

Title.defaultProps = {
  children: null,
  className: null,
};

Title.propTypes = {
// React component props
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Title;
