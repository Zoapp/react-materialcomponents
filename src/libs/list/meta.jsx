/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import PropTypes from "prop-types";
import Icon from "../components/icon";
import Zrmc from "../";

/**
 * mdc-list-item__meta
 * See:
 * https://material.io/components/web/catalog/lists/
 *
 */

const MDC_LISTITEMMETA = "mdc-list-item__meta";

const ListItemMeta = ({
  children, icon, href, color, label, onClick, ...props
}) => {
  const classes = MDC_LISTITEMMETA;
  let element;
  if (icon) {
    element = (
      <Icon
        href={href}
        className={classes}
        label={label}
        name={icon}
        color={color}
        onClick={onClick}
      />
    );
  } else {
    element = (
      <span
        role="button"
        tabIndex="0"
        onKeyUp={() => { }}
        className={classes}
        onClick={onClick}
      >{children}
      </span>);
  }
  return Zrmc.render(element, props);
};

ListItemMeta.defaultProps = {
  mdcElement: MDC_LISTITEMMETA,
  children: null,
  icon: null,
  href: null,
  color: null,
  label: null,
  onClick: null,
};

ListItemMeta.propTypes = {
  mdcElement: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,

  icon: PropTypes.string,
  href: PropTypes.string,
  color: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
};

export default ListItemMeta;
