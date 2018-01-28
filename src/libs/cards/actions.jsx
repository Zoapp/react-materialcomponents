/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { Children } from "react";
import PropTypes from "prop-types";

/*
mdc-card__actions
See
https://material.io/components/web/catalog/cards/

*/
const CardActions = ({
  children, className, vertical, ...props
}) => {
  let classes = "mdc-card__actions";
  if (vertical) {
    classes += " mdc-card__actions--vertical";
  }
  if (className) {
    classes += ` ${className}`;
  }
  // Iterate through children and set 'mdc-card__action'
  const ch = Children.map(children, child =>
    React.cloneElement(child, { ...child.props, cardAction: true }));
  return (<section className={classes} {...props}>{ch}</section>);
};

CardActions.defaultProps = {
  children: null,
  className: null,

  vertical: false,
  isactions: "true",
};

CardActions.propTypes = {
// React component props
  children: PropTypes.node,
  className: PropTypes.string,

  vertical: PropTypes.bool,

  // Don't modify it
  isactions: PropTypes.string,
};

export default CardActions;
