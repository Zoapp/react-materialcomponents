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
 * mdc-toolbar__section
 * See:
 * https://material.io/components/web/catalog/toolbar/
 * https://material-components-web.appspot.com/toolbar/index.html
 *
 */

const MDC_TBSECTION = "mdc-toolbar__section";

const Section = ({
  children, align, shrinkToFit, ...props
}) => {
  let classes = MDC_TBSECTION;
  if (align === "start") {
    classes += " mdc-toolbar__section--align-start";
  } else if (align === "end") {
    classes += " mdc-toolbar__section--align-end";
  }
  if (shrinkToFit) {
    classes += " mdc-toolbar__section--shrink-to-fit";
  }
  return Rmdc.render(<section className={classes}>{children}</section>, props);
};

Section.defaultProps = {
  mdcElement: MDC_TBSECTION,
  children: null,
  align: null,
  shrinkToFit: false,
};

Section.propTypes = {
  mdcElement: PropTypes.string,
  children: PropTypes.node,
  align: PropTypes.oneOf(["start", "end"]),
  shrinkToFit: PropTypes.bool,
};

export default Section;
