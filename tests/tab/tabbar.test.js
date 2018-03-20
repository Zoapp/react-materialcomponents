import React from "react";
import renderer from "react-test-renderer";
import { Tabbar, Tab } from "libs/tab";

describe("tab/Tabbar", () => {
  it("can configure the active tab", () => {
    const tree = renderer.create(<Tabbar activeTab={1} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can be colored", () => {
    const tree = renderer.create(<Tabbar color="pink" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have an active color", () => {
    const tree = renderer.create(<Tabbar activeColor="pink" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can have children", () => {
    const tree = renderer
      .create(
        <Tabbar>
          <Tab text="persistent" />
        </Tabbar>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
