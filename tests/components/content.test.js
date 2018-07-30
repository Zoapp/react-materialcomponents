import React from "react";
import { shallow } from "enzyme";
import Content from "libs/components/content";

describe("components/Content", () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = shallow(
      <Content>
        <div className="child" />
      </Content>,
    );
  });

  it("can render children", () => {
    expect(wrapper.contains(<div className="child" />)).toEqual(true);
  });

  it("can be fixed", () => {
    wrapper.setProps({ fixed: true });
    expect(wrapper.hasClass("rmdc-content-fixed-adjust")).toEqual(true);
  });
});
