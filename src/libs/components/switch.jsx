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

class Switch extends Component {
  render() {
    const {
      checked,
      disabled,
      formField,
      id,
      label,
      onChange,
      ...props
    } = this.props;

    const classes = MDC_SWITCH;
    const cid = this.props.cid || Zrmc.generateId(id);

    let l = "";
    if (label) {
      /* eslint-disable jsx-a11y/label-has-for */
      l = (<label htmlFor={cid} className="mdc-switch-label">{label}</label>);
      /* eslint-enable jsx-a11y/label-has-for */
    }

    const inputProps = {
      disabled,
    };

    if (onChange) {
      inputProps.checked = checked;
    } else {
      inputProps.defaultChecked = checked;
    }

    let element = (
      <div className={classes}>
        <input
          id={cid}
          type="checkbox"
          className="mdc-switch__native-control"
          onChange={onChange}
          {...inputProps}
        />
        <div className="mdc-switch__background">
          <div className="mdc-switch__knob" />
        </div>
      </div>
    );

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
  checked: false,
  cid: null,
  disabled: false,
  formField: false,
  id: null,
  label: null,
  mdcElement: MDC_SWITCH,
  onChange: null,
};

Switch.propTypes = {
  checked: PropTypes.bool,
  cid: PropTypes.string,
  disabled: PropTypes.bool,
  formField: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string,
  mdcElement: PropTypes.string,
  onChange: PropTypes.func,
};

export default Switch;
