import React from "react";
import renderer from "react-test-renderer";
import LinearProgress from "@libs/components/linearProgress";

describe("components/LinearProgress", () => {
  it("can be indeterminate", () => {
    const component = renderer.create(
      <LinearProgress
        indeterminate
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can be closed", () => {
    const component = renderer.create(
      <LinearProgress
        closed
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can be reversed", () => {
    const component = renderer.create(
      <LinearProgress
        reversed
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can render a presetted progress", () => {
    const component = renderer.create(
      <LinearProgress
        progress={50}
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have a buffer", () => {
    const component = renderer.create(
      <LinearProgress
        buffer={50}
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
