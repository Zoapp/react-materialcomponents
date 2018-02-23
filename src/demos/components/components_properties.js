const head = [
  "Name", "Type", "Desc",
];

const ButtonsProperties = [
  ["backgroundColor", "string", "Color of button when mouse is not hovering over it."],
  ["children", "node", "This is what will be displayed inside the button. If a label is specified, the text within the label prop will be displayed. Otherwise, the component will expect children which will then be displayed. (In our example, we are nesting an <input type=\"file\" /> and a span that acts as our label to be displayed.) This only applies to flat and raised buttons."],
  ["className", "string", "The CSS class name of the root element."],
  ["containerElement", ("union:", "string", "element"), "The element to use as the container for the FlatButton. Either a string to use a DOM element or a ReactElement. This is useful for wrapping the FlatButton in a custom Link component. If a ReactElement is given, ensure that it passes all of its given props through to the underlying DOM element and renders its children prop for proper integration."],
  ["disableTouchRipple", "bool", "If true, the element's ripple effect will be disabled."],
  ["disabled", "bool", "Disables the button if set to true."],
  ["fullWidth", "bool", "If true, the button will take up the full width of its container."],
  ["hoverColor", "string", "Color of button when mouse hovers over."],
  ["href", "string", "The URL to link to when the button is clicked."],
  ["icon", "node", "Use this property to display an icon."],
  ["label", "validateLabel  ", "Label for the button."],
  ["labelPosition", ("enum:", "'before'", "'after'"), "Place label before or after the passed children."],
  ["labelStyle", "object", "Override the inline-styles of the button's label element."],
  ["onClick", "function", "Callback function fired when the button is clicked. // Signature: // function(event: object) => void // event: Click event targeting the button."],
  ["onKeyboardFocus", "function", "Callback function fired when the element is focused or blurred by the keyboard. // Signature: // function(event: object, isKeyboardFocused: boolean) => void // event: focus or blur event targeting the element. // isKeyboardFocused: Indicates whether the element is focused."],
  ["primary", "bool", "If true, colors button according to primaryTextColor from the Theme."],
  ["rippleColor", "string", "Color for the ripple after button is clicked."],
  ["secondary", "bool", "If true, colors button according to secondaryTextColor from the theme. The primary prop has precendent if set to true."],
  ["style", "object", "Override the inline-styles of the root element."],
];


const CardProperties = [
  ["children", "node", "Can be used to render elements inside the Card."],
  ["containerStyle", "object", "Override the inline-styles of the container element."],
  ["expandable", "bool", "If true,  this card component is expandable. Can be set on any child of the Card component."],
  ["expanded", "bool", "Whether this card is expanded. If true or false the component is controlled. if null the component is uncontrolled."],
  ["initiallyExpanded", "bool", "Whether this card is initially expanded."],
  ["onExpandChange", "function", "Callback function fired when the expandable state of the card has changed. Signature: function(newExpandedState: boolean) => void  newewExpandedState: Represents the new expanded state of the card."],
  ["showExpandableButton", "bool", "If true,  this card component will include a button to expand the card. CardTitle,  CardHeader and CardActions implement showExpandableButton. Any child component of Card can implements showExpandableButton or forwards the property to a child component supporting it."],
  ["style", "object", "Override the inline-styles of the root element."],
];

const CardActionsProperties = [
  ["actAsExpander", "bool", "If true,  a click on this card component expands the card."],
  ["children", "node", "Can be used to render elements inside the Card Action."],
  ["expandable", "bool", "If true,  this card component is expandable."],
  ["showExpandableButton", "bool", "If true,  this card component will include a button to expand the card."],
  ["style", "object", "Override the inline-styles of the root element."],
];

const CardHeaderProperties = [
  ["actAsExpander", "bool", "If true,  a click on this card component expands the card."],
  ["avatar", "node", "This is the Avatar element to be displayed on the Card Header. If avatar is an Avatar or other element,  it will be rendered. If avatar is a string,  it will be used as the image src for an Avatar."],
  ["children", "node", "Can be used to render elements inside the Card Header."],
  ["closeIcon", "node", "Can be used to pass a closeIcon if you don't like the default expandable close Icon."],
  ["expandable", "bool", "If true,  this card component is expandable."],
  ["iconStyle", "object", "Override the iconStyle of the Icon Button."],
  ["openIcon", "node", "Can be used to pass a openIcon if you don't like the default expandable open Icon."],
  ["showExpandableButton", "bool", "If true,  this card component will include a button to expand the card."],
  ["style", "object", "Override the inline-styles of the root element."],
  ["subtitle", "node", "Can be used to render a subtitle in Card Header."],
  ["subtitleColor", "string", "Override the subtitle color."],
  ["subtitleStyle", "object", "Override the inline-styles of the subtitle."],
  ["textStyle", "object", "Override the inline-styles of the text."],
  ["title", "node", "an be used to render a title in Card Header."],
  ["titleColor", "string", "Override the title color."],
  ["titleStyle", "object", "Override the inline-styles of the title."],
];

