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
 * mdc_chip
 * See:
 * https://material.io/components/web/catalog/chips/
 * https://material-components-web.appspot.com/chips.html
 *
 * TODO : migrate to mdc 0.30.0 to integrate chips css
 */

const MDC_CHIP = "mdc-chip";

const Chip = ({ color, children, ...props }) => {
  const classes = MDC_CHIP;
  const p = Zrmc.sanitizeProps(props);
  if (color) {
    p.style = {};
    p.style.color = color;
  }
  p.className = classes;
  let text = children;
  if (typeof children === "string") {
    text = React.createElement("div", { className: "mdc-chip__text" });
  }
  const element = React.createElement("div", p, text);
  return Zrmc.render(element, props);
};

Chip.defaultProps = {
  mdcElement: MDC_CHIP,
  color: null,
};

Chip.propTypes = {
  mdcElement: PropTypes.string,
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Chip;
