/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import DialogManager from "./dialog/manager";

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
    rtl, theme, typography, ripple,
  }) {
    this.rtl = rtl;
    this.changeTheme(theme);
    this.typography = typography;
    if (rtl) {
      const html = document.getElementsByTagName("html")[0];
      html.setAttribute("dir", "rtl");
    }

    if (typography) {
      document.body.className += "mdc-typography";
    }

    if (ripple) {
      this.ripple = ripple;
    }
    DialogManager.init();
  }

  changeTheme(theme) {
    this.theme = theme;
    if (theme) {
      // TODO
    }
  }

  render(element, {
    rtl, elevation, theme, typography, ripple,
  }/* , elementType = null */) {
    const ps = { };
    let change = false;
    let classes = element.props.className || "";
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
    if (theme) {
      // TODO
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
}();

export default Rmdc;
