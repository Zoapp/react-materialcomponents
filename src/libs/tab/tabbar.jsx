/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { Children, Component } from "react";
import PropTypes from "prop-types";
import Rmdc from "../";

/*
mdc-tab-bar
See:
https://material.io/components/web/catalog/tabs/
http://material-components-web.appspot.com/tabs.html

TODO:
- dynamic, actions
- Mixins
*/
export default class Tabbar extends Component {
  constructor(props) {
    super(props);
    const { activeTab } = props;
    this.state = { activeTab };
  }

  componentWillReceiveProps(nextProps) {
    const { activeTab } = this.state;
    if (activeTab !== nextProps.activeTab) {
      this.setState({ activeTab: nextProps.activeTab });
    }
  }

  handleTabSelect = (tabId) => {
    if (this.state.activeTab !== tabId) {
      if (this.props.onChange) {
        this.props.onChange(tabId);
      }
      this.setState({ activeTab: tabId });
    }
  }

  render() {
    const {
      children, className, onChange, ...props
    } = this.props;
    let classes = "mdc-tab-bar";
    let text = false;
    let icon = false;
    const { activeTab } = this.state;
    // Check icon / text from children Tabs
    Children.forEach(children, (child) => {
      if (child.props && (child.props.text)) {
        text = true;
      }
      if (child.props && (child.props.icon)) {
        icon = true;
      }
    });
    if (text && icon) {
      classes += " mdc-tab--with-icon-and-text";
    } else if (icon) {
      classes += " mdc-tab-bar--icon-tab-bar";
    }
    if (className) {
      classes += ` ${className}`;
    }

    const element = (
      <nav className={classes}>
        {Children.map(children, (child, tabId) =>
          React.cloneElement(child, {
            tabId,
            active: tabId === activeTab,
            onTabSelect: this.handleTabSelect,
          }))}
        <span className="mdc-tab-bar__indicator" />
      </nav>);
    return Rmdc.render(element, props);
  }
}

Tabbar.defaultProps = {
  children: null,
  className: null,
  activeTab: 0,
  onChange: null,
};

Tabbar.propTypes = {
// React component props
  children: PropTypes.node,
  className: PropTypes.string,
  activeTab: PropTypes.number,
  onChange: PropTypes.func,
};
