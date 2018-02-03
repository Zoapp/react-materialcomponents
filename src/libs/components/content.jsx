/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import PropTypes from "prop-types";
import Rmdc from "../";

/**
 * rmdc-content
 * Helper container for mdc-toolbar-fixed-adjust
 * See
 * https://material.io/components/web/catalog/toolbar/
 *
 */

const MDC_CONTENT = "rmdc-content";

const Content = ({
  children, fixed, toolbarAdjust, ...props
}) => {
  let classes = MDC_CONTENT;
  if (fixed) {
    classes += " rmdc-content-fixed-adjust";
  } else {
    classes += " rmdc-content-height";
  }
  if (toolbarAdjust) {
    classes += " mdc-toolbar-fixed-adjust";
  }
  const element = (<div className={classes}>{children}</div>);
  return Rmdc.render(element, props);
};

Content.defaultProps = {
  mdcElement: MDC_CONTENT,
  children: null,
  fixed: false,
  toolbarAdjust: false,
};

Content.propTypes = {
  mdcElement: PropTypes.string,
  children: PropTypes.node,
  fixed: PropTypes.bool,
  toolbarAdjust: PropTypes.bool,
};

export default Content;
