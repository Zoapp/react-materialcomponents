/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import { Radio, Grid, Inner, Cell } from "../../../src/libs";
import { head, RadioButtonProperties, RadioButtonGroupProperties } from "./components_properties";

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
