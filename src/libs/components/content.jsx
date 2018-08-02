/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { Children } from "react";
import PropTypes from "prop-types";
import Zrmc from "../";

/**
 * zrmc-content
 * Helper container for mdc-toolbar-fixed-adjust
 * See
 * https://material.io/components/web/catalog/toolbar/
 *
 */

const MDC_CONTENT = "zrmc-content";

const Content = ({ children, fixed, toolbarAdjust, ...props }) => {
  let classes = MDC_CONTENT;
  let fix = fixed;
  let ta = false;
  let drawerAbove = false;
  let above = false;
  const rtl = Zrmc.isRtl(this);
  Children.forEach(children, (child) => {
    if (child && child.props) {
      const name = child.props.mdcElement;
      if (name === "mdc-toolbar") {
        fix = child.props.fixed;
        ta = true;
      } else if (
        name === "mdc-drawer" &&
        ((child.props.open && child.props.type !== "temporary") ||
          child.props.type === "permanent")
      ) {
        if (child.props.type === "persistent" || child.props.above) {
          // For toolbar
          drawerAbove = true;
        }
        // For main content
        above = true;
      }
    }
  });
  const ch = Children.map(children, (child) => {
    if (child && child.props) {
      const name = child.props.mdcElement;
      if (name === "mdc-toolbar") {
        fix = child.props.fixed;
        ta = true;
        if (drawerAbove) {
          // TODO rtl
          return React.cloneElement(child, { drawerAbove });
        }
      } else if (
        name === "zrmc-content" &&
        (fix !== child.props.fixed || ta !== child.props.toolbarAdjust)
      ) {
        return React.cloneElement(child, { fixed: fix, toolbarAdjust: ta });
      }
    }
    return child;
  });
  if (fix) {
    classes += " zrmc-content-fixed-adjust";
  } else {
    classes += " zrmc-content-height";
  }
  if (toolbarAdjust) {
    classes += " mdc-toolbar-fixed-adjust";
  }
  if (above) {
    if (rtl) {
      classes += " zrmc-content-drawer-rtl";
    } else {
      classes += " zrmc-content-drawer";
    }
  }

  const element = <div className={classes}>{ch}</div>;
  return Zrmc.render(element, props);
};

Content.defaultProps = {
  mdcElement: MDC_CONTENT,
  children: null,
  fixed: false,
  toolbarAdjust: false,
};

Content.propTypes = {
  mdcElement: PropTypes.string,
  children: PropTypes.node,
  fixed: PropTypes.bool,
  /* DO not set manually this props computed auto */
  toolbarAdjust: PropTypes.bool,
};

export default Content;
