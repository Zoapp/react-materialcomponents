import React from "react";
import renderer from "react-test-renderer";
import { DrawerContent } from "libs/drawer";

describe("drawer/DrawerContent", () => {
  it("can have children", () => {
    const tree = renderer
      .create(<DrawerContent>Children is Here!</DrawerContent>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have a listed prop", () => {
    const tree = renderer.create(<DrawerContent listed="permanent" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
