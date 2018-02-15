import React from "react";
import renderer from "react-test-renderer";
import TextFields from "@demos/components/textfields";

describe("demos/components/textfields", () => {
  it("renders correctly", () => {
    const component = renderer.create(<TextFields />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
