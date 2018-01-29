/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import PropTypes from "prop-types";

/*
material-icons
See:
https://material.io/components/web/catalog/

*/
const Icon = ({
  name, componentName, className, ...props
}) => {
  let classes = "material-icons";
  if (className) {
    classes += ` ${className}`;
  }
  return React.createElement(componentName, {
    className: classes,
    ...props,
  }, name);
};

Icon.defaultProps = {
  className: null,
  componentName: "i",
};

Icon.propTypes = {
// React component props
  className: PropTypes.string,
  componentName: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default Icon;
