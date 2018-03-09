/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Zrmc from "../";

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
  constructor(props) {
    super(props);
    this.ref = null;
  }

  onClick = (event) => {
    if (
      this.props.type === "temporary" &&
      this.props.open &&
      event.target === this.ref
    ) {
      event.preventDefault();
      this.props.onClose();
    }
  };

  render() {
    const {
      children,
      type,
      open,
      onClose,
      above,
      toolbarSpacer,
      ...props
    } = this.props;
    let classes = `${MDC_DRAWER} mdc-drawer--${type} rmdc-drawer`;

    if (!above && !toolbarSpacer && type === "permanent") {
      classes += " rmdc-drawer--toolbar";
    }
    let spacer;
    if (toolbarSpacer) {
      spacer = <div className="mdc-drawer__toolbar-spacer" />;
    }
    if (type === "permanent") {
      return Zrmc.render(
        <nav className={classes}>
          {spacer}
          {children}
        </nav>,
        props,
      );
    }
    if (open) {
      classes += " mdc-drawer--open";
    }

    return Zrmc.render(
      <aside
        className={classes}
        role="presentation"
        onKeyUp={() => {}}
        onClick={this.onClick}
        ref={(c) => {
          this.ref = c;
        }}
      >
        <nav className="mdc-drawer__drawer">
          {spacer}
          {children}
        </nav>
      </aside>,
      props,
    );
  }
}

Drawer.defaultProps = {
  mdcElement: MDC_DRAWER,
  children: null,
  type: "permanent",
  open: false,
  toolbarSpacer: false,
  above: false,
  onClose: () => {},
};

Drawer.propTypes = {
  mdcElement: PropTypes.string,
  children: PropTypes.node,
  type: PropTypes.oneOf(["permanent", "persistent", "temporary"]),
  open: PropTypes.bool,
  toolbarSpacer: PropTypes.bool,
  above: PropTypes.bool,
  onClose: PropTypes.func,
};
