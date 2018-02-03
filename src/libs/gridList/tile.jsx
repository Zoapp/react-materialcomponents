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
 * mdc-grid-tile
 * See:
 * https://material.io/components/web/catalog/grid-lists/
 * https://material-components-web.appspot.com/grid-list.html
 *
 * TODO:
 * - span, order, align
 */

const MDC_GRIDTILE = "mdc-grid-tile";

const Tile = ({
  background, width, ...props
}) => {
  const classes = MDC_GRIDTILE;
  const style = {};
  if (width) {
    style.width = width;
  }
  const primaryStyle = {};
  if (background) {
    primaryStyle.background = background;
  }
  return Rmdc.render((
    <ul className={classes} style={style} >
      <div className="mdc-grid-tile__primary" style={primaryStyle} />
    </ul>), props);
};

Tile.defaultProps = {
  mdcElement: MDC_GRIDTILE,
  background: null,
  width: null,
};

Tile.propTypes = {
  mdcElement: PropTypes.string,
  background: PropTypes.string,
  width: PropTypes.string,
};

export default Tile;
