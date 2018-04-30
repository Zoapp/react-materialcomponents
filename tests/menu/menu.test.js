import React from "react";
import renderer from "react-test-renderer";
import { Menu } from "libs/menu";

describe("menu/Menu", () => {
  it("can render it self correctly", () => {
    const tree = renderer
      .create(
        <Menu>
          <div>Children are here!</div>
        </Menu>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can be render open", () => {
    const tree = renderer
      .create(
        <Menu open>
          <div>Children are here!</div>
        </Menu>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can be render sticked to a specified corner", () => {
    const tree = renderer
      .create(
        <Menu anchorCorner="top_start">
          <div>Children are here!</div>
        </Menu>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have an specified margins", () => {
    const tree = renderer
      .create(
        <Menu anchorMargin={{ top: "10" }}>
          <div>Children are here!</div>
        </Menu>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have an index render focused", () => {
    const tree = renderer
      .create(
        <Menu focusedIndex={2}>
          <div>Children are here!</div>
        </Menu>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
