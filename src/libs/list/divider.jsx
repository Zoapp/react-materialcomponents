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
 * mdc-list-divider
 * See:
 * https://material.io/components/web/catalog/lists/
 *
 */

const MDC_LISTDIVIDER = "mdc-list-divider";

const ListDivider = ({ type, inset, ...props }) => {
  let classes = MDC_LISTDIVIDER;
  if (inset) {
    classes += " mdc-list-divider--inset";
  }
  if (type === "hr") {
    return Rmdc.render(<hr className={classes} />, props);
  }
  return Rmdc.render(<li className={classes} role="separator" />, props);
};

ListDivider.defaultProps = {
  mdcElement: MDC_LISTDIVIDER,
  type: "li",
  inset: false,
};

ListDivider.propTypes = {
  mdcElement: PropTypes.string,
  type: PropTypes.string,
  inset: PropTypes.bool,
};

export default ListDivider;
