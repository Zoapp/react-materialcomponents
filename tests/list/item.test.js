import React from "react";
import renderer from "react-test-renderer";
import { ListItem } from "libs/list";

describe("list/ListItem", () => {
  it("can have children", () => {
    const tree = renderer
      .create(
        <ListItem>
          <div>Children are here!</div>
        </ListItem>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can be typed", () => {
    const tree = renderer.create(<ListItem type="li" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can be activated", () => {
    const tree = renderer.create(<ListItem activated />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have an icon", () => {
    const tree = renderer.create(<ListItem icon="favorite" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can be an image", () => {
    const tree = renderer.create(<ListItem imgSrc="foo" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can be an image and sized", () => {
    const tree = renderer.create(<ListItem imgSize={25} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can be an image and have a label", () => {
    const tree = renderer.create(<ListItem imgLabel="bar" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have a secondary text", () => {
    const tree = renderer.create(<ListItem secondaryText="foobar" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have a link", () => {
    const tree = renderer.create(<ListItem href="foobar" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
