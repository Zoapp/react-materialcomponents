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
mdc-card__subtitle
See
https://material.io/components/web/catalog/cards/

*/
const CardSubtitle = ({
  children, className, ...props
}) => {
  let classes = "mdc-card__subtitle";
  if (className) {
    classes += ` ${className}`;
  }
  return Rmdc.render(<h2 className={classes} {...props}>{children}</h2>, props);
};

CardSubtitle.defaultProps = {
  children: null,
  className: null,
};

CardSubtitle.propTypes = {
// React component props
  children: PropTypes.node,
  className: PropTypes.string,
};

export default CardSubtitle;
