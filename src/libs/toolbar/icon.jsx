/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import PropTypes from "prop-types";

/*
See:
https://material.io/components/web/catalog/toolbar/
https://material-components-web.appspot.com/toolbar/index.html

TODO:
- All
- Mixins
*/
const Icon = ({
  className, icon, ...props
}) => {
  let classes = "material-icons";
  // TODO all
  if (icon === "menu") {
    classes += " mdc-toolbar__menu-icon";
    if (className) {
      classes += ` ${className}`;
    }
    const link = "#"; // TODO
    return (<a href={link} className={classes} {...props}>{icon}</a>);
  }
  classes += ` ${icon}`;
  if (className) {
    classes += ` ${className}`;
  }
  return (<a className={classes} {...props}>{icon}</a>);
};

Icon.defaultProps = {
  className: null,

  icon: null,
};

Icon.propTypes = {
// React component props
  className: PropTypes.string,

  icon: PropTypes.string,
};

export default Icon;
