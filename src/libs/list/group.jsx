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
mdc-list-group
See:
https://material.io/components/web/catalog/lists/

TODO:
- Ripple effect
- Mixins
*/
const ListGroup = ({
  children, className, ...props
}) => {
  let classes = "mdc-list-group";
  if (className) {
    classes += ` ${className}`;
  }
  return Rmdc.render(<div className={classes} {...props}>{children}</div>, props);
};

ListGroup.defaultProps = {
  children: null,
  className: null,
};

ListGroup.propTypes = {
// React component props
  children: PropTypes.node,
  className: PropTypes.string,
};

export default ListGroup;
