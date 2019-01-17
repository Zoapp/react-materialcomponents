/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import Zrmc from "../";
import RMDCMenuFoundation from "./foundation";

/**
 * mdc-menu-anchor
 * See:
 * https://material.io/components/web/catalog/menus/
 * https://material-components-web.appspot.com/simple-menu.html
 *
 */

const MDC_MENU_ANCHOR = "mdc-menu-anchor";

export default class MenuAnchor extends Component {
  constructor(props) {
    super(props);
    const { open } = props.menu.props;
    this.state = { open };
  }

  componentDidMount() {
    Zrmc.enableClickOutside(this.onClickOutsideHandler);
    this.updateContent();
  }

  componentDidUpdate() {
    this.updateContent();
  }

  componentWillUnmount() {
    Zrmc.disableClickOutside(this.onClickOutsideHandler);
  }

  onClickOutsideHandler = (e) => {
    const { open } = this.state;
    if (
      open &&
      (!this.anchorRef || !this.anchorRef.contains(e.target)) &&
      (!this.menuRef ||
        !this.menuRef.innerRef ||
        !this.menuRef.innerRef.contains(e.target))
    ) {
      e.preventDefault();
      this.onClose();
    }
  };

  onClickHandler = (e) => {
    e.stopPropagation();
    if (this.state.open) {
      this.onClose();
    } else {
      this.setState({ open: true });
      Zrmc.lockScroll();
    }
    const prevOnClick = this.props.children.props.onClick;
    if (prevOnClick) {
      prevOnClick(e);
    }
  };

  onClose = () => {
    this.setState({ open: false });
    Zrmc.unlockScroll();
  };

  updateContent() {
    if (this.anchorRef && this.menuRef && this.state.open) {
      const style = RMDCMenuFoundation.autoPosition(this);
      this.menuRef.innerRef.style = style;
      Zrmc.lockScroll();
    }
  }

  render() {
    const { menu, children, ...props } = this.props;
    const classes = MDC_MENU_ANCHOR;

    // change onClick event for anchor
    const a = children;
    const anchorElement = React.cloneElement(a, {
      onClick: this.onClickHandler,
      ref: (c) => {
        this.anchorRef = c;
      },
    });
    // change menu open based on onClick event
    const menuElement = React.cloneElement(menu, {
      open: this.state.open,
      ref: (c) => {
        this.menuRef = c;
      },
      onClose: this.onClose,
    });
    const element = (
      <div className={classes}>
        {anchorElement}
        {menuElement}
      </div>
    );
    return Zrmc.render(element, props);
  }
}

MenuAnchor.defaultProps = {
  mdcElement: MDC_MENU_ANCHOR,
};

MenuAnchor.propTypes = {
  mdcElement: PropTypes.string,
  menu: PropTypes.element.isRequired,
  children: PropTypes.element,
};
