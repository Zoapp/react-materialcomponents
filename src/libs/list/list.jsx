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
https://material.io/components/web/catalog/lists/

TODO:
- Mixins
*/
const List = ({
  children, className, dense, avatar, twoLine, darkTheme, ...props
}) => {
  let classes = "mdc-list";
  if (dense) {
    classes += " mdc-list--dense";
  }
  if (avatar) {
    classes += " mdc-list--avatar-list";
  }
  if (twoLine) {
    classes += " mdc-list--two-line";
  }
  if (darkTheme) {
    classes += " mdc-list--theme-dark";
  }
  if (className) {
    classes += ` ${className}`;
  }
  // TODO iterate througth children to check and set type
  return Rmdc.render(<ul className={classes} {...props}>{children}</ul>, props);
};

List.defaultProps = {
  children: null,
  className: null,

  dense: false,
  avatar: false,
  twoLine: false,
  darkTheme: false,
};

List.propTypes = {
// React component props
  children: PropTypes.node,
  className: PropTypes.string,

  dense: PropTypes.bool,
  avatar: PropTypes.bool,
  twoLine: PropTypes.bool,
  darkTheme: PropTypes.bool,
};

export default List;
