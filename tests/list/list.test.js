import React from "react";
import renderer from "react-test-renderer";
import { List } from "libs/list";

describe("list/List", () => {
  it("can have children", () => {
    const tree = renderer
      .create(
        <List>
          <div>Children are here!</div>
        </List>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can be densed", () => {
    const tree = renderer.create(<List dense />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have an avatar", () => {
    const tree = renderer.create(<List avatar />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can be extend on two line", () => {
    const tree = renderer.create(<List twoline />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
