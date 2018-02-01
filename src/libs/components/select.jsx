/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import Rmdc from "../";

/*
mdc-select
See:
https://material.io/components/web/catalog/input-controls/select-menus/
https://material-components-web.appspot.com/select.html

TODO : all

*/
export default class Select extends Component {
  render() {
    const {
      className, disabled, ...props
    } = this.props;
    let classes = "mdc-select";
    if (className) {
      classes += ` ${className}`;
    }
    const d = {};
    if (disabled) {
      d.disabled = "disabled";
    }
    /* eslint-disable jsx-a11y/no-noninteractive-tabindex */
    const element = (
      <div className={classes} role="listbox">
        <div className="mdc-select__surface" tabIndex="0">
          <div className="mdc-select__label">Pick a Food Group</div>
          <div className="mdc-select__selected-text" />
          <div className="mdc-select__bottom-line" />
        </div>
        <div className="mdc-simple-menu mdc-select__menu">
          <ul className="mdc-list mdc-simple-menu__items">
            <li className="mdc-list-item" role="option" tabIndex="0" aria-selected="false">
              Bread, Cereal, Rice, and Pasta
            </li>
            <li className="mdc-list-item" role="option" tabIndex="0" aria-selected="false">
              Vegetables
            </li>
            <li className="mdc-list-item" role="option" tabIndex="0" aria-selected="false">
              Fruit
            </li>
            <li className="mdc-list-item" role="option" tabIndex="0" aria-selected="false">
              Milk, Yogurt, and Cheese
            </li>
            <li className="mdc-list-item" role="option" tabIndex="0" aria-selected="false">
              Meat, Poultry, Fish, Dry Beans, Eggs, and Nuts
            </li>
            <li className="mdc-list-item" role="option" tabIndex="0" aria-selected="false">
              Fats, Oils, and Sweets
            </li>
          </ul>
        </div>
      </div>);
    /* eslint-enable jsx-a11y/no-noninteractive-tabindex */
    return Rmdc.render(element, props);
  }
}

Select.defaultProps = {
  className: null,
  disabled: false,
};

Select.propTypes = {
// React component props
  className: PropTypes.string,
  disabled: PropTypes.bool,
};
