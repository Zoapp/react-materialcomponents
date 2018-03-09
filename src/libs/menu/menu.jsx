/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { Component, Children } from "react";
import PropTypes from "prop-types";
import Zrmc from "../";

/**
 * mdc-simple-menu
 * See:
 * https://material.io/components/web/catalog/menus/
 * https://material-components-web.appspot.com/simple-menu.html
 *
 * TODO:
 * - animation
 * - autoposition
 * - autofocus
 * see https://github.com/material-components/material-components-web/blob/master/packages/mdc-menu/foundation.js
 *
 */

const MDC_SIMPLE_MENU = "mdc-menu";

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.selectedRef = null;
  }

  componentDidMount() {
    this.updateFocus();
  }

  componentDidUpdate() {
    this.updateFocus();
  }

  handleOnSelected = (child, index) => {
    if (this.props.onSelected) {
      this.props.onSelected(child, index);
    }
    if (this.props.onClose) {
      this.props.onClose();
    }
  };

  updateFocus() {
    if (this.selectedRef && this.selectedRef.innerRef) {
      this.selectedRef.innerRef.focus();
    }
  }

  render() {
    const { children, open, focusedIndex, ...props } = this.props;
    let classes = MDC_SIMPLE_MENU;
    this.selectedRef = null;
    if (open) {
      classes += ` ${MDC_SIMPLE_MENU}--open`;
    }
    const element = (
      <div
        className={classes}
        tabIndex="-1"
        ref={(c) => {
          this.innerRef = c;
        }}
      >
        <ul
          className={`${MDC_SIMPLE_MENU}__items mdc-list`}
          role="menu"
          aria-hidden="true"
        >
          {Children.map(children, (child, index) => {
            if (child.props.mdcElement === "mdc-list-item") {
              const { tabIndex } = child.props;
              const p = {};
              p.onSelected = (c, i) => {
                this.handleOnSelected(c, index);
                if (child.props.onSelected) {
                  child.props.onSelected(c, i);
                }
              };

              if (focusedIndex === index) {
                p.selected = true;
                p.ref = (c) => {
                  this.selectedRef = c;
                };
              }
              if (tabIndex > -1) {
                return React.cloneElement(child, p);
              }
            }
            return child;
          })}
        </ul>
      </div>
    );
    return Zrmc.render(element, props);
  }
}

Menu.defaultProps = {
  mdcElement: MDC_SIMPLE_MENU,
  open: false,
  onSelected: null,
  onClose: null,
  anchorCorner: null,
  anchorMargin: null,
  focusedIndex: -1,
};

Menu.propTypes = {
  mdcElement: PropTypes.string,
  children: PropTypes.node.isRequired,
  open: PropTypes.bool,
  onSelected: PropTypes.func,
  onClose: PropTypes.func,
  anchorCorner: PropTypes.oneOf([
    "top_start",
    "top_end",
    "bottom_start",
    "bottom_end",
  ]),
  anchorMargin: PropTypes.shape({
    top: PropTypes.string,
    left: PropTypes.string,
    bottom: PropTypes.string,
    right: PropTypes.string,
  }),
  focusedIndex: PropTypes.number,
};
