/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import {
  IconToggle, Grid, Inner, Cell,
} from "../../../src/libs";

const head = [
  "Name", "Type", "Desc",
];

const ToogleProperties = [
  ["defaultToggled", "bool", "Determines whether the Toggle is initially turned on. Warning: This cannot be used in conjunction with toggled. Decide between using a controlled or uncontrolled input element and remove one of these props."],
  ["disabled", "bool", "Will disable the toggle if true."],
  ["elementStyle", "object", "Overrides the inline-styles of the Toggle element."],
  ["iconStyle", "object", "Overrides the inline-styles of the Icon element."],
  ["inputStyle", "object", "Overrides the inline-styles of the input element."],
  ["label", "node", "Label for toggle."],
  ["labelPosition", "enum:'left', 'right', 'left'", "Where the label will be placed next to the toggle."],
  ["labelStyle", "object", "Overrides the inline-styles of the Toggle element label."],
  ["onToggle", "function", "Callback function that is fired when the toggle switch is toggled. Signature: function(event: object,  isInputChecked: bool) => void event: Change event targeting the toggle. isInputChecked: The new value of the toggle."],
  ["rippleStyle", "object", "Override style of ripple."],
  ["style", "object", "Override the inline-styles of the root element."],
  ["thumbStyle", "object", "Override style for thumb."],
  ["thumbSwitchedStyle", "object", "Override the inline styles for thumb when the toggle switch is toggled on."],
  ["toggled", "bool", "Toggled if set to true."],
  ["trackStyle", "object", "Override style for track."],
  ["trackSwitchedStyle", "object", "Override the inline styles for track when the toggle switch is toggled on."],
  ["valueLink", "object", "ValueLink prop for when using controlled toggle."],
];

export default () => (
  <section>
    <h1>Menus examples </h1>
    <div style={{ padding: "16px" }}>
      <IconToggle name="favorite" nameOff="favorite_border" />
    </div>
    <h2>Toogle properties</h2>
    <Grid>
      <Inner>
        {head.map(title => (
          <Cell key={title}>{title}</Cell>
        ))}
      </Inner>
      {ToogleProperties.map((row, idx) => (
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
