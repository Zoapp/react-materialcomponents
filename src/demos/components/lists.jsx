/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import {
  ListGroup,
  ListGroupSubheader,
  List,
  ListItem,
  ListDivider,
  ListItemMeta,
} from "../../../src/libs";
import Property from "./property";

export default () => (
  <section>
    <h1>List examples</h1>
    <div>
      <ListGroup>
        <ListGroupSubheader>header1</ListGroupSubheader>
        <List>
          <ListItem>item1</ListItem>
          <ListItem>item2</ListItem>
          <ListDivider />
          <ListItem>item3</ListItem>
          <ListItem>item4</ListItem>
        </List>
        <ListDivider type="hr" />
        <ListGroupSubheader>header2</ListGroupSubheader>
        <List>
          <ListItem>item1</ListItem>
          <ListItem>item2</ListItem>
          <ListDivider />
          <ListItem>item3</ListItem>
          <ListItem>item4</ListItem>
        </List>
      </ListGroup>
    </div>
    <div style={{ padding: "16px" }}>
      <List avatar>
        <ListItem imgSrc="https://material-components-web.appspot.com/images/animal3.svg" imgSize={56} imgLabel="Brown Bear">
          Brown Bear
          <ListItemMeta icon="favorite" color="#ff4081" />
        </ListItem>
        <ListItem imgSrc="https://material-components-web.appspot.com/images/animal1.svg" imgSize={56} imgLabel="Panda">
          Panda
          <ListItemMeta icon="favorite_border" color="#ff4081" />
        </ListItem>
        <ListItem imgSrc="https://material-components-web.appspot.com/images/animal2.svg" imgSize={56} imgLabel="Sloth">
          Sloth
          <ListItemMeta icon="favorite_border" color="#ff4081" />
        </ListItem>
      </List>
    </div>
    <div style={{ padding: "16px" }}>
      <List twoLine>
        <ListItem secondaryText="Secondary text">
          Two-line item
          <ListItemMeta>$10.00</ListItemMeta>
        </ListItem>
        <ListItem secondaryText="Secondary text">
          Two-line item
          <ListItemMeta>$20.00</ListItemMeta>
        </ListItem>
        <ListItem secondaryText="Secondary text">
          Two-line item
          <ListItemMeta>$30.00</ListItemMeta>
        </ListItem>
      </List>
    </div>
    <h2>List Properties</h2>
    <Property name="List" />
  </section>
);
