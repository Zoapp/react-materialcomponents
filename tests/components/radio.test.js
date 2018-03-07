import React from "react";
import renderer from "react-test-renderer";
import Radio from "@libs/components/radio";

describe("components/Radio", () => {
  it("can have an id", () => {
    const component = renderer.create(
      <Radio
        id="1"
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have a label", () => {
    const component = renderer.create(
      <Radio
        id="2"
        label="foo"
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have be disabled", () => {
    const component = renderer.create(
      <Radio
        id="3"
        disabled
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can be checked", () => {
    const component = renderer.create(
      <Radio
        id="4"
        checked
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have a name", () => {
    const component = renderer.create(
      <Radio
        id="5"
        name="bar"
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
