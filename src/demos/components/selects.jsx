/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import {
  Select, MenuItem, Grid, Inner, Cell,
} from "../../../src/libs";

const head = [
  "Name", "Type", "Desc",
];

const SelectfieldProperties = [
  ["autoWidth", "bool", "If true,  the width will automatically be set according to the items inside the menu. To control the width in CSS instead,  leave this prop set to false."],
  ["children", "node", "The MenuItem elements to populate the select field with. If the menu items have a label prop,  that value will represent the selected menu item in the rendered select field."],
  ["disabled", "bool", "If true,  the select field will be disabled."],
  ["dropDownMenuProps", "object", "Object that can handle and override any property of component DropDownMenu."],
  ["errorStyle", "object", "Override the inline-styles of the error element."],
  ["errorText", "node", "The error content to display."],
  ["floatingLabelFixed", "bool", "If true,  the floating label will float even when no value is selected."],
  ["floatingLabelStyle", "object", "Override the inline-styles of the floating label."],
  ["floatingLabelText", "node", "The content of the floating label."],
  ["fullWidth", "bool", "If true,  the select field will take up the full width of its container."],
  ["hintStyle", "object", "Override the inline-styles of the hint element."],
  ["hintText", "node", "The hint content to display."],
  ["iconStyle", "object", "Override the inline-styles of the icon element."],
  ["id", "string", "The id prop for the text field."],
  ["labelStyle", "object", "Override the label style when the select field is inactive."],
  ["listStyle", "object", "Override the inline-styles of the underlying List element."],
  ["maxHeight", "number", "Override the default max-height of the underlying DropDownMenu element."],
  ["menuItemStyle", "object", "Override the inline-styles of menu items."],
  ["menuStyle", "object", "Override the inline-styles of the underlying DropDownMenu element."],
  ["multiple", "bool", "If true,  value must be an array and the menu will support multiple selections."],
  ["onChange", "function", "Callback function fired when a menu item is selected. Signature: function(event: object,  key: number,  payload: any) => void event: Click event targeting the menu item that was selected. key: The index of the selected menu item,  or undefined if multiple is true. payload: If multiple is true,  the menu's value array with either the menu item's value added (if it wasn't already selected) or omitted (if it was already selected). Otherwise,  the value of the menu item."],
  ["selectedMenuItemStyle", "object", "Override the inline-styles of selected menu items."],
  ["selectionRenderer", "function", "Customize the rendering of the selected item. Signature: function(value: any,  menuItem: any) => void value: If multiple is true,  the menu's value array with either the menu item's value added (if it wasn't already selected) or omitted (if it was already selected). Otherwise,  the value of the menu item. menuItem: The selected MenuItem. If multiple is true,  this will be an array with the MenuItems matching the values parameter."],
  ["style", "object", "Override the inline-styles of the root element."],
  ["underlineDisabledStyle", "object", "Override the inline-styles of the underline element when the select field is disabled."],
  ["underlineFocusStyle", "object", "Override the inline-styles of the underline element when the select field is focused."],
  ["underlineStyle", "object", "Override the inline-styles of the underline element."],
  ["value", "any", "If multiple is true, an array of the values of the selected menu items. Otherwise, the value of the selected menu item. If provided, the menu will be a controlled component."],
];

export default () => (
  <section>
    <h1>Select examples </h1>
    <div style={{ padding: "16px" }}>
      <Select label="Pick a Food Group" >
        <MenuItem>read, Cereal, Rice, and Pasta</MenuItem>
        <MenuItem>Vegetables</MenuItem>
        <MenuItem>Fruit</MenuItem>
        <MenuItem>Milk, Yogurt, and Cheese</MenuItem>
        <MenuItem>Meat, Poultry, Fish, Dry Beans, Eggs, and Nuts</MenuItem>
        <MenuItem>Fats, Oils, and Sweets</MenuItem>
      </Select>
    </div>
    <h2>SelectField Properties</h2>
    <Grid>
      <Inner>
        {head.map(title => (
          <Cell key={title}>{title}</Cell>
        ))}
      </Inner>
      {SelectfieldProperties.map((row, idx) => (
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
