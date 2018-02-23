import React from "react";
import PropertyJson from "./components_properties.json";
import { Grid, Inner, Cell } from "../../../src/libs";

const Head = ["Name", "Type", "Desc"];

function Property(Component) {
  const Body = [];
  const BodyMultipleProps = [];
  const PropsValue = [];
  {Object.keys(PropertyJson).forEach(props => {
    if (props === "Card") {
      if (PropertyJson[props].length === undefined) {
        Object.keys(PropertyJson[props]).forEach((GeneralPropertyName) => {
          BodyMultipleProps.push(PropertyJson[props][GeneralPropertyName])
          PropsValue.push(GeneralPropertyName)
        });
      } else {
        PropertyJson[props].forEach(element =>
        (
          element.forEach(value => Body.push(value))
        ));
      }
    }
  })}  
  return (
    <Grid>
      <Inner>
        {Head.map((title,index) => <Cell key={index}>{title}</Cell>)}
      </Inner>
      <h2>Properties:</h2>
      { if (body === []) {
        let counter = 0;
        Body.forEach(e => { 
          <h3>{head[counter]}</h3>
          <Inner>
          {Body.map((title,index) => <Cell key={index}>{title}</Cell>)}
          {counter++}
          <div style={{ borderBottom: "solid black 1px" }}></div>
          </Inner>
        })
      } else { 
        <Inner>{Body.map((title,index) => <Cell key={index}>{title}</Cell>,<div style={{ borderBottom: "solid black 1px" }}></div>)}</Inner>
      }
      };
    </Grid>
  )
};

export default Property;
  