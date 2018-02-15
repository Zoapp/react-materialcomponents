import React from "react";
import renderer from "react-test-renderer";
import Lists from "@demos/components/lists";

describe("demos/components/lists", () => {
  it("renders itself correctly", () => {
    const component = renderer.create(<Lists />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
