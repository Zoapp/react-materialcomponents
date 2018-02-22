/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import { Tabbar, Tab, Grid, Inner, Cell } from "../../../src/libs";
import { head, TabsProperties, TabProperties } from "./components_properties";

export default () => (
  <section>
    <h1>Tabbar examples </h1>
    <div style={{ padding: "16px" }}>
      <Tabbar>
        <Tab text="tab1" />
        <Tab text="tab2" />
        <Tab text="tab3" />
      </Tabbar>
    </div>
    <h2>Tabs Properties</h2>
    <Grid>
      <Inner>
        {head.map(title => (
          <Cell key={title}>{title}</Cell>
        ))}
      </Inner>
      {TabsProperties.map(row => (
        <Inner key={row} style={{ paddingBottom: "16px" }}>
          {row.map(col => (
            <Cell key={col}> {col} </Cell>
          ))}
        </Inner>
      ))}
    </Grid>
    <h2>Tab Properties</h2>
    <Grid>
      <Inner>
        {head.map(title => (
          <Cell key={title}>{title}</Cell>
        ))}
      </Inner>
      {TabProperties.map(row => (
        <Inner key={row} style={{ paddingBottom: "16px" }}>
          {row.map(col => (
            <Cell key={col}> {col} </Cell>
          ))}
        </Inner>
      ))}
    </Grid>
  </section>
);
