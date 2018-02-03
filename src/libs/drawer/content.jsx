/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import PropTypes from "prop-types";
import Rmdc from "../";

/**
 * mdc-drawer__content
 * See
 * https://material.io/components/web/catalog/drawer/
 *
 */

const MDC_DRAWERCONTENT = "mdc-drawer__content";

const DrawerContent = ({
  children, list, ...props
}) => {
  let classes = MDC_DRAWERCONTENT;
  if (list) {
    classes += " mdc-list";
  }
  return Rmdc.render(<nav className={classes} >{children}</nav>, props);
};

DrawerContent.defaultProps = {
  mdcElement: MDC_DRAWERCONTENT,
  children: null,
  list: false,
};

DrawerContent.propTypes = {
  mdcElement: PropTypes.string,
  children: PropTypes.node,
  list: PropTypes.bool,
};

export default DrawerContent;
