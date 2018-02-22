/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import { Slider, Grid, Inner, Cell } from "../../../src/libs";
import { head, SliderProperties } from "./components_properties";

export default () => (
  <section>
    <h1>Slider examples </h1>
    <div style={{ padding: "16px" }}>
      <Slider label="slider 1" />
    </div>
    <div style={{ padding: "16px" }}>
      <Slider label="slider 2" discrete disabled />
    </div>
    <div style={{ padding: "16px" }}>
      <Slider label="slider 3" discrete max={256} value={20} displayMarker />
    </div>
    <h2>Slider  Properties</h2>
    <Grid>
      <Inner>
        {head.map(title => (
          <Cell key={title}>{title}</Cell>
        ))}
      </Inner>
      {SliderProperties.map((row, idx) => (
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
