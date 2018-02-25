/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import PropTypes from "prop-types";
import Zrmc from "../";

/**
 * mdc-drawer__header
 * See
 * https://material.io/components/web/catalog/drawer/
 *
 */

const MDC_DRAWERHEADER = "mdc-drawer__header";

const DrawerHeader = ({
  children, list, ...props
}) => {
  const classes = MDC_DRAWERHEADER;
  return Zrmc.render(
    (
      <header className={classes} >
        <div className="mdc-drawer__header-content">{children}</div>
      </header>
    ),
    props,
  );
};

DrawerHeader.defaultProps = {
  mdcElement: MDC_DRAWERHEADER,
  children: null,
  list: false,
};

DrawerHeader.propTypes = {
  mdcElement: PropTypes.string,
  children: PropTypes.node,
  list: PropTypes.bool,
};

export default DrawerHeader;
