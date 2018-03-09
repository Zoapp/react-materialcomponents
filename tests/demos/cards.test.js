import React from "react";
import renderer from "react-test-renderer";
import Cards from "demos/components/cards";

describe("demos/components/cards", () => {
  it("renders itself correctly", () => {
    const component = renderer.create(<Cards />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
