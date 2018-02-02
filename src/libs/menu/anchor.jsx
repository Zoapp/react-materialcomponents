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
mdc-menu-anchor
See:
https://material.io/components/web/catalog/menus/
https://material-components-web.appspot.com/simple-menu.html

*/
export default class MenuAnchor extends Component {
  constructor(props) {
    super(props);
    const { open } = props.menu.props;
    this.state = { open };
  }

  componentDidMount() {
    Rmdc.enableClickOutside(this.onClickOutsideHandler);
  }

  componentWillUnmount() {
    Rmdc.disableClickOutside(this.onClickOutsideHandler);
  }

  onClickOutsideHandler = (e) => {
    const { open } = this.state;
    if (open &&
      ((!this.anchorRef) || (!this.anchorRef.contains(e.target))) &&
      ((!this.menuRef) ||
      (!this.menuRef.innerRef) || (!this.menuRef.innerRef.contains(e.target)))) {
      e.preventDefault();
      this.setState({ open: false });
    }
  }

  onClickHandler = (e) => {
    const open = !this.state.open;
    e.preventDefault();
    this.setState({ open });
    const prevOnClick = this.props.anchor.props.onClick;
    if (prevOnClick) {
      prevOnClick(e);
    }
  }

  render() {
    const {
      className, menu, anchor, ...props
    } = this.props;
    let classes = "mdc-menu-anchor";
    if (className) {
      classes += ` ${className}`;
    }
    // change onClick event for anchor
    const anchorElement = React.cloneElement(
      anchor,
      { onClick: this.onClickHandler, ref: (c) => { this.anchorRef = c; } },
    );
    // change menu open based on onClick event
    const menuElement = React.cloneElement(
      menu,
      { open: this.state.open, ref: (c) => { this.menuRef = c; } },
    );
    const element = (
      <div className={classes}>
        {anchorElement}
        {menuElement}
      </div>);
    return Rmdc.render(element, props);
  }
}

MenuAnchor.defaultProps = {
  className: null,
};

MenuAnchor.propTypes = {
// React component props
  className: PropTypes.string,
  menu: PropTypes.element.isRequired,
  anchor: PropTypes.element.isRequired,
};
