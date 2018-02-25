/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import FormField from "./formField";
import Zrmc from "../";

/**
 * mdc-switch
 *
 * See:
 * https://material.io/components/web/catalog/input-controls/switches/
 * https://material-components-web.appspot.com/switch.html
 *
 * TODO:
 * - All
 */

const MDC_SWITCH = "mdc-switch";

export default class Switch extends Component {
  setRef = (c) => {
    this.inputRef = c;
  }

  render() {
    const {
      id, label, checked, disabled, formField, ...props
    } = this.props;
    const classes = MDC_SWITCH;
    const cid = Zrmc.generateId(id);
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
    let element = (
      <div className={classes}>
        <input
          type="checkbox"
          className="mdc-switch__native-control"
          ref={this.setRef}
          {...d}
        />
        <div className="mdc-switch__background">
          <div className="mdc-switch__knob" />
        </div>
      </div>);
    if (label) {
      if (formField) {
        element = (<FormField>{element}{l}</FormField>);
      } else {
        const cn = "rmdc-switch-wrapper";
        element = (<div className={cn}>{element}{l}</div>);
      }
    }
    return Zrmc.render(element, props);
  }
}

Switch.defaultProps = {
  mdcElement: MDC_SWITCH,
  id: null,
  label: null,
  checked: false,
  disabled: false,
  formField: false,
};

Switch.propTypes = {
  mdcElement: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  formField: PropTypes.bool,
};

