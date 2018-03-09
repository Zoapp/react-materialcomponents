/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { Children } from "react";
import PropTypes from "prop-types";
import CardTitle from "./title";
import CardSubtitle from "./subtitle";
import Zrmc from "../";

/**
 * mdc-card__primary
 * See
 * https://material.io/components/web/catalog/cards/
 *
 */

const MDC_CARD_PRIMARY = "mdc-card__primary";

const CardPrimary = ({
  children,
  title,
  subTitle,
  largeTitle,
  isTitlingSecond,
  ...props
}) => {
  const classes = MDC_CARD_PRIMARY;

  let t = "";
  let s = "";
  if (title) {
    t = <CardTitle>{title}</CardTitle>;
  }
  if (subTitle) {
    s = <CardSubtitle>{subTitle}</CardSubtitle>;
  }
  let first = "";
  let ch = children;
  if (isTitlingSecond) {
    ch = Children.map((child, index) => {
      if (index === 0) {
        first = React.cloneElement(child);
        return null;
      }
      return child;
    });
  }
  return Zrmc.render(
    <section className={classes}>
      {first}
      {t}
      {s}
      {ch}
    </section>,
    props,
  );
};

CardPrimary.defaultProps = {
  mdcElement: MDC_CARD_PRIMARY,
  children: null,
  title: null,
  subTitle: null,
  largeTitle: false,
  isTitlingSecond: false,
};

CardPrimary.propTypes = {
  mdcElement: PropTypes.string,
  children: PropTypes.node,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  largeTitle: PropTypes.bool,
  isTitlingSecond: PropTypes.bool,
};

export default CardPrimary;
