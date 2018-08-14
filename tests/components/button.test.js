import React from "react";
import { shallow } from "enzyme";
import Button from "libs/components/button";
import renderer from "react-test-renderer";

describe("components/Button", () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = shallow(
      <Button>
        <div className="child" />
      </Button>,
    );
  });

  it("can have children", () => {
    expect(wrapper.find("button .child")).toHaveLength(1);
  });

  it("can be raised", () => {
    wrapper.setProps({ raised: true });
    expect(wrapper.hasClass("mdc-button--raised")).toEqual(true);
  });

  it("can be unelevated", () => {
    wrapper.setProps({ unelevated: true });
    expect(wrapper.hasClass("mdc-button--unelevated")).toEqual(true);
  });

  it("can be outlined", () => {
    wrapper.setProps({ outlined: true });
    expect(wrapper.hasClass("mdc-button--outlined")).toEqual(true);
  });

  it("can be dense", () => {
    wrapper.setProps({ dense: true });
    expect(wrapper.hasClass("mdc-button--dense")).toEqual(true);
  });

  it("can render a button with id", () => {
    wrapper.setProps({ id: "button" });
    expect(wrapper.props().id).toEqual("button");
  });

  it("can be a submit button", () => {
    wrapper.setProps({ type: "submit" });
    expect(wrapper.props().type).toEqual("submit");
  });

  it("can render an icon if supplied", () => {
    wrapper.setProps({ icon: "favorite" });
    expect(wrapper.find("button .mdc-button__icon")).toHaveLength(1);
  });

  it("can render a link if supplied", () => {
    wrapper.setProps({ link: "#" });
    expect(wrapper.prop("href")).toEqual("#");
  });

  it("can render a link with id", () => {
    wrapper.setProps({ id: "link", link: "#" });
    expect(wrapper.prop("href")).toEqual("#");
    expect(wrapper.prop("id")).toEqual("link");
  });

  it("can be rippled", () => {
    const component = renderer.create(<Button ripple />).toJSON();
    expect(component).toMatchSnapshot();
  });

  it("can be disabled", () => {
    wrapper.setProps({ disabled: true });
    expect(wrapper.props().disabled).toEqual(true);
  });
});

describe("onClick()", () => {
  it("should call onClick callback", () => {
    const onClickSpy = jest.fn();
    const wrapper = shallow(<Button onClick={onClickSpy} />);

    wrapper.simulate("click");
    expect(onClickSpy).toHaveBeenCalled();
  });
});
