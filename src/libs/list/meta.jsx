/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import PropTypes from "prop-types";
import Icon from "../components/icon";
import Rmdc from "../";
/*
mdc-list-item
See:
https://material.io/components/web/catalog/lists/

TODO:
- Ripple effect
- Mixins
*/
const ListItemMeta = ({
  children, className, icon, href, color, label, ...props
}) => {
  let classes = "mdc-list-item__meta";
  if (className) {
    classes += ` ${className}`;
  }
  let element;
  if (icon) {
    element = (
      <Icon href={href} className={classes} type="a" label={label} name={icon} color={color} />
    );
  } else {
    element = <span className={classes} >{children}</span>;
  }
  return Rmdc.render(element, props);
};

ListItemMeta.defaultProps = {
  children: null,
  className: null,

  icon: null,
  href: null,
  color: null,
  label: null,
  elementType: "ListItemMeta",
};

ListItemMeta.propTypes = {
// React component props
  children: PropTypes.node,
  className: PropTypes.string,

  icon: PropTypes.string,
  href: PropTypes.string,
  color: PropTypes.string,
  label: PropTypes.string,
  elementType: PropTypes.string,
};

export default ListItemMeta;
