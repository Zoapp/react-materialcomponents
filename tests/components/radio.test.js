import React from "react";
import renderer from "react-test-renderer";
import Radio from "@libs/components/radio";

describe("components/Radio", () => {
  it("can have a label", () => {
    const component = renderer.create(
      <Radio
        id="fixed-id"
        label="foo"
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can be disabled", () => {
    const component = renderer.create(
      <Radio
        id="fixed-id"
        disabled
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can be checked", () => {
    const component = renderer.create(
      <Radio
        id="fixed-id"
        checked
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have a name", () => {
    const component = renderer.create(
      <Radio
        id="fixed-id"
        name="bar"
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
