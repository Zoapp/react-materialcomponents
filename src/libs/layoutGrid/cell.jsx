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
 * mdc-layout-grid__cell
 * See:
 * https://material.io/components/web/catalog/layout-grid/
 *
 */

const MDC_GRIDCELL = "mdc-layout-grid__cell";

const Cell = ({ children, span, spanDevice, order, align, ...props }) => {
  let classes = MDC_GRIDCELL;
  if (span > 0 && span < 13) {
    classes += ` mdc-layout-grid__cell--span-${span}`;
  } else if (spanDevice) {
    if (
      spanDevice.desktop &&
      spanDevice.desktop > 0 &&
      spanDevice.desktop < 13
    ) {
      classes += ` mdc-layout-grid__cell--span-${spanDevice.desktop}-desktop`;
    }
    if (spanDevice.tablet && spanDevice.tablet > 0 && spanDevice.tablet < 13) {
      classes += ` mdc-layout-grid__cell--span-${spanDevice.tablet}-tablet`;
    }
    if (spanDevice.phone && spanDevice.phone > 0 && spanDevice.phone < 13) {
      classes += ` mdc-layout-grid__cell--span-${spanDevice.phone}-phone`;
    }
  }
  if (order > 0 && order < 13) {
    classes += ` mdc-layout-grid__cell--order-${order}`;
  }
  if (align) {
    classes += ` mdc-layout-grid__cell--align-${align}`;
  }
  return Zrmc.render(<div className={classes}>{children}</div>, props);
};

Cell.defaultProps = {
  mdcElement: MDC_GRIDCELL,
  children: null,
  span: 0,
  spanDevice: null,
  order: 0,
  align: null,
};

Cell.propTypes = {
  mdcElement: PropTypes.string,
  children: PropTypes.node,
  span: PropTypes.number,
  spanDevice: PropTypes.shape({
    desktop: PropTypes.number,
    tablet: PropTypes.number,
    phone: PropTypes.number,
  }),
  order: PropTypes.number,
  align: PropTypes.oneOf(["top", "middle", "bottom"]),
};

export default Cell;
