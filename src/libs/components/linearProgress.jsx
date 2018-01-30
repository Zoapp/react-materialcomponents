/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import PropTypes from "prop-types";

/*
mdc-linear-progress
See:
https://material.io/components/web/catalog/linear-progress/
https://material-components-web.appspot.com/linear-progress.html

*/
const LinearProgress = ({
  className, indeterminate, reversed, closed, progress, buffer, ...props
}) => {
  let classes = "mdc-linear-progress";
  const progressStyle = {};
  const bufferStyle = {};
  if (indeterminate) {
    classes += " mdc-linear-progress--indeterminate";
  } else {
    let p;
    if (progress < 0) {
      p = 0;
    } else if (progress > 1) {
      p = 1;
    } else {
      p = progress;
    }
    let b;
    if (buffer < 0) {
      b = 0;
    } else if (buffer > 1) {
      b = 1;
    } else {
      b = buffer;
    }
    progressStyle.transform = `scaleX(${p})`;
    bufferStyle.transform = `scaleX(${b})`;
  }
  if (reversed) {
    classes += " mdc-linear-progress--reversed";
  }
  if (closed) {
    classes += " mdc-linear-progress--closed";
  }
  if (className) {
    classes += ` ${className}`;
  }
  return (
    <div role="progressbar" className={classes} {...props}>
      <div className="mdc-linear-progress__buffering-dots" />
      <div className="mdc-linear-progress__buffer" style={bufferStyle} />
      <div className="mdc-linear-progress__bar mdc-linear-progress__primary-bar" style={progressStyle}>
        <span className="mdc-linear-progress__bar-inner" />
      </div>
      <div className="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
        <span className="mdc-linear-progress__bar-inner" />
      </div>
    </div>);
};

LinearProgress.defaultProps = {
  className: null,
  indeterminate: false,
  reversed: false,
  closed: false,
  progress: 0,
  buffer: 0,
};

LinearProgress.propTypes = {
// React component props
  className: PropTypes.string,
  indeterminate: PropTypes.bool,
  closed: PropTypes.bool,
  reversed: PropTypes.bool,
  progress: PropTypes.number,
  buffer: PropTypes.number,
};

export default LinearProgress;
