/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import { LinearProgress, Grid, Inner, Cell } from "../../../src/libs";
import { head, LinearProperties } from "./components_properties";


export default () => (
  <section>
    <h1>LinearProgress examples </h1>
    <LinearProgress progress={0.2} buffer={0.5} />
    <h2>Linear Properties</h2>
    <Grid>
      <Inner>
        {head.map(title => (
          <Cell key={title}>{title}</Cell>
        ))}
      </Inner>
      {LinearProperties.map(row => (
        <Inner key={row} style={{ paddingBottom: "16px" }}>
          {row.map(col => (
            <Cell key={col}> {col} </Cell>
          ))}
        </Inner>
      ))}
    </Grid>
  </section>
);
