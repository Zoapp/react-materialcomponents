import React from "react";
import renderer from "react-test-renderer";
import { Card, CardText } from "libs/cards/";

describe("components/CardText", () => {
  it("can have children", () => {
    const tree = renderer
      .create(
        <Card>
          <CardText>Children are Here !</CardText>
        </Card>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
