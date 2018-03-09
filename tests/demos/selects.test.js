import React from "react";
import renderer from "react-test-renderer";
import Selects from "demos/components/selects";

describe("demos/components/selects", () => {
  it("renders correctly", () => {
    const component = renderer.create(<Selects />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
