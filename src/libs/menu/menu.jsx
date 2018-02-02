/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { Component, Children } from "react";
import PropTypes from "prop-types";
import Rmdc from "../";
/*
mdc-simple-menu
See:
https://material.io/components/web/catalog/menus/
https://material-components-web.appspot.com/simple-menu.html

*/
export default class Menu extends Component {
  handleOnSelected = (child, index) => {
    if (this.props.onSelected) {
      this.props.onSelected(child, index);
    }
    if (this.props.onClose) {
      this.props.onClose();
    }
  };

  render() {
    const {
      children, className, open, ...props
    } = this.props;
    let classes = "mdc-simple-menu";
    if (open) {
      classes += " mdc-simple-menu--open";
    }
    if (className) {
      classes += ` ${className}`;
    }
    const element = (
      <div className={classes} tabIndex="-1" ref={(c) => { this.innerRef = c; }} >
        <ul className="mdc-simple-menu__items mdc-list" role="menu" aria-hidden="true">
          {Children.map(children, (child) => {
            if (!child.props.isDivider) {
              const { tabIndex } = child.props;
              if (tabIndex > -1) {
                return React.cloneElement(child, { onSelected: this.handleOnSelected });
              }
            }
            return child;
          })}
        </ul>
      </div>);
    return Rmdc.render(element, props);
  }
}

Menu.defaultProps = {
  className: null,
  open: false,
  onSelected: null,
  onClose: null,
};

Menu.propTypes = {
// React component props
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  open: PropTypes.bool,
  onSelected: PropTypes.func,
  onClose: PropTypes.func,
};
