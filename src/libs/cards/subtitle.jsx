/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import PropTypes from "prop-types";
import Zrmc from "../";

/**
 * mdc-card__subtitle
 * See
 * https://material.io/components/web/catalog/cards/
 *
 */

const MDC_CARD_SUBTITLE = "mdc-card__subtitle";

const CardSubtitle = ({ children, className, ...props }) => {
  const classes = MDC_CARD_SUBTITLE;
  return Zrmc.render(<h2 className={classes}>{children}</h2>, props);
};

CardSubtitle.defaultProps = {
  mdcElement: MDC_CARD_SUBTITLE,
  children: null,
};

CardSubtitle.propTypes = {
  mdcElement: PropTypes.string,
  children: PropTypes.node,
};

export default CardSubtitle;
