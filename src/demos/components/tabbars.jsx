/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import {
  Tabbar, Tab, Grid, Inner, Cell,
} from "../../../src/libs";

const head = [
  "Name", "Type", "Desc",
];

const TabsProperties = [
  ["children", "node", "Should be used to pass Tab components."],
  ["className", "string", "The css class name of the root element."],
  ["contentContainerClassName", "string", "The css class name of the content's container."],
  ["contentContainerStyle", "object", "Override the inline-styles of the content's container."],
  ["initialSelectedIndex", "number", "Specify initial visible tab index. If initialSelectedIndex is set but larger than the total amount of specified tabs,  initialSelectedIndex will revert back to default. If initialSelectedIndex is set to any negative value,  no tab will be selected intially."],
  ["inkBarStyle", "object", "Override the inline-styles of the InkBar."],
  ["onChange", "function", "Called when the selected value change."],
  ["style", "object", "Override the inline-styles of the root element."],
  ["tabItemContainerStyle", "object", "Override the inline-styles of the tab-labels container."],
  ["tabTemplate", "function", "Override the default tab template used to wrap the content of each tab element."],
  ["tabTemplateStyle", "object", "Override the inline-styles of the tab template."],
  ["value", "any", "Makes Tabs controllable and selects the tab whose value prop matches this prop."],
];

const TabProperties = [
  ["buttonStyle", "object", "Override the inline-styles of the button element."],
  ["className", "string", "The css class name of the root element."],
  ["icon", "node", "Sets the icon of the tab,  you can pass FontIcon or SvgIcon elements."],
  ["label", "node", "Sets the text value of the tab item to the string specified."],
  ["onActive", "function", "Fired when the active tab changes by touch or tap. Use this event to specify any functionality when an active tab changes. For example - we are using this to route to home when the third tab becomes active. This function will always recieve the active tab as it's first argument."],
  ["style", "object", "Override the inline-styles of the root element."],
  ["value", "any", "If value prop passed to Tabs component, this value prop is also required. It assigns a value to the tab so that it can be selected by the Tabs."],
];

export default () => (
  <section>
    <h1>Tabbar examples </h1>
    <div style={{ padding: "16px" }}>
      <Tabbar>
        <Tab text="tab1" />
        <Tab text="tab2" />
        <Tab text="tab3" />
      </Tabbar>
    </div>
    <h2>Tabs Properties</h2>
    <Grid>
      <Inner>
        {head.map(title => (
          <Cell key={title}>{title}</Cell>
        ))}
      </Inner>
      {TabsProperties.map((row, idx) => (
        // eslint-disable-next-line
        <Inner key={idx} style={{ paddingBottom: "16px" }}>
          {row.map(col => (
            <Cell key={col}> {col} </Cell>
          ))}
        </Inner>
      ))}
    </Grid>
    <h2>Tab Properties</h2>
    <Grid>
      <Inner>
        {head.map(title => (
          <Cell key={title}>{title}</Cell>
        ))}
      </Inner>
      {TabProperties.map((row, idx) => (
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
