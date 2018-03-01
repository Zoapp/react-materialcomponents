import React from "react";
import renderer from "react-test-renderer";
import Chip from "@libs/components/chip";

describe("components/Chip", () => {
  it("renders itself correctly", () => {
    const component = renderer.create(
      <Chip
    	children="I'm a chip" 
    	name="Chip" 
      />
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
  
  it("can be colored", () => {
    const component = renderer.create(
      <Chip
        color="pink"
        children="I'm a chip"
        name="Chip"
      />
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
