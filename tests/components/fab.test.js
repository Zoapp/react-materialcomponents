import React from "react";
import { shallow } from "enzyme";
import Fab from "libs/components/fab";

describe("components/Fab", () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = shallow(
      <Fab>
        <div className="child" />
      </Fab>,
    );
  });

  it("can have children", () => {
    expect(wrapper.contains(<div className="child" />)).toEqual(true);
  });

  it("renders an icon if supplied", () => {
    wrapper.setProps({ icon: "favorite" });
    expect(wrapper.find("button .mdc-fab__icon")).toHaveLength(1);
  });

  it("can have a custom label", () => {
    wrapper.setProps({ label: "bar" });
    expect(wrapper.prop("aria-label")).toEqual("bar");
  });
});
