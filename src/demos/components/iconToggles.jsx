/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import { IconToggle } from "../../../src/libs";
import Property from "./property";

const IconToggles = () => (
  <section>
    <h1>Toggle examples </h1>
    <div style={{ padding: "16px" }}>
      <IconToggle name="favorite" nameOff="favorite_border" />
    </div>
    <h2>Toogle properties</h2>
    <Property name="Toogle" />
  </section>
);

export default IconToggles;
