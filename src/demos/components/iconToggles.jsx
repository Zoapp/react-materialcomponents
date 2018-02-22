/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import { IconToggle, Grid, Inner, Cell } from "../../../src/libs";
import { head, ToogleProperties } from "./components_properties";

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
      {ToogleProperties.map(row => (
        <Inner key={row} style={{ paddingBottom: "16px" }}>
          {row.map(col => (
            <Cell key={col}> {col} </Cell>
          ))}
        </Inner>
      ))}
    </Grid>
  </section>
);
