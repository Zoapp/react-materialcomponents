/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { Component } from "react";
import PropTypes from "prop-types";

/**
 * mdc-ripple-surface
 * See:
 * https://material.io/components/web/catalog/ripples/
 * https://material-components-web.appspot.com/ripple.html
 * https://github.com/material-components/material-components-web/blob/master/packages/mdc-ripple/foundation.js
 *
 */

export default class Ripple extends Component {
  constructor(props) {
    super(props);
    this.state = { isActivated: false };
  }

  componentDidMount() {
    this.animateActivation();
  }

  componentDidUpdate() {
    this.animateActivation();
  }

  handleClick = (event, previousClick) => {
    this.activate();
    if (previousClick) {
      previousClick(event);
    }
  }
  activate = () => {
    if (this.state.isActivated) {
      // Stop previous action
      this.stopActivation();
    }
    this.setState({ isActivated: true }, () => { this.animateActivation(); });
  }

  stopActivation() {
    // TODO
    this.activationTimer = null;
  }

  animateActivation() {
    if (this.state.activated) {
      // TODO
    }
  }

  render() {
    const {
      unbounded, children,
    } = this.props;
    const { ...props } = children;
    if (props.className) {
      props.className += " mdc-ripple-surface";
    } else {
      props.className = "mdc-ripple-surface";
    }
    props.className += " mdc-ripple-upgraded";
    if (unbounded) {
      props.className += " mdc-ripple-upgraded--unbounded";
    }
    // TODO children should be React.component
    props.ref = (c) => { this.ref = c; };
    props.onClick = (e) => { this.handleClick(e, children.props.onClick); };
    return React.cloneElement(children, props);
  }
}

Ripple.defaultProps = {
  unbounded: false,
};

Ripple.propTypes = {
  unbounded: PropTypes.bool,
  children: PropTypes.element.isRequired,
};
