/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import {
  Button , Menu, MenuItem, MenuDivider,
} from "../../../src/libs";

export default () => (
  <section>
    <h1>Menus examples </h1>
    <div style={{ padding: "16px" }}>
      <Button
        raised
        menu={
          <Menu>
            <MenuItem>Back</MenuItem>
            <MenuItem disabled>Forward</MenuItem>
            <MenuDivider />
            <MenuItem>Help</MenuItem>
          </Menu>}
      >
        Show menu
      </Button>
    </div>
  </section>
);
