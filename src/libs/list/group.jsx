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
 * mdc-list-group
 * See:
 * https://material.io/components/web/catalog/lists/
 *
 */

const MDC_LISTGROUP = "mdc-list-group";

const ListGroup = ({ children, ...props }) => {
  const classes = MDC_LISTGROUP;
  return Zrmc.render(<div className={classes}>{children}</div>, props);
};

ListGroup.defaultProps = {
  mdcElement: MDC_LISTGROUP,
  children: null,
};

ListGroup.propTypes = {
  mdcElement: PropTypes.string,
  children: PropTypes.node,
};

export default ListGroup;
