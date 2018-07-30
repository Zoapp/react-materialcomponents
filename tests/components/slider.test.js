import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import Slider from "libs/components/slider";

describe("components/Slider", () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = shallow(<Slider />);
  });

  it("can be discrete", () => {
    wrapper.setProps({ discrete: true });
    expect(wrapper.hasClass("mdc-slider--discrete")).toEqual(true);
  });

  it("can be disabled", () => {
    wrapper.setProps({ disabled: true });
    expect(wrapper.hasClass("mdc-slider--disabled")).toEqual(true);
  });

  it("can have a presetted min value", () => {
    wrapper.setProps({ min: 0 });
    expect(wrapper.prop("aria-valuemin")).toEqual(0);
  });

  it("can have a presetted max value", () => {
    wrapper.setProps({ max: 100 });
    expect(wrapper.prop("aria-valuemax")).toEqual(100);
  });

  it("can have a presetted value", () => {
    wrapper.setProps({ value: 50 });
    expect(wrapper.prop("aria-valuenow")).toEqual(50);
  });

  it("can have a label", () => {
    wrapper.setProps({ label: "foo" });
    expect(wrapper.prop("aria-label")).toEqual("foo");
  });

  it("can have a display marker", () => {
    const component = renderer.create(<Slider displayMarker />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("onInput()", () => {
  it("should call onInput callback", () => {
    const onInputSpy = jest.fn();
    const wrapper = shallow(<Slider onInput={onInputSpy} />);

    wrapper.instance().moveThumbPosition = jest.fn().mockReturnValue("value");
    wrapper.instance().handleMoveEnd({ preventDefault: () => {} });
    expect(onInputSpy).toHaveBeenCalledWith("value");
  });
});

describe("onChange()", () => {
  it("should call onChange callback", () => {
    const onChangeSpy = jest.fn();
    const wrapper = shallow(<Slider disabled={false} onChange={onChangeSpy} />);

    wrapper.setState({ active: true });
    wrapper.instance().moveThumbPosition = jest.fn().mockReturnValue("value");
    wrapper.instance().handleMoveChange({ preventDefault: () => {} });
    expect(onChangeSpy).toHaveBeenCalledWith("value");
  });
});
