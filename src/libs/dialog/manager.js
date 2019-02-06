/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import ReactDOM from "react-dom";
import Zrmc from "../";

/**
 * Dialog management to display close using a stack
 * Inspiration
 * https://github.com/xue2han/react-dynamic-modal/blob/master/src/Modal.js
 */

let node;
let modalsArray;
let currentDialog;

const getModals = () => {
  if (!modalsArray) {
    modalsArray = [];
  }
  return modalsArray;
};

const renderModal = () => {
  const modals = getModals();
  const { length } = modals;
  if (length > 0) {
    const dialog = modals[length - 1];
    if (currentDialog) {
      ReactDOM.unmountComponentAtNode(node);
      currentDialog = null;
    }
    ReactDOM.render(dialog, node);
    Zrmc.lockScroll();
  }
};

const DialogManager = {
  init() {
    modalsArray = null;
    currentDialog = null;

    // Fix error on multiple zrmc import
    // Zrmc.showDialog call on Opla & Zrmc.closeDialog call on Zoapp
    // Before node are not the same
    node = document.getElementById("dialog-container");
    if (!node) {
      node = document.createElement("div");
      node.className = "dialog_bg";
      node.id = "dialog-container";
      document.body.appendChild(node);
    }
  },

  open(dialog) {
    let component = null;
    const ref = (r) => {
      currentDialog = r;
    };
    if (dialog) {
      component = React.cloneElement(dialog, { ref });
    }
    const modals = getModals();
    modals.push(component);
    renderModal();
  },

  willCloseCurrentDialog() {
    if (currentDialog && currentDialog.onClose) {
      currentDialog.onClose();
    }
  },

  close() {
    ReactDOM.unmountComponentAtNode(node);
    Zrmc.unlockScroll();
    const modals = getModals();
    modals.pop();
    currentDialog = null;
    const overlay = document.getElementsByClassName("_dialog_overlay");
    if (overlay && overlay[0]) {
      overlay[0].style.visibility = "hidden";
    }
    renderModal();
  },

  forceUpdate() {
    if (currentDialog) {
      currentDialog.forceUpdate();
    }
  },
};

export default DialogManager;
