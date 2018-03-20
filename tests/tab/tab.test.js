import React from "react";
import renderer from "react-test-renderer";
import { Tab } from "libs/tab";

describe("tab/Tab", () => {
  it("can have children", () => {
    const tree = renderer.create(<Tab>Children are here!</Tab>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can be active", () => {
    const tree = renderer.create(<Tab active />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have a text", () => {
    const tree = renderer.create(<Tab text="foobar" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have an icon", () => {
    const tree = renderer.create(<Tab icon="foobar" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have a link", () => {
    const tree = renderer.create(<Tab href="#" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have an id", () => {
    const tree = renderer.create(<Tab tabId={1} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can be colored", () => {
    const tree = renderer.create(<Tab color="pink" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
