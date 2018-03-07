import React from "react";
import renderer from "react-test-renderer";
import Content from "@libs/components/content";

describe("components/Content", () => {
  it("can render children", () => {
    const component = renderer.create(
    	<Content>
    		Children are here!
    	</Content>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can be fixed", () => {
    const component = renderer.create(
    	<Content 
    	  fixed
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
