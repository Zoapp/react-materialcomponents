import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import TextField from "libs/components/textfield";

describe("components/TextField", () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = shallow(<TextField id="unique-component-id" />);
  });

  it("renders correctly", () => {
    expect(wrapper.hasClass("mdc-text-field")).toEqual(true);
  });

  it("can have a label", () => {
    wrapper.setProps({ label: "foo" });
    expect(
      wrapper
        .find("label")
        .shallow()
        .contains("foo"),
    ).toEqual(true);
  });

  it("can have a type", () => {
    wrapper.setProps({ type: "bar" });
    expect(
      wrapper
        .find("input")
        .shallow()
        .props().type,
    ).toEqual("bar");
  });

  it("can be disabled", () => {
    wrapper.setProps({ disabled: true });
    expect(
      wrapper
        .find("input")
        .shallow()
        .props().disabled,
    ).toEqual("disabled");
  });

  it("can be dense", () => {
    wrapper.setProps({ dense: true });
    expect(wrapper.hasClass("mdc-text-field--dense")).toEqual(true);
  });

  it("can have an helper text", () => {
    wrapper.setProps({ helperText: "foobar" });
    expect(
      wrapper
        .find("p")
        .shallow()
        .hasClass("mdc-text-field-helper-text"),
    ).toEqual(true);
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
    wrapper.setProps({ fullwidth: true });
    expect(wrapper.hasClass("mdc-text-field--fullwidth")).toEqual(true);
  });

  it("can be a textarea", () => {
    wrapper.setProps({ isTextarea: true });
    expect(wrapper.hasClass("mdc-text-field--textarea")).toEqual(true);
  });

  it("can be boxed", () => {
    wrapper.setProps({ isBoxed: true });
    expect(wrapper.hasClass("mdc-text-field--box")).toEqual(true);
  });

  it("can be outlined", () => {
    wrapper.setProps({ outlined: true });
    expect(wrapper.hasClass("mdc-text-field--outlined")).toEqual(true);
  });

  it("can have a leading icon", () => {
    wrapper.setProps({ leadingIcon: "favorite" });
    expect(wrapper.hasClass("mdc-text-field--with-leading-icon")).toEqual(true);
  });

  it("can have a trailing icon", () => {
    wrapper.setProps({ trailingIcon: "favorite" });
    expect(wrapper.hasClass("mdc-text-field--with-trailing-icon")).toEqual(
      true,
    );
  });

  it("can have a no floating label", () => {
    wrapper.setProps({ noFloatingLabel: true });
    expect(
      wrapper
        .find("label")
        .shallow()
        .hasClass("mdc-floating-label"),
    ).toEqual(true);
  });

  it("can be marked as invalid", () => {
    wrapper.setProps({
      defaultValue: "a",
      pattern: "b",
      id: "unique-component-id",
    });
    expect(wrapper.hasClass("mdc-text-field--invalid")).toEqual(true);
  });

  describe("getValue()", () => {
    it("returns the input value", () => {
      wrapper.setProps({ defaultValue: "hello" });
      expect(
        wrapper
          .find("input")
          .shallow()
          .props().defaultValue,
      ).toEqual("hello");
    });
  });
});
