/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { Children } from "react";
import PropTypes from "prop-types";
import Rmdc from "../";

/**
 * mdc-grid-list
 * See:
 * https://material.io/components/web/catalog/grid-lists/
 * https://material-components-web.appspot.com/grid-list.html
 *
 */

const MDC_GRIDLIST = "mdc-grid-list";

const GridList = ({
  children,
  width,
  tileWidth,
  tileBackground,
  gutter,
  headerCaption,
  twolineCaption,
  iconAlign,
  aspectRatio,
  ...props
}) => {
  let classes = MDC_GRIDLIST;
  if (gutter === 1) {
    classes += " mdc-grid-list--tile-gutter-1";
  }
  if (headerCaption) {
    classes += " mdc-grid-list--header-caption";
  }
  if (twolineCaption) {
    classes += " mdc-grid-list--twoline-caption";
  }
  if (iconAlign === "start") {
    classes += " mdc-grid-list--with-icon-align-start";
  } else if (iconAlign === "end") {
    classes += " mdc-grid-list--with-icon-align-end";
  }
  if (aspectRatio) {
    classes += ` mdc-grid-list--tile-aspect-${aspectRatio}`;
  }
  const style = {};
  if (width) {
    style.width = width;
  }
  let ch = children;
  if (tileWidth || tileBackground) {
    ch = Children.map(children, (child) => {
      const ps = { ...child.props };
      if (tileWidth) {
        ps.width = tileWidth;
      }
      if (tileBackground) {
        ps.background = tileBackground;
      }
      return React.cloneElement(child, ps);
    });
  }

  return Rmdc.render((
    <div className={classes}>
      <ul className="mdc-grid-list__tiles" style={style} >
        {ch}
      </ul>
    </div>), props);
};

GridList.defaultProps = {
  mdcElement: MDC_GRIDLIST,
  children: null,
  width: null,
  tileWidth: null,
  tileBackground: null,
  gutter: 0,
  headerCaption: false,
  twolineCaption: false,
  iconAlign: null,
  aspectRatio: null,

};

GridList.propTypes = {
  mdcElement: PropTypes.string,
  children: PropTypes.node,
  width: PropTypes.string,
  tileWidth: PropTypes.string,
  tileBackground: PropTypes.string,
  gutter: PropTypes.number,
  headerCaption: PropTypes.bool,
  twolineCaption: PropTypes.bool,
  iconAlign: PropTypes.oneOf(["start", "end"]),
  aspectRatio: PropTypes.oneOf(["1x1", "16x9", "2x3", "3x2", "4x3", "4x3"]),
};

export default GridList;
