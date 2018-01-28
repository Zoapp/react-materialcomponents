/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import PropTypes from "prop-types";

/*
mdc-fab
See
https://material.io/components/web/catalog/buttons/floating-action-buttons/

*/
const Fab = ({
  children, className, icon, label, ...props
}) => {
  let classes = "mdc-fab material-icons rmdc-fab--absolute";
  if (className) {
    classes += ` ${className}`;
  }
  let ch = children;
  if (icon) {
    ch = (<span className="mdc-fab__icon">{icon}</span>);
  }
  return (<button className={classes} {...props} aria-label={label} >{ch}</button>);
};

Fab.defaultProps = {
  children: null,
  className: null,

  icon: null,
  label: null,
};

Fab.propTypes = {
// React component props
  children: PropTypes.node,
  className: PropTypes.string,

  icon: PropTypes.string,
  label: PropTypes.string,
};

export default Fab;
