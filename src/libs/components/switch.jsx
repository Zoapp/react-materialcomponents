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
mdc-switch
See:
https://material.io/components/web/catalog/input-controls/switches/
https://material-components-web.appspot.com/switch.html
TODO:
- All
*/
export default class Switch extends Component {
  render() {
    const {
      className, id, label, checked, disabled, formField,
    } = this.props;
    const classes = "mdc-switch";
    // TODO better cid generator
    const cid = id || Math.random().toString(36);
    let l = "";
    if (label) {
      /* eslint-disable jsx-a11y/label-has-for */
      l = (<label htmlFor={cid} className="mdc-switch-label">{label}</label>);
      /* eslint-enable jsx-a11y/label-has-for */
    }
    const d = {};
    if (disabled) {
      d.disabled = "disabled";
    }
    if (checked) {
      d.defaultChecked = "checked";
    }
    let component = (
      <div className={classes}>
        <input
          type="checkbox"
          className="mdc-switch__native-control"
          ref={(c) => { this.inputRef = c; }}
          {...d}
        />
        <div className="mdc-switch__background">
          <div className="mdc-switch__knob" />
        </div>
      </div>);
    if (label) {
      if (formField) {
        component = (<FormField className={className}>{component}{l}</FormField>);
      } else {
        let cn = "rmdc-switch-wrapper";
        if (className) {
          cn += ` ${className}`;
        }
        component = (<div className={cn}>{component}{l}</div>);
      }
    }
    return component;
  }
}

Switch.defaultProps = {
  className: null,
  id: null,
  label: null,
  checked: false,
  disabled: false,
  formField: false,
};

Switch.propTypes = {
// React component props
  className: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  formField: PropTypes.bool,
};

