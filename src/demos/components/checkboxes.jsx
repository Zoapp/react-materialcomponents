/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import { Checkbox } from "../../../src/libs";
import Property from "./properties";

export default () => (
  <section>
    <h1>Checkbox examples </h1>
    <div style={{ padding: "16px" }}>
      <Checkbox id="1" label="label" checked />
    </div>
    <div style={{ padding: "16px" }}>
      <Checkbox id="2" label="label" checked disabled />
    </div>
    <div style={{ padding: "16px" }}>
      <Checkbox id="3" label="label" indeterminate />
    </div>
    <h2>Checkbox Properties</h2>
    <Property name="Checkbox" />
  </section>
);
