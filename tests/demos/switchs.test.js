import React from "react";
import renderer from "react-test-renderer";
import Switchs from "@demos/components/switchs";

describe("demos/components/switchs", () => {
  it("renders correctly", () => {
    const component = renderer.create(<Switchs />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
