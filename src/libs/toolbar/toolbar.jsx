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
https://material.io/components/web/catalog/buttons/
http://material-components-web.appspot.com/button.html

TODO:
- Ripple effect
- Mixins
*/
export default class Toolbar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { flexibleExpansionRatio: 0 };
    this.handleScroll = this.handleScroll.bind(this);
    this.calculations = { toolbarRowHeight: 0 };
  }

  handleScroll() {
    this.setState({ scrollTop: this.getWindow().pageYOffset });
  }

  render() {
    const { className, fixed, waterfall, fixedLastRowOnly, flexible, flexibleDefaultBehavior,
      children, windowContext, ...otherProps } = this.props;
    const classes = "mdc-toolbar";
    return (
      <header className={classes}>{children}</header>
    );
  }
}