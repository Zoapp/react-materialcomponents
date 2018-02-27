/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import { Radio } from "../../../src/libs";
import Property from "./properties";

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
    <h2>Properties:</h2>
    <Property name="Radio" />
  </section>
);
