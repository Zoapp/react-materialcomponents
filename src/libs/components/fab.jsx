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
 * mdc-fab
 *
 * See
 * https://material.io/develop/web/components/buttons/floating-action-buttons/
 *
 */

const MDC_FAB = "mdc-fab";

const Fab = ({ children, icon, label, onClick, ...props }) => {
  const classes = "mdc-fab material-icons zrmc-fab--absolute";
  let ch = children;
  if (icon) {
    ch = <span className="mdc-fab__icon">{icon}</span>;
  }
  const element = (
    <button className={classes} onClick={onClick} aria-label={label}>
      {ch}
    </button>
  );
  return Zrmc.render(element, props);
};

Fab.defaultProps = {
  mdcElement: MDC_FAB,
  children: null,
  icon: null,
  label: null,
  onClick: null,
};

Fab.propTypes = {
  mdcElement: PropTypes.string,
  children: PropTypes.node,
  icon: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
};

export default Fab;
