/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import {
  Button
} from "../../../src/libs";


  const button_property = {
     name:[
      "backgroundColor",
      "children",
      "className",
      "containerElement",
      "disableTouchRipple",
      "disabled",
      "fullWidth",
      "hoverColor",
      "href",
      "icon",
      "label",
      "labelPosition",
      "labelStyle",
      "onClick",
      "onKeyboardFocus",
      "primary",
      "rippleColor",
      "secondary",
      "style"
    ],
    type: [
      "string",
      "node",
      "string",
      ("union:",
        "string",
        "element"
      ),
      "bool",
      "bool",
      "bool",
      "string",
      "string",
      "node",
      "validateLabel",
      ("enum:",
       "'before'",
       "'after'"
      ),
      "object",
      "function",
      "function",
      "bool",
      "string",
      "bool",
      "object",
    ],
    desc:[
    `Color of button when mouse is not hovering over it.`,
    `This is what will be displayed inside the button. If a label is specified, the text within the label prop will be displayed. Otherwise, the component will expect children which will then be displayed. (In our example, we are nesting an <input type="file" /> and a span that acts as our label to be displayed.) This only applies to flat and raised buttons.`,
    `The CSS class name of the root element.`,
    `The element to use as the container for the FlatButton. Either a string to use a DOM element or a ReactElement. This is useful for wrapping the FlatButton in a custom Link component. If a ReactElement is given, ensure that it passes all of its given props through to the underlying DOM element and renders its children prop for proper integration.`,
    `If true, the element's ripple effect will be disabled.`,
    `Disables the button if set to true.`,
    `If true, the button will take up the full width of its container.`,
    `Color of button when mouse hovers over.`,
    `The URL to link to when the button is clicked.`,
    `Use this property to display an icon.`,
    `Label for the button.`,
    `Place label before or after the passed children.`,
    `Override the inline-styles of the button's label element.`,
    `Callback function fired when the button is clicked. // Signature: // function(event: object) => void // event: Click event targeting the button.`,
    `Callback function fired when the element is focused or blurred by the keyboard. // Signature: // function(event: object, isKeyboardFocused: boolean) => void // event: focus or blur event targeting the element. // isKeyboardFocused: Indicates whether the element is focused.`,
    `If true, colors button according to primaryTextColor from the Theme.`,
    `Color for the ripple after button is clicked.`,
    `If true, colors button according to secondaryTextColor from the theme. The primary prop has precendent if set to true.`,
    `Override the inline-styles of the root element.`
    ]
  }

  for (var i = 0; i < button_property.name.length; i++) {
    console.log(button_property.name[i])
  }

  var head = [
      'Name', 'Type', 'Desc'
  ];

  var body = [
    ["backgroundColor","string","Color of button when mouse is not hovering over it."],
    ["children","node",`This is what will be displayed inside the button. If a label is specified, the text within the label prop will be displayed. Otherwise, the component will expect children which will then be displayed. (In our example, we are nesting an <input type="file" /> and a span that acts as our label to be displayed.) This only applies to flat and raised buttons.`],
    ["className","string",`The CSS class name of the root element.`],
    ["containerElement",("union:","string","element"),`The element to use as the container for the FlatButton. Either a string to use a DOM element or a ReactElement. This is useful for wrapping the FlatButton in a custom Link component. If a ReactElement is given, ensure that it passes all of its given props through to the underlying DOM element and renders its children prop for proper integration.`],
    ["disableTouchRipple","bool",`If true, the element's ripple effect will be disabled.`],
    ["disabled","bool",`Disables the button if set to true.`],
    ["fullWidth","bool",`If true, the button will take up the full width of its container.`],
    ["hoverColor","string",`Color of button when mouse hovers over.`],
    ["href","string",`The URL to link to when the button is clicked.`],
    ["icon","node",`Use this property to display an icon.`],
    ["label","validateLabel  ",`Label for the button.`],
    ["labelPosition",  ("enum:","'before'","'after'"),`Place label before or after the passed children.`],
    ["labelStyle","object",`Override the inline-styles of the button's label element.`],
    ["onClick","function",`Callback function fired when the button is clicked. // Signature: // function(event: object) => void // event: Click event targeting the button.`],
    ["onKeyboardFocus","function",`Callback function fired when the element is focused or blurred by the keyboard. // Signature: // function(event: object, isKeyboardFocused: boolean) => void // event: focus or blur event targeting the element. // isKeyboardFocused: Indicates whether the element is focused.`],
    ["primary",  "bool",`If true, colors button according to primaryTextColor from the Theme.`],
    ["rippleColor",  "string",`Color for the ripple after button is clicked.`],
    ["secondary",  "bool",`If true, colors button according to secondaryTextColor from the theme. The primary prop has precendent if set to true.`],
    ["style","object",`Override the inline-styles of the root element.`]
  ];

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
    <table className="MyClassName">
      <thead>
        <tr>
          {head.map(title =>
            <th key={title}>{title}</th>
          )}
        </tr>
      </thead>
      <tbody>
        {body.map((row, i) =>
          <tr key={i}>
            {row.map((col, j) =>          
              <td key={j} className={row}>{col}</td>
            )}
            <p>{<br/>}</p>
          </tr>
        )}
      </tbody>
    </table>
  </section> 
);
