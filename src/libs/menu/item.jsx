/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import Zrmc from "../";

/**
 * mdc-list-item
 * See:
 * https://material.io/components/web/catalog/menus/
 * https://material-components-web.appspot.com/simple-menu.html
 *
 */

const MDC_LIST_ITEM = "mdc-list-item";

export default class MenuItem extends Component {
  constructor(props) {
    super(props);
    this.innerRef = null;
  }

  setRef = (c) => {
    this.innerRef = c;
  }

  handleClick = (e) => {
    e.preventDefault();
    if (this.props.onSelected && this.props.tabIndex > -1) {
      this.props.onSelected(this, this.props.tabIndex);
    }
  };

  render() {
    const {
      children, tabIndex, disabled, selected, role, onSelected, ...props
    } = this.props;
    const classes = MDC_LIST_ITEM;

    const p = {};
    if (disabled) {
      p.disabled = "disabled";
      p["aria-disabled"] = "true";
      p.tabIndex = "-1";
    } else {
      p.tabIndex = Number(tabIndex).toString();
      if (selected) {
        p["aria-selected"] = "true";
      }
    }
    /* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
    return Zrmc.render((
      <li
        className={classes}
        role={role}
        {...p}
        onKeyUp={() => {}}
        onClick={this.handleClick}
        ref={this.setRef}
      >
        {children}
      </li>), props);
    /* eslint-enable jsx-a11y/no-noninteractive-element-interactions */
  }
}

MenuItem.defaultProps = {
  mdcElement: MDC_LIST_ITEM,
  tabIndex: 0,
  disabled: false,
  selected: false,
  onSelected: null,
  role: "menuitem",
};

MenuItem.propTypes = {
  mdcElement: PropTypes.string,
  children: PropTypes.string.isRequired,
  tabIndex: PropTypes.number,
  disabled: PropTypes.bool,
  selected: PropTypes.bool,
  onSelected: PropTypes.func,
  role: PropTypes.string,
};

