import React from "react";
import renderer from "react-test-renderer";
import IconToggles from "demos/components/iconToggles";

describe("demos/components/iconToggles", () => {
  it("renders correctly", () => {
    const component = renderer.create(<IconToggles />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
