/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import { TextField, Grid, Inner, Cell } from "../../../src/libs";

const head = [
  "Name", "Type", "Desc",
];

const TextfieldProperties = [
  ["children", "node", "The textfield extended by this."],
  ["className", "string", "The css class name of the root element."],
  ["defaultValue", "any", "The text string to use for the default value."],
  ["disabled", "bool", "Disables the text field if set to true."],
  ["errorStyle", "object", "The style object to use to override error styles."],
  ["errorText", "node", "The error content to display."],
  ["floatingLabelFixed", "bool", "If true,  the floating label will float even when there is no value."],
  ["floatingLabelFocusStyle", "object", "The style object to use to override floating label styles when focused."],
  ["floatingLabelShrinkStyle", "object", "The style object to use to override floating label styles when shrunk."],
  ["floatingLabelStyle", "object", "The style object to use to override floating label styles."],
  ["floatingLabelText", "node", "The content to use for the floating label element."],
  ["fullWidth", "bool", "If true,  the field receives the property width 100%."],
  ["hintStyle", "object", "Override the inline-styles of the TextField's hint text element."],
  ["hintText", "node", "The hint content to display."],
  ["id", "string", "The id prop for the text field."],
  ["inputStyle", "object", "Override the inline-styles of the TextField's input element. When multiLine is false: define the style of the input element. When multiLine is true: define the style of the container of the textarea."],
  ["multiLine", "bool", "If true,  a textarea element will be rendered. The textarea also grows and shrinks according to the number of lines."],
  ["name", "string", "Name applied to the input."],
  ["onChange", "function", "Callback function that is fired when the textfield's value changes. Signature: function(event: object,  newValue: string) => void event: Change event targeting the text field. newValue: The new value of the text field."],
  ["rows", "number", "Number of rows to display when multiLine option is set to true."],
  ["rowsMax", "number", "Maximum number of rows to display when multiLine option is set to true."],
  ["style", "object", "Override the inline-styles of the root element."],
  ["textareaStyle", "object", "Override the inline-styles of the TextField's textarea element. The TextField use either a textarea or an input,  this property has effects only when multiLine is true."],
  ["type", "string", "Specifies the type of input to display such as 'password' or 'text'."],
  ["underlineDisabledStyle", "object", "Override the inline-styles of the TextField's underline element when disabled."],
  ["underlineFocusStyle", "object", "Override the inline-styles of the TextField's underline element when focussed."],
  ["underlineShow", "bool", "If true,  shows the underline for the text field."],
  ["underlineStyle", "object", "Override the inline-styles of the TextField's underline element."],
  ["value", "any", "The value of the text field."],
];

export default () => (
  <section>
    <h1>TextField examples</h1>
    <div>
      <TextField id="1" label="Demo1" />
    </div>
    <div style={{ padding: "16px" }}>
      <TextField id="2" label="Demo2" defaultValue="Hello" />
    </div>
    <div style={{ padding: "16px" }}>
      <TextField id="3" label="Demo2" defaultValue="Hello" disabled />
    </div>
    <div style={{ padding: "16px" }}>
      <TextField id="4" label="Demo1" dense />
    </div>
    <div style={{ padding: "16px" }}>
      <TextField id="5" label="Demo2" defaultValue="Hello" leadingIcon="event" />
    </div>
    <div style={{ padding: "16px" }}>
      <TextField id="6" label="Demo2" defaultValue="Hello" trailingIcon="delete" disabled />
    </div>
    <div style={{ padding: "16px" }}>
      <TextField id="7" label="Demo2" defaultValue="Hello" trailingIcon="delete" isTextarea />
    </div>
    <div style={{ padding: "16px" }}>
      <TextField id="8" label="Demo2" defaultValue="Hello" trailingIcon="delete" isTextarea fullwidth />
    </div>
    <div style={{ padding: "16px" }}>
      <TextField id="9" label="Demo2" required pattern=".{8,}" helperText="Must be at least 8 characters" />
    </div>
    <div style={{ padding: "16px" }}>
      <TextField id="10" label="Demo1" dense outlined />
    </div>
    <div style={{ padding: "16px" }}>
      <TextField id="11" label="Demo2" required pattern=".{8,}" helperText="Must be at least 8 characters" isBoxed />
    </div>
    <h2>Textfield Properties</h2>
    <Grid>
      <Inner>
        {head.map(title => (
          <Cell key={title}>{title}</Cell>
        ))}
      </Inner>
      {TextfieldProperties.map((row, idx) => (
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
