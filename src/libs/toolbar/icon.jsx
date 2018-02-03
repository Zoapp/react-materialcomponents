/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import Icon from "../components/icon";

/**
 *
 * mdc-toolbar__menu-icon
 *
 * See:
 * https://material.io/components/web/catalog/toolbar/
 * https://material-components-web.appspot.com/toolbar/index.html
 *
 */

const MDC_TBICON = "mdc-toolbar__menu-icon";

export default props => <Icon className={MDC_TBICON} mdcElement={MDC_TBICON} componentName="a" {...props} />;
