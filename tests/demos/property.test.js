import React from "react";
import renderer from "react-test-renderer";
import Property from "demos/components/property";

describe("demos/components/property", () => {
  it("renders itself correctly", () => {
    const componentSingle = renderer
      .create(<Property name="Button" />)
      .toJSON();
    expect(componentSingle).toMatchSnapshot();
    const componentMultiple = renderer
      .create(<Property name="Card" />)
      .toJSON();
    expect(componentMultiple).toMatchSnapshot();
  });
});
