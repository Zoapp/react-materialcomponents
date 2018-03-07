import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import Switch from "@libs/components/switch";

describe("components/Switch", () => {
  it("renders correctly", () => {
    const component = renderer.create(
      <Switch id="unique-component-id" label="label switch" />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("calls the onChange prop if supplied", () => {
    const onChangeSpy = jest.fn();

    const wrapper = shallow(
      <Switch
        id="unique-component-id"
        label="label switch"
        onChange={onChangeSpy}
      />
    );

    wrapper.find("input").simulate("change");

    expect(onChangeSpy).toHaveBeenCalled();
  });

  it("marks the HTML input as checked", () => {
    const wrapper = shallow(
      <Switch id="unique-component-id" label="label switch" checked />
    );

    expect(wrapper.find("input").html()).toEqual(
      `<input type="checkbox" id="unique-component-id" class="mdc-switch__native-control" checked=""/>`
    );
  });

  it("marks the HTML input as disabled", () => {
    const wrapper = shallow(
      <Switch id="unique-component-id" label="label switch" disabled />
    );

    expect(wrapper.find("input").html()).toEqual(
      `<input type="checkbox" id="unique-component-id" class="mdc-switch__native-control" disabled=""/>`
    );
  });

  it("can be controlled when onChange is passed", () => {
    const wrapper = shallow(
      <Switch
        id="unique-component-id"
        label="label switch"
        checked
        onChange={jest.fn()}
      />
    );

    expect(wrapper.find("input").prop("checked")).toEqual(true);
  });

  it("updates the input attributs when the checked prop changes", () => {
    const wrapper = shallow(
      <Switch
        id="unique-component-id"
        label="label switch"
        onChange={jest.fn()}
      />
    );

    expect(wrapper.find("input").prop("checked")).toEqual(false);

    wrapper.setProps({ checked: true });

    expect(wrapper.find("input").prop("checked")).toEqual(true);
  });
});
