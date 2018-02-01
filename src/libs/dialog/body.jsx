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
mdc-dialog__body
See:
https://material.io/components/web/catalog/dialogs/

*/
const DialogBody = ({
  children, className, ...props
}) => {
  let classes = "mdc-dialog__body";
  if (className) {
    classes += ` ${className}`;
  }
  return Rmdc.render(<section className={classes}>{children}</section>, props);
};

DialogBody.defaultProps = {
  children: null,
  className: null,
};

DialogBody.propTypes = {
// React component props
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node), PropTypes.node, PropTypes.string]),
  className: PropTypes.string,
};

export default DialogBody;
