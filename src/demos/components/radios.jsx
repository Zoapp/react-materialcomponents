/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import { Radio, Grid, Inner, Cell } from "../../../src/libs";


const head = [
  "Name", "Type", "Desc",
];

const RadioButtonProperties = [
  ["checkedIcon", "element", "The icon element to show when the radio button is checked."],
  ["disabled", "bool", "If true,  the radio button is disabled."],
  ["iconStyle", "object", "Override the inline-styles of the icon element."],
  ["inputStyle", "object", "Override the inline-styles of the input element."],
  ["labelStyle", "object", "Override the inline-styles of the label element."],
  ["style", "object", "Override the inline-styles of the root element."],
  ["uncheckedIcon", "element", "The icon element to show when the radio button is unchecked."],
  ["value", "any", "The value of the radio button."],
];

const RadioButtonGroupProperties = [
  ["children", "node", "Should be used to pass RadioButton components."],
  ["className", "string", "The CSS class name of the root element."],
  ["defaultSelected", "any", "The value property of the radio button that will be selected by default. This takes precedence over the checked property of the RadioButton elements."],
  ["labelPosition", "enum:'left', 'right'", "Where the label will be placed for all child radio buttons. This takes precedence over the labelPosition property of the RadioButton elements."],
  ["name", "string", "The name that will be applied to all child radio buttons."],
  ["onChange", "function", "Callback function that is fired when a radio button has been checked.Signature: function(event: object,  value: undefined) => void event: change event targeting the selected radio button. value: The value of the selected radio button."],
  ["style", "object", "Override the inline-styles of the root element."],
  ["valueSelected", "any", "The value of the currently selected radio button."],
];


export default () => (
  <section>
    <h1>Radio examples </h1>
    <div style={{ padding: "16px" }}>
      <Radio id="1" label="radio 1" name="r1" checked />
      <Radio id="2" label="radio 2" name="r1" />
    </div>
    <div style={{ padding: "16px" }}>
      <Radio id="3" label="radio 1" name="r2" checked />
      <Radio id="4" label="radio 2" name="r2" />
    </div>
    <div style={{ padding: "16px" }}>
      <Radio id="5" label="radio 1" name="r3" checked disabled />
      <Radio id="6" label="radio 2" name="r3" disabled />
    </div>
    <h2>Radio Button Properties</h2>
    <Grid>
      <Inner>
        {head.map(title => (
          <Cell key={title}>{title}</Cell>
        ))}
      </Inner>
      {RadioButtonProperties.map((row, idx) => (
        // eslint-disable-next-line
        <Inner key={idx} style={{ paddingBottom: "16px" }}>
          {row.map(col => (
            <Cell key={col}> {col} </Cell>
          ))}
        </Inner>
      ))}
    </Grid>
    <h2>Radio Button Group Properties</h2>
    <Grid>
      <Inner>
        {head.map(title => (
          <Cell key={title}>{title}</Cell>
        ))}
      </Inner>
      {RadioButtonGroupProperties.map((row, idx) => (
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
