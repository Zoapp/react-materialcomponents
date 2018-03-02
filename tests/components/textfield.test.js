import React from "react";
import renderer from "react-test-renderer";
import TextField from "@libs/components/textfield";

describe("components/TextField", () => {
  it("can have a label", () => {
    const component = renderer.create(
    	<TextField 
    	  id="1"
    	  label="foo" 
    	/>
   	);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have a type", () => {
    const component = renderer.create(
    	<TextField 
    	  id="1"
    	  type="bar" 
    	/>
   	);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  it("can be disabled", () => {
    const component = renderer.create(
    	<TextField 
    	  id="1"
    	  disabled
    	/>
   	);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can be dense", () => {
    const component = renderer.create(
    	<TextField 
    	  id="1"
    	  dense
    	/>
   	);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have an helperText", () => {
    const component = renderer.create(
    	<TextField 
    	  id="1"
    	  helperText="foobar"
    	/>
   	);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can be htPersistent", () => {
    const component = renderer.create(
    	<TextField 
    	  id="1"
    	  htPersistent
    	/>
   	);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can be htValidationMsg", () => {
    const component = renderer.create(
    	<TextField 
    	  id="1"
    	  htValidationMsg
    	/>
   	);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can be fullwidth", () => {
    const component = renderer.create(
    	<TextField 
    	  id="1"
    	  fullwidth
    	/>
   	);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can be Textarea", () => {
    const component = renderer.create(
    	<TextField 
    	  id="1"
    	  isTextarea
    	/>
   	);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can be Boxed", () => {
    const component = renderer.create(
    	<TextField 
    	  id="1"
    	  isBoxed
    	/>
   	);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can be outlined", () => {
    const component = renderer.create(
    	<TextField 
    	  id="1"
    	  outlined
    	/>
   	);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have a leadingIcon", () => {
    const component = renderer.create(
    	<TextField 
    	  id="1"
    	  leadingIcon="favorite"
    	/>
   	);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have a defaultValue", () => {
    const component = renderer.create(
    	<TextField 
    	  id="1"
    	  defaultValue="favorite"
    	/>
   	);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have a trailingIcon", () => {
    const component = renderer.create(
    	<TextField 
    	  id="1"
    	  trailingIcon="favorite"
    	/>
   	);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have a no floating label", () => {
    const component = renderer.create(
    	<TextField 
    	  id="1"
    	  noFloatingLabel
    	/>
   	);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
