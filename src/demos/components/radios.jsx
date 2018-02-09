/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import {
  Radio,
} from "../../../src/libs";

export default () => (
  <section>
    <h1>Radio examples </h1>
    <div style={{ padding: "16px" }}>
      <Radio label="radio 1" name="r1" checked />
      <Radio label="radio 2" name="r1" />
    </div>
    <div style={{ padding: "16px" }}>
      <Radio label="radio 1" name="r2" checked />
      <Radio label="radio 2" name="r2" />
    </div>
    <div style={{ padding: "16px" }}>
      <Radio label="radio 1" name="r3" checked disabled />
      <Radio label="radio 2" name="r3" disabled />
    </div>
  </section>
);
