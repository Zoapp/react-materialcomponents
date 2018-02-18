/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import { LinearProgress, Grid, Inner, Cell } from "../../../src/libs";

const head = [
  "Name", "Type", "Desc",
];

const LinearProperties = [
  ["color", "string", "The color of the progress bar,  defaults to primary color of theme."],
  ["max", "number", "The max value of progress,  only works in determinate mode."],
  ["min", "number", "The min value of progress,  only works in determinate mode."],
  ["mode", "enum:'determinate', 'indeterminate', 'indeterminate'", "The mode of show your progress,  indeterminate for when there is no value for progress."],
  ["style", "object", "Override the inline-styles of the root element."],
  ["value", "number", "The value of progress, only works in determinate mode."],
];

export default () => (
  <section>
    <h1>LinearProgress examples </h1>
    <LinearProgress progress={0.2} buffer={0.5} />
    <h2>Linear Properties</h2>
    <Grid>
      <Inner>
        {head.map(title => (
          <Cell key={title}>{title}</Cell>
        ))}
      </Inner>
      {LinearProperties.map((row, idx) => (
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
