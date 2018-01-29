/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import PropTypes from "prop-types";

/*
mdc-form-field
See:
https://material.io/components/web/catalog/input-controls/form-fields/
*/
const FormField = ({
  children, className, ...props
}) => {
  let classes = "mdc-form-field";
  if (className) {
    classes += ` ${className}`;
  }
  return (<div className={classes} {...props}>{children}</div>);
};

FormField.defaultProps = {
  children: null,
  className: null,
};

FormField.propTypes = {
// React component props
  children: PropTypes.node,
  className: PropTypes.string,
};

export default FormField;