const CardMediaProperties = [
  ["actAsExpander", "bool", "If true,  a click on this card component expands the card."],
  ["children", "node", "Can be used to render elements inside the Card Media."],
  ["expandable", "bool", "If true,  this card component is expandable."],
  ["mediaStyle", "object", "Override the inline-styles of the Card Media."],
  ["overlay", "node", "Can be used to render overlay element in Card Media."],
  ["overlayContainerStyle", "object", "Override the inline-styles of the overlay container."],
  ["overlayContentStyle", "object", "Override the inline-styles of the overlay content."],
  ["overlayStyle", "object", "Override the inline-styles of the overlay element."],
  ["style", "object", "Override the inline-styles of the root element."],
];

const CardTextProperties = [
  ["actAsExpander", "bool", "If true,  a click on this card component expands the card."],
  ["children", "node", "Can be used to render elements inside the Card Text."],
  ["color", "string", "Override the CardText color."],
  ["expandable", "bool", "If true,  this card component is expandable."],
  ["style", "object", "Override the inline-styles of the root element."],
];

const CardTitleProperties = [
  ["actAsExpander", "bool", "If true,  a click on this card component expands the card."],
  ["children", "node", "Can be used to render elements inside the Card Title."],
  ["closeIcon", "node", "Can be used to pass a closeIcon if you don't like the default expandable close Icon."],
  ["expandable", "bool", "If true,  this card component is expandable."],
  ["showExpandableButton", "bool", "If true,  this card component will include a button to expand the card."],
  ["style", "object", "Override the inline-styles of the root element."],
  ["subtitle", "node", "Can be used to render a subtitle in the Card Title."],
  ["subtitleColor", "string", "Override the subtitle color."],
  ["subtitleStyle", "object", "Override the inline-styles of the subtitle."],
  ["title", "node", "Can be used to render a title in the Card Title."],
  ["titleColor", "string", "Override the title color."],
  ["titleStyle", "object", "Override the inline-styles of the title."],
];

const CheckboxProperties = [
  ["checked", "bool", "Checkbox is checked if true."],
  ["checkedIcon", "element", "The SvgIcon to use for the checked state. This is useful to create icon toggles."],
  ["defaultChecked", "bool", "The default state of our checkbox component. Warning: This cannot be used in conjunction with checked. Decide between using a controlled or uncontrolled input element and remove one of these props."],
  ["disabled", "bool", "Disabled if true."],
  ["iconStyle", "object", "Overrides the inline-styles of the icon element."],
  ["inputStyle", "object", "Overrides the inline-styles of the input element."],
  ["labelPosition", "enum:'left', 'right', 'right'", "Where the label will be placed next to the checkbox."],
  ["labelStyle", "object", "Overrides the inline-styles of the Checkbox element label."],
  ["onCheck", "function", "Callback function that is fired when the checkbox is checked.Signature: function(event: object,  isInputChecked: boolean) => void event: change event targeting the underlying checkbox input. isInputChecked: The checked value of the underlying checkbox input."],
  ["style", "object", "Override the inline-styles of the root element."],
  ["uncheckedIcon", "element", "The SvgIcon to use for the unchecked state. This is useful to create icon toggles."],
  ["valueLink", "object", "ValueLink for when using controlled checkbox."],
];

const GridListProperties = [
  ["cellHeight", "union:number", "Number of px for one cell height. You can set 'auto' if you want to let the children determine the height."],
  ["children", "node", "Grid Tiles that will be in Grid List."],
  ["cols", "number", "Number of columns."],
  ["padding", "number", "Number of px for the padding/spacing between items."],
  ["style", "object", "Override the inline-styles of the root element."],
];

