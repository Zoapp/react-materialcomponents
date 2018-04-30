import React from "react";
import renderer from "react-test-renderer";
import { Menu, MenuDivider } from "libs/menu";

describe("menu/Menu", () => {
  it("can render itself correctly", () => {
    const tree = renderer
      .create(
        <Menu>
          <MenuDivider />
        </Menu>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
