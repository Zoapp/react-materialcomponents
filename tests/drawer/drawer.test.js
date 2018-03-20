import React from "react";
import renderer from "react-test-renderer";
import { Drawer } from "libs/drawer";

describe("drawer/Drawer", () => {
  it("can have children", () => {
    const tree = renderer.create(<Drawer>Children is Here!</Drawer>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have a type", () => {
    const tree = renderer.create(<Drawer type="permanent" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can be opened", () => {
    const tree = renderer.create(<Drawer open />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have a toolbar spacer", () => {
    const tree = renderer.create(<Drawer toolbarSpacer />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have a above prop", () => {
    const tree = renderer.create(<Drawer above />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
