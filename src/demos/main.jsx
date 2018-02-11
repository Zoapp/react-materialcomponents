/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import PropTypes from "prop-types";
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
import TextFields from "./components/textfields";


const Main = ({ children }) => (
  <main>
    {children}
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
    <TextFields />
    <section style={{ height: "200px" }} />
  </main>
);

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
