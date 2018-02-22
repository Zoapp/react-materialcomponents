/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import FormField from "./formField";
import Rmdc from "../";

/**
 * mdc-checkbox
 * See:
 * https://material.io/components/web/catalog/input-controls/checkboxes/
 * https://material-components-web.appspot.com/checkbox.html
 */

const MDC_CHECKBOX = "mdc-checkbox";

export default class Checkbox extends Component {
  componentDidMount() {
    this.inputRef.indeterminate = this.props.indeterminate;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.indeterminate !== this.props.indeterminate) {
      this.inputRef.indeterminate = this.props.indeterminate;
    }
  }

  setRef = (c) => {
    this.inputRef = c;
  }

  render() {
    const {
      id, label, disabled, checked, indeterminate, onChange, ...props
    } = this.props;
    let classes = MDC_CHECKBOX;
    if (disabled) {
      classes += " mdc-checkbox--disabled";
    }

    const cid = Rmdc.generateId(id);
    let l = "";
    if (label) {
      /* eslint-disable jsx-a11y/label-has-for */
      l = (<label htmlFor={cid}>{label}</label>);
      /* eslint-enable jsx-a11y/label-has-for */
    }
    const d = {};
    if (disabled) {
      d.disabled = "disabled";
    }
    if (checked) {
      d.defaultChecked = "checked";
    }
    let element = (
      <div className={classes}>
        <input
          id={cid}
          type="checkbox"
          className="mdc-checkbox__native-control"
          ref={this.setRef}
          onChange={onChange}
          {...d}
        />
        <div className="mdc-checkbox__background">
          <svg className="mdc-checkbox__checkmark" viewBox="0 0 24 24">
            <path
              className="mdc-checkbox__checkmark__path"
              fill="none"
              stroke="white"
              d="M1.73,12.91 8.1,19.28 22.79,4.59"
            />
          </svg>
          <div className="mdc-checkbox__mixedmark" />
        </div>
      </div>);
    if (label) {
      element = (<FormField>{element}{l}</FormField>);
    }
    return Rmdc.render(element, props);
  }
}

Checkbox.defaultProps = {
  mdcElement: MDC_CHECKBOX,
  label: null,
  id: null,
  disabled: false,
  checked: false,
  indeterminate: false,
  onChange: () => {},
};

Checkbox.propTypes = {
  mdcElement: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  indeterminate: PropTypes.bool,
  onChange: PropTypes.func,
};
