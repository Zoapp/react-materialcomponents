/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import { assert } from "chai";
import { Dialog } from "../src/libs/dialog";

describe("Components", () => {
  it("DialogManager", () => {
    const dialog = React.createElement(Dialog, {}, "content");
    assert.isObject(dialog, "Dialog is null");
  });
});
