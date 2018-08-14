/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { Component, Children } from "react";
import PropTypes from "prop-types";
import Zrmc from "../";
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

class Select extends Component {
  constructor(props) {
    super(props);

    const selectedChild = Children.toArray(props.children).find(
      (child, index) => index === props.selectedIndex,
    );

    this.state = {
      open: false,
      focused: false,
      selectedDisplayValue: selectedChild ? selectedChild.props.children : null,
      selectedIndex: props.selectedIndex,
    };

    this.ctx = null;
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
    this.ctx = null;
  }

  onBlur = () => {
    this.setState({ focused: false });
  };

  onFocus = () => {
    this.setState({ focused: true });
  };

  onSelect = (selectedItem, selectedIndex) => {
    this.setState({
      selectedIndex,
      selectedDisplayValue: selectedItem.props.children,
    });

    if (this.props.onSelected) {
      // We pass the value of the selected item to the parent.
      const selectedValue =
        selectedItem.props.value || selectedItem.props.children;

      this.props.onSelected(selectedValue, selectedIndex);
    }
  };

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
    e.preventDefault();
    if (this.state.open) {
      this.onClose();
    } else {
      this.setState({ open: true });
      Zrmc.lockScroll();
    }
  };

  onClose = () => {
    this.setState({ open: false }, () => {
      Zrmc.unlockScroll();
      if (this.focusRef) {
        this.focusRef.focus();
      }
    });
  };

  setRef = (c) => {
    this.anchorRef = c;
  };

  calculateWidth() {
    if (!this.ctx) {
      this.ctx = document.createElement("canvas").getContext("2d");
    }
    this.ctx.font = Zrmc.getFontStyle(this.anchorRef);
    const letterSpacing = parseFloat(
      Zrmc.getComputedStyleValue(this.anchorRef, "letter-spacing"),
    );
    const surfacePaddingRight = parseInt(
      Zrmc.getComputedStyleValue(this.anchorRef, "padding-right"),
      10,
    );
    const surfacePaddingLeft = parseInt(
      Zrmc.getComputedStyleValue(this.anchorRef, "padding-left"),
      10,
    );
    const selectBoxAddedPadding = surfacePaddingRight + surfacePaddingLeft;
    let maxTextLength = 0;
    Children.forEach(this.props.children, (child) => {
      if (child.props.children) {
        const txt = child.props.children.trim();
        const { width } = this.ctx.measureText(txt);
        const addedSpace = letterSpacing * txt.length;
        maxTextLength = Math.max(
          maxTextLength,
          Math.ceil(width + addedSpace + selectBoxAddedPadding),
        );
      }
    });
    return maxTextLength;
  }

  updateContent() {
    if (this.anchorRef && this.menuRef) {
      const w = this.calculateWidth();
      let style;
      if (!(this.props.style && this.props.style.width)) {
        style = `width: ${w}px;`;
        this.anchorRef.style = style;
      }
      if (this.state.open) {
        const { innerHeight } = window;
        const { top } = this.anchorRef.getBoundingClientRect();
        const menuHeight = this.menuRef.innerRef.offsetHeight;
        let itemOffsetTop = 0;
        if (
          this.state.selectedIndex > -1 &&
          this.menuRef.selectedRef &&
          this.menuRef.selectedRef.innerRef
        ) {
          itemOffsetTop = this.menuRef.selectedRef.innerRef.offsetTop;
        }

        const adjustedLeft = 0;
        let adjustedTop = 0 - itemOffsetTop;
        console.log("anchorRef", this.anchorRef);
        console.log(
          "innerHeight",
          innerHeight,
          " itemOffsetTop",
          itemOffsetTop,
        );
        if (adjustedTop < 0) {
          adjustedTop = 0;
        } else if (top + menuHeight > innerHeight) {
          adjustedTop = Math.max(0, innerHeight - menuHeight) - top;
        }
        style = `left: ${adjustedLeft}px; top: ${adjustedTop}px; transform-origin: center ${itemOffsetTop}px;`;
        this.menuRef.innerRef.style = style;
      }
    }
  }

  render() {
    const { children, disabled, label, ...props } = this.props;

    const { open, focused, selectedIndex, selectedDisplayValue } = this.state;

    const classes = MDC_SELECT;
    const p = {};

    let tabIndex = "0";
    if (disabled) {
      p["aria-disabled"] = true;
      tabIndex = "-1";
    }

    let lc = "mdc-floating-label";
    if (selectedDisplayValue) {
      lc += " mdc-floating-label--float-above";
    } else {
      lc += " zrmc-floating-label";
    }

    let bc = "mdc-line-ripple";
    if (focused) {
      bc += " mdc-line-ripple--active";
    }

    /* eslint-disable jsx-a11y/no-noninteractive-tabindex */
    const element = (
      <div
        className={classes}
        aria-hidden
        role="listbox"
        onKeyUp={() => {}}
        onClick={this.onClickHandler}
        ref={this.setRef}
        {...p}
      >
        <div
          className="mdc-select__native-control"
          tabIndex={tabIndex}
          ref={(c) => {
            this.focusRef = c;
          }}
        >
          <div className={lc}>{label}</div>
          <div className="mdc-select__selected-text">
            {selectedDisplayValue}
          </div>
          <div className={bc} />
        </div>
        <Menu
          open={open}
          focusedIndex={selectedIndex}
          className="mdc-select__menu"
          ref={(c) => {
            this.menuRef = c;
          }}
          onSelected={this.onSelect}
          onClose={this.onClose}
        >
          {Children.map(children, (child) =>
            React.cloneElement(child, {
              ...child.props,
              role: "option",
            }),
          )}
        </Menu>
      </div>
    );

    /* eslint-enable jsx-a11y/no-noninteractive-tabindex */
    return Zrmc.render(element, props);
  }
}

Select.defaultProps = {
  mdcElement: MDC_SELECT,
  disabled: false,
  label: null,
  onSelected: null,
  selectedIndex: -1,
  style: {},
};

const propTypeForSelectChildren = (componentName, child) => {
  let displayName;
  if (child.type) {
    displayName = child.type.displayName || child.type.name || child.type;
  }

  displayName = displayName || typeof child;

  if (!/MenuItem/.test(displayName)) {
    return new Error(
      `Invalid child '${displayName}' supplied to ${componentName}.`,
    );
  }

  return null;
};

Select.propTypes = {
  children: PropTypes.oneOfType([
    (props, propName, componentName) =>
      propTypeForSelectChildren(componentName, props[propName]),
    PropTypes.arrayOf((propValue, key, componentName) =>
      propTypeForSelectChildren(componentName, propValue[key]),
    ),
  ]).isRequired,
  mdcElement: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  style: PropTypes.shape({ width: PropTypes.string }),
  onSelected: PropTypes.func,
  selectedIndex: PropTypes.number,
};

export default Select;
