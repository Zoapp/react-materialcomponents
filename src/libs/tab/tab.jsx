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
mdc-tab
See:
https://material.io/components/web/catalog/tabs/
http://material-components-web.appspot.com/tabs.html

TODO:
- dynamic, actions
- Mixins
*/
const Tab = ({
  className, active, text, icon, href, tabId, onTabSelect, ...props
}) => {
  let classes = "mdc-tab";
  if (active) {
    classes += " mdc-tab--active";
  }
  if (className) {
    classes += ` ${className}`;
  }
  let i = "";
  if (icon) {
    i = (<Icon name={icon} className="mdc-tab__icon" aria-hidden="true" />);
  }
  const element = (
    <a className={classes} href={href} onClick={() => { onTabSelect(tabId); }}>{i}{text}</a>);
  return Rmdc.render(element, props);
};

Tab.defaultProps = {
  className: null,

  active: false,
  text: null,
  icon: null,
  href: null,
  tabId: 0,
  onTabSelect: null,
};

Tab.propTypes = {
// React component props
  className: PropTypes.string,

  active: PropTypes.bool,
  text: PropTypes.string,
  icon: PropTypes.string,
  href: PropTypes.string,
  tabId: PropTypes.number,
  onTabSelect: PropTypes.func,
};

export default Tab;
