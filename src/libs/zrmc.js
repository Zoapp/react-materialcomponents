/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import DialogManager from "./dialog/manager";
import Dialog from "./dialog/dialog";
import MenuAnchor from "./menu/anchor";
import Ripple from "./animations/ripple";

/**
 * Zrmc
 * Global & helper class
 * It handle
 * ripple : DONE
 * https://material.io/components/web/catalog/ripples/
 * rtl : DONE
 * https://material.io/components/web/catalog/rtl/
 * theme : TODO
 * https://material.io/components/web/catalog/theme/
 * elevation : DONE
 * https://material.io/components/web/catalog/elevation/
 * typography: DONE
 * https://material.io/components/web/catalog/typography/
 */
const Zrmc = new class {
  init(root, { rtl, themeDark, style, typography, ripple = true }) {
    this.isLockScroll = false;
    this.rtl = rtl;
    this.changeTheme(themeDark, style);
    this.typography = typography;
    if (rtl) {
      const html = document.getElementsByTagName("html")[0];
      html.setAttribute("dir", "rtl");
    }

    if (typography) {
      document.body.className += " mdc-typography";
    }

    if (ripple) {
      this.ripple = ripple;
    }
    DialogManager.init();
  }

  changeTheme(themeDark, style) {
    this.themeDark = themeDark;
    if (themeDark) {
      document.body.className += " mdc-theme--dark";
    }
    this.style = style; // TODO style
  }

  isRtl(element) {
    return Boolean(this.rtl || (element && element.props.rtl));
  }

  /* eslint-disable class-methods-use-this */
  generateId(id) {
    // TODO better cid generator
    const cid = id || Math.random().toString(36);
    return cid;
  }

  sanitizeProps(props) {
    const {
      mdcElement,
      rtl,
      elevation,
      themeDark,
      style,
      typography,
      ripple,
      menu,
      className,
      ...p
    } = props;
    return p;
  }
  /* eslint-enable class-methods-use-this */

  attachDrawer() {
    if (this.menu && this.drawer) {
      // TODO attach drawer
    }
  }

  render(
    element,
    {
      rtl,
      elevation,
      themeDark,
      style,
      typography,
      ripple,
      menu,
      className,
      ...props
    },
  ) {
    const name = props.mdcElement;
    if (name === "mdc-toolbar__menu-icon") {
      this.menu = element;
      this.attachDrawer();
    }
    const ps = {};
    let change = false;
    let classes = element.props.className || "";
    if (className) {
      classes = `${className} ${classes}`;
      change = true;
    }
    if (rtl && !this.rtl) {
      ps.dir = "rtl";
      change = true;
    }
    if (elevation) {
      const e = Number(elevation);
      if (Number.isInteger(e) && e > -1 && e < 25) {
        classes += ` mdc-elevation--z${e}`;
        change = true;
      }
    }
    if (themeDark) {
      classes += ` ${name}--theme-dark`;
      change = true;
    }
    if (style) {
      // TODO check style
      ps.style = style;
      change = true;
    }
    if (typography) {
      // TODO validate value
      classes += ` mdc-typography--${typography}`;
      change = true;
    }
    let el = element;
    if (change) {
      ps.className = classes;
      el = React.cloneElement(element, ps);
    }
    if (ripple && this.ripple) {
      // TODO check if element could get ripple effect
      const unbounded = ripple === "unbounded";
      el = React.createElement(Ripple, { unbounded }, el);
    }
    if (menu) {
      // Create Menu Anchor
      return React.createElement(MenuAnchor, { menu }, el);
    }
    return el;
  }

  showDialog(dialog) {
    if (typeof dialog === "string") {
      this.dialog = React.createElement(Dialog, {}, dialog);
    } else if (dialog.body || dialog.field) {
      const { body, ...props } = dialog;
      this.dialog = React.createElement(Dialog, props, body);
    } else {
      // It should be a React Component
      this.dialog = dialog;
    }
    // openDialog
    DialogManager.open(this.dialog);
  }

  closeDialog() {
    this.dialog = null;
    // close current dialog
    DialogManager.close();
  }

  enableClickOutside(callback) {
    this.outsideCallback = callback;
    document.addEventListener("click", callback, true);
  }

  disableClickOutside(callback) {
    this.outsideCallback = null;
    document.removeEventListener("click", callback, true);
  }

  getComputedStyleValue(element, name) {
    this.name = name;
    return window.getComputedStyle(element).getPropertyValue(name);
  }

  getFontStyle(element) {
    let font = this.getComputedStyleValue(element, "font");
    if (!font) {
      const primaryFontFamily = this.getComputedStyleValue(
        element,
        "font-family",
      ).split(",")[0];
      const fontSize = this.getComputedStyleValue(element, "font-size");
      font = `${fontSize} ${primaryFontFamily}`;
    }
    return font;
  }

  lockScroll() {
    if (!this.isLockScroll) {
      this.isLockScroll = true;
      document.body.classList.add("zrmc-scroll-lock");
    }
  }

  unlockScroll() {
    if (this.isLockScroll) {
      this.isLockScroll = false;
      document.body.classList.remove("zrmc-scroll-lock");
    }
  }
}();

export default Zrmc;
