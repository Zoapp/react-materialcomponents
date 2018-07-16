import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import Snackbar from "libs/components/snackbar";

describe("components/Snackbar", () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = shallow(<Snackbar message="foo" />);
  });

  it("can be active", () => {
    const component = renderer.create(<Snackbar message="foo" active />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have a timeout", () => {
    const component = renderer.create(<Snackbar message="foo" timeout={50} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have an action text", () => {
    const component = renderer.create(
      <Snackbar message="foo" actionText="bar" />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have be multiline", () => {
    wrapper.setProps({ multiline: true });
    expect(wrapper.hasClass("mdc-snackbar--multiline")).toEqual(true);
  });

  it("can have an actionOnBottom", () => {
    wrapper.setProps({ actionOnBottom: true });
    expect(wrapper.hasClass("mdc-snackbar--action-on-bottom")).toEqual(true);
  });

  it("can start aligned", () => {
    wrapper.setProps({ startAligned: true });
    expect(wrapper.hasClass("mdc-snackbar--align-start")).toEqual(true);
  });
});
