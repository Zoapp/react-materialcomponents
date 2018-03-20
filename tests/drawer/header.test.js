import React from "react";
import renderer from "react-test-renderer";
import { DrawerHeader } from "libs/drawer";

describe("drawer/DrawerHeader", () => {
  it("can have children", () => {
    const tree = renderer
      .create(<DrawerHeader>Children is Here!</DrawerHeader>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have a listed prop", () => {
    const tree = renderer.create(<DrawerHeader listed="permanent" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
