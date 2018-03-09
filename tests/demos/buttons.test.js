import React from "react";
import renderer from "react-test-renderer";
import Buttons from "demos/components/buttons";

describe("demos/components/buttons", () => {
  it("renders itself correctly", () => {
    const component = renderer.create(<Buttons />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
