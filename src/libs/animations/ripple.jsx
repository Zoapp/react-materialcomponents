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

const FG_ACTIVATION = "mdc-ripple-upgraded--foreground-activation";
const FG_DEACTIVATION = "mdc-ripple-upgraded--foreground-deactivation";
const BG_FOCUSED = "mdc-ripple-upgraded--background-focused";
const VAR_LEFT = "--mdc-ripple-left";
const VAR_TOP = "--mdc-ripple-top";
const VAR_FG_SIZE = "--mdc-ripple-fg-size";
const VAR_FG_SCALE = "--mdc-ripple-fg-scale";
const VAR_FG_TRANSLATE_START = "--mdc-ripple-fg-translate-start";
const VAR_FG_TRANSLATE_END = "--mdc-ripple-fg-translate-end";
const DEACTIVATION_TIMEOUT_MS = 225;
const FG_DEACTIVATION_MS = 150;
const PADDING = 10;
const INITIAL_ORIGIN_SCALE = 0.6;

export default class Ripple extends Component {
  constructor(props) {
    super(props);
    this.state = { focused: false, isActivated: false };

    this.layoutFrame = 0;
    this.frame = ({ width: 0, height: 0 });
    this.initialSize = 0;
    this.maxRadius = 0;
    this.unboundedCoords = {
      left: 0,
      top: 0,
    };
    this.fgScale = 0;
    this.activationTimer = 0;
    this.fgDeactivationRemovalTimer = 0;
  }

  componentDidMount() {
    this.layout();
  }

  componentDidUpdate() {
    this.layout();
  }

  onBlur = (event, previousOnBlur) => {
    this.setState({ focused: false });
    if (previousOnBlur) {
      previousOnBlur(event);
    }
  }

  onFocus = (event, previousOnFocus) => {
    this.setState({ focused: true });
    if (previousOnFocus) {
      previousOnFocus(event);
    }
  }

  getFgTranslationCoordinates() {
    // Center the element around the start point.
    const startPoint = {
      x: (this.frame.width - this.initialSize) / 2,
      y: (this.frame.height - this.initialSize) / 2,
    };

    const endPoint = {
      x: (this.frame.width - this.initialSize) / 2,
      y: (this.frame.height - this.initialSize) / 2,
    };

    return { startPoint, endPoint };
  }

  rmBoundedActivationClasses() {
    this.ref.classList.remove(FG_ACTIVATION);
    this.activationAnimationHasEnded = false;
  }

  handleActivate = (event, previousActivation) => {
    this.activate();
    if (previousActivation) {
      previousActivation(event);
    }
  }

  handleDeactivate = (event, previousDeactivation) => {
    this.deactivate();
    if (previousDeactivation) {
      previousDeactivation(event);
    }
  }

  deactivate() {
    if (this.state.isActivated) {
      this.setState({ isActivated: false }, () => { this.animateDeactivation(); });
    }
  }

  activate() {
    if (this.state.isActivated) {
      // Stop previous action
      this.stopActivation();
    }
    this.setState({ isActivated: true }, () => { this.animateActivation(); });
  }

  stopActivation() {
    clearTimeout(this.activationTimer);
    clearTimeout(this.fgDeactivationRemovalTimer);
    this.activationTimer = null;
    this.fgDeactivationRemovalTimer = null;
    this.rmBoundedActivationClasses();
    this.ref.classList.remove(FG_DEACTIVATION);
  }

  animateDeactivation() {
    const { isActivated } = this.state.isActivated;
    const activationHasEnded = !isActivated;

    if (activationHasEnded && this.activationAnimationHasEnded) {
      this.rmBoundedActivationClasses();
      this.ref.classList.add(FG_DEACTIVATION);
      this.fgDeactivationRemovalTimer = setTimeout(() => {
        this.ref.classList.remove(FG_DEACTIVATION);
      }, FG_DEACTIVATION_MS);
    }
  }

  animateActivation() {
    if (this.state.isActivated) {
      let translateStart = "";
      let translateEnd = "";

      if (!this.props.unbounded) {
        const { startPoint, endPoint } = this.getFgTranslationCoordinates();
        translateStart = `${startPoint.x}px, ${startPoint.y}px`;
        translateEnd = `${endPoint.x}px, ${endPoint.y}px`;
      }
      this.ref.style.setProperty(VAR_FG_TRANSLATE_START, translateStart);
      this.ref.style.setProperty(VAR_FG_TRANSLATE_END, translateEnd);
      this.ref.classList.add(FG_ACTIVATION);
      this.activationTimer = setTimeout(
        () => {
          this.activationAnimationHasEnded = true;
          this.animateDeactivation();
        },
        DEACTIVATION_TIMEOUT_MS,
      );
    }
  }

  layout() {
    this.frame = this.ref.getBoundingClientRect();
    const maxDim = Math.max(this.frame.height, this.frame.width);

    if (this.props.unbounded) {
      const hypotenuse = Math.sqrt((this.frame.width ** 2) + (this.frame.height ** 2));
      this.maxRadius = hypotenuse + PADDING;
    } else {
      this.maxRadius = maxDim;
    }
    this.initialSize = maxDim * INITIAL_ORIGIN_SCALE;
    this.fgScale = this.maxRadius / this.initialSize;
    this.updateLayoutCssVars();
  }

  updateLayoutCssVars() {
    this.ref.style.setProperty(VAR_FG_SIZE, `${this.initialSize}px`);
    this.ref.style.setProperty(VAR_FG_SCALE, this.fgScale);

    if (this.props.unbounded) {
      this.unboundedCoords = {
        left: Math.round((this.frame.width / 2) - (this.initialSize / 2)),
        top: Math.round((this.frame.height / 2) - (this.initialSize / 2)),
      };

      this.ref.style.setProperty(VAR_LEFT, `${this.unboundedCoords.left}px`);
      this.ref.style.setProperty(VAR_TOP, `${this.unboundedCoords.top}px`);
    }
  }

  render() {
    const {
      unbounded, children,
    } = this.props;
    const { ...props } = children.props;
    if (props.className) {
      props.className += " mdc-ripple-surface";
    } else {
      props.className = "mdc-ripple-surface";
    }
    props.className += " mdc-ripple-upgraded";
    if (unbounded) {
      props.className += " mdc-ripple-upgraded--unbounded";
      props["data-mdc-ripple-is-unbounded"] = true;
    }
    if (this.state.focused) {
      props.className += ` ${BG_FOCUSED}`;
    }
    props.ref = (c) => { this.ref = c; };
    props.onTouchStart = (e) => { this.handleActivate(e, children.props.onTouchStart); };
    /* props.onPointerDown = (e) => { this.handleActivation(e, children.props.onPointerDown); }; */
    props.onMouseDown = (e) => { this.handleActivate(e, children.props.onMouseDown); };
    props.onKeyDown = (e) => { this.handleActivate(e, children.props.onKeyDown); };
    props.onTouchEnd = (e) => { this.handleDeactivate(e, children.props.onTouchEnd); };
    /* props.onPointerUp = (e) => { this.handleDeactivate(e, children.props.onPointerUp); }; */
    props.onMouseUp = (e) => { this.handleDeactivate(e, children.props.onMouseUp); };
    props.onKeyUp = (e) => { this.handleDeactivate(e, children.props.onKeyUp); };
    props.onBlur = (e) => { this.onBlur(e, children.props.onBlur); };
    props.onFocus = (e) => { this.onFocus(e, children.props.onFocus); };
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
