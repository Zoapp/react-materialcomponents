/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import Zrmc from "../";
import Icon from "./icon";

/**
 * mdc-text-field
 * See
 * https://material.io/components/web/catalog/input-controls/text-field/
 * https://material-components-web.appspot.com/text-field.html
 *
 *  TODO
 * - Fullwidth
 * - TextArea
 * - Outlined
 * - Helper
 * - Leading and Trailing icons
 */

const MDC_TEXTFIELD = "mdc-text-field";

export default class TextField extends Component {
  constructor(props) {
    super(props);
    const value = props.defaultValue || "";
    this.state = { focused: false, value };
  }

  onBlur = () => {
    this.setState({ focused: false });
  };

  onFocus = () => {
    this.setState({ focused: true });
  };

  onChange = (e) => {
    if (this.inputRef) {
      const { value } = this.inputRef;
      this.setState({ value });
      if (this.props.noFloatingLabel) {
        if (value && value.length > 0) {
          this.labelRef.setAttribute("style", "display: none;");
        } else {
          this.labelRef.setAttribute("style", "");
        }
      }
      if (this.props.onChange) {
        this.props.onChange(e);
      }
    }
  };

  getValue() {
    return this.state.value;
  }

  render() {
    const {
      mdcElement,
      label,
      id,
      type,
      disabled,
      onChange,
      dense,
      helperText,
      htPersistent,
      htValidationMsg,
      fullwidth,
      isTextarea,
      isBoxed,
      outlined,
      leadingIcon,
      trailingIcon,
      onClickLI,
      onClickTI,
      noFloatingLabel,
      pattern,
      ...props
    } = this.props;
    const { focused, value } = this.state;
    const isValid = pattern ? RegExp(pattern).test(value) : true;
    let classes = `${MDC_TEXTFIELD} mdc-text-field--upgraded`;
    let lc = "mdc-floating-label";
    let bc = "mdc-text-field__bottom-line";
    if (focused) {
      classes += " mdc-text-field--focused";
      if (!noFloatingLabel) {
        lc += " mdc-floating-label--float-above";
      }
      bc += " mdc-text-field__bottom-line--active";
    }
    if (outlined) {
      classes += " mdc-text-field--outlined";
    }
    if (!isValid) {
      classes += " mdc-text-field--invalid";
    }
    let li;
    let ti;
    let tabIndex = null;
    if (leadingIcon) {
      classes += " mdc-text-field--with-leading-icon";
      if (onClickLI) {
        tabIndex = "0";
      }
      li = (
        <Icon
          className="mdc-text-field__icon"
          name={leadingIcon}
          tabIndex={tabIndex}
          onClick={(e) => {
            e.preventDefault();
            if (onClickLI) {
              onClickLI();
            }
          }}
        />
      );
    }
    tabIndex = null;
    if (trailingIcon) {
      classes += " mdc-text-field--with-trailing-icon";
      if (onClickTI) {
        tabIndex = "0";
      }
      ti = (
        <Icon
          className="mdc-text-field__icon"
          name={trailingIcon}
          tabIndex={tabIndex}
          onClick={(e) => {
            e.preventDefault();
            if (onClickTI) {
              onClickTI();
            }
          }}
        />
      );
    }

    const p = Zrmc.sanitizeProps(props);

    if (disabled) {
      classes += " mdc-text-field--disabled";
      p.disabled = "disabled";
    }
    if (dense) {
      classes += " mdc-text-field--dense";
    }
    if (fullwidth) {
      classes += " mdc-text-field--fullwidth";
      p.placeholder = label;
      p["aria-label"] = label;
    }
    if (isBoxed) {
      classes += " mdc-text-field--box";
    }
    const sc = {};

    if (value && value.trim().length > 0) {
      if (noFloatingLabel) {
        sc.display = "none";
      } else if (!focused) {
        lc += " mdc-floating-label--float-above";
      }
    }

    const cid = Zrmc.generateId(id);

    if (helperText) {
      p["aria-controls"] = `${cid}-helper-text`;
    }

    let input;
    p.type = type;
    p.id = cid;
    p.className = "mdc-text-field__input";
    p.onBlur = this.onBlur;
    p.onFocus = this.onFocus;
    p.onChange = this.onChange;
    p.ref = (c) => {
      this.inputRef = c;
    };
    if (isTextarea) {
      classes += " mdc-text-field--textarea";
      input = <textarea {...p} />;
    } else {
      input = <input {...p} />;
    }
    let labelElement;
    /* eslint-disable jsx-a11y/label-has-for */
    if (!fullwidth) {
      labelElement = (
        <label
          focused={focused.toString()}
          className={lc}
          htmlFor={cid}
          style={sc}
          ref={(c) => {
            this.labelRef = c;
          }}
        >
          {label}
        </label>
      );
    }
    let bcElement1;
    let bcElement2;
    if (outlined) {
      bcElement1 = (
        <div className="mdc-text-field__outline">
          <svg>
            <path className="mdc-text-field__outline-path" />
          </svg>
        </div>
      );
      bcElement2 = <div className="mdc-text-field__idle-outline" />;
    } else {
      bcElement1 = <div className={bc} />;
    }

    let element = Zrmc.render(
      <div className={classes}>
        {li}
        {input}
        {labelElement}
        {ti}
        {bcElement1}
        {bcElement2}
      </div>,
      props,
    );
    /* eslint-enable jsx-a11y/label-has-for */
    if (helperText) {
      let cht = "mdc-text-field-helper-text";
      if (htPersistent) {
        cht += " mdc-text-field-helper-text--persistent";
      }
      if (htValidationMsg) {
        cht += " mdc-text-field-helper-text--validation-msg";
      }
      element = (
        <div className="zrmc-text-field-wrapper">
          {element}
          <p className={cht} aria-hidden="true">
            {helperText}
          </p>
        </div>
      );
    }
    return element;
  }
}

TextField.defaultProps = {
  mdcElement: MDC_TEXTFIELD,
  label: null,
  id: null,
  type: "text",
  disabled: false,
  onChange: () => {},
  dense: false,
  helperText: null,
  htPersistent: false,
  htValidationMsg: false,
  fullwidth: false,
  isTextarea: false,
  isBoxed: false,
  outlined: false,
  leadingIcon: null,
  trailingIcon: null,
  onClickLI: null,
  onClickTI: null,
  noFloatingLabel: false,
  defaultValue: undefined,
};

TextField.propTypes = {
  mdcElement: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  dense: PropTypes.bool,
  helperText: PropTypes.string,
  htPersistent: PropTypes.bool,
  htValidationMsg: PropTypes.bool,
  fullwidth: PropTypes.bool,
  isTextarea: PropTypes.bool,
  isBoxed: PropTypes.bool,
  outlined: PropTypes.bool,
  leadingIcon: PropTypes.string,
  trailingIcon: PropTypes.string,
  onClickLI: PropTypes.func,
  onClickTI: PropTypes.func,
  defaultValue: PropTypes.string,
  noFloatingLabel: PropTypes.bool,
  pattern: PropTypes.string,
};
