import React from "react";
import renderer from "react-test-renderer";
import Sliders from "@demos/components/sliders";

describe("demos/components/sliders", () => {
  it("renders correctly", () => {
    const component = renderer.create(<Sliders />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
