/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import PropTypes from "prop-types";
import Icon from "../components/icon";

/*
mdc-list-item
See:
https://material.io/components/web/catalog/lists/

TODO:
- Ripple effect
- Mixins
*/
const ListItem = ({
  children, className, type, icon, activated, ...props
}) => {
  let classes = "mdc-list-item";
  let graphic;
  if (activated) {
    classes += " mdc-list-item--activated";
  }
  if (className) {
    classes += ` ${className}`;
  }
  if (icon) {
    graphic = (<Icon className="mdc-list-item__graphic" aria-hidden="true" name={icon} />);
  }
  if (type === "a") {
    return (<a className={classes} {...props}>{graphic}{children}</a>);
  }
  return (<li className={classes} {...props}>{graphic}{children}</li>);
};

ListItem.defaultProps = {
  children: null,
  className: null,

  type: "li",
  activated: false,
  icon: null,
};

ListItem.propTypes = {
// React component props
  children: PropTypes.node,
  className: PropTypes.string,

  type: PropTypes.string,
  activated: PropTypes.bool,
  icon: PropTypes.string,
};

export default ListItem;
