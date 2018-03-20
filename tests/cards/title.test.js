import React from "react";
import renderer from "react-test-renderer";
import { CardTitle } from "libs/cards/";

describe("cards/CardTitle", () => {
  it("can have children", () => {
    const tree = renderer
      .create(<CardTitle>Children are here!</CardTitle>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can be a large title", () => {
    const tree = renderer.create(<CardTitle large />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
