/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import { Slider, Grid, Inner, Cell } from "../../../src/libs";

const head = [
  "Name", "Type", "Desc",
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

export default () => (
  <section>
    <h1>Slider examples </h1>
    <div style={{ padding: "16px" }}>
      <Slider label="slider 1" />
    </div>
    <div style={{ padding: "16px" }}>
      <Slider label="slider 2" discrete disabled />
    </div>
    <div style={{ padding: "16px" }}>
      <Slider label="slider 3" discrete max={256} value={20} displayMarker />
    </div>
    <h2>Slider  Properties</h2>
    <Grid>
      <Inner>
        {head.map(title => (
          <Cell key={title}>{title}</Cell>
        ))}
      </Inner>
      {SliderProperties.map((row, idx) => (
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
