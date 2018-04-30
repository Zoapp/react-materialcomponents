import React from "react";
import renderer from "react-test-renderer";
import { Grid } from "libs/layoutGrid";

describe("layoutGrid/Grid", () => {
  it("can have children", () => {
    const tree = renderer.create(<Grid>Children are here!</Grid>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have a fixed columns width", () => {
    const tree = renderer.create(<Grid fixedColumnWidth />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can take differents margins on a specify device", () => {
    const tree = renderer
      .create(<Grid spanDevice={{ phone: "100" }} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can take differents gutter on a specify device", () => {
    const tree = renderer.create(<Grid gutter={{ desktop: "200" }} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have a max width", () => {
    const tree = renderer.create(<Grid maxWidth="100" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can be aligned", () => {
    const tree = renderer.create(<Grid align="right" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
