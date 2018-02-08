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

/**
 * mdc-tab
 * See:
 * https://material.io/components/web/catalog/tabs/
 * http://material-components-web.appspot.com/tabs.html
 *
 */

const MDC_TAB = "mdc-tab";

const Tab = ({
  active, text, icon, href, tabId, onTabSelect, ...props
}) => {
  let classes = MDC_TAB;
  if (active) {
    classes += " mdc-tab--active";
  }
  let i = "";
  if (icon) {
    i = (<Icon name={icon} className="mdc-tab__icon" aria-hidden="true" />);
  }
  const element = (
    <a className={classes} href={href} onClick={() => { onTabSelect(text, tabId); }}>{i}{text}</a>);
  return Rmdc.render(element, props);
};

Tab.defaultProps = {
  mdcElement: MDC_TAB,
  active: false,
  text: null,
  icon: null,
  href: null,
  tabId: 0,
  onTabSelect: null,
};

Tab.propTypes = {
  mdcElement: PropTypes.string,
  active: PropTypes.bool,
  text: PropTypes.string,
  icon: PropTypes.string,
  href: PropTypes.string,
  tabId: PropTypes.number,
  onTabSelect: PropTypes.func,
};

export default Tab;
