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
 * https://material.io/components/web/catalog/toolbar/
 * https://material-components-web.appspot.com/toolbar/index.html
 *
 * TODO:
 * - waterfall, flexible, fixedlastrow
 * See:
 * https://github.com/material-components/material-components-web/blob/master/packages/mdc-toolbar/foundation.js
 *
 */

const MDC_TOOLBAR = "mdc-toolbar";

export default class Toolbar extends PureComponent {
  render() {
    const {
      children, fixed, drawerAbove, ...otherProps
    } = this.props;
    let classes = MDC_TOOLBAR;
    if (fixed) {
      classes += " mdc-toolbar--fixed";
    }
    if (drawerAbove) {
      // TODO rtl
      classes += " rmdc-content-drawer";
    }
    const element = (
      <header className={classes} >{children}</header>
    );
    return Zrmc.render(element, otherProps);
  }
}

Toolbar.defaultProps = {
  mdcElement: MDC_TOOLBAR,
  children: null,
  fixed: false,
  drawerAbove: false,
};

Toolbar.propTypes = {
  mdcElement: PropTypes.string,
  children: PropTypes.node,
  /* DO not set manually this props computed auto */
  fixed: PropTypes.bool,
  drawerAbove: PropTypes.bool,
};
