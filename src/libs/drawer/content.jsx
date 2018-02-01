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
mdc-drawer__content
See
https://material.io/components/web/catalog/drawer/

*/
const DrawerContent = ({
  children, className, list, ...props
}) => {
  let classes = "mdc-drawer__content";
  if (list) {
    classes += " mdc-list";
  }
  if (className) {
    classes += ` ${className}`;
  }
  return Rmdc.render(<nav className={classes} {...props}>{children}</nav>, props);
};

DrawerContent.defaultProps = {
  children: null,
  className: null,

  list: false,
};

DrawerContent.propTypes = {
// React component props
  children: PropTypes.node,
  className: PropTypes.string,

  list: PropTypes.bool,
};

export default DrawerContent;
