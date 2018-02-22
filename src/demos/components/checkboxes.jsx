/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import { Checkbox, Grid, Inner, Cell } from "../../../src/libs";
import { head, CheckboxProperties } from "./components_properties";

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
      {CheckboxProperties.map(row => (
        <Inner key={row} style={{ paddingBottom: "16px" }}>
          {row.map(col => (
            <Cell key={col}> {col} </Cell>
          ))}
        </Inner>
      ))}
    </Grid>
  </section>
);
