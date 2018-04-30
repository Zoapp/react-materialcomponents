import React from "react";
import renderer from "react-test-renderer";
import Row from "libs/toolbar/row";

describe("toolbar/Row", () => {
  it("can render children", () => {
    const component = renderer.create(<Row>Children are here!</Row>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
