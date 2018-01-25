/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import PropTypes from "prop-types";

/*
See:
https://material.io/components/web/catalog/toolbar/
https://material-components-web.appspot.com/toolbar/index.html

TODO:
- All
- Mixins
*/
const Section = ({
  children, className, alignStart, ...props
}) => {
  let classes = "mdc-toolbar__section";
  if (alignStart) {
    classes += " mdc-toolbar__section--align-start";
  }
  // TODO all
  return (<section className={classes} {...props}>{children}</section>);
};

Section.defaultProps = {
  children: null,
  className: null,

  alignStart: false,
};

Section.propTypes = {
// React component props
  children: PropTypes.node,
  className: PropTypes.string,

  alignStart: PropTypes.bool,
};

export default Section;