/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import { TextField } from "../../../src/libs";
import Property from "./property";

class TextFields extends React.Component {
  constructor() {
    super();
    this.state = {};
    setTimeout(() => {
      this.setState({
        value: "NEW"
      });
    }, 1000);
  }

  render(props) {
    let aValue = this.state.value || "";
    return (
      <section>
        {aValue}
        <h1>TextField examples</h1>
        <div>
          <TextField id="1" label="Demo1" />
        </div>
        <div style={{ padding: "16px" }}>
          <TextField id="2" label="Demo2" defaultValue="Hello" />
        </div>
        <div style={{ padding: "16px" }}>
          <TextField
            id="3"
            label="Demo2"
            defaultValue={aValue}
          />
        </div>
        <div style={{ padding: "16px" }}>
          <TextField id="3" label="Demo2" defaultValue={aValue} disabled />
        </div>
        <div style={{ padding: "16px" }}>
          <TextField id="4" label="Demo1" dense />
        </div>
        <div style={{ padding: "16px" }}>
          <TextField
            id="5"
            label="Demo2"
            defaultValue="Hello"
            leadingIcon="event"
          />
        </div>
        <div style={{ padding: "16px" }}>
          <TextField
            id="6"
            label="Demo2"
            defaultValue="Hello"
            trailingIcon="delete"
            disabled
          />
        </div>
        <div style={{ padding: "16px" }}>
          <TextField
            id="7"
            label="Demo2"
            defaultValue="Hello"
            trailingIcon="delete"
            isTextarea
          />
        </div>
        <div style={{ padding: "16px" }}>
          <TextField
            id="8"
            label="Demo2"
            defaultValue="Hello"
            trailingIcon="delete"
            isTextarea
            fullwidth
          />
        </div>
        <div style={{ padding: "16px" }}>
          <TextField
            id="9"
            label="Demo2"
            required
            pattern=".{8,}"
            helperText="Must be at least 8 characters"
          />
        </div>
        <div style={{ padding: "16px" }}>
          <TextField id="10" label="Demo1" dense outlined />
        </div>
        <div style={{ padding: "16px" }}>
          <TextField
            id="11"
            label="Demo2"
            required
            pattern=".{8,}"
            helperText="Must be at least 8 characters"
            isBoxed
          />
        </div>
        <h2>Textfield Properties</h2>
        <Property name="Textfield" />
      </section>
    );
  }
}
export default TextFields;
