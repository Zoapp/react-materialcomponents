import React from "react";
import propertyJSON from "./components_properties.json";
import { Grid, Inner, Cell } from "../../../src/libs";

const Head = ["Name", "Default", "Type"];

const Property = (Props) => {
  const bodysingle = [];
  const bodymultipleprops = [];
  const propsvalue = [];
  let count = 0;
  Object.keys(propertyJSON).forEach((properties) => {
    if (properties === Props.name) {
      if (propertyJSON[properties].length === undefined) {
        Object.keys(propertyJSON[properties]).forEach((GeneralPropertyName) => {
          bodymultipleprops.push([]);
          propertyJSON[properties][GeneralPropertyName].forEach((element) =>
            bodymultipleprops[count].push(element),
          );
          propsvalue.push(GeneralPropertyName);
          count += 1;
        });
      } else {
        propertyJSON[properties].forEach((element) => bodysingle.push(element));
      }
    }
  });
  count = 0;
  if (bodysingle.length === 0) {
    return bodymultipleprops.map((elements) => (
      <Grid key={elements}>
        <Inner>
          {/* eslint-disable no-plusplus */}
          <Cell style={{ fontSize: "20px", fontWeight: "bold" }}>
            {propsvalue[count++]}
          </Cell>
          {/* eslint-enable no-plusplus */}
        </Inner>
        <Inner>
          {Head.map((title) => (
            <Cell key={title}>{title}</Cell>
          ))}
        </Inner>
        {elements.map((element) => (
          <Inner
            key={element}
            style={{
              borderBottom: "solid black 1px",
              marginBottom: "16px",
              paddingTop: "5px",
            }}
          >
            {element.map((value) => (
              <Cell key={value}>{value}</Cell>
            ))}
          </Inner>
        ))}
      </Grid>
    ));
  }
  return (
    <Grid>
      <Inner>
        {Head.map((title) => (
          <Cell key={title}>{title}</Cell>
        ))}
      </Inner>
      {bodysingle.map((element) => (
        <Inner
          key={element}
          style={{
            borderBottom: "solid black 1px",
            marginBottom: "16px",
            paddingTop: "5px",
          }}
        >
          {element.map((value) => (
            <Cell key={value}>{value}</Cell>
          ))}
        </Inner>
      ))}
    </Grid>
  );
};

export default Property;
