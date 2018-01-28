/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import PropTypes from "prop-types";

/*
mdc-card__media
See
https://material.io/components/web/catalog/cards/

*/
const CardMedia = ({
  children, className, src, size, alt, ...props
}) => {
  let classes = "mdc-card__media";
  if (src) {
    classes += `-item mdc-card__media-item--${size}`;
  }
  if (className) {
    classes += ` ${className}`;
  }
  // Check if src and set img instead
  if (src) {
    return (<img className={classes} src={src} alt={alt} {...props} />);
  }
  return (<section className={classes} {...props}>{children}</section>);
};

CardMedia.defaultProps = {
  children: null,
  className: null,
  src: null,
  size: "1x",
  alt: "",
};

CardMedia.propTypes = {
// React component props
  children: PropTypes.node,
  className: PropTypes.string,

  src: PropTypes.string,
  // TODO validate size type: 1x , 1dot5x, 2x, 3x
  size: PropTypes.string,
  alt: PropTypes.string,
};

export default CardMedia;
