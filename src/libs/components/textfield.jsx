/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import PropTypes from "prop-types";

/*
mdc-text-field
See
https://material.io/components/web/catalog/input-controls/text-field/
// TODO
- Prefilled
- Fullwidth
- TextArea
- Disabled
- Outlined
- Helper
- Leading and Trailing icons
- Get native input
*/
const Textfield = ({
  children, className, label, id, ...props
}) => {
  let classes = "mdc-text-field";
  if (className) {
    classes += ` ${className}`;
  }
  // TODO better cid generator
  const cid = id || `textfield-${label}`;
  /* eslint-disable jsx-a11y/label-has-for */
  return (
    <div className={classes}>
      <input type="text" id={cid} className="mdc-text-field__input" {...props} />
      <label className="mdc-text-field__label" htmlFor={cid} >{label}</label>
      <div className="mdc-text-field__bottom-line" />
    </div>);
  /* eslint-enable jsx-a11y/label-has-for */
};

Textfield.defaultProps = {
  children: null,
  className: null,

  label: null,
  id: null,
};

Textfield.propTypes = {
// React component props
  children: PropTypes.node,
  className: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
};

export default Textfield;
