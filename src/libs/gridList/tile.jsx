/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { Children } from "react";
import PropTypes from "prop-types";
import Rmdc from "../";
import Icon from "../components/icon";

/**
 * mdc-grid-tile
 * See:
 * https://material.io/components/web/catalog/grid-lists/
 * https://material-components-web.appspot.com/grid-list.html
 *
 * TODO:
 * - span, order, align
 */

const MDC_GRIDTILE = "mdc-grid-tile";

const Tile = ({
  children, background, width, title, text, icon, ...props
}) => {
  const classes = MDC_GRIDTILE;
  const style = {};
  if (width) {
    style.width = width;
  }
  const primaryStyle = {};
  if (background) {
    primaryStyle.background = background;
  }
  let ch;
  if (children) {
    ch = Children.only(children);
    const c = `mdc-grid-tile__primary-content  ${ch.props.className})`;
    ch = React.cloneElement(ch, { className: c });  
  }
  let secondary;
  if (title) {
    let i;
    if (icon) {
      i = (<Icon className="mdc-grid-tile__icon" name={icon} />);
    }
    let t;
    if (text) {
      t = (<span className="mdc-grid-tile__support-text">{text}</span>);
    }
    secondary = (
      <span className="mdc-grid-tile__secondary">
        {i}
        <span className="mdc-grid-tile__title">{title}</span>
        {t}
      </span>
    );
  }
  return Rmdc.render((
    <ul className={classes} style={style} >
      <div className="mdc-grid-tile__primary" style={primaryStyle} >
        {ch}
      </div>
      {secondary}
    </ul>), props);
};

Tile.defaultProps = {
  mdcElement: MDC_GRIDTILE,
  children: null,
  background: null,
  width: null,
  title: null,
  text: null,
  icon: null,
};

Tile.propTypes = {
  mdcElement: PropTypes.string,
  children: (props, propName) => {
    const prop = props[propName];
    const types = ["img", "div"];
    if (prop && (Children.count(prop) > 1 ||
        types.indexOf(prop.type) === -1)) {
      return new Error("invalid Tile's child");
    }
    return null;
  },
  background: PropTypes.string,
  width: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.string,
};

export default Tile;
