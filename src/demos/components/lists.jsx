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
  Grid,
  Inner,
  Cell,
} from "../../../src/libs";


const head = [
  "Name", "Type", "Desc",
];

const ListProperties = [
  ["children", "node", "These are usually ListItems that are passed to be part of the list."],
  ["style", "object", "Override the inline-styles of the root element."],
];

const ListItemProperties = [
  ["autoGenerateNestedIndicator", "bool", "If true,  generate a nested-list-indicator icon when nested list items are detected. Note that an indicator will not be created if a rightIcon or rightIconButton has been provided to the element."],
  ["children", "node", "Children passed into the ListItem."],
  ["containerElement", "union:stringelement'span'", "The element to use as the container for the ListItem. Either a string to use a DOM element or a ReactElement. This is useful for wrapping the ListItem in a custom Link component. If a ReactElement is given,  ensure that it passes all of its given props through to the underlying DOM element and renders its children prop for proper integration."],
  ["disableKeyboardFocus", "bool", "If true,  the element will not be able to be focused by the keyboard."],
  ["disabled", "bool", "If true,  the element will not be clickable and will not display hover effects. This is automatically disabled if either leftCheckbox or rightToggle is set."],
  ["hoverColor", "string", "Override the hover background color."],
  ["initiallyOpen", "bool", "If true,  the nested ListItems are initially displayed."],
  ["innerDivStyle", "object", "Override the inline-styles of the inner div element."],
  ["insetChildren", "bool", "If true,  the children will be indented by 72px. This is useful if there is no left avatar or left icon."],
  ["isKeyboardFocused", "bool", "Use to control if the list item should render as keyboard focused. If undefined (default),  this will be automatically managed. If provided,  it will change the components style. Note that this will not change the actual focus - and should only be used when you want to simulate keyboard focus (eg. in a rich text input autocomplete)."],
  ["leftAvatar", "element", "This is the Avatar element to be displayed on the left side."],
  ["leftCheckbox", "element", "This is the Checkbox element to be displayed on the left side."],
  ["leftIcon", "element", "This is the SvgIcon or FontIcon to be displayed on the left side."],
  ["nestedItems", "arrayOf", "An array of ListItems to nest underneath the current ListItem."],
  ["nestedLevel", "number", "Controls how deep a ListItem appears. This property is automatically managed,  so modify at your own risk."],
  ["nestedListStyle", "object", "Override the inline-styles of the nested items' NestedList."],
  ["onClick", "function", "Callback function fired when the list item is clicked.Signature: function(event: object) => void event: Click event targeting the list item."],
  ["onKeyboardFocus", "function", "Callback function fired when the ListItem is focused or blurred by the keyboard. Signature: function(event: object,  isKeyboardFocused: boolean) => void event: focus or blur event targeting the ListItem. isKeyboardFocused: If true,  the ListItem is focused."],
  ["onNestedListToggle", "function", "Callback function fired when the ListItem toggles its nested list.Signature: function(listItem: object) => voidlistItem: The ListItem."],
  ["open", "bool", "Control toggle state of nested list."],
  ["primaryText", "node", "This is the block element that contains the primary text. If a string is passed in,  a div tag will be rendered."],
  ["primaryTogglesNestedList", "bool", "If true,  clicking or tapping the primary text of the ListItem toggles the nested list."],
  ["rightAvatar", "element", "This is the Avatar element to be displayed on the right side."],
  ["rightIcon", "element", "This is the SvgIcon or FontIcon to be displayed on the right side."],
  ["rightIconButton", "element", "This is the IconButton to be displayed on the right side. Hovering over this button will remove the ListItem hover. Also,  clicking on this button will not trigger a ripple on the ListItem; the event will be stopped and prevented from bubbling up to cause a ListItem click."],
  ["rightToggle", "element", "This is the Toggle element to display on the right side."],
  ["secondaryText", "node", "This is the block element that contains the secondary text. If a string is passed in,  a div tag will be rendered."],
  ["secondaryTextLines", "enum:1, 2", "Can be 1 or 2. This is the number of secondary text lines before ellipsis will show."],
  ["style", "object", "Override the inline-styles of the root element."],
];

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
    <Grid>
      <Inner>
        {head.map(title => (
          <Cell key={title}>{title}</Cell>
        ))}
      </Inner>
      {ListProperties.map((row, idx) => (
        // eslint-disable-next-line
        <Inner key={idx} style={{ paddingBottom: "16px" }}>
          {row.map(col => (
            <Cell key={col}> {col} </Cell>
          ))}
        </Inner>
      ))}
    </Grid>
    <h2>List Item Properties</h2>
    <Grid>
      <Inner>
        {head.map(title => (
          <Cell key={title}>{title}</Cell>
        ))}
      </Inner>
      {ListItemProperties.map((row, idx) => (
        // eslint-disable-next-line
        <Inner key={idx} style={{ paddingBottom: "16px" }}>
          {row.map(col => (
            <Cell key={col}> {col} </Cell>
          ))}
        </Inner>
      ))}
    </Grid>
  </section>
);
