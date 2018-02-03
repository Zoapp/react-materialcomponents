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
  children, width, tileWidth, tileBackground, ...props
}) => {
  const classes = MDC_GRIDLIST;
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
};

GridList.propTypes = {
  mdcElement: PropTypes.string,
  children: PropTypes.node,
  width: PropTypes.string,
  tileWidth: PropTypes.string,
  tileBackground: PropTypes.string,
};

export default GridList;
