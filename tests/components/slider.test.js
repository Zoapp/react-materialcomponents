import React from "react";
import renderer from "react-test-renderer";
import Slider from "libs/components/slider";

describe("components/Slider", () => {
  it("can be discrete", () => {
    const component = renderer.create(<Slider discrete />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can be disabled", () => {
    const component = renderer.create(<Slider disabled />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have a presetted min value", () => {
    const component = renderer.create(<Slider min={0} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have a presetted max value", () => {
    const component = renderer.create(<Slider max={100} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have a presetted value", () => {
    const component = renderer.create(<Slider value={50} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have a label", () => {
    const component = renderer.create(<Slider label="foo" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have a display marker", () => {
    const component = renderer.create(<Slider displayMarker />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
