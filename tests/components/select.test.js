import React from "react";
import renderer from "react-test-renderer";
import Select from "@libs/components/Select";

describe("components/Select", () => {
  it("can be disabled", () => {
    const component = renderer.create(
      <Select 
        disabled
      > 
      Children is Here!
      </Select>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have a label", () => {
    const component = renderer.create(
      <Select 
        label="foo"
      > 
      Children is Here!
      </Select>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can be stylized", () => {
    const component = renderer.create(
      <Select 
        style={{ color: "red" }}
      > 
      Children is Here!
      </Select>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can render something on select", () => {
    const component = renderer.create(
      <Select 
        onSelected={
          console.log("I'm selected")
        }
      > 
      Children is Here!
      </Select>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have a selected index", () => {
    const component = renderer.create(
      <Select 
        selectedIndex={-1}
      > 
      Children is Here!
      </Select>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
