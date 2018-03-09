import React from "react";
import renderer from "react-test-renderer";
import Select from "libs/components/select";
import MenuItem from "libs/menu/item";

describe("components/Select", () => {
  it("can be disabled", () => {
    const component = renderer.create(
      <Select disabled>
        <MenuItem>Children is Here!</MenuItem>
      </Select>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have a label", () => {
    const component = renderer.create(
      <Select label="foo">
        <MenuItem>Children is Here!</MenuItem>
      </Select>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can be styled", () => {
    const component = renderer.create(
      <Select style={{ color: "red" }}>
        <MenuItem>Children is Here!</MenuItem>
      </Select>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have a selected index", () => {
    const component = renderer.create(
      <Select selectedIndex={1}>
        <MenuItem>Children is Here!</MenuItem>
      </Select>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
