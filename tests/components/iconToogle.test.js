import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import IconToggle from "libs/components/iconToggle";

describe("components/IconToggle", () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = shallow(<IconToggle name="foo" off="bar" />);
  });

  it("can be pressed", () => {
    wrapper.setProps({ pressed: true });
    expect(wrapper.contains("foo")).toEqual(true);
  });

  it("can be disabled", () => {
    wrapper.setProps({ disabled: true });
    expect(wrapper.hasClass("mdc-icon-toggle--disabled")).toEqual(true);
  });

  it("can have a label", () => {
    const component = renderer.create(
      <IconToggle name="foo" off="bar" label="foobar" />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have a labelOff", () => {
    wrapper.setProps({ labelOff: "foobar" });
    expect(wrapper.prop("arria-label")).toEqual("foobar");
  });

  it("can be colored", () => {
    wrapper.setProps({ color: "pink" });
    expect(wrapper.prop("style").color).toEqual("pink");
  });
});

describe("onChange()", () => {
  it("should call onChange callback", () => {
    const onChangeSpy = jest.fn();
    const wrapper = shallow(
      <IconToggle name="foo" off="bar" onChange={onChangeSpy} />,
    );
    expect(wrapper.state("pressed")).toEqual(false);
    wrapper.instance().handleClick({ preventDefault: () => {} });
    expect(onChangeSpy).toHaveBeenCalledWith(true);
    wrapper.instance().handleClick({ preventDefault: () => {} });
    expect(onChangeSpy).toHaveBeenCalledWith(false);
  });
});
