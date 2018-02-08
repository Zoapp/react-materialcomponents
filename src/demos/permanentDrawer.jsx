/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import {
  Content,
  Drawer, DrawerContent,
  ListItem,
} from "../../src";


export default (header, main, footer) => (
  <Content fixed>
    {header}
    <Content fixed toolbarAdjust>
      <Drawer>
        <DrawerContent list>
          <ListItem type="a" icon="inbox" activated>Inbox</ListItem>
          <ListItem type="a" icon="star">Star</ListItem>
        </DrawerContent>
      </Drawer>
      {main}
    </Content>
    {footer}
  </Content>
);
