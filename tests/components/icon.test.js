import React from "react";
import { shallow } from "enzyme";
import Icon from "libs/components/icon";

describe("components/Icon", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<Icon name="foo" />);
    expect(wrapper.hasClass("material-icons")).toEqual(true);
    expect(wrapper.contains("foo")).toEqual(true);
  });
});
