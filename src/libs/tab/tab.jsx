/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import Icon from "../components/icon";
import Zrmc from "../";

/**
 * mdc-tab
 * See:
 * https://material.io/components/web/catalog/tabs/
 * http://material-components-web.appspot.com/tabs.html
 *
 */

const MDC_TAB = "mdc-tab";

class Tab extends Component {
  constructor(props) {
    super(props);
    this.ref = null;
  }

  setRef = (c) => {
    this.ref = c;
  };

  render() {
    const {
      children,
      active,
      text,
      icon,
      href,
      tabId,
      onTabSelect,
      color,
      ...props
    } = this.props;
    let classes = MDC_TAB;
    if (active) {
      classes += " mdc-tab--active";
    }
    let i = "";
    if (icon) {
      i = <Icon name={icon} className="mdc-tab__icon" aria-hidden="true" />;
    }
    let txt = text;
    if (!text) {
      txt = children;
    }
    if (color) {
      if (!props.style) {
        props.style = {};
      }
      props.style.color = color;
    }
    const element = (
      <a
        className={classes}
        href={href}
        onClick={() => {
          onTabSelect(text, tabId);
        }}
        ref={this.setRef}
      >
        {i}
        {txt}
      </a>
    );
    return Zrmc.render(element, props);
  }
}

Tab.defaultProps = {
  mdcElement: MDC_TAB,
  children: null,
  active: false,
  text: null,
  icon: null,
  href: null,
  tabId: 0,
  onTabSelect: null,
  color: null,
};

Tab.propTypes = {
  mdcElement: PropTypes.string,
  children: PropTypes.string,
  active: PropTypes.bool,
  text: PropTypes.string,
  icon: PropTypes.string,
  href: PropTypes.string,
  tabId: PropTypes.number,
  onTabSelect: PropTypes.func,
  color: PropTypes.string,
};

export default Tab;
