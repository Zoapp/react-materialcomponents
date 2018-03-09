/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import { Slider } from "../../../src/libs";
import Property from "./property";

const Sliders = () => (
  <section>
    <h1>Slider examples </h1>
    <div style={{ padding: "16px" }}>
      <Slider label="slider 1" />
    </div>
    <div style={{ padding: "16px" }}>
      <Slider label="slider 2" discrete disabled />
    </div>
    <div style={{ padding: "16px" }}>
      <Slider label="slider 3" discrete max={256} value={20} displayMarker />
    </div>
    <h2>Slider Properties</h2>
    <Property name="Slider" />
  </section>
);

export default Sliders;
