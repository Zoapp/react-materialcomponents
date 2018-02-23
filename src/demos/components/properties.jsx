import React from "react";
import PropertyJson from "./components_properties.json";
import { Grid, Inner, Cell } from "../../../src/libs";

const Head = ["Name", "Type", "Desc"];

const Property = Component => (
  <Grid>
    <Inner>
      {Head.map(title => (
        <Cell key={title}>{title}</Cell>
      ))}
    </Inner>
    {Object.keys(PropertyJson).forEach((props) => {
      if (props === Component.name) {
        if (PropertyJson[props].length === undefined) {
          Object.keys(PropertyJson[props]).forEach((GeneralPropertyName) => {
            PropertyJson[props][GeneralPropertyName].forEach(element =>
              (
                <Inner style={{ paddingBottom: "16px" }}>
                  {element.forEach(PropertyType => <Cell> {PropertyType} </Cell>)}
                </Inner>
              ));
          });
        } else {
          PropertyJson[props].forEach(element =>
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
