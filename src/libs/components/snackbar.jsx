/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import PropTypes from "prop-types";
import Rmdc from "../";

/*
mdc-layout-grid__cell
See:
https://material.io/components/web/catalog/snackbars/
https://material-components-web.appspot.com/snackbar.html

TODO:
- display, timeout
*/
const Snackbar = ({
  className,
  message,
  timeout,
  actionHandler,
  actionText,
  multiline,
  actionOnBottom,
  startAligned,
  ...props
}) => {
  let classes = "mdc-snackbar mdc-snackbar--active";
  if (multiline) {
    classes += " mdc-snackbar--multiline";
  }
  if (actionOnBottom) {
    classes += " mdc-snackbar--action-on-bottom";
  }
  if (startAligned) {
    classes += " mdc-snackbar--align-start";
  }
  if (className) {
    classes += ` ${className}`;
  }
  let actionWrapper = "";
  if (actionHandler && actionText) {
    actionWrapper = (
      <div className="mdc-snackbar__action-wrapper">
        <button
          type="button"
          className="mdc-snackbar__action-button"
          onClick={actionHandler}
        >{actionText}
        </button>
      </div>);
  }
  return Rmdc.render((
    <div
      className={classes}
      aria-live="assertive"
      aria-atomic="true"
      aria-hidden="true"
      {...props}
    >
      <div className="mdc-snackbar__text">{message}</div>
      {actionWrapper}
    </div>), props);
};

Snackbar.defaultProps = {
  className: null,

  timeout: 2750,
  actionHandler: null,
  actionText: null, // Required if actionHandler
  multiline: false,
  actionOnBottom: false,
  startAligned: false,
};

Snackbar.propTypes = {
// React component props
  className: PropTypes.string,

  message: PropTypes.string.isRequired,
  timeout: PropTypes.number,
  actionHandler: PropTypes.func,
  actionText: PropTypes.string, // Required if actionHandler
  multiline: PropTypes.bool,
  actionOnBottom: PropTypes.bool,
  startAligned: PropTypes.bool,
};

export default Snackbar;
