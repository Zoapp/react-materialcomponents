/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import PropTypes from "prop-types";

/*
mdc-list-divider
See:
https://material.io/components/web/catalog/lists/

*/
const ListDivider = ({
  className, type, inset,
}) => {
  let classes = "mdc-list-divider";
  if (inset) {
    classes += " mdc-list-divider--inset";
  }
  if (className) {
    classes += ` ${className}`;
  }
  if (type === "hr") {
    return (<hr className={classes} />);
  }
  return (<li className={classes} role="separator" />);
};

ListDivider.defaultProps = {
  className: null,

  type: "li",
  inset: false,
};

ListDivider.propTypes = {
// React component props
  className: PropTypes.string,

  type: PropTypes.string,
  inset: PropTypes.bool,
};

export default ListDivider;
