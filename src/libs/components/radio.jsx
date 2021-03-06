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
 * mdc-radio
 *
 * See:
 * https://material.io/develop/web/components/input-controls/radio-buttons/
 */

const MDC_RADIO = "mdc-radio";

export default class Radio extends Component {
  setRef = (c) => {
    this.inputRef = c;
  };

  render() {
    const { id, name, label, checked, disabled, ...props } = this.props;

    const classes = MDC_RADIO;
    const cid = Zrmc.generateId(id);

    let l = "";
    if (label) {
      /* eslint-disable jsx-a11y/label-has-for */
      l = <label htmlFor={cid}>{label}</label>;
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
          className="mdc-radio__native-control"
          type="radio"
          id={cid}
          name={name}
          ref={this.setRef}
          {...d}
        />
        <div className="mdc-radio__background">
          <div className="mdc-radio__outer-circle" />
          <div className="mdc-radio__inner-circle" />
        </div>
      </div>
    );
    if (label) {
      element = (
        <FormField>
          {element}
          {l}
        </FormField>
      );
    }

    return Zrmc.render(element, props);
  }
}

Radio.defaultProps = {
  mdcElement: MDC_RADIO,
  id: null,
  label: null,
  disabled: false,
  checked: false,
  name: null,
};

Radio.propTypes = {
  mdcElement: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  name: PropTypes.string,
};
