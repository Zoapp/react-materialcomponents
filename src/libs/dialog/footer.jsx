/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import PropTypes from "prop-types";
import Rmdc from "../";
import Button from "../components/button";

/**
 * mdc-dialog__footer
 * See:
 * https://material.io/components/web/catalog/dialogs/
 *
 */

const MDC_DIALOGFOOTER = "mdc-dialog__footer";

const DialogFooter = ({
  children, actions, handleAction, ...props
}) => {
  const classes = MDC_DIALOGFOOTER;
  let raw = children;
  let a = [];
  if (actions) {
    raw = "";
    a = actions;
  }
  const element = (
    <footer className={classes}>
      {raw}
      {a.map((action, index) => {
        const title = action.title || action.name;
        let cs = "mdc-dialog__footer__button";
        if ((!action.type) || action.type === "accept") {
          cs += " mdc-dialog__footer__button--accept";
        } else if (action.type === "cancel") {
          cs += " mdc-dialog__footer__button--cancel";
        }
        const key = `f_${index}`;
        return (
          <Button key={key} className={cs} onClick={() => { handleAction(action.name); }} >
            {title}
          </Button>);
      })}
    </footer>);
  return Rmdc.render(element, props);
};

DialogFooter.defaultProps = {
  mdcElement: MDC_DIALOGFOOTER,
  children: null,
  actions: null,
};

DialogFooter.propTypes = {
  mdcElement: PropTypes.string,
  children: PropTypes.node,
  actions: PropTypes.arrayOf(PropTypes.shape({})),
  handleAction: PropTypes.func.isRequired,
};

export default DialogFooter;
