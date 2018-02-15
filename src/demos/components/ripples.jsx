/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import Rmdc, { Icon } from "../../../src/libs";

export default () => {
  const ripple = Rmdc.render(
    <div
      style={
        {
          alignItems: "center",
          justifyContent: "center",
          width: "200px",
          height: "100px",
          padding: "1rem",
          cursor: "pointer",
        }
      }
    >Interact with me !
    </div>,
    { ripple: true },
  );
  const bounded = (
    <Icon
      name="favorite"
      ripple="unbounded"
      style={{ width: "24px", height: "24px", padding: "12px" }}
    />);
  return (
    <section>
      <h1>Ripple examples </h1>
      {ripple}
      <div style={{ margin: "16px" }} >
        {bounded}
      </div>
    </section>);
};
