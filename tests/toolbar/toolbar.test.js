import React from "react";
import renderer from "react-test-renderer";
import { Toolbar } from "libs/toolbar";

describe("toolbar/Toolbar", () => {
  it("can render children", () => {
    const component = renderer.create(<Toolbar>Children are here!</Toolbar>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
