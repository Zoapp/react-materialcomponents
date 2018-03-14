import React from "react";
import renderer from "react-test-renderer";
import { CardMedia } from "libs/cards/";

describe("components/CardMedia", () => {
  it("can have a children", () => {
    const tree = renderer
      .create(<CardMedia>Children are here!</CardMedia>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have an image source", () => {
    const tree = renderer
      .create(
        <CardMedia src="https://material-components-web.appspot.com/images/1-1.jpg" />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have different size", () => {
    const tree = renderer.create(<CardMedia size="10px" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can specify an alternate text for the source", () => {
    const tree = renderer.create(<CardMedia alt="foo" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
