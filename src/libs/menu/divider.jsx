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
mdc-list-divider
See:
https://material.io/components/web/catalog/menus/
https://material-components-web.appspot.com/simple-menu.html

*/
const MenuDivider = ({
  children, className, tabIndex, disabled, ...props
}) => {
  let classes = "mdc-list-divider";
  if (className) {
    classes += ` ${className}`;
  }
  return Rmdc.render((
    <li className={classes} role="separator" />), props);
};

MenuDivider.defaultProps = {
  className: null,
};

MenuDivider.propTypes = {
// React component props
  className: PropTypes.string,
};

export default MenuDivider;
