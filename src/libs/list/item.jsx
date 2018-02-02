/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { Children } from "react";
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
const ListItem = ({
  children, className, type, icon, activated, imgSrc, imgSize, imgLabel, secondaryText, ...props
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
  } else if (imgSrc) {
    graphic = (<img className="mdc-list-item__graphic" src={imgSrc} width={imgSize} height={imgSize} alt={imgLabel} />);
  }
  let meta;
  let text = Children.map(children, (child) => {
    if (child.props && child.props.elementType === "ListItemMeta") {
      meta = child;
      return null;
    }
    return child;
  });
  if (secondaryText) {
    text = (<span className="mdc-list-item__text">{text}<span className="mdc-list-item__secondary-text">{secondaryText}</span></span>);
  }
  if (type === "a") {
    return Rmdc.render(<a className={classes} {...props}>{graphic}{text}{meta}</a>, props);
  }
  return Rmdc.render(<li className={classes} {...props}>{graphic}{text}{meta}</li>, props);
};

ListItem.defaultProps = {
  children: null,
  className: null,

  type: "li",
  activated: false,
  icon: null,
  imgSrc: null,
  imgSize: 56,
  imgLabel: null,
  secondaryText: null,
};

ListItem.propTypes = {
// React component props
  children: PropTypes.node,
  className: PropTypes.string,

  type: PropTypes.string,
  activated: PropTypes.bool,
  icon: PropTypes.string,
  imgSrc: PropTypes.string,
  imgSize: PropTypes.number,
  imgLabel: PropTypes.string,
  secondaryText: PropTypes.string,
};

export default ListItem;
