import React from "react";
import renderer from "react-test-renderer";
import Title from "libs/toolbar/title";

describe("toolbar/Title", () => {
  it("can render children", () => {
    const component = renderer.create(<Title>Children are here!</Title>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
