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
} from "../../../src";

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
  </section>
);
