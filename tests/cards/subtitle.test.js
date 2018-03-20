import React from "react";
import renderer from "react-test-renderer";
import { CardSubtitle } from "libs/cards/";

describe("components/cards/CardSubtitle", () => {
  it("can have children", () => {
    const tree = renderer
      .create(<CardSubtitle>Children are here!</CardSubtitle>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
