import React from "react";
import PropertyJson from "./components_properties.json";
import { Grid, Inner, Cell } from "../../../src/libs";

const Head = ["Name", "Type", "Desc"];

function Property(Component) {
  const bodySingle = [];
  const bodyMultipleProps = [];
  const PropsValue = [];
  let count = 0;
  Object.keys(PropertyJson).forEach((props) => {
    if (props === Component.name) {
      if (PropertyJson[props].length === undefined) {
        Object.keys(PropertyJson[props]).forEach((GeneralPropertyName) => {
          bodyMultipleProps.push([]);
          PropertyJson[props][GeneralPropertyName].forEach(element => (
            bodyMultipleProps[count].push(element)
          ));
          PropsValue.push(GeneralPropertyName);
          count += 1;
        });
      } else {
        PropertyJson[props].forEach(element =>
          (
            bodySingle.push(element)
          ));
      }
    }
  });
  count = -1;
  return (
    (bodySingle.length === 0) ?
      (bodyMultipleProps.map(element => (
        <Grid>
          <Inner>
            {/* eslint-disable-next-line */}
            <Cell style={{ fontSize: "20px", fontWeight: "bold" }}>{ PropsValue[++count] }</Cell>
          </Inner>
          <Inner>
            {Head.map(title => <Cell key={title.id}>{title}</Cell>)}
          </Inner>
          {element.map(e => (
            <Inner style={{ borderBottom: "solid black 1px", marginBottom: "16px", paddingTop: "5px" }}>
              {e.map(value => <Cell key={value.id}>{value}</Cell>)}
            </Inner>
          ))}
        </Grid>
      )))
      :
      <Grid>
        <Inner>
          {Head.map(title => <Cell key={title.id}>{title}</Cell>)}
        </Inner>
        {bodySingle.map(e => (
          <Inner style={{ borderBottom: "solid black 1px", marginBottom: "16px", paddingTop: "5px" }}>
            {e.map(value => <Cell key={value.id}>{value}</Cell>)}
          </Inner>
        ))}
      </Grid>
  );
}

export default Property;
