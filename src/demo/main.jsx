/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import Cards from "./components/cards";
import Buttons from "./components/buttons";
import Checkboxes from "./components/checkboxes";
import GridLists from "./components/gridlists";
import IconToggles from "./components/iconToggles";
import LinearProgresses from "./components/linearProgress";
import Lists from "./components/lists";
import Menus from "./components/menus";
import Radios from "./components/radios";
import Selects from "./components/selects";
import Sliders from "./components/sliders";
import Switchs from "./components/switchs";
import Tabbars from "./components/tabbars";
import Textfields from "./components/textfields";


export default () => (
  <main>
    <Cards />
    <Buttons />
    <Checkboxes />
    <GridLists />
    <IconToggles />
    <LinearProgresses />
    <Lists />
    <Menus />
    <Radios />
    <Selects />
    <Sliders />
    <Switchs />
    <Tabbars />
    <Textfields />
    <section style={{ height: "200px" }} />
  </main>
);
