/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { Children } from "react";
import PropTypes from "prop-types";
import CardPrimary from "./primary";
import Zrmc from "../";

/**
 * mdc-card
 * See
 * https://material.io/components/web/catalog/cards/
 * https://material-components-web.appspot.com/card.html
 *
 */

const MDC_CARD = "mdc-card";

const Card = ({
  children,
  title,
  subTitle,
  largeTitle,
  horizontalBlock,
  ...props
}) => {
  const classes = MDC_CARD;
  let primary = "";
  if (title || subTitle) {
    primary = (
      <CardPrimary title={title} subTitle={subTitle} largeTitle={largeTitle} />
    );
  }
  let ca = children;
  if (horizontalBlock) {
    // Extract other sections without CardActions from children
    const sections = Children.map(children, (child) => {
      if (child.props && child.props.isactions !== "true") {
        return child;
      }
      ca = React.cloneElement(child);
      return null;
    });
    primary = (
      <div className="mdc-card__horizontal-block">
        {primary}
        {sections}
      </div>
    );
  }
  return Zrmc.render(
    <div className={classes}>
      {primary}
      {ca}
    </div>,
    props,
  );
};

Card.defaultProps = {
  mdcElement: MDC_CARD,
  children: null,
  title: null,
  subTitle: null,
  largeTitle: false,
  horizontalBlock: false,
};

Card.propTypes = {
  mdcElement: PropTypes.string,
  children: PropTypes.node,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  largeTitle: PropTypes.bool,
  horizontalBlock: PropTypes.bool,
};

export default Card;
