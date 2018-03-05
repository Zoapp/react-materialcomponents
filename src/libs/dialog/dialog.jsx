/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { Component, Children } from "react";
import PropTypes from "prop-types";
import dialogPolyfill from "dialog-polyfill";

import DialogManager from "./manager";
import DialogHeader from "./header";
import DialogBody from "./body";
import DialogFooter from "./footer";
import Zrmc from "../";
import TextField from "../components/textfield";

/**
 * mdc-dialog
 * This implementation is different from Material Components
 * it uses HTML Dialog or its poylfill if not present
 * See
 * https://material.io/components/web/catalog/dialogs/
 * https://material-components-web.appspot.com/dialog.html
 *
 */

const MDC_DIALOG = "mdc-dialog";

export default class Dialog extends Component {
  constructor(props) {
    super(props);
    this.dialogWidth = 0;
    this.dialogHeight = 0;
  }

  componentDidMount() {
    const dialog = this.dialogRef;

    // avoid chrome warnings and update only on unsupported browsers
    if (!dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    }
    this.dialogRef.addEventListener("cancel", this.props.onCancel);
    if (this.props.open) {
      this.dialogRef.showModal();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.open) {
      if (!prevProps.open) {
        this.dialogRef.showModal();
      }

      // display the dialog at the right location
      // needed for the polyfill, otherwise it's not at the right position
      // const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      if (this.dialogRef) {
        const dialogWidth = this.dialogRef.clientWidth;
        const dialogHeight = this.dialogRef.clientHeight;
        if (dialogWidth !== this.dialogWidth || dialogHeight !== this.dialogHeight) {
          this.dialogWidth = dialogWidth;
          this.dialogHeight = dialogHeight;
          this.dialogRef.style.position = "fixed";
          this.dialogRef.style.top = `${(windowHeight - dialogHeight) / 2}px`;
          // this.dialogRef.style.left = `${(windowWidth - dialogWidth) / 2}px`;
        }
      } /* else {
        this.dialogRef.close();
      } */
    }
  }

  componentWillUnmount() {
    this.dialogRef.removeEventListener("cancel", this.props.onCancel);
  }

  getFieldValue() {
    return this.fieldRef;
  }

  invalidateField() {
    if (this.fieldRef) {
      this.fieldRef.setAsInvalid();
    }
  }

  handleClick = (action = "close") => {
    if (this.props.onAction) {
      if (!this.props.onAction(this, action, this.props.data)) {
        return;
      }
    }
    DialogManager.close();
  }

  render() {
    const {
      open, header, children, actions, onClose, width, field, ...props
    } = this.props;
    let classes = `rmdc-dialog ${MDC_DIALOG}`;
    if (open) {
      classes += " mdc-dialog--open";
    }
    const s = {};
    if (width) {
      s.width = width;
      s.minWidth = width;
    }
    let headerElement = header;
    let footerElement;
    let bodyElement = Children.map(children, (child) => {
      let e = "";
      if (child.props && child.props.mdcElement) {
        e = child.props.mdcElement;
      }
      if (e === "mdc-dialog__header") {
        headerElement = child;
        return null;
      } else if (e === "mdc-dialog__footer") {
        footerElement = child;
        return null;
      }
      return child;
    });
    // TODO check if children contains Header / Footer
    if (field) {
      bodyElement = (
        <DialogBody>
          <TextField
            defaultValue={field.defaultValue}
            label={field.name}
            pattern={field.pattern}
            helperText={field.error}
            cid={field.cid}
            style={{ width: "100%" }}
            ref={(c) => { this.fieldRef = c; }}
          />
        </DialogBody>
      );
    } else if (!(bodyElement.props &&
      bodyElement.props.mdcElement &&
      bodyElement.props.mdcElement === "mdc-dialog__body")) {
      bodyElement = <DialogBody>{bodyElement}</DialogBody>;
    }
    if (!(headerElement && headerElement.props &&
      headerElement.props.mdcElement &&
      headerElement.props.mdcElement === "mdc-dialog__header")) {
      headerElement = <DialogHeader>{header}</DialogHeader>;
    }
    if (!(footerElement && footerElement.props &&
      footerElement.props.mdcElement &&
      footerElement.props.mdcElement === "mdc-dialog__footer")) {
      footerElement = (
        <DialogFooter
          actions={actions}
          handleAction={this.handleClick}
        />
      );
    }
    const d = (
      <dialog
        role="presentation"
        ref={(c) => { this.dialogRef = c; }}
        className={classes}
        onKeyUp={() => { }}
        onClick={() => { this.props.onClose(); }}
      >
        <div
          className="mdc-dialog__surface"
          role="presentation"
          onKeyUp={() => { }}
          style={s}
          onClick={(e) => { e.stopPropagation(); }}
        >
          {headerElement}
          {bodyElement}
          {footerElement}
        </div>
      </dialog>
    );
    return Zrmc.render(d, props);
  }
}

Dialog.defaultProps = {
  mdcElement: MDC_DIALOG,
  header: null,
  actions: [],
  width: null,
  open: true,
  onClose: () => { DialogManager.close(); },
  onCancel: null,
  onAction: null,
  field: null,
  children: null,
  data: null,
};

Dialog.propTypes = {
  mdcElement: PropTypes.string,
  header: PropTypes.oneOfType([
    PropTypes.node, PropTypes.string]),
  children: PropTypes.node,
  actions: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
  })),
  width: PropTypes.string,
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onCancel: PropTypes.func,
  onAction: PropTypes.func,
  field: PropTypes.shape({}),
  data: PropTypes.shape({}),
};
