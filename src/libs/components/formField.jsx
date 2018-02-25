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
 * mdc-form-field
 *
 * See:
 * https://material.io/components/web/catalog/input-controls/form-fields/
 */

const MDC_FORMFIELD = "mdc-form-field";

const FormField = ({
  children, ...props
}) => {
  const classes = MDC_FORMFIELD;
  const element = (<div className={classes} >{children}</div>);
  return Zrmc.render(element, props);
};

FormField.defaultProps = {
  mdcElement: MDC_FORMFIELD,
  children: null,
};

FormField.propTypes = {
  mdcElement: PropTypes.string,
  children: PropTypes.node,
};

export default FormField;
