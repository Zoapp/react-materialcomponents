/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { Component, Children } from "react";
import PropTypes from "prop-types";
import Rmdc from "../";
import Menu from "../menu/menu";
/**
 * mdc-select
 *
 * See:
 * https://material.io/components/web/catalog/input-controls/select-menus/
 * https://material-components-web.appspot.com/select.html
 *
 * TODO : all
 *
 */

const MDC_SELECT = "mdc-select";

export default class Select extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false, focused: false, selectedIndex: this.props.selectedIndex };
    this.ctx = null;
  }

  componentDidMount() {
    Rmdc.enableClickOutside(this.onClickOutsideHandler);
    this.updateContent();
  }

  componentDidUpdate() {
    this.updateContent();
  }

  componentWillUnmount() {
    Rmdc.disableClickOutside(this.onClickOutsideHandler);
    this.ctx = null;
  }

  onBlur = () => {
    this.setState({ focused: false });
  }

  onFocus = () => {
    this.setState({ focused: true });
  }

  onSelected = (item, index) => {
    const selected = item.props.children;
    this.setState({ selected, selectedIndex: index });
    if (this.props.onSelected) {
      this.props.onSelected(item, index);
    }
  }

  onClickOutsideHandler = (e) => {
    const { open } = this.state;
    if (open &&
      ((!this.anchorRef) || (!this.anchorRef.contains(e.target))) &&
      ((!this.menuRef) ||
      (!this.menuRef.innerRef) || (!this.menuRef.innerRef.contains(e.target)))) {
      e.preventDefault();
      this.onClose();
    }
  }

  onClickHandler = (e) => {
    e.preventDefault();
    if (this.state.open) {
      this.onClose();
    } else {
      this.setState({ open: true });
      Rmdc.lockScroll();
    }
  }

  onClose = () => {
    this.setState({ open: false }, () => {
      Rmdc.unlockScroll();
      if (this.focusRef) {
        this.focusRef.focus();
      }
    });
  }

  calculateWidth() {
    if (!this.ctx) {
      this.ctx = document.createElement("canvas").getContext("2d");
    }
    this.ctx.font = Rmdc.getFontStyle(this.anchorRef);
    const letterSpacing = parseFloat(Rmdc.getComputedStyleValue(this.anchorRef, "letter-spacing"));
    const surfacePaddingRight = parseInt(Rmdc.getComputedStyleValue(this.anchorRef, "padding-right"), 10);
    const surfacePaddingLeft = parseInt(Rmdc.getComputedStyleValue(this.anchorRef, "padding-left"), 10);
    const selectBoxAddedPadding = surfacePaddingRight + surfacePaddingLeft;
    let maxTextLength = 0;
    Children.forEach(this.props.children, (child) => {
      if (child.props.children) {
        const txt = child.props.children.trim();
        const { width } = this.ctx.measureText(txt);
        const addedSpace = letterSpacing * txt.length;
        maxTextLength =
        Math.max(maxTextLength, Math.ceil(width + addedSpace + selectBoxAddedPadding));
      }
    });
    return maxTextLength;
  }

  updateContent() {
    if (this.anchorRef && this.menuRef) {
      const w = this.calculateWidth();
      let style = `width: ${w}px;`;
      this.anchorRef.style = style;
      if (this.state.open) {
        const { innerHeight } = window;
        const { left, top } = this.anchorRef.getBoundingClientRect();
        const menuHeight = this.menuRef.innerRef.offsetHeight;
        let itemOffsetTop = 0;
        if (this.state.selectedIndex > -1 &&
          this.menuRef.selectedRef &&
          this.menuRef.selectedRef.innerRef) {
          itemOffsetTop = this.menuRef.selectedRef.innerRef.offsetTop;
        }

        let adjustedTop = top - itemOffsetTop;
        const overflowsTop = adjustedTop < 0;
        const overflowsBottom = adjustedTop + menuHeight > innerHeight;
        if (overflowsTop) {
          adjustedTop = 0;
        } else if (overflowsBottom) {
          adjustedTop = Math.max(0, innerHeight - menuHeight);
        }
        style = `left: ${left}px; top: ${adjustedTop}px; transform-origin: center ${itemOffsetTop}px;`;
        this.menuRef.innerRef.style = style;
      }
    }
  }

  render() {
    const {
      children, disabled, label, ...props
    } = this.props;
    const {
      open, focused, selected, selectedIndex,
    } = this.state;
    const classes = MDC_SELECT;
    const p = {};
    let tabIndex = "0";
    if (disabled) {
      p["aria-disabled"] = true;
      tabIndex = "-1";
    }
    let lc = "mdc-select__label";
    if (selected) {
      lc += " mdc-select__label--float-above";
    }
    let bc = "mdc-select__bottom-line";
    if (focused) {
      bc += " mdc-select__bottom-line--active";
    }
    /* eslint-disable jsx-a11y/no-noninteractive-tabindex */
    const element = (
      <div
        className={classes}
        aria-hidden
        role="listbox"
        onKeyUp={() => {}}
        onClick={this.onClickHandler}
        ref={(c) => { this.anchorRef = c; }}
        {...p}
      >
        <div
          className="mdc-select__surface"
          tabIndex={tabIndex}
          ref={(c) => { this.focusRef = c; }}
        >
          <div className={lc}>{label}</div>
          <div className="mdc-select__selected-text" >{selected}</div>
          <div className={bc} />
        </div>
        <Menu
          open={open}
          focusedIndex={selectedIndex}
          className="mdc-select__menu"
          ref={(c) => { this.menuRef = c; }}
          onSelected={this.onSelected}
          onClose={this.onClose}
        >
          {Children.map(children, child => React.cloneElement(child, { role: "option" }))}
        </Menu>
      </div>);
    /* eslint-enable jsx-a11y/no-noninteractive-tabindex */
    return Rmdc.render(element, props);
  }
}

Select.defaultProps = {
  mdcElement: MDC_SELECT,
  disabled: false,
  label: null,
  onSelected: null,
  selectedIndex: -1,
};

Select.propTypes = {
  mdcElement: PropTypes.string,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  onSelected: PropTypes.func,
  selectedIndex: PropTypes.number,
};
