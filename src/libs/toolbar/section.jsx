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
 * TODO:
 * - All
 */

const MDC_TBSECTION = "mdc-toolbar__section";

const Section = ({
  children, alignStart, ...props
}) => {
  let classes = MDC_TBSECTION;
  if (alignStart) {
    classes += " mdc-toolbar__section--align-start";
  }
  // TODO all
  return Rmdc.render(<section className={classes}>{children}</section>, props);
};

Section.defaultProps = {
  mdcElement: MDC_TBSECTION,
  children: null,
  alignStart: false,
};

Section.propTypes = {
  mdcElement: PropTypes.string,
  children: PropTypes.node,
  alignStart: PropTypes.bool,
};

export default Section;
