/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import PropTypes from "prop-types";

/*
Helper container for mdc-toolbar-fixed-adjust
See
https://material.io/components/web/catalog/toolbar/

*/
const Content = ({
  children, className, fixed, toolbarAdjust, ...props
}) => {
  let classes = "rmdc-content";
  if (fixed) {
    classes += " rmdc-content-fixed-adjust";
  } else {
    classes += " rmdc-content-height";
  }
  if (toolbarAdjust) {
    classes += " mdc-toolbar-fixed-adjust";
  }
  if (className) {
    classes += ` ${className}`;
  }
  return (<div className={classes} {...props}>{children}</div>);
};

Content.defaultProps = {
  children: null,
  className: null,

  fixed: false,
  toolbarAdjust: false,
};

Content.propTypes = {
// React component props
  children: PropTypes.node,
  className: PropTypes.string,

  fixed: PropTypes.bool,
  toolbarAdjust: PropTypes.bool,
};

export default Content;
