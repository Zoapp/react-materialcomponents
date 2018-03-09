import React from "react";
import renderer from "react-test-renderer";
import Fab from "libs/components/fab";

describe("components/Fab", () => {
  it("can have children", () => {
    const component = renderer.create(<Fab>Children are here !</Fab>).toJSON();
    expect(component).toMatchSnapshot();
  });

  it("renders an icon if supplied", () => {
    const component = renderer.create(<Fab icon="favorite" />).toJSON();
    expect(component).toMatchSnapshot();
  });

  it("can have a custom label", () => {
    const component = renderer.create(<Fab label="bar" />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
