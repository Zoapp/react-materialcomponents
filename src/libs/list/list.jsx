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
  children, className, dense, twoLine, ...props
}) => {
  let classes = "mdc-list";
  if (dense) {
    classes += " mdc-list--dense";
  }
  if (twoLine) {
    classes += " mdc-list--two-line";
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
  twoLine: false,
};

List.propTypes = {
// React component props
  children: PropTypes.node,
  className: PropTypes.string,

  dense: PropTypes.bool,
  twoLine: PropTypes.bool,
};

export default List;
