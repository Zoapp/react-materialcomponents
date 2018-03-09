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
 * mdc-card__title
 * See
 * https://material.io/components/web/catalog/cards/
 *
 */

const MDC_CARD_TITLE = "mdc-card__title";

const CardTitle = ({ children, large, ...props }) => {
  let classes = MDC_CARD_TITLE;
  if (large) {
    classes += " mdc-card__title--large";
  }
  return Zrmc.render(<h1 className={classes}>{children}</h1>, props);
};

CardTitle.defaultProps = {
  mdcElement: MDC_CARD_TITLE,
  children: null,
  large: false,
};

CardTitle.propTypes = {
  mdcElement: PropTypes.string,
  children: PropTypes.node,
  large: PropTypes.bool,
};

export default CardTitle;
