import React from "react";
import renderer from "react-test-renderer";
import TextField from "@libs/components/textfield";

describe("components/TextField", () => {
  it("renders correctly", () => {
    const component = renderer.create(
      <TextField
        cid="unique-component-id"
      />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can be marked as invalid", () => {
    const component = renderer.create(
      <TextField
        cid="unique-component-id"
      />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    component.getInstance().setAsInvalid();

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
