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
 * https://material.io/develop/web/components/input-controls/switches/
 *
 */

const MDC_SWITCH = "mdc-switch";

class Switch extends Component {
  state = { checked: this.props.checked };

  static getDerivedStateFromProps(nextProps, prevState) {
    const { checked } = nextProps;
    if (checked !== prevState.checked && !nextProps.derivedState) {
      return { checked };
    }
    return null;
  }

  handleClick = (event) => {
    event.stopPropagation();
    this.handleChange();
  };

  handleChange = () => {
    const checked = !this.state.checked;
    this.setState({ checked });
    if (this.props.onChange) {
      this.props.onChange(checked);
    }
  };

  render() {
    const { disabled, formField, id, label, onChange, ...props } = this.props;
    const { checked } = this.state;
    let classes = MDC_SWITCH;
    if (disabled) {
      classes += " mdc-switch--disabled";
    }
    if (checked) {
      classes += " mdc-switch--checked";
    }
    const cid = Zrmc.generateId(id);

    let l = "";
    if (label) {
      /* eslint-disable jsx-a11y/label-has-for */
      l = (
        <label htmlFor={cid} className="mdc-switch-label">
          {label}
        </label>
      );
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
      <div className={classes} onClick={this.handleClick}>
        <div className="mdc-switch__track" />
        <div className="mdc-switch__thumb-underlay">
          <div className="mdc-switch__thumb">
            <input
              id={cid}
              type="checkbox"
              className="mdc-switch__native-control"
              role="switch"
              /* onChange={this.handleChange} */
              {...inputProps}
            />
          </div>
        </div>
      </div>
    );

    if (label) {
      if (formField) {
        element = (
          <FormField>
            {element}
            {l}
          </FormField>
        );
      } else {
        const cn = "zrmc-switch-wrapper";
        element = (
          <div className={cn}>
            {element}
            {l}
          </div>
        );
      }
    }

    return Zrmc.render(element, props);
  }
}

Switch.defaultProps = {
  checked: false,
  disabled: false,
  formField: false,
  id: null,
  label: null,
  mdcElement: MDC_SWITCH,
  onChange: null,
};

Switch.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  formField: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string,
  mdcElement: PropTypes.string,
  onChange: PropTypes.func,
};

export default Switch;
