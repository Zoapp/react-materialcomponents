/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import PropTypes from "prop-types";

/*
mdc-grid-tile
See:
https://material.io/components/web/catalog/grid-lists/
https://material-components-web.appspot.com/grid-list.html

TODO:
- span, order, align
- Mixins
*/
const Tile = ({
  className, background, width, ...props
}) => {
  let classes = "mdc-grid-tile";
  if (className) {
    classes += ` ${className}`;
  }
  const style = {};
  if (width) {
    style.width = width;
  }
  const primaryStyle = {};
  if (background) {
    primaryStyle.background = background;
  }
  return (
    <ul className={classes} style={style} {...props} >
      <div className="mdc-grid-tile__primary" style={primaryStyle} />
    </ul>);
};

Tile.defaultProps = {
  className: null,
  background: null,
  width: null,
};

Tile.propTypes = {
// React component props
  className: PropTypes.string,
  background: PropTypes.string,
  width: PropTypes.string,
};

export default Tile;
