import React from "react";
import renderer from "react-test-renderer";
import { ListGroupSubheader } from "libs/list";

describe("list/ListGroupSubheader", () => {
  it("can have children", () => {
    const tree = renderer
      .create(
        <ListGroupSubheader>
          <div>Children are here!</div>
        </ListGroupSubheader>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can be typed", () => {
    const tree = renderer.create(<ListGroupSubheader type="h6" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
