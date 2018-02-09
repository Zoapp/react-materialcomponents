/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import {
  Checkbox,
} from "../../../src/libs";

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
  </section>
);
