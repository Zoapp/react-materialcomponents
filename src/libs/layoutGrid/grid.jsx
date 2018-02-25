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
 * mdc-layout-grid
 * See:
 * https://material.io/components/web/catalog/layout-grid/
 *
 */

const MDC_GRID = "mdc-layout-grid";

const Grid = ({
  children, fixedColumnWidth, align, margin, gutter, maxWidth, ...props
}) => {
  let classes = MDC_GRID;
  if (align) {
    classes += ` mdc-layout-grid--align-${align}`;
  }
  if (fixedColumnWidth) {
    classes += "mdc-layout-grid--fixed-column-width";
  }
  const p = {};
  if (margin) {
    p.style = {};
    if (margin.desktop) {
      p.style["--mdc-layout-grid-margin-desktop"] = margin.desktop;
    }
    if (margin.tablet) {
      p.style["--mdc-layout-grid-margin-tablet"] = margin.tablet;
    }
    if (margin.phone) {
      p.style["--mdc-layout-grid-margin-phone"] = margin.tablet;
    }
  }
  if (gutter) {
    if (!p.style) {
      p.style = {};
    }
    if (gutter.desktop) {
      p.style["--mdc-layout-grid-gutter-desktop"] = gutter.desktop;
    }
    if (gutter.tablet) {
      p.style["--mdc-layout-grid-gutter-tablet"] = gutter.tablet;
    }
    if (gutter.phone) {
      p.style["--mdc-layout-grid-gutter-phone"] = gutter.tablet;
    }
  }
  if (maxWidth) {
    if (!p.style) {
      p.style = {};
    }
    p.style.maxWidth = maxWidth;
  }
  return Zrmc.render(<div className={classes} {...p} >{children}</div>, props);
};

Grid.defaultProps = {
  mdcElement: MDC_GRID,
  children: null,
  fixedColumnWidth: false,
  align: null,
  margin: null,
  gutter: null,
  maxWidth: null,
};

Grid.propTypes = {
  mdcElement: PropTypes.string,
  children: PropTypes.node,
  fixedColumnWidth: PropTypes.bool,
  align: PropTypes.oneOf(["left", "right"]),
  margin: PropTypes.shape({
    desktop: PropTypes.string,
    tablet: PropTypes.string,
    phone: PropTypes.string,
  }),
  gutter: PropTypes.shape({
    desktop: PropTypes.string,
    tablet: PropTypes.string,
    phone: PropTypes.string,
  }),
  maxWidth: PropTypes.string,
};

export default Grid;
