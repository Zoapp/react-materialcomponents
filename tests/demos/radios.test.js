import React from "react";
import renderer from "react-test-renderer";
import Radios from "demos/components/radios";

describe("demos/components/radios", () => {
  it("renders correctly", () => {
    const component = renderer.create(<Radios />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
