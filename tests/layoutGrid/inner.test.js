import React from "react";
import renderer from "react-test-renderer";
import { Inner } from "libs/layoutGrid";

describe("layoutGrid/Inner", () => {
  it("can have children", () => {
    const tree = renderer.create(<Inner>Children are here!</Inner>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
