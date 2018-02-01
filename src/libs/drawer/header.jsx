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
mdc-drawer__header
See
https://material.io/components/web/catalog/drawer/

*/
const DrawerHeader = ({
  children, className, list, ...props
}) => {
  let classes = "mdc-drawer__header";
  if (className) {
    classes += ` ${className}`;
  }
  return Rmdc.render(
    (
      <header className={classes} {...props}>
        <div className="mdc-drawer__header-content">{children}</div>
      </header>
    ),
    props,
  );
};

DrawerHeader.defaultProps = {
  children: null,
  className: null,

  list: false,
};

DrawerHeader.propTypes = {
// React component props
  children: PropTypes.node,
  className: PropTypes.string,

  list: PropTypes.bool,
};

export default DrawerHeader;
