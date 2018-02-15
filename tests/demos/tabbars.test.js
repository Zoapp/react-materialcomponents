import React from "react";
import renderer from "react-test-renderer";
import Tabbars from "@demos/components/tabbars";

describe("demos/components/tabbars", () => {
  it("renders correctly", () => {
    const component = renderer.create(<Tabbars />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
