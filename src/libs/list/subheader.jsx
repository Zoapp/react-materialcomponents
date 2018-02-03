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
 * mdc-list-group__subheader
 * See:
 * https://material.io/components/web/catalog/lists/
 *
 */

const MDC_LISTSUBHEADER = "mdc-list-group__subheader";

const ListGroupSubheader = ({
  children, type, ...props
}) => {
  const classes = MDC_LISTSUBHEADER;
  // TODO type
  let element;
  if (type !== "h3") {
    element = (<h3 className={classes}>{children}</h3>);
  } else {
    element = (<h3 className={classes}>{children}</h3>);
  }
  return Rmdc.render(element, props);
};

ListGroupSubheader.defaultProps = {
  mdcElement: MDC_LISTSUBHEADER,
  children: null,
  type: "h3",
};

ListGroupSubheader.propTypes = {
  mdcElement: PropTypes.string,
  children: PropTypes.node,
  type: PropTypes.string,
};

export default ListGroupSubheader;
