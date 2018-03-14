import React from "react";
import renderer from "react-test-renderer";
import { Tile } from "libs/gridList";

describe("components/Tile", () => {
  it("can have children", () => {
    const tree = renderer.create(<Tile><div>Children are here!</div></Tile>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have a background color", () => {
    const tree = renderer.create(<Tile background="pink" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have a variable width", () => {
    const tree = renderer.create(<Tile width="10px" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have a title", () => {
    const tree = renderer.create(<Tile title="foobar" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have a text", () => {
    const tree = renderer.create(<Tile text="foobar foo bar" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have an icon", () => {
    const tree = renderer.create(<Tile icon="favorite" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
