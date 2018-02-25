/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { Children } from "react";
import PropTypes from "prop-types";
import Zrmc from "../";
import Icon from "../components/icon";

/**
 * mdc-drawer__content
 * See
 * https://material.io/components/web/catalog/drawer/
 *
 */

const MDC_DRAWERCONTENT = "mdc-drawer__content";

const DrawerContent = ({
  children, list, ...props
}) => {
  let classes = MDC_DRAWERCONTENT;
  if (list) {
    classes += " mdc-list";
  }
  const ch = Children.map(children, (child, index) => {
    if (!child.props.mdcElement) {
      const {
        activated, icon, children: chn, ...ps
      } = child.props;
      ps.className = "mdc-list-item";
      if (activated) {
        ps.className += " mdc-list-item--activated";
      }
      ps.key = `d_${index}`;
      let c = "";
      if (icon) {
        c = (<Icon key={index} className="mdc-list-item__graphic" aria-hidden="true" name={icon} />);
      }
      return React.createElement(child.type, ps, [c, chn]);
    } else if ((!child.props.type) || child.props.type !== "a") {
      return React.cloneElement(child, { type: "a", ...child.props.type });
    }
    return child;
  });
  return Zrmc.render(<nav className={classes} >{ch}</nav>, props);
};

DrawerContent.defaultProps = {
  mdcElement: MDC_DRAWERCONTENT,
  children: null,
  list: false,
};

DrawerContent.propTypes = {
  mdcElement: PropTypes.string,
  children: PropTypes.node,
  list: PropTypes.bool,
};

export default DrawerContent;
