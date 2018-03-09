import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

import Select from "libs/components/select";
import Menu from "libs/menu/menu";
import MenuItem from "libs/menu/item";
import { createFakeEvent } from "tests/helpers";

describe("components/Select", () => {
  it("can be disabled", () => {
    const component = renderer.create(
      <Select disabled>
        <MenuItem>Children is Here!</MenuItem>
      </Select>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have a label", () => {
    const component = renderer.create(
      <Select label="foo">
        <MenuItem>Children is Here!</MenuItem>
      </Select>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can be styled", () => {
    const component = renderer.create(
      <Select style={{ color: "red" }}>
        <MenuItem>Children is Here!</MenuItem>
      </Select>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have a selected index", () => {
    const component = renderer.create(
      <Select selectedIndex={0}>
        <MenuItem>This one should be selected</MenuItem>
      </Select>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("passes the selected value and index when an item is selected", () => {
    const onSelectSpy = jest.fn();
    const wrapper = shallow(
      <Select onSelected={onSelectSpy}>
        <MenuItem>item 1</MenuItem>
        <MenuItem>item 2</MenuItem>
      </Select>,
    );

    wrapper
      // let's find the Menu component first
      .find(Menu)
      // shallow it
      .shallow()
      // now find the second item
      .find(MenuItem)
      .at(1)
      // shallow it so that we can simulate a click on it
      .shallow()
      // click!
      .simulate("click", createFakeEvent());

    expect(onSelectSpy).toHaveBeenCalledWith("item 2", 1);
  });
});
