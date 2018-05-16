/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import PropTypes from "prop-types";

const MDC_DRAWERFOOTER = "mdc-drawer__footer";

const DrawerFooter = ({ children }) => {
  const classes = MDC_DRAWERFOOTER;

  return (
    <footer className={classes}>
      <div className={`${classes}-content`}>{children}</div>
    </footer>
  );
};

DrawerFooter.propTypes = {
  children: PropTypes.node,
};

export default DrawerFooter;
