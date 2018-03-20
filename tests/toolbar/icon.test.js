import React from "react";
import renderer from "react-test-renderer";
import { ToolbarIcon } from "libs/toolbar/";

describe("toolbar/ToolbarIcon", () => {
  it("can render children", () => {
    const component = renderer.create(<ToolbarIcon name="foo" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can be inside a menu", () => {
    const component = renderer.create(<ToolbarIcon name="foobar" isMenu />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
