/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import DialogManager from "./dialog/manager";
import MenuAnchor from "./menu/anchor";

/**
 * Rmdc
 * Global & helper class
 * It handle
 * ripple : TODO
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
const Rmdc = new class {
  init(root, {
    rtl, themeDark, style, typography, ripple,
  }) {
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

  /* eslint-disable class-methods-use-this */
  generateId(id) {
    // TODO better cid generator
    const cid = id || Math.random().toString(36);
    return cid;
  }

  sanitizeProps(props) {
    const {
      rtl, elevation, themeDark, style, typography, ripple, menu, className, ...p
    } = props;
    return p;
  }
  /* eslint-enable class-methods-use-this */

  render(element, {
    rtl, elevation, themeDark, style, typography, ripple, menu, className,
  }) {
    const name = element.props.mdcElement;
    const ps = { };
    let change = false;
    let classes = element.props.className || "";
    if (className) {
      classes = `${className} ${classes}`;
      change = true;
    }
    if (rtl && (!this.rtl)) {
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
    if (ripple && this.ripple) {
      // TODO
      change = true;
    }
    if (change) {
      ps.className = classes;
      return React.cloneElement(element, ps);
    }
    if (menu) {
      // Create Menu Anchor
      return React.createElement(MenuAnchor, { menu, anchor: element });
    }
    return element;
  }

  showDialog(dialog) {
    this.dialog = dialog;
    // TODO openDialog
    DialogManager.open(dialog);
  }

  closeDialog() {
    this.dialog = null;
    // TODO close current dialog
    DialogManager.closeCurrentDialog();
  }

  enableClickOutside(callback) {
    this.outsideCallback = callback;
    document.addEventListener("click", callback, true);
  }

  disableClickOutside(callback) {
    this.outsideCallback = null;
    document.removeEventListener("click", callback, true);
  }
}();

export default Rmdc;