const GridTileProperties = [
  ["actionIcon", "element", "An IconButton element to be used as secondary action target (primary action target is the tile itself)."],
  ["actionPosition", "enum:'left', 'right', 'right'", "Position of secondary action IconButton."],
  ["children", "node", "Theoretically you can pass any node as children,  but the main use case is to pass an img,  in whichcase GridTile takes care of making the image 'cover' available space (similar to background-size: cover or to object-fit:cover)."],
  ["cols", "number", "Width of the tile in number of grid cells."],
  ["containerElement", "union:string, element, 'div'", "Either a string used as tag name for the tile root element,  or a ReactElement. This is useful when you have,  for example,  a custom implementation of a navigation link (that knows about your routes) and you want to use it as the primary tile action. In case you pass a ReactElement,  please ensure that it passes all props,  accepts styles overrides and render it's children."],
  ["rows", "number", "Height of the tile in number of grid cells."],
  ["style", "object", "Override the inline-styles of the root element."],
  ["subtitle", "node", "String or element serving as subtitle (support text)."],
  ["subtitleStyle", "object", "Override the inline-styles of the subtitle element."],
  ["title", "node", "Title to be displayed on tile."],
  ["titleBackground", "string", "Style used for title bar background. Useful for setting custom gradients for example"],
  ["titlePosition", "enum: 'top', 'bottom', 'bottom'", "Position of the title bar (container of title,  subtitle and action icon)."],
  ["titleStyle", "object", "Override the inline-styles of the title element."],
];

const ToogleProperties = [
  ["defaultToggled", "bool", "Determines whether the Toggle is initially turned on. Warning: This cannot be used in conjunction with toggled. Decide between using a controlled or uncontrolled input element and remove one of these props."],
  ["disabled", "bool", "Will disable the toggle if true."],
  ["elementStyle", "object", "Overrides the inline-styles of the Toggle element."],
  ["iconStyle", "object", "Overrides the inline-styles of the Icon element."],
  ["inputStyle", "object", "Overrides the inline-styles of the input element."],
  ["label", "node", "Label for toggle."],
  ["labelPosition", "enum:'left', 'right', 'left'", "Where the label will be placed next to the toggle."],
  ["labelStyle", "object", "Overrides the inline-styles of the Toggle element label."],
  ["onToggle", "function", "Callback function that is fired when the toggle switch is toggled. Signature: function(event: object,  isInputChecked: bool) => void event: Change event targeting the toggle. isInputChecked: The new value of the toggle."],
  ["rippleStyle", "object", "Override style of ripple."],
  ["style", "object", "Override the inline-styles of the root element."],
  ["thumbStyle", "object", "Override style for thumb."],
  ["thumbSwitchedStyle", "object", "Override the inline styles for thumb when the toggle switch is toggled on."],
  ["toggled", "bool", "Toggled if set to true."],
  ["trackStyle", "object", "Override style for track."],
  ["trackSwitchedStyle", "object", "Override the inline styles for track when the toggle switch is toggled on."],
  ["valueLink", "object", "ValueLink prop for when using controlled toggle."],
];

