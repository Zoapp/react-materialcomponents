/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import FormField from "./formField";

/*
mdc-radio
See:
https://material.io/components/web/catalog/input-controls/radio-buttons/
https://material-components-web.appspot.com/radio.html
*/
export default class Radio extends Component {
  render() {
    const {
      className, id, name, label, checked, disabled, ...props
    } = this.props;
    let classes = "mdc-radio";
    if (className) {
      classes += ` ${className}`;
    }
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
    // TODO better cid generator
    const cid = id || Math.random().toString(36);
    let component = (
      <div className={classes}>
        <input
          class="mdc-radio__native-control"
          type="radio"
          id={cid}
          name={name}
          ref={(c) => { this.inputRef = c; }}
          {...d}
        />
        <div className="mdc-radio__background">
          <div className="mdc-radio__outer-circle" />
          <div className="mdc-radio__inner-circle" />
        </div>
      </div>);
      if (label) {
        component = (<FormField>{component}{l}</FormField>);
      }
      return component;
  }
};

Radio.defaultProps = {
  className: null,
  id: null,
  label: null,
  checked: false,
  name: null,
};

Radio.propTypes = {
// React component props
  className: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  checked: PropTypes.bool,
  name: PropTypes.string,
};
