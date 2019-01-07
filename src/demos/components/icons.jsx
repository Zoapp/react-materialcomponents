/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import { Icon } from "../../../src/libs";
import Property from "./property";

const Icons = () => (
  <section>
    <h1>Icon examples </h1>
    <div style={{ display: "flex" }}>
      <div style={{ padding: "16px" }}>
        <Icon name="favorite" isButton />
      </div>
      <div style={{ padding: "16px" }}>
        <Icon fa="trophy" />
      </div>
      <div style={{ padding: "16px" }}>
        <Icon>
          <svg className="zrmc-icon_svg" viewBox="0 0 24 24">
            <path
              fill="#000000"
              d="M12,2A3,3 0 0,0 9,5C9,6.27 9.8,7.4 11,7.83V10H8V12H11V18.92C9.16,18.63 7.53,17.57 6.53,16H8V14H3V19H5V17.3C6.58,19.61 9.2,21 12,21C14.8,21 17.42,19.61 19,17.31V19H21V14H16V16H17.46C16.46,17.56 14.83,18.63 13,18.92V12H16V10H13V7.82C14.2,7.4 15,6.27 15,5A3,3 0 0,0 12,2M12,4A1,1 0 0,1 13,5A1,1 0 0,1 12,6A1,1 0 0,1 11,5A1,1 0 0,1 12,4Z"
            />
          </svg>
        </Icon>
      </div>
      <div style={{ padding: "16px" }}>
        <Icon>fa-trophy</Icon>
      </div>
      <div style={{ padding: "16px" }}>
        <Icon>favorite</Icon>
      </div>
    </div>
    <h2>Icon properties</h2>
    <Property name="Icon" />
  </section>
);

export default Icons;
