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
 * mdc-list-divider
 * See:
 * https://material.io/components/web/catalog/menus/
 * https://material-components-web.appspot.com/simple-menu.html
 *
 */

const MDC_LIST_DIVIDER = "mdc-list-divider";

const MenuDivider = ({ ...props }) => {
  const classes = MDC_LIST_DIVIDER;
  return Zrmc.render(<li className={classes} role="separator" />, props);
};

MenuDivider.defaultProps = {
  mdcElement: MDC_LIST_DIVIDER,
};

MenuDivider.propTypes = {
  mdcElement: PropTypes.string,
};

export default MenuDivider;
