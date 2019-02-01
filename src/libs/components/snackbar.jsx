/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import Zrmc from "../";

/**
 * mdc-snackbar
 *
 * See:
 * https://material.io/develop/web/components/snackbars/
 *
 */

const MDC_SNACKBAR = "mdc-snackbar";

export default class Snackbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
      message: props.message,
      transitionEnd: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState(
        {
          active: true,
        },
        this.setTimer(),
      );
    }, 1);
  }

  componentDidUpdate() {
    this.setTimer();
  }

  componentWillUnmount() {
    this.clearTimer();
  }

  updateMessage(message) {
    this.setState({ active: true, message });
  }

  setTimer() {
    this.clearTimer();
    if (this.state.active) {
      this.timer = setTimeout(() => {
        this.desactivate();
      }, this.props.timeout);
    }
  }

  desactivate = () => {
    this.setState({ active: false });
    this.timer = null;
  };

  clearTimer() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  onTransitionEnd = () => {
    if (!this.state.transitionEnd && !this.state.active) {
      this.setState({ transitionEnd: true });
      this.props.onTimeout();
    }
  };

  render() {
    const {
      timeout,
      onTimeout,
      onAction,
      actionText,
      multiline,
      actionOnBottom,
      startAligned,
      ...props
    } = this.props;
    const { message, active } = this.state;
    let classes = MDC_SNACKBAR;
    if (active) {
      classes += " mdc-snackbar--active";
    }
    if (multiline) {
      classes += " mdc-snackbar--multiline";
    }
    if (actionOnBottom) {
      classes += " mdc-snackbar--action-on-bottom";
    }
    if (startAligned) {
      classes += " mdc-snackbar--align-start";
    }
    let actionWrapper = "";
    if (onAction && actionText) {
      actionWrapper = (
        <div className="mdc-snackbar__action-wrapper">
          <button
            type="button"
            className="mdc-snackbar__action-button"
            onClick={() => {
              this.desactivate();
              onAction();
            }}
          >
            {actionText}
          </button>
        </div>
      );
    }
    return Zrmc.render(
      <div
        className={classes}
        aria-live="assertive"
        aria-atomic="true"
        aria-hidden="true"
        onTransitionEnd={this.onTransitionEnd}
      >
        <div className="mdc-snackbar__text">{message}</div>
        {actionWrapper}
      </div>,
      props,
    );
  }
}

Snackbar.defaultProps = {
  mdcElement: MDC_SNACKBAR,
  active: true,
  timeout: 2750,
  onAction: null,
  onTimeout: null,
  actionText: null, // Required if actionHandler
  multiline: false,
  actionOnBottom: false,
  startAligned: false,
};

Snackbar.propTypes = {
  mdcElement: PropTypes.string,
  active: PropTypes.bool,
  message: PropTypes.string.isRequired,
  timeout: PropTypes.number,
  onAction: PropTypes.func,
  onTimeout: PropTypes.func,
  actionText: PropTypes.string, // Required if actionHandler
  multiline: PropTypes.bool,
  actionOnBottom: PropTypes.bool,
  startAligned: PropTypes.bool,
};
