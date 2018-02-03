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
 * mdc-card__supporting-text
 * See
 * https://material.io/components/web/catalog/cards/
 *
 */

const MDC_CARD_TEXT = "mdc-card__supporting-text";

const CardText = ({ children, ...props }) => {
  const classes = MDC_CARD_TEXT;
  return Rmdc.render(<section className={classes}>{children}</section>, props);
};

CardText.defaultProps = {
  mdcElement: MDC_CARD_TEXT,
  children: null,
};

CardText.propTypes = {
  mdcElement: PropTypes.string,
  children: PropTypes.node,
};

export default CardText;
