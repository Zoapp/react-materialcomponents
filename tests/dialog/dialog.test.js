import React from "react";
import renderer from "react-test-renderer";
import dialogPolyfill from "dialog-polyfill";
import Dialog from "libs/dialog/dialog";

jest.mock("dialog-polyfill", () => jest.fn());

describe("dialog/Dialog", () => {
  it("renders correctly", () => {
    dialogPolyfill.registerDialog = jest.fn();

    // We are interested in seeing whether this method is called.
    const showModalSpy = jest.fn();

    // This represents the fake `dialogRef`
    const createNodeMock = () => ({
      addEventListener: jest.fn(),
      showModal: showModalSpy,
    });

    const component = renderer.create(
      <Dialog
        header="Are you happy?"
        actions={[{ name: "Cancel" }, { name: "Continue" }]}
      >
        <div>Hello, here is some content</div>
      </Dialog>,
      { createNodeMock },
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    expect(showModalSpy).toHaveBeenCalled();
    expect(dialogPolyfill.registerDialog).not.toHaveBeenCalled();
  });

  it("uses the dialog-polyfill when needed", () => {
    dialogPolyfill.registerDialog = jest.fn();

    // This represents the fake `dialogRef`
    const createNodeMock = () => ({
      addEventListener: jest.fn(),
      // we simulate a `<dialog>` without the `showModal` function, which
      // implies the activation of the polyfill.
      // Because we cannot update the fake `dialogRef` after, we do not open
      // the Dialog by default (hence the prop `open={false}` below.
      showModal: undefined,
    });

    const component = renderer.create(
      <Dialog
        header="Are you happy?"
        actions={[{ name: "Cancel" }, { name: "Continue" }]}
        open={false}
      >
        <div>Hello, here is some content</div>
      </Dialog>,
      { createNodeMock },
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    expect(dialogPolyfill.registerDialog).toHaveBeenCalled();
  });

  it("renders a dialog with no actions specified", () => {
    // This represents the fake `dialogRef`
    const createNodeMock = () => ({
      addEventListener: jest.fn(),
      showModal: jest.fn(),
    });

    const component = renderer.create(
      <Dialog header="Are you happy?">
        <div>Hello, here is some content</div>
      </Dialog>,
      { createNodeMock },
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can render a TextField if `field` prop is supplied", () => {
    // This represents the fake `dialogRef`
    const createNodeMock = () => ({
      addEventListener: jest.fn(),
      showModal: jest.fn(),
    });

    const field = {
      defaultValue: "",
      error: "error message",
      name: "field-1",
      pattern: "",
      id: "unique-component-id", // avoid random id generation
    };

    const component = renderer.create(
      <Dialog field={field}>
        <div>Hello, you should see a TextField</div>
      </Dialog>,
      { createNodeMock },
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    component.getInstance().invalidateField();

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe("getFieldValue()", () => {
    it("returns null if tere is no input", () => {
      // This represents the fake `dialogRef`
      const createNodeMock = () => ({
        addEventListener: jest.fn(),
        showModal: jest.fn(),
      });

      const component = renderer.create(
        <Dialog>
          <div>Hello, you should NOT see a TextField</div>
        </Dialog>,
        { createNodeMock },
      );

      const value = component.getInstance().getFieldValue();
      expect(value).toEqual(null);
    });

    it("returns the input value", () => {
      // This represents the fake `dialogRef`
      const createNodeMock = () => ({
        addEventListener: jest.fn(),
        showModal: jest.fn(),
      });

      const field = {
        defaultValue: "hello",
        error: "error message",
        name: "field-1",
        pattern: "",
        id: "unique-component-id", // avoid random id generation
      };

      const component = renderer.create(
        <Dialog field={field}>
          <div>Hello, you should see a TextField</div>
        </Dialog>,
        { createNodeMock },
      );

      const value = component.getInstance().getFieldValue();
      expect(value).toEqual(field.defaultValue);
    });
  });
});
