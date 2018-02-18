/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import { Checkbox, Grid, Inner, Cell } from "../../../src/libs";

const head = [
  "Name", "Type", "Desc",
];

const CheckboxProperties = [
  ["checked", "bool", "Checkbox is checked if true."],
  ["checkedIcon", "element", "The SvgIcon to use for the checked state. This is useful to create icon toggles."],
  ["defaultChecked", "bool", "The default state of our checkbox component. Warning: This cannot be used in conjunction with checked. Decide between using a controlled or uncontrolled input element and remove one of these props."],
  ["disabled", "bool", "Disabled if true."],
  ["iconStyle", "object", "Overrides the inline-styles of the icon element."],
  ["inputStyle", "object", "Overrides the inline-styles of the input element."],
  ["labelPosition", "enum:'left', 'right', 'right'", "Where the label will be placed next to the checkbox."],
  ["labelStyle", "object", "Overrides the inline-styles of the Checkbox element label."],
  ["onCheck", "function", "Callback function that is fired when the checkbox is checked.Signature: function(event: object,  isInputChecked: boolean) => void event: change event targeting the underlying checkbox input. isInputChecked: The checked value of the underlying checkbox input."],
  ["style", "object", "Override the inline-styles of the root element."],
  ["uncheckedIcon", "element", "The SvgIcon to use for the unchecked state. This is useful to create icon toggles."],
  ["valueLink", "object", "ValueLink for when using controlled checkbox."],
];

export default () => (
  <section>
    <h1>Checkbox examples </h1>
    <div style={{ padding: "16px" }}>
      <Checkbox label="label" checked />
    </div>
    <div style={{ padding: "16px" }}>
      <Checkbox label="label" checked disabled />
    </div>
    <div style={{ padding: "16px" }}>
      <Checkbox label="label" indeterminate />
    </div>
    <h2>Checkbox Properties</h2>
    <Grid>
      <Inner>
        {head.map(title => (
          <Cell key={title}>{title}</Cell>
        ))}
      </Inner>
      {CheckboxProperties.map((row, idx) => (
        // eslint-disable-next-line
        <Inner key={idx} style={{ paddingBottom: "16px" }}>
          {row.map(col => (
            <Cell key={col}> {col} </Cell>
          ))}
        </Inner>
      ))}
    </Grid>
  </section>
);
