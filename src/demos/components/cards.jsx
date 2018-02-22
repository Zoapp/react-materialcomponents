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
import { head, CardProperties, CardActionsProperties, CardHeaderProperties,
  CardMediaProperties, CardTextProperties, CardTitleProperties,
} from "./components_properties";

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
