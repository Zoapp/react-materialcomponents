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
mdc-dialog__header
See:
https://material.io/components/web/catalog/dialogs/

*/
const DialogHeader = ({
  children, className, ...props
}) => {
  let classes = "mdc-dialog__header";
  if (className) {
    classes += ` ${className}`;
  }
  return Rmdc.render(<header className={classes}>{children}</header>, props);
};

DialogHeader.defaultProps = {
  children: null,
  className: null,
};

DialogHeader.propTypes = {
// React component props
  children: PropTypes.oneOfType([
    PropTypes.node, PropTypes.string]),
  className: PropTypes.string,
};

export default DialogHeader;
