import React from "react";
import { shallow } from "enzyme";
import Radio from "libs/components/radio";

describe("components/Radio", () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = shallow(<Radio id="fixed-id" />);
  });

  it("can have a label", () => {
    wrapper.setProps({ label: "foo" });
    expect(wrapper.contains("foo")).toEqual(true);
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

  it("can be checked", () => {
    wrapper.setProps({ checked: true });
    expect(
      wrapper
        .find("input")
        .shallow()
        .props().defaultChecked,
    ).toEqual("checked");
  });

  it("can have a name", () => {
    wrapper.setProps({ name: "bar" });
    expect(
      wrapper
        .find("input")
        .shallow()
        .props().name,
    ).toEqual("bar");
  });
});
