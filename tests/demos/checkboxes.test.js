import React from "react";
import renderer from "react-test-renderer";
import Checkboxes from "@demos/components/checkboxes";

describe("demos/components/checkboxes", () => {
  it("renders itself correctly", () => {
     const createNodeMock = () => ({
      addEventListener: jest.fn(),
      showModal: jest.fn(),
    });
    const component = renderer.create(
    	<Checkboxes />,
    	{ createNodeMock }).toJSON();
    expect(component).toMatchSnapshot();
  });
});
