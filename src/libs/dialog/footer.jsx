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

class DialogFooter extends React.Component {
  constructor(props) {
    super(props);
    this.acceptButton = null;
  }

  componentDidMount() {
    this.updateFocus();
  }

  componentDidUpdate() {
    this.updateFocus();
  }

  updateFocus() {
    if (
      this.acceptButton &&
      this.acceptButton.innerRef &&
      typeof this.acceptButton.innerRef === "function"
    ) {
      this.acceptButton.innerRef.focus();
    }
  }

  render() {
    const { children, actions, handleAction, ...props } = this.props;
    const classes = MDC_DIALOGFOOTER;

    const buttonsOrActions = [];

    if (children) {
      React.Children.forEach(children, (child, index) => {
        if (child.props && child.props.mdcElement === "mdc-button") {
          const p = {};

          let cs = "mdc-dialog__footer__button";
          let isActive = false;
          if (child.props.type === "accept") {
            cs += " mdc-dialog__footer__button--accept";
            isActive = true;
          } else if (child.props.type === "cancel") {
            cs += " mdc-dialog__footer__button--cancel";
          }

          p.className = cs;
          p.key = `f_${index}`;
          if (isActive) {
            p.ref = (e) => {
              this.acceptButton = e;
            };
          }
          buttonsOrActions.unshift(React.cloneElement(child, p));
        }
      });
    } else {
      if (actions.length === 0) {
        actions.push({ name: "Ok" });
      }

      let isActive = false;
      actions.forEach((action, index) => {
        const title = action.title || action.name;
        let cs = "mdc-dialog__footer__button";
        let active = false;
        if (!isActive && action.type === "accept") {
          cs += " mdc-dialog__footer__button--accept";
          isActive = true;
          active = true;
        } else if (action.type === "cancel") {
          cs += " mdc-dialog__footer__button--cancel";
        } else if (index === actions.length - 1 && !isActive) {
          isActive = true;
          active = true;
        }
        const key = `f_${index}`;
        buttonsOrActions.unshift(
          <Button
            key={key}
            className={cs}
            onClick={() => {
              handleAction(action.name);
            }}
            ref={(e) => {
              if (active) {
                this.acceptButton = e;
              }
            }}
          >
            {title}
          </Button>,
        );
      });
    }

    return Zrmc.render(
      <footer className={classes}>{buttonsOrActions}</footer>,
      props,
    );
  }
}

/*
const DialogFooter = ({ children, actions, handleAction, ...props }) => {};
*/

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
