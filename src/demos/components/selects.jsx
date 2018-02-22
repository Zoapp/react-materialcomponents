/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import { Select, MenuItem, Grid, Inner, Cell } from "../../../src/libs";
import { head, SelectfieldProperties } from "./components_properties";

export default () => (
  <section>
    <h1>Select examples </h1>
    <div style={{ padding: "16px" }}>
      <Select label="Pick a Food Group" >
        <MenuItem>read, Cereal, Rice, and Pasta</MenuItem>
        <MenuItem>Vegetables</MenuItem>
        <MenuItem>Fruit</MenuItem>
        <MenuItem>Milk, Yogurt, and Cheese</MenuItem>
        <MenuItem>Meat, Poultry, Fish, Dry Beans, Eggs, and Nuts</MenuItem>
        <MenuItem>Fats, Oils, and Sweets</MenuItem>
      </Select>
    </div>
    <h2>SelectField Properties</h2>
    <Grid>
      <Inner>
        {head.map(title => (
          <Cell key={title}>{title}</Cell>
        ))}
      </Inner>
      {SelectfieldProperties.map(row => (
        <Inner key={row} style={{ paddingBottom: "16px" }}>
          {row.map(col => (
            <Cell key={col}> {col} </Cell>
          ))}
        </Inner>
      ))}
    </Grid>
  </section>
);
