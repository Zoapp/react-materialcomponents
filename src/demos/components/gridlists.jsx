/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import {
  GridList, Tile, Grid, Inner, Cell,
} from "../../../src/libs";

const head = [
  "Name", "Type", "Desc",
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

export default () => (
  <section>
    <h1>GridList examples </h1>
    <div style={{ padding: "16px" }}>
      <GridList width="320px" tileWidth="76px" tileBackground="#212121" >
        <Tile title="text" />
        <Tile title="text" />
        <Tile title="text" />
        <Tile title="text" />
        <Tile title="text" />
        <Tile title="text" />
        <Tile title="text" />
        <Tile title="text" />
      </GridList>
    </div>
    <h2>Grid List Properties</h2>
    <Grid>
      <Inner>
        {head.map(title => (
          <Cell key={title}>{title}</Cell>
        ))}
      </Inner>
      {GridListProperties.map((row, idx) => (
        // eslint-disable-next-line
        <Inner key={idx} style={{ paddingBottom: "16px" }}>
          {row.map(col => (
            <Cell key={col}> {col} </Cell>
          ))}
        </Inner>
      ))}
    </Grid>
    <h2>Grid Tile Properties</h2>
    <Grid>
      <Inner>
        {head.map(title => (
          <Cell key={title}>{title}</Cell>
        ))}
      </Inner>
      {GridTileProperties.map((row, idx) => (
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
