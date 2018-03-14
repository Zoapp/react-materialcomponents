import React from "react";
import renderer from "react-test-renderer";
import { Card } from "libs/cards/";

describe("components/Card", () => {
  it("can have children", () => {
    const tree = renderer.create(<Card>Children are here!</Card>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have an title", () => {
    const tree = renderer.create(<Card title="foo" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have a subtitle", () => {
    const tree = renderer.create(<Card subTitle="bar" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can be a followed by an other title", () => {
    const tree = renderer.create(<Card isTitlingSecond />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
