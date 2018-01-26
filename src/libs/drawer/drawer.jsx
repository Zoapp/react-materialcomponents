/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { PureComponent } from "react";
import PropTypes from "prop-types";

/*
See:
https://material.io/components/web/catalog/drawers/
https://material-components-web.appspot.com/drawer/persistent-drawer.html

TODO:
- temporary, permanent, persistent
- Mixins
*/
export default class Drawer extends PureComponent {
  constructor(props) {
    super(props);
    this.todo = {};
  }

  render() {
    const {
      children, className, type, ...props
    } = this.props;
    const classes = `mdc-drawer mdc-drawer--${type} mdc-typography`;
    if (type === "permanent") {
      return (<nav className={classes} {...props}>{children}</nav>);
    }
    return (<aside className={classes} {...props}><nav className="mdc-drawer__drawer">{children}</nav></aside>);
  }
}

Drawer.defaultProps = {
  children: null,
  className: null,

  type: "permanent",
};

Drawer.propTypes = {
// React component props
  children: PropTypes.node,
  className: PropTypes.string,

  type: PropTypes.string,
};
