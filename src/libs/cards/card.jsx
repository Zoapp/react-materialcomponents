/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { Children } from "react";
import PropTypes from "prop-types";
import CardPrimary from "./primary";

/*
mdc-card
See
https://material.io/components/web/catalog/cards/
https://material-components-web.appspot.com/card.html

*/
const Card = ({
  children, className, title, subTitle, largeTitle, horizontalBlock, darkTheme, ...props
}) => {
  let classes = "mdc-card";
  if (darkTheme) {
    classes += " mdc-card--theme-dark";
  }
  if (className) {
    classes += ` ${className}`;
  }
  let primary = "";
  if (title || subTitle) {
    primary = (<CardPrimary title={title} subTitle={subTitle} largeTitle={largeTitle} />);
  }
  let ca = children;
  if (horizontalBlock) {
    // Extract other sections without CardActions from children
    const sections = Children.map(children, (child) => {
      if (child.props && (child.props.isactions !== "true")) {
        return child;
      }
      ca = React.cloneElement(child);
      return null;
    });
    primary = (<div className="mdc-card__horizontal-block">{primary}{sections}</div>);
  }
  return (<div className={classes} {...props}>{primary}{ca}</div>);
};

Card.defaultProps = {
  children: null,
  className: null,

  title: null,
  subTitle: null,
  largeTitle: false,
  horizontalBlock: false,
  darkTheme: false,
};

Card.propTypes = {
// React component props
  children: PropTypes.node,
  className: PropTypes.string,

  title: PropTypes.string,
  subTitle: PropTypes.string,
  largeTitle: PropTypes.bool,
  horizontalBlock: PropTypes.bool,
  darkTheme: PropTypes.bool,
};

export default Card;
