import React from "react";
import renderer from "react-test-renderer";
import Section from "libs/toolbar/section";

describe("toolbar/Section", () => {
  it("can render children", () => {
    const component = renderer.create(<Section>Children are here!</Section>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can be aligned", () => {
    const component = renderer.create(<Section align="start" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can be return as a range object.", () => {
    const component = renderer.create(<Section shrinkToFit />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
