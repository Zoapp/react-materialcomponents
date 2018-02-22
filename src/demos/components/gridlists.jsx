/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import { GridList, Tile, Grid, Inner, Cell } from "../../../src/libs";
import { head, GridListProperties, GridTileProperties } from "./components_properties";

export default () => (
  <section>
    <h1>GridList examples </h1>
    <div style={{ padding: "16px" }}>
      <GridList width="320px" tileWidth="76px" tileBackground="#212121" >
        <Tile title="text" />
        <Tile title="text" />
        <Tile title="text" />
        <Tile title="text" />
        <Tile title="text" />
        <Tile title="text" />
        <Tile title="text" />
        <Tile title="text" />
      </GridList>
    </div>
    <h2>Grid List Properties</h2>
    <Grid>
      <Inner>
        {head.map(title => (
          <Cell key={title}>{title}</Cell>
        ))}
      </Inner>
      {GridListProperties.map((row, idx) => (
        // eslint-disable-next-line
        <Inner key={idx} style={{ paddingBottom: "16px" }}>
          {row.map(col => (
            <Cell key={col}> {col} </Cell>
          ))}
        </Inner>
      ))}
    </Grid>
    <h2>Grid Tile Properties</h2>
    <Grid>
      <Inner>
        {head.map(title => (
          <Cell key={title}>{title}</Cell>
        ))}
      </Inner>
      {GridTileProperties.map((row, idx) => (
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
