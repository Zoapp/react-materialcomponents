import React from "react";
import renderer from "react-test-renderer";
import Snackbar from "@libs/components/snackbar";

describe("components/Snackbar", () => {
  it("can be active", () => {
    const component = renderer.create(
      <Snackbar 
        message="foo" 
      	active
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have a timeout", () => {
    const component = renderer.create(
      <Snackbar 
        message="foo" 
      	timeout={50}
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have an action text", () => {
    const component = renderer.create(
      <Snackbar 
        message="foo" 
      	actionText="bar"
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have be multiline", () => {
    const component = renderer.create(
      <Snackbar 
        message="foo" 
        multiline
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have an actionOnBottom", () => {
    const component = renderer.create(
      <Snackbar 
        message="foo" 
        actionOnBottom
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can start aligned", () => {
    const component = renderer.create(
      <Snackbar 
        message="foo" 
        startAligned
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
