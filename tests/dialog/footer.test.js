import React from "react";
import renderer from "react-test-renderer";
import DialogFooter from "libs/dialog/footer";
import Button from "libs/components/button";

jest.mock("dialog-polyfill", () => jest.fn());

describe("dialog/DialogFooter", () => {
  it("renders a footer with some buttons", () => {
    const component = renderer.create(
      <DialogFooter actions={[{ name: "Should not be displayed" }]}>
        <Button>I am a button</Button>
        <Button>I am another button</Button>
      </DialogFooter>,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders a footer with only one button", () => {
    const component = renderer.create(
      <DialogFooter actions={[{ name: "Should not be displayed" }]}>
        <Button>I am another button</Button>
      </DialogFooter>,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
