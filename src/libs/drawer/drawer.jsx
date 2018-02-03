/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Rmdc from "../";

/**
 * See:
 * https://material.io/components/web/catalog/drawers/
 * https://material-components-web.appspot.com/drawer/persistent-drawer.html
 *
 * TODO:
 * - temporary, permanent, persistent
 */

const MDC_DRAWER = "mdc-drawer";

export default class Drawer extends PureComponent {
  render() {
    const {
      children, type, ...props
    } = this.props;
    const classes = `${MDC_DRAWER} mdc-drawer--${type} mdc-typography`;

    if (type === "permanent") {
      return Rmdc.render(<nav className={classes}>{children}</nav>, props);
    }
    return Rmdc.render(
      (
        <aside className={classes}>
          <nav className="mdc-drawer__drawer">{children}</nav>
        </aside>),
      props,
    );
  }
}

Drawer.defaultProps = {
  mdcElement: MDC_DRAWER,
  children: null,
  type: "permanent",
};

Drawer.propTypes = {
  mdcElement: PropTypes.string,
  children: PropTypes.node,
  type: PropTypes.string,
};
