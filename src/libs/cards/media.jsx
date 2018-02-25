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
 * mdc-card__media
 * See
 * https://material.io/components/web/catalog/cards/
 *
 */

const MDC_CARD_MEDIA = "mdc-card__media";

const CardMedia = ({
  children, src, size, alt, ...props
}) => {
  let classes = MDC_CARD_MEDIA;
  if (src) {
    classes += `-item mdc-card__media-item--${size}`;
  }

  // Check if src and set img instead
  let element;
  if (src) {
    element = (<img className={classes} src={src} alt={alt} style={props.style} />);
  } else {
    element = (<section className={classes}>{children}</section>);
  }
  return Zrmc.render(element, props);
};

CardMedia.defaultProps = {
  mdcElement: MDC_CARD_MEDIA,
  children: null,
  src: null,
  size: "1x",
  alt: "",
};

CardMedia.propTypes = {
  mdcElement: PropTypes.string,
  children: PropTypes.node,
  src: PropTypes.string,
  // TODO validate size type: 1x , 1dot5x, 2x, 3x
  size: PropTypes.string,
  alt: PropTypes.string,
};

export default CardMedia;
