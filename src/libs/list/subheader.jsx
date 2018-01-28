/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import PropTypes from "prop-types";

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
  if (type !== "h3") {
    return (<h3 className={classes} {...props}>{children}</h3>);
  }
  return (<h3 className={classes} {...props}>{children}</h3>);
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
