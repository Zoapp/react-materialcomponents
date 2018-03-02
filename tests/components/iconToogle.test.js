import React from "react";
import renderer from "react-test-renderer";
import IconToggle from "@libs/components/iconToggle";

describe("components/IconToggle", () => {
  it("can be pressed", () => {
    const component = renderer.create(
      <IconToggle name="foo" nameOff="bar" pressed />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can be disabled", () => {
    const component = renderer.create(
      <IconToggle name="foo" nameOff="bar" disabled />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have a label", () => {
    const component = renderer.create(
      <IconToggle name="foo" nameOff="bar" label="foobar" />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have a labelOff", () => {
    const component = renderer.create(
      <IconToggle name="foo" nameOff="bar" labelOff="foobar" />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can be colored", () => {
    const component = renderer.create(
      <IconToggle name="foo" nameOff="bar" color="pink" />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
