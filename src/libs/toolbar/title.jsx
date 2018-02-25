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
 * mdc-toolbar__title
 * See:
 * https://material.io/components/web/catalog/toolbar/
 * https://material-components-web.appspot.com/toolbar/index.html
 *
 */

const MDC_TBTITLE = "mdc-toolbar__title";

const Title = ({
  children, ...props
}) => {
  const classes = MDC_TBTITLE;
  return Zrmc.render(<span className={classes}>{children}</span>, props);
};

Title.defaultProps = {
  mdcElement: MDC_TBTITLE,
};

Title.propTypes = {
  mdcElement: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Title;
