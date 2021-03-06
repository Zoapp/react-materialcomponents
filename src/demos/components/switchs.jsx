/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import { Switch } from "../../../src/libs";

const Switches = () => (
  <section>
    <h1>Switch examples </h1>
    <div style={{ padding: "16px" }}>
      <Switch id="1" label="switch 1" checked derivedState />
    </div>
    <div style={{ padding: "16px" }}>
      <Switch id="2" label="switch 2" checked disabled />
    </div>
    <div style={{ padding: "16px" }}>
      <Switch id="3" label="switch 3" derivedState />
    </div>
  </section>
);

export default Switches;
