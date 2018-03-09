import React from "react";
import renderer from "react-test-renderer";
import GridLists from "demos/components/gridlists";

describe("demos/components/gridlists", () => {
  it("renders itself correctly", () => {
    const component = renderer.create(<GridLists />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
