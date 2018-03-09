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
 * mdc-dialog__body
 * See:
 * https://material.io/components/web/catalog/dialogs/
 *
 */

const MDC_DIALOGBODY = "mdc-dialog__body";

const DialogBody = ({ children, scrollable, ...props }) => {
  let classes = MDC_DIALOGBODY;
  if (scrollable) {
    classes += " mdc-dialog__body--scrollable";
  }
  return Zrmc.render(<section className={classes}>{children}</section>, props);
};

DialogBody.defaultProps = {
  children: null,
  mdcElement: MDC_DIALOGBODY,
  scrollable: false,
};

DialogBody.propTypes = {
  // React component props
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  mdcElement: PropTypes.string,
  scrollable: PropTypes.bool,
};

export default DialogBody;
