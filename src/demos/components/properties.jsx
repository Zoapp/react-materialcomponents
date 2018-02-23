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
          count++;
        });
      } else {
        PropertyJson[props].forEach(element =>
          (
            bodySingle.push(element)
          ));
      }
    }
  });
  console.log(bodyMultipleProps);
  console.log(bodySingle);
  console.log(bodySingle.length === undefined);
  return (
    <Grid>
      <Inner>
        {Head.map(title => <Cell key={title.id}>{title}</Cell>)}
      </Inner>
      { (bodySingle.length === undefined) ?
        (
        console.log('salut'),
        PropsValue.map(element => (
          <h3>{element}</h3>,
          console.log(element),
          bodyMultipleProps.map(e => (
            console.log(e),
            <Inner>
              {e.map(title =>(
                console.log(title),
                <Cell key={title.id}>{title}</Cell>))}
            </Inner>,
              <div style={{ borderBottom: "solid black 1px" }} />
          ))
        ))
        )
        : (bodySingle.map(e => (
            <Inner>
              {e.map(value =><Cell key={value.id}>{value}</Cell>)}
            </Inner>,
            <div style={{ borderBottom: "solid black 1px" }} />
          )))
      }
    </Grid>
  );
}

export default Property;
