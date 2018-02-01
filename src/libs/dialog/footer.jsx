/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import PropTypes from "prop-types";
import Rmdc from "../";

/*
mdc-dialog__footer
See:
https://material.io/components/web/catalog/dialogs/

*/
const DialogFooter = ({
  children, className, ...props
}) => {
  let classes = "mdc-dialog__footer";
  if (className) {
    classes += ` ${className}`;
  }
  return Rmdc.render(<footer className={classes}>{children}</footer>, props);
};

DialogFooter.defaultProps = {
  children: null,
  className: null,
};

DialogFooter.propTypes = {
// React component props
  children: PropTypes.node,
  className: PropTypes.string,
};

export default DialogFooter;
