/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import PropTypes from "prop-types";
import Icon from "../components/icon";

/**
 *
 * mdc-toolbar__icon | mdc-toolbar__menu-icon
 *
 * See:
 * https://material.io/components/web/catalog/toolbar/
 * https://material-components-web.appspot.com/toolbar/index.html
 *
 */

const MDC_TBICON = "mdc-toolbar__icon";
const MDC_TBMENUICON = "mdc-toolbar__menu-icon";

const ToolbarIcon = ({ menu, ...props }) => {
  let classes = MDC_TBICON;
  const { name } = props;
  if (menu || name === "menu") {
    classes = MDC_TBMENUICON;
  }
  return <Icon className={classes} mdcElement={classes} componentName="a" {...props} />;
};

ToolbarIcon.defaultProps = {
  mdcElement: MDC_TBICON,
  menu: false,
};

ToolbarIcon.propTypes = {
  mdcElement: PropTypes.string,
  menu: PropTypes.bool,
  name: PropTypes.string.isRequired,
};

export default ToolbarIcon;
