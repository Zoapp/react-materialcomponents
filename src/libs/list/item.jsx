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

/**
 * mdc-list-item
 * See:
 * https://material.io/components/web/catalog/lists/
 *
 */

const MDC_LISTITEM = "mdc-list-item";

const ListItem = ({
  children, type, icon, activated, imgSrc, imgSize, imgLabel, secondaryText, href, ...props
}) => {
  let classes = MDC_LISTITEM;
  let graphic;
  if (activated) {
    classes += " mdc-list-item--activated";
  }
  if (icon) {
    graphic = (<Icon className="mdc-list-item__graphic" aria-hidden="true" name={icon} />);
  } else if (imgSrc) {
    graphic = (<img className="mdc-list-item__graphic" src={imgSrc} width={imgSize} height={imgSize} alt={imgLabel} />);
  }
  let meta;
  let text = Children.map(children, (child) => {
    if (child.props && child.props.mdcElement === "mdc-list-item__meta") {
      meta = child;
      return null;
    }
    return child;
  });
  if (secondaryText) {
    text = (<span className="mdc-list-item__text">{text}<span className="mdc-list-item__secondary-text">{secondaryText}</span></span>);
  }
  if (type === "a") {
    return Rmdc.render(<a className={classes} href={href} >{graphic}{text}{meta}</a>, props);
  }
  return Rmdc.render(<li className={classes} >{graphic}{text}{meta}</li>, props);
};

ListItem.defaultProps = {
  mdcElement: MDC_LISTITEM,
  children: null,
  type: "li",
  activated: false,
  icon: null,
  imgSrc: null,
  imgSize: 56,
  imgLabel: null,
  secondaryText: null,
  href: null,
};

ListItem.propTypes = {
  mdcElement: PropTypes.string,
  children: PropTypes.node,
  type: PropTypes.string,
  activated: PropTypes.bool,
  icon: PropTypes.string,
  imgSrc: PropTypes.string,
  imgSize: PropTypes.number,
  imgLabel: PropTypes.string,
  secondaryText: PropTypes.string,
  href: PropTypes.string,
};

export default ListItem;
