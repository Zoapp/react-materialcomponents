/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import {
  Grid, Inner, Cell, Button,
  Card, CardText, CardActions, CardMedia,
} from "../../../src/libs";

const head = [
  "Name", "Type", "Desc",
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

export default () => (
  <section>
    <h1>Card examples</h1>
    <Grid>
      <Inner>
        <Cell>
          <Card title="Title" subTitle="subtitle">
            <CardText>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
            </CardText>
            <CardActions><Button>Ok</Button><Button>Cancel</Button></CardActions>
          </Card>
        </Cell>
        <Cell>
          <Card title="Title" largeTitle>
            <CardMedia src="https://material-components-web.appspot.com/images/1-1.jpg" />
            <CardActions><Button>Ok</Button><Button>Cancel</Button></CardActions>
          </Card>
        </Cell>
        <Cell>
          <Card title="Title" horizontalBlock>
            <CardMedia src="https://material-components-web.appspot.com/images/1-1.jpg" />
            <CardActions><Button>Ok</Button><Button>Cancel</Button></CardActions>
          </Card>
        </Cell>
      </Inner>
    </Grid>
    <h2>Card properties</h2>
    <Grid>
      <Inner>
        {head.map(title => (
          <Cell key={title}>{title}</Cell>
        ))}
      </Inner>
      {CardProperties.map((row, idx) => (
        // eslint-disable-next-line
        <Inner key={idx} style={{ paddingBottom: "16px" }}>
          {row.map(col => (
            <Cell key={col}> {col} </Cell>
          ))}
        </Inner>
      ))}
    </Grid>
    <h2>Card Actions properties</h2>
    <Grid>
      <Inner>
        {head.map(title => (
          <Cell key={title}>{title}</Cell>
        ))}
      </Inner>
      {CardActionsProperties.map((row, idx) => (
        // eslint-disable-next-line
        <Inner key={idx} style={{ paddingBottom: "16px" }}>
          {row.map(col => (
            <Cell key={col}> {col} </Cell>
          ))}
        </Inner>
      ))}
    </Grid>
    <h2>Card Header properties</h2>
    <Grid>
      <Inner>
        {head.map(title => (
          <Cell key={title}>{title}</Cell>
        ))}
      </Inner>
      {CardHeaderProperties.map((row, idx) => (
        // eslint-disable-next-line
        <Inner key={idx} style={{ paddingBottom: "16px" }}>
          {row.map(col => (
            <Cell key={col}> {col} </Cell>
          ))}
        </Inner>
      ))}
    </Grid>
    <h2>Card Media properties</h2>
    <Grid>
      <Inner>
        {head.map(title => (
          <Cell key={title}>{title}</Cell>
        ))}
      </Inner>
      {CardMediaProperties.map((row, idx) => (
        // eslint-disable-next-line
        <Inner key={idx} style={{ paddingBottom: "16px" }}>
          {row.map(col => (
            <Cell key={col}> {col} </Cell>
          ))}
        </Inner>
      ))}
    </Grid>
    <h2>Card Text properties</h2>
    <Grid>
      <Inner>
        {head.map(title => (
          <Cell key={title}>{title}</Cell>
        ))}
      </Inner>
      {CardTextProperties.map((row, idx) => (
        // eslint-disable-next-line
        <Inner key={idx} style={{ paddingBottom: "16px" }}>
          {row.map(col => (
            <Cell key={col}> {col} </Cell>
          ))}
        </Inner>
      ))}
    </Grid>
    <h2>Card Title properties</h2>
    <Grid>
      <Inner>
        {head.map(title => (
          <Cell key={title}>{title}</Cell>
        ))}
      </Inner>
      {CardTitleProperties.map((row, idx) => (
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
