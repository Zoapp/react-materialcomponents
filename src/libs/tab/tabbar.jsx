/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { Children } from "react";
import PropTypes from "prop-types";

/*
mdc-tab-bar
See:
https://material.io/components/web/catalog/tabs/
http://material-components-web.appspot.com/tabs.html

TODO:
- dynamic, actions
- Mixins
*/
const Tabbar = ({
  children, className, ...props
}) => {
  let classes = "mdc-tab-bar";
  let text = false;
  let icon = false;
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

  return (
    <nav className={classes} {...props}>
      {children}
      <span className="mdc-tab-bar__indicator" />
    </nav>);
};

Tabbar.defaultProps = {
  children: null,
  className: null,
};

Tabbar.propTypes = {
// React component props
  children: PropTypes.node, // TODO Array of Tab
  className: PropTypes.string,
};

export default Tabbar;
