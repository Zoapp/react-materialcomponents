import React from "react";
import renderer from "react-test-renderer";

describe("animations/Ripple", () => {
  it("can have children", () => {
    const tree = renderer
      .create(<div>Interact with me !</div>, { ripple: true })
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can be unbounded", () => {
    const tree = renderer
      .create(<div unbounded>Interact with me !</div>, { ripple: true })
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
