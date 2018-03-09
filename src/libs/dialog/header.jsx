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
 * mdc-dialog__header
 * See:
 * https://material.io/components/web/catalog/dialogs/
 *
 */

const MDC_DIALOGHEADER = "mdc-dialog__header";

const DialogHeader = ({ children, ...props }) => {
  const classes = MDC_DIALOGHEADER;
  return Zrmc.render(<header className={classes}>{children}</header>, props);
};

DialogHeader.defaultProps = {
  mdcElement: MDC_DIALOGHEADER,
  children: null,
};

DialogHeader.propTypes = {
  mdcElement: PropTypes.string,
  children: PropTypes.node,
};

export default DialogHeader;
