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
mdc-list-group__subheader
See:
https://material.io/components/web/catalog/lists/

TODO:
- Ripple effect
- Mixins
*/
const ListGroupSubheader = ({
  children, className, type, ...props
}) => {
  let classes = "mdc-list-group__subheader";
  if (className) {
    classes += ` ${className}`;
  }
  // TODO type
  let element;
  if (type !== "h3") {
    element = (<h3 className={classes}>{children}</h3>);
  } else {
    element = (<h3 className={classes}>{children}</h3>);
  }
  return Rmdc.render(element, props);
};

ListGroupSubheader.defaultProps = {
  children: null,
  className: null,

  type: "h3",
};

ListGroupSubheader.propTypes = {
// React component props
  children: PropTypes.node,
  className: PropTypes.string,

  type: PropTypes.string,
};

export default ListGroupSubheader;
