import React from "react";
import { shallow } from "enzyme";
import FormField from "libs/components/formField";

describe("components/FormField", () => {
  const wrapper = shallow(
    <FormField>
      <div className="child" />
    </FormField>,
  );

  it("can have children", () => {
    expect(wrapper.contains(<div className="child" />)).toEqual(true);
  });
});
