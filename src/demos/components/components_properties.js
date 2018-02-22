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
};
