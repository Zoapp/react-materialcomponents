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
 * mdc-list-item
 * See:
 * https://material.io/components/web/catalog/lists/
 *
 */

const MDC_LIST = "mdc-list";

const List = ({
  children, dense, avatar, twoLine, ...props
}) => {
  let classes = MDC_LIST;
  if (dense) {
    classes += " mdc-list--dense";
  }
  if (avatar) {
    classes += " mdc-list--avatar-list";
  }
  if (twoLine) {
    classes += " mdc-list--two-line";
  }
  // TODO iterate througth children to check and set type
  return Rmdc.render(<ul className={classes} >{children}</ul>, props);
};

List.defaultProps = {
  mdcElement: MDC_LIST,
  children: null,
  dense: false,
  avatar: false,
  twoLine: false,
};

List.propTypes = {
  mdcElement: PropTypes.string,
  children: PropTypes.node,
  dense: PropTypes.bool,
  avatar: PropTypes.bool,
  twoLine: PropTypes.bool,
};

export default List;
