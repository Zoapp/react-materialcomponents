import React from "react";
import { shallow, mount } from "enzyme";
import renderer from "react-test-renderer";
import Snackbar from "libs/components/snackbar";

jest.useFakeTimers();

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

describe("onAction()", () => {
  it("should call onAction callback", () => {
    const onActionSpy = jest.fn();
    const wrapper = shallow(
      <Snackbar message="foo" actionText="test" onAction={onActionSpy} />,
    );

    wrapper.find("button").simulate("click");
    expect(onActionSpy).toHaveBeenCalled();
  });
});

describe("onTimeout()", () => {
  it("should call desactivate", () => {
    const onTimeoutSpy = jest.fn();
    const wrapper = mount(
      <Snackbar message="foo" timeout={250} onTimeout={onTimeoutSpy} />,
    );

    jest.runOnlyPendingTimers();
    wrapper.update();
    expect(wrapper.state("active")).toEqual(true);
    expect(wrapper.instance().timer).not.toEqual(undefined);

    wrapper.instance().desactivate = jest.fn();
    jest.runOnlyPendingTimers();
    expect(wrapper.instance().desactivate).toHaveBeenCalled();
  });

  it("should call onTimeout callback", () => {
    const onTimeoutSpy = jest.fn();
    const wrapper = shallow(
      <Snackbar message="foo" timeout={250} onTimeout={onTimeoutSpy} />,
    );

    wrapper.instance().desactivate();
    wrapper.simulate("transitionEnd");
    expect(onTimeoutSpy).toHaveBeenCalled();
  });
});
