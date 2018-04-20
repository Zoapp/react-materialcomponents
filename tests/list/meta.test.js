import React from "react";
import renderer from "react-test-renderer";
import { ListItemMeta } from "libs/list";

describe("list/ListItemMeta", () => {
  it("can have children", () => {
    const tree = renderer
      .create(
        <ListItemMeta>
          <div>Children are here!</div>
        </ListItemMeta>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have a specified classname", () => {
    const tree = renderer.create(<ListItemMeta className="foo" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have an icon", () => {
    const tree = renderer.create(<ListItemMeta icon="favorite" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can be colored", () => {
    const tree = renderer.create(<ListItemMeta color="pink" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have a label", () => {
    const tree = renderer.create(<ListItemMeta label="foobar" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have a link", () => {
    const tree = renderer.create(<ListItemMeta href="foobar" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
