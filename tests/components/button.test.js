import React from "react";
import renderer from "react-test-renderer";
import Button from "libs/components/button";

describe("components/Button", () => {
  it("can have children", () => {
    const component = renderer
      .create(<Button>Children are here!</Button>)
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it("can be raised", () => {
    const component = renderer.create(<Button raised />).toJSON();
    expect(component).toMatchSnapshot();
  });

  it("can be unelevated", () => {
    const component = renderer.create(<Button unelevated />).toJSON();
    expect(component).toMatchSnapshot();
  });

  it("can be stroked", () => {
    const component = renderer.create(<Button stroked />).toJSON();
    expect(component).toMatchSnapshot();
  });

  it("can be dense", () => {
    const component = renderer.create(<Button dense />).toJSON();
    expect(component).toMatchSnapshot();
  });

  it("can be compact", () => {
    const component = renderer.create(<Button compact />).toJSON();
    expect(component).toMatchSnapshot();
  });

  it("can render a button with id", () => {
    const component = renderer.create(<Button id="button" />).toJSON();
    expect(component).toMatchSnapshot();
  });

  it("can be a submit button", () => {
    const component = renderer.create(<Button type="submit" />).toJSON();
    expect(component).toMatchSnapshot();
  });

  it("renders a secondary button", () => {
    const component = renderer.create(<Button secondary />).toJSON();
    expect(component).toMatchSnapshot();
  });

  it("can render an icon if supplied", () => {
    const component = renderer.create(<Button icon="favorite" />).toJSON();
    expect(component).toMatchSnapshot();
  });

  it("can render a link if supplied", () => {
    const component = renderer.create(<Button link="#" />).toJSON();
    expect(component).toMatchSnapshot();
  });

  it("can render a link with id", () => {
    const component = renderer.create(<Button id="link" link="#" />).toJSON();
    expect(component).toMatchSnapshot();
  });

  it("can be rippled", () => {
    const component = renderer.create(<Button ripple />).toJSON();
    expect(component).toMatchSnapshot();
  });

  it("can be disabled", () => {
    const component = renderer.create(
      <Button disabled>disabled button</Button>,
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
