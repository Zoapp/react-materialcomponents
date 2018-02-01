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
mdc-card__supporting-text
See
https://material.io/components/web/catalog/cards/

*/
const CardText = ({
  children, className, ...props
}) => {
  let classes = "mdc-card__supporting-text";
  if (className) {
    classes += ` ${className}`;
  }
  return Rmdc.render(<section className={classes}>{children}</section>, props);
};

CardText.defaultProps = {
  children: null,
  className: null,
};

CardText.propTypes = {
// React component props
  children: PropTypes.node,
  className: PropTypes.string,
};

export default CardText;