const LinearProperties = [
  ["color", "string", "The color of the progress bar,  defaults to primary color of theme."],
  ["max", "number", "The max value of progress,  only works in determinate mode."],
  ["min", "number", "The min value of progress,  only works in determinate mode."],
  ["mode", "enum:'determinate', 'indeterminate', 'indeterminate'", "The mode of show your progress,  indeterminate for when there is no value for progress."],
  ["style", "object", "Override the inline-styles of the root element."],
  ["value", "number", "The value of progress, only works in determinate mode."],
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

const RadioButtonProperties = [
  ["checkedIcon", "element", "The icon element to show when the radio button is checked."],
  ["disabled", "bool", "If true,  the radio button is disabled."],
  ["iconStyle", "object", "Override the inline-styles of the icon element."],
  ["inputStyle", "object", "Override the inline-styles of the input element."],
  ["labelStyle", "object", "Override the inline-styles of the label element."],
  ["style", "object", "Override the inline-styles of the root element."],
  ["uncheckedIcon", "element", "The icon element to show when the radio button is unchecked."],
  ["value", "any", "The value of the radio button."],
];

const RadioButtonGroupProperties = [
  ["children", "node", "Should be used to pass RadioButton components."],
  ["className", "string", "The CSS class name of the root element."],
  ["defaultSelected", "any", "The value property of the radio button that will be selected by default. This takes precedence over the checked property of the RadioButton elements."],
  ["labelPosition", "enum:'left', 'right'", "Where the label will be placed for all child radio buttons. This takes precedence over the labelPosition property of the RadioButton elements."],
  ["name", "string", "The name that will be applied to all child radio buttons."],
  ["onChange", "function", "Callback function that is fired when a radio button has been checked.Signature: function(event: object,  value: undefined) => void event: change event targeting the selected radio button. value: The value of the selected radio button."],
  ["style", "object", "Override the inline-styles of the root element."],
  ["valueSelected", "any", "The value of the currently selected radio button."],
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

const SliderProperties = [
  ["axis", "enum: 'x',  'x-reverse',  'y',  'y-reverse',  'x'", "The axis on which the slider will slide."],
  ["defaultValue", "valueInRangePropType", "The default value of the slider."],
  ["disableFocusRipple", "bool", "Disables focus ripple if set to true."],
  ["disabled", "bool", "If true,  the slider will not be interactable."],
  ["max", "minMaxPropType", "The maximum value the slider can slide to on a scale from 0 to 1 inclusive. Cannot be equal to min."],
  ["min", "minMaxPropType", "The minimum value the slider can slide to on a scale from 0 to 1 inclusive. Cannot be equal to max."],
  ["name", "string", "The name of the slider. Behaves like the name attribute of an input element."],
  ["onChange", "function", "Callback function that is fired when the slider's value changed. Signature: function(event: object,  newValue: number) => void event: KeyDown event targeting the slider. newValue: The new value of the slider."],
  ["onDragStart", "function", "Callback function that is fired when the slider has begun to move. Signature: function(event: object) => void event: MouseDown or TouchStart event targeting the slider."],
  ["onDragStop", "function", "Callback function that is fired when the slide has stopped moving. Signature: function(event: object) => void event: MouseEnd or TouchEnd event targeting the slider."],
  ["required", "bool", "Whether or not the slider is required in a form."],
  ["sliderStyle", "object", "Override the inline-styles of the inner slider element."],
  ["step", "number", "The granularity the slider can step through values."],
  ["style", "object", "Override the inline-styles of the root element."],
  ["value", "valueInRangePropType", "The value of the slider."],
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

const TextfieldProperties = [
  ["children", "node", "The textfield extended by this."],
  ["className", "string", "The css class name of the root element."],
  ["defaultValue", "any", "The text string to use for the default value."],
  ["disabled", "bool", "Disables the text field if set to true."],
  ["errorStyle", "object", "The style object to use to override error styles."],
  ["errorText", "node", "The error content to display."],
  ["floatingLabelFixed", "bool", "If true,  the floating label will float even when there is no value."],
  ["floatingLabelFocusStyle", "object", "The style object to use to override floating label styles when focused."],
  ["floatingLabelShrinkStyle", "object", "The style object to use to override floating label styles when shrunk."],
  ["floatingLabelStyle", "object", "The style object to use to override floating label styles."],
  ["floatingLabelText", "node", "The content to use for the floating label element."],
  ["fullWidth", "bool", "If true,  the field receives the property width 100%."],
  ["hintStyle", "object", "Override the inline-styles of the TextField's hint text element."],
  ["hintText", "node", "The hint content to display."],
  ["id", "string", "The id prop for the text field."],
  ["inputStyle", "object", "Override the inline-styles of the TextField's input element. When multiLine is false: define the style of the input element. When multiLine is true: define the style of the container of the textarea."],
  ["multiLine", "bool", "If true,  a textarea element will be rendered. The textarea also grows and shrinks according to the number of lines."],
  ["name", "string", "Name applied to the input."],
  ["onChange", "function", "Callback function that is fired when the textfield's value changes. Signature: function(event: object,  newValue: string) => void event: Change event targeting the text field. newValue: The new value of the text field."],
  ["rows", "number", "Number of rows to display when multiLine option is set to true."],
  ["rowsMax", "number", "Maximum number of rows to display when multiLine option is set to true."],
  ["style", "object", "Override the inline-styles of the root element."],
  ["textareaStyle", "object", "Override the inline-styles of the TextField's textarea element. The TextField use either a textarea or an input,  this property has effects only when multiLine is true."],
  ["type", "string", "Specifies the type of input to display such as 'password' or 'text'."],
  ["underlineDisabledStyle", "object", "Override the inline-styles of the TextField's underline element when disabled."],
  ["underlineFocusStyle", "object", "Override the inline-styles of the TextField's underline element when focussed."],
  ["underlineShow", "bool", "If true,  shows the underline for the text field."],
  ["underlineStyle", "object", "Override the inline-styles of the TextField's underline element."],
  ["value", "any", "The value of the text field."],
];

export {
  head,
  ButtonsProperties,
  CardProperties,
  CardActionsProperties,
  CardHeaderProperties,
  CardMediaProperties,
  CardTextProperties,
  CardTitleProperties,
  CheckboxProperties,
  GridListProperties,
  GridTileProperties,
  ToogleProperties,
  LinearProperties,
  ListProperties,
  ListItemProperties,
  RadioButtonProperties,
  RadioButtonGroupProperties,
  SelectfieldProperties,
  SliderProperties,
  TabsProperties,
  TabProperties,
  TextfieldProperties,
};