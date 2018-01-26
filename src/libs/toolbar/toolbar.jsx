/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { PureComponent } from "react";
import PropTypes from "prop-types";

/*
See:
https://material.io/components/web/catalog/toolbar/
https://material-components-web.appspot.com/toolbar/index.html

TODO:
- waterfall, flexible, fixedlastrow
- Mixins
*/
export default class Toolbar extends PureComponent {
  constructor(props) {
    super(props);
    // TODO
    this.todo = {};
  }

  render() {
    const {
      children, className, fixed, ...otherProps
    } = this.props;
    let classes = "mdc-toolbar";
    if (fixed) {
      classes += " mdc-toolbar--fixed";
    }
    return (
      <header className={classes} {...otherProps} >{children}</header>
    );
  }
}

Toolbar.defaultProps = {
  children: null,
  className: null,

  fixed: false,
};

Toolbar.propTypes = {
// React component props
  children: PropTypes.node,
  className: PropTypes.string,

  fixed: PropTypes.bool,
};
