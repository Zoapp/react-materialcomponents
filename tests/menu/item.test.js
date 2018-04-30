import React from "react";
import renderer from "react-test-renderer";
import { MenuItem } from "libs/menu";

describe("menu/MenuItem", () => {
  it("can render itself correctly", () => {
    const tree = renderer
      .create(<MenuItem>Children are here!</MenuItem>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have a specified index", () => {
    const tree = renderer
      .create(<MenuItem tabIndex={2}>Children are here!</MenuItem>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can be disabled", () => {
    const tree = renderer
      .create(<MenuItem disabled>Children are here!</MenuItem>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can be selected", () => {
    const tree = renderer
      .create(<MenuItem selected>Children are here!</MenuItem>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have a role", () => {
    const tree = renderer
      .create(<MenuItem role="foobar">Children are here!</MenuItem>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
