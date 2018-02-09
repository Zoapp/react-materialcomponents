/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import {
  Switch,
} from "../../../src/libs";

export default () => (
  <section>
    <h1>Switch examples </h1>
    <div style={{ padding: "16px" }}>
      <Switch label="switch 1" checked />
    </div>
    <div style={{ padding: "16px" }}>
      <Switch label="switch 2" checked disabled />
    </div>
    <div style={{ padding: "16px" }}>
      <Switch label="switch 3" />
    </div>
  </section>
);
