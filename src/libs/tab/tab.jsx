/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import PropTypes from "prop-types";
import Icon from "../components/icon";

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
  className, active, text, icon, ...props
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
  return (<a className={classes} {...props}>{i}{text}</a>);
};

Tab.defaultProps = {
  className: null,

  active: false,
  text: null,
  icon: null,
};

Tab.propTypes = {
// React component props
  className: PropTypes.string,

  active: PropTypes.bool,
  text: PropTypes.string,
  icon: PropTypes.string,
};

export default Tab;
