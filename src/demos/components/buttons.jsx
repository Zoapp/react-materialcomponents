/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import { Button } from "../../../src/libs";
import Property from "./properties";


export default () => (
  <section>
    <h1>Button examples</h1>

    <div>
      <div style={{ padding: "16px" }}>
        <Button>Hello</Button>
      </div>
      <div style={{ padding: "16px" }}>
        <Button raised icon="favorite">Hello</Button>
      </div>
      <div style={{ padding: "16px" }}>
        <Button raised>Hello</Button>
      </div>
      <div style={{ padding: "16px" }}>
        <Button raised disabled>Hello</Button>
      </div>
      <div style={{ padding: "16px" }}>
        <Button unelevated compact secondary>Hello</Button>
      </div>
      <div style={{ padding: "16px" }}>
        <Button stroked dense>Hello</Button>
      </div>
      <div style={{ padding: "16px" }}>
        <Button raised link="#">Hello</Button>
      </div>
    </div>

    <h2>Properties:</h2>
    <Property name="Button" />
  </section>
);
