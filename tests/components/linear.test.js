import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import LinearProgress from "libs/components/linearProgress";

describe("components/LinearProgress", () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = shallow(<LinearProgress />);
  });

  it("can be indeterminate", () => {
    wrapper.setProps({ indeterminate: true });
    expect(wrapper.hasClass("mdc-linear-progress--indeterminate")).toEqual(
      true,
    );
  });

  it("can be closed", () => {
    wrapper.setProps({ closed: true });
    expect(wrapper.hasClass("mdc-linear-progress--closed")).toEqual(true);
  });

  it("can be reversed", () => {
    wrapper.setProps({ reversed: true });
    expect(wrapper.hasClass("mdc-linear-progress--reversed")).toEqual(true);
  });

  it("can render a presetted progress", () => {
    const component = renderer.create(<LinearProgress progress={50} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have a buffer", () => {
    const component = renderer.create(<LinearProgress buffer={50} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
