import React from "react";
import PropertyJson from "./components_properties.json";
import { Grid, Inner, Cell } from "../../../src/libs";

const Head = ["Name", "Type", "Desc"];

const Property = ComponentName => (
  <Grid>
    <Inner>
      {Head.map(title => (
        <Cell key={title}>{title}</Cell>
      ))}
    </Inner>
    {Object.keys(PropertyJson).forEach((props) => {
      if (props === ComponentName) {
        if (test[props].length === undefined) {
          Object.keys(test[props]).forEach((GeneralPropertyName) => {
            test[props][GeneralPropertyName].forEach(element =>
              (
                <Inner style={{ paddingBottom: "16px" }}>
                  {element.forEach(PropertyType => <Cell> {PropertyType} </Cell>)}
                </Inner>
              ));
          });
        } else {
          test[props].forEach(element =>
            (
              <Inner style={{ paddingBottom: "16px" }}>
                {element.forEach(PropertyType => <Cell> {PropertyType} </Cell>)}
              </Inner>
            ));
        }
      }
    })}
  </Grid>
);

export default Property;
