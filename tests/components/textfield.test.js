import React from "react";
import renderer from "react-test-renderer";
import TextField from "libs/components/textfield";

describe("components/TextField", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<TextField id="unique-component-id" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have a label", () => {
    const component = renderer.create(
      <TextField id="unique-component-id" label="foo" />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have a type", () => {
    const component = renderer.create(
      <TextField id="unique-component-id" type="bar" />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can be disabled", () => {
    const component = renderer.create(
      <TextField id="unique-component-id" disabled />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can be dense", () => {
    const component = renderer.create(
      <TextField id="unique-component-id" dense />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have an helper text", () => {
    const component = renderer.create(
      <TextField id="unique-component-id" helperText="foobar" />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have a persistent helper text", () => {
    const component = renderer.create(
      <TextField id="unique-component-id" htPersistent />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have an helper text with a validation message", () => {
    const component = renderer.create(
      <TextField id="unique-component-id" htValidationMsg />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can be full width", () => {
    const component = renderer.create(
      <TextField id="unique-component-id" fullwidth />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can be a textarea", () => {
    const component = renderer.create(
      <TextField id="unique-component-id" isTextarea />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can be boxed", () => {
    const component = renderer.create(
      <TextField id="unique-component-id" isBoxed />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can be outlined", () => {
    const component = renderer.create(
      <TextField id="unique-component-id" outlined />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have a leading icon", () => {
    const component = renderer.create(
      <TextField id="unique-component-id" leadingIcon="favorite" />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have a trailing icon", () => {
    const component = renderer.create(
      <TextField id="unique-component-id" trailingIcon="favorite" />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have a no floating label", () => {
    const component = renderer.create(
      <TextField id="unique-component-id" noFloatingLabel />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can be marked as invalid", () => {
    const component = renderer.create(<TextField id="unique-component-id" />);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    component.getInstance().setAsInvalid();

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe("getValue()", () => {
    it("returns the input value", () => {
      const component = renderer.create(
        <TextField id="unique-component-id" defaultValue="hello" />,
      );

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();

      const value = component.getInstance().getValue();
      expect(value).toEqual("hello");
    });
  });
});
