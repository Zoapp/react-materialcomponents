import React from "react";
import renderer from "react-test-renderer";
import { ListGroup } from "libs/list";

describe("list/ListGroup", () => {
  it("can have children", () => {
    const tree = renderer
      .create(
        <ListGroup>
          <div>Children are here!</div>
        </ListGroup>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
