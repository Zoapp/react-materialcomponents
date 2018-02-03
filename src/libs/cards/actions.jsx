/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { Children } from "react";
import PropTypes from "prop-types";
import Rmdc from "../";

/**
 * mdc-card__actions
 * See
 * https://material.io/components/web/catalog/cards/
 *
 */

const MDC_CARD_ACTIONS = "mdc-card__actions";

const CardActions = ({
  children, vertical, ...props
}) => {
  let classes = MDC_CARD_ACTIONS;
  if (vertical) {
    classes += " mdc-card__actions--vertical";
  }
  // Iterate through children and set 'mdc-card__action'
  const ch = Children.map(children, child =>
    React.cloneElement(child, { ...child.props, cardAction: true }));
  return Rmdc.render(<section className={classes}>{ch}</section>, props);
};

CardActions.defaultProps = {
  mdcElement: MDC_CARD_ACTIONS,
  children: null,

  vertical: false,
  isactions: "true",
};

CardActions.propTypes = {
  mdcElement: PropTypes.string,
  children: PropTypes.node,

  vertical: PropTypes.bool,
  // Don't modify it
  isactions: PropTypes.string,
};

export default CardActions;
