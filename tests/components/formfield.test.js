import React from "react";
import renderer from "react-test-renderer";
import FormField from "libs/components/formField";

describe("components/FormField", () => {
  it("can have children", () => {
    const tree = renderer
      .create(<FormField>Children is here!</FormField>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
