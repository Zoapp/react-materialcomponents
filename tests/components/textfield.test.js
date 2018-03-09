import React from "react";
import renderer from "react-test-renderer";
import TextField from "libs/components/textfield";

describe("components/TextField", () => 
  it("renders correctly", () => {
    const component = renderer.create(<TextField id="unique-component-id" />);
  });

  it("can have a label", () => {
    const component = renderer.create(
    	<TextField 
    	  cid="unique-component-id"
    	  label="foo" 
    	/>
   	);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have a type", () => {
    const component = renderer.create(
    	<TextField 
    	  cid="unique-component-id"
    	  type="bar" 
    	/>
   	);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  it("can be disabled", () => {
    const component = renderer.create(
    	<TextField 
    	  cid="unique-component-id"
    	  disabled
    	/>
   	);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can be dense", () => {
    const component = renderer.create(
    	<TextField 
    	  cid="unique-component-id"
    	  dense
    	/>
   	);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have an helper Text", () => {
    const component = renderer.create(
    	<TextField 
    	  cid="unique-component-id"
    	  helperText="foobar"
    	/>
   	);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have an helper text persistent", () => {
    const component = renderer.create(
    	<TextField 
    	  cid="unique-component-id"
    	  htPersistent
    	/>
   	);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have an helper text with a validation message", () => {
    const component = renderer.create(
    	<TextField 
    	  cid="unique-component-id"
    	  htValidationMsg
    	/>
   	);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can be full width", () => {
    const component = renderer.create(
    	<TextField 
    	  cid="unique-component-id"
    	  fullwidth
    	/>
   	);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can be a Textarea", () => {
    const component = renderer.create(
    	<TextField 
    	  cid="unique-component-id"
    	  isTextarea
    	/>
   	);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });


  it("can be Boxed", () => {
    const component = renderer.create(
    	<TextField 
    	  cid="unique-component-id"
    	  isBoxed
    	/>
   	);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can be outlined", () => {
    const component = renderer.create(
    	<TextField 
    	  cid="unique-component-id"
    	  outlined
    	/>
   	);
  });

  it("can have a leadingIcon", () => {
    const component = renderer.create(
    	<TextField 
    	  cid="unique-component-id"
    	  leadingIcon="favorite"
    	/>
   	);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have a default Value", () => {
    const component = renderer.create(
    	<TextField 
    	  cid="unique-component-id"
    	  defaultValue="favorite"
    	/>
   	);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have a trailing Icon", () => {
    const component = renderer.create(
    	<TextField 
    	  cid="unique-component-id"
    	  trailingIcon="favorite"
    	/>
   	);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have a no floating label", () => {
    const component = renderer.create(
    	<TextField 
    	  cid="unique-component-id"
    	  noFloatingLabel
    	/>
   	);
    const tree = component.toJSON();
  });

  it("can be marked as invalid", () => {
    const component = renderer.create(<TextField id="unique-component-id" />);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    component.getInstance().setAsInvalid();

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe("getValue()", () => {
    it("returns the input value", () => {
      const component = renderer.create(
        <TextField id="unique-component-id" defaultValue="hello" />,
      );

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();

      const value = component.getInstance().getValue();
      expect(value).toEqual("hello");
    });
  });
});
