/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import Rmdc from "../";

/**
 * mdc-list-item
 * See:
 * https://material.io/components/web/catalog/menus/
 * https://material-components-web.appspot.com/simple-menu.html
 *
 */

const MDC_LIST_ITEM = "mdc-list-item";

export default class MenuItem extends Component {
  handleClick = (e) => {
    e.preventDefault();
    if (this.props.onSelected && this.props.tabIndex > -1) {
      this.props.onSelected(this, this.props.tabIndex);
    }
  };

  render() {
    const {
      children, tabIndex, disabled, ...props
    } = this.props;
    const classes = MDC_LIST_ITEM;

    const p = {};
    if (disabled) {
      p.disabled = "disabled";
      p["aria-disabled"] = "true";
      p.tabIndex = "-1";
    } else {
      p.tabIndex = Number(tabIndex).toString();
    }
    return Rmdc.render((
      <li
        className={classes}
        role="menuitem"
        {...p}
        onKeyUp={() => {}}
        onClick={this.handleClick}
      >
        {children}
      </li>), props);
  }
}

MenuItem.defaultProps = {
  mdcElement: MDC_LIST_ITEM,
  tabIndex: 0,
  disabled: false,
  onSelected: null,
};

MenuItem.propTypes = {
  mdcElement: PropTypes.string,
  children: PropTypes.string.isRequired,
  tabIndex: PropTypes.number,
  disabled: PropTypes.bool,
  onSelected: PropTypes.func,
};

