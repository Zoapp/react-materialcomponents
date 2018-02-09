/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import {
  LinearProgress,
} from "../../../src/libs";

export default () => (
  <section>
    <h1>LinearProgress examples </h1>
    <LinearProgress progress={0.2} buffer={0.5} />
  </section>
);
