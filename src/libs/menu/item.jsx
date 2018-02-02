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
mdc-list-item
See:
https://material.io/components/web/catalog/menus/
https://material-components-web.appspot.com/simple-menu.html

*/
const MenuItem = ({
  children, className, tabIndex, disabled, ...props
}) => {
  let classes = "mdc-list-item";
  if (className) {
    classes += ` ${className}`;
  }
  const p = {};
  if (disabled) {
    p.disabled = "disabled";
    p["aria-disabled"] = "true";
    p.tabIndex = "-1";
  } else {
    p.tabIndex = Number(tabIndex).toString();
  }
  return Rmdc.render((
    <li className={classes} role="menuitem" {...p} >
      {children}
    </li>), props);
};

MenuItem.defaultProps = {
  className: null,
  tabIndex: -1,
  disabled: false,
};

MenuItem.propTypes = {
// React component props
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  tabIndex: PropTypes.number,
  disabled: PropTypes.bool,
};

export default MenuItem;
