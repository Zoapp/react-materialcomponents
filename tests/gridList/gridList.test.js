import React from "react";
import renderer from "react-test-renderer";
import { GridList } from "libs/gridList";

describe("components/GridList", () => {
  it("can have children", () => {
    const tree = renderer
      .create(<GridList>Children are here!</GridList>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have a custom width", () => {
    const tree = renderer.create(<GridList width="50px;" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have a custom children tile's width", () => {
    const tree = renderer.create(<GridList tileWidth="10px;" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can set background tile's color", () => {
    const tree = renderer.create(<GridList tileBackground="pink" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have a gutter", () => {
    const tree = renderer.create(<GridList gutter={1} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have an header caption", () => {
    const tree = renderer.create(<GridList headerCaption />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have a two-line caption", () => {
    const tree = renderer.create(<GridList twolineCaption />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can render icon aligned", () => {
    const tree = renderer.create(<GridList iconAlign="start" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can render different aspect ratio", () => {
    const tree = renderer.create(<GridList aspectRatio="16x9" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
