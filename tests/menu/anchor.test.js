import React from "react";
import renderer from "react-test-renderer";
import { Menu, MenuAnchor } from "libs/menu";

describe("menu/MenuAnchor", () => {
  it("can render itself correctly", () => {
    const tree = renderer
      .create(
        <MenuAnchor
          anchor={
            <Menu>
              <div>children are here!</div>
            </Menu>
          }
          menu={
            <Menu>
              <div>children are here!</div>
            </Menu>
          }
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
