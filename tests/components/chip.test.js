import React from "react";
import { shallow } from "enzyme";
import Chip from "libs/components/chip";

describe("components/Chip", () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = shallow(<Chip name="Chip"> I am a chip </Chip>);
  });

  it("renders itself correctly", () => {
    expect(wrapper).toHaveLength(1);
  });

  it("can be colored", () => {
    wrapper.setProps({ color: "pink" });
    expect(wrapper.prop("style").color).toEqual("pink");
  });
});
