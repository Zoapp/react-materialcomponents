import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import Switch from "@libs/components/switch";

describe("components/Switch", () => {
  it("renders correctly", () => {
    // `cid` is fixed for testing purpose, usually we do not have to pass it as
    // a prop. Use the `id` prop instead.
    const component = renderer.create(
      <Switch
        cid="unique-component-id"
        label="label switch"
      />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly", () => {
    const onChangeSpy = jest.fn();

    const wrapper = shallow(
      <Switch
        cid="unique-component-id"
        label="label switch"
        onChange={onChangeSpy}
      />
    );

    wrapper.find("input").simulate("change");

    expect(onChangeSpy).toHaveBeenCalled();
  });
});
