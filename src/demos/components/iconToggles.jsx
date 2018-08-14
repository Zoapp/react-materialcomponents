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
    <div style={{ display: "flex" }}>
      <div style={{ padding: "16px" }}>
        <IconToggle name="favorite" off="favorite_border" derivedState />
      </div>
      <div style={{ padding: "16px" }}>
        <IconToggle
          derivedState
          off={
            <svg viewBox="0 0 24 24">
              <path
                fill="#000000"
                d="M2,21V19H20V21H2M20,8V5H18V8H20M20,3A2,2 0 0,1 22,5V8A2,2 0 0,1 20,10H18V13A4,4 0 0,1 14,17H8A4,4 0 0,1 4,13V3H20M16,5H6V13A2,2 0 0,0 8,15H14A2,2 0 0,0 16,13V5Z"
              />
            </svg>
          }
        >
          <svg viewBox="0 0 24 24">
            <path
              fill="#000000"
              d="M2,21H20V19H2M20,8H18V5H20M20,3H4V13A4,4 0 0,0 8,17H14A4,4 0 0,0 18,13V10H20A2,2 0 0,0 22,8V5C22,3.89 21.1,3 20,3Z"
            />
          </svg>
        </IconToggle>
      </div>
      <div style={{ padding: "16px" }}>
        <IconToggle fa="angry" derivedState />
      </div>
    </div>
    <h2>Toogle properties</h2>
    <Property name="Toogle" derivedState />
  </section>
);

export default IconToggles;
