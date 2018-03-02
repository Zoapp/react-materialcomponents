import React from "react";
import renderer from "react-test-renderer";
import Switch from "@libs/components/switch";

describe("components/Switch", () => {
  it("can have an id", () => {
    const component = renderer.create(
      <Switch 
        id="foo" 
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have a label", () => {
    const component = renderer.create(
      <Switch 
        label="bar" 
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can be checked", () => {
    const component = renderer.create(
      <Switch 
        checked 
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can be disabled", () => {
    const component = renderer.create(
      <Switch 
        disabled
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can be a formField", () => {
    const component = renderer.create(
      <Switch 
        formField
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
