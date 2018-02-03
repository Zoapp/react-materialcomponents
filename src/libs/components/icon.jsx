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
 * material-icons
 * See:
 * https://material.io/components/web/catalog/
 *
 * TODO
 * Font Awesome handling
 */

const MDC_ICON = "material-icons";

const Icon = ({
  name, componentName, color, label, ...props
}) => {
  const classes = MDC_ICON;
  const style = {};
  if (color) {
    style.color = color;
  }
  // TODO Font Awesome handling
  const element = React.createElement(componentName, {
    className: classes,
    style,
    "aria-label": label,
  }, name);
  return Rmdc.render(element, props);
};

Icon.defaultProps = {
  mdcElement: MDC_ICON,
  componentName: "i",
  color: null,
  label: null,
};

Icon.propTypes = {
  mdcElement: PropTypes.string,
  componentName: PropTypes.string,
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  label: PropTypes.string,
};

export default Icon;
