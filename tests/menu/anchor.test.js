import React from "react";
import renderer from "react-test-renderer";
import { Menu, MenuAnchor } from "libs/menu";

describe("menu/MenuAnchor", () => {
  it("can render itself correctly", () => {
    const tree = renderer
      .create(
        <MenuAnchor
          menu={
            <Menu>
              <div>children are here!</div>
            </Menu>
          }
        >
          <Menu>
            <div>children are here!</div>
          </Menu>
        </MenuAnchor>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
