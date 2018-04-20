import React from "react";
import renderer from "react-test-renderer";
import { Cell } from "libs/layoutGrid";

describe("layoutGrid/Cell", () => {
  it("can have children", () => {
    const tree = renderer.create(<Cell>Children are here!</Cell>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can take multiple columns", () => {
    const tree = renderer.create(<Cell span={13} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can take multiple columns on a specify device", () => {
    const tree = renderer
      .create(<Cell spanDevice={{ tablet: 100 }} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can be ordored", () => {
    const tree = renderer.create(<Cell order={2} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can be aligned", () => {
    const tree = renderer.create(<Cell align="top" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
