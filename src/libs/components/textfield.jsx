/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { Component } from "react";
import PropTypes from "prop-types";

/*
mdc-text-field
See
https://material.io/components/web/catalog/input-controls/text-field/
https://material-components-web.appspot.com/text-field.html
// TODO
- Fullwidth
- TextArea
- Outlined
- Helper
- Leading and Trailing icons
*/
export default class Textfield extends Component {
  constructor(props) {
    super(props);
    this.state = { focused: false };
  }

  onBlur = () => {
    this.setState({ focused: false });
  }

  onFocus = () => {
    this.setState({ focused: true });
  }

  render() {
    const {
      children, className, label, id, type, disabled, onChange, ...props
    } = this.props;
    const { focused } = this.state;
    let classes = "mdc-text-field mdc-text-field--upgraded";
    let lc = "mdc-text-field__label";
    let bc = "mdc-text-field__bottom-line";
    if (focused) {
      classes += " mdc-text-field--focused";
      lc += " mdc-text-field__label--float-above";
      bc += " mdc-text-field__bottom-line--active";
    }
    const d = {};
    if (disabled) {
      classes += " mdc-text-field--disabled";
      d.disabled = "disabled";
    }
    let value;
    if (this.inputRef) {
      ({ value } = this.inputRef);
    } else if (props.value) {
      ({ value } = props);
    } else if (props.defaultValue) {
      ({ defaultValue: value } = props);
    }
    if ((!focused) &&
        (value && value.trim().length > 0)) {
      lc += " mdc-text-field__label--float-above";
    }
    if (className) {
      classes += ` ${className}`;
    }
    // TODO better cid generator
    const cid = id || Math.random().toString(36);
    /* eslint-disable jsx-a11y/label-has-for */
    return (
      <div className={classes} >
        <input
          type={type}
          id={cid}
          className="mdc-text-field__input"
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          onChange={onChange}
          ref={(c) => { this.inputRef = c; }}
          {...props}
          {...d}
        />
        <label focused={focused.toString()} className={lc} htmlFor={cid} >{label}</label>
        <div className={bc} />
      </div>);
    /* eslint-enable jsx-a11y/label-has-for */
  }
}

Textfield.defaultProps = {
  children: null,
  className: null,

  label: null,
  id: null,
  type: "text",
  disabled: false,
  onChange: () => {},
};

Textfield.propTypes = {
// React component props
  children: PropTypes.node,
  className: PropTypes.string,

  label: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};
