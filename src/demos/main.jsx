/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import PropTypes from "prop-types";
import Ripples from "./components/ripples";
import Cards from "./components/cards";
import Buttons from "./components/buttons";
import Checkboxes from "./components/checkboxes";
import GridLists from "./components/gridlists";
import Icons from "./components/icons";
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
    <div id="ripple">
      <Ripples />
    </div>
    <div id="cards">
      <Cards />
    </div>
    <div id="buttons">
      <Buttons />
    </div>
    <div id="checkboxes">
      <Checkboxes />
    </div>
    <div id="gridlists">
      <GridLists />
    </div>
    <div id="icon">
      <Icons />
    </div>
    <div id="toggle">
      <IconToggles />
    </div>
    <div id="linear">
      <LinearProgresses />
    </div>
    <div id="list">
      <Lists />
    </div>
    <div id="menu">
      <Menus />
    </div>
    <div id="radio">
      <Radios />
    </div>
    <div id="select">
      <Selects />
    </div>
    <div id="slider">
      <Sliders />
    </div>
    <div id="switch">
      <Switchs />
    </div>
    <div id="tab">
      <Tabbars />
    </div>
    <div id="textfield">
      <TextFields />
    </div>
    <section style={{ height: "200px" }} />
  </main>
);

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
