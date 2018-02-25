/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import PropTypes from "prop-types";
import Zrmc from "../";
import Button from "../components/button";

/**
 * mdc-dialog__footer
 * See:
 * https://material.io/components/web/catalog/dialogs/
 */

const MDC_DIALOGFOOTER = "mdc-dialog__footer";

const DialogFooter = ({
  children, actions, handleAction, ...props
}) => {
  const classes = MDC_DIALOGFOOTER;

  let buttonsOrActions;

  if (children) {
    buttonsOrActions = React.Children.map(children, (child, index) => {
      if (child.props && child.props.mdcElement === "mdc-button") {
        const p = {};

        let cs = "mdc-dialog__footer__button";
        if (child.props.type === "accept") {
          cs += " mdc-dialog__footer__button--accept";
        } else {
          cs += " mdc-dialog__footer__button--cancel";
        }

        p.className = cs;
        p.key = `f_${index}`;
        /*
          p.onClick = (e) => {
            e.preventDefault();
            handleAction(child.props.children);
            if (child.props.onClick) {
              child.props.onCLick(e);
            }
          };
          */

        return React.cloneElement(child, p);
      }
      return null;
    });
  } else {
    if (actions.length === 0) {
      actions.push({ name: "Ok" });
    }

    buttonsOrActions = actions.map((action, index) => {
      const title = action.title || action.name;
      let cs = "mdc-dialog__footer__button";
      if ((!action.type) || action.type === "accept") {
        cs += " mdc-dialog__footer__button--accept";
      } else if (action.type === "cancel") {
        cs += " mdc-dialog__footer__button--cancel";
      }
      const key = `f_${index}`;

      return (
        <Button
          key={key}
          className={cs}
          onClick={() => { handleAction(action.name); }}
        >
          {title}
        </Button>
      );
    });
  }

  return Zrmc.render(
    <footer className={classes}>
      {buttonsOrActions}
    </footer>,
    props,
  );
};

DialogFooter.defaultProps = {
  actions: [],
  children: null,
  handleAction: null,
  mdcElement: MDC_DIALOGFOOTER,
};

DialogFooter.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.shape({})),
  children: PropTypes.node,
  handleAction: PropTypes.func,
  mdcElement: PropTypes.string,
};

export default DialogFooter;
