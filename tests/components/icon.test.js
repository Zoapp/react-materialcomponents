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

describe("onClick()", () => {
  it("should call onClick callback", () => {
    const onClickSpy = jest.fn();
    const wrapper = shallow(<Icon name="foo" onClick={onClickSpy} />);

    wrapper.simulate("click");
    expect(onClickSpy).toHaveBeenCalled();
  });
});
