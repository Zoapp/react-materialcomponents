/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import { TextField, Grid, Inner, Cell } from "../../../src/libs";
import { head, TextfieldProperties } from "./components_properties";

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
