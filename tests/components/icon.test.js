import React from "react";
import renderer from "react-test-renderer";
import Icon from "@libs/components/icon";

describe("components/Icon", () => {
  it("renders correctly", () => {
    const component = renderer.create(<Icon name="foo" />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
