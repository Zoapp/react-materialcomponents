/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import Rmdc from "../";
/*
mdc-simple-menu
See:
https://material.io/components/web/catalog/menus/
https://material-components-web.appspot.com/simple-menu.html

TODO : all

*/
export default class Menu extends Component {
  render() {
    const {
      className, disabled, ...props
    } = this.props;
    let classes = "mdc-simple-menu";
    if (className) {
      classes += ` ${className}`;
    }
    const d = {};
    if (disabled) {
      d.disabled = "disabled";
    }
    const element = (
      <div className={classes} tabIndex="-1" {...d} >
        <ul className="mdc-simple-menu__items mdc-list" role="menu" aria-hidden="true">
          <li className="mdc-list-item" role="menuitem" tabIndex="0">
            A Menu Item
          </li>
          <li className="mdc-list-item" role="menuitem" tabIndex="0">
            Another Menu Item
          </li>
        </ul>
      </div>);
    return Rmdc.render(element, props);
  }
}

Menu.defaultProps = {
  className: null,
  disabled: false,
};

Menu.propTypes = {
// React component props
  className: PropTypes.string,
  disabled: PropTypes.bool,
};
