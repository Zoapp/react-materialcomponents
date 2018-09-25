/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { Component } from "react";
/* import "material-components-web/dist/material-components-web.css"; */
/* import "material-design-icons/iconfont/material-icons.css"; */
import Zrmc, {
  Content,
  Fab,
  Snackbar,
  Tabbar,
  Tab,
  Toolbar,
  ToolbarRow,
  ToolbarSection,
  ToolbarTitle,
  ToolbarIcon,
  Drawer,
  DrawerContent,
  ListItem,
  Dialog,
} from "../../src/libs";
import Main from "./main";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
      drawer: "permanent",
      drawerOpen: false,
      aboveToolbar: false,
    };

    Zrmc.init(this, { typography: true });
  }

  onMenuClick = (event) => {
    event.preventDefault();
    this.toggleDrawer();
  };

  handleDialog = () => {
    const dialog = (
      <Dialog
        header="Are you happy?"
        actions={[{ name: "Cancel" }, { name: "Continue" }]}
      >
        <div>Please check the left and right side of this element for fun.</div>
      </Dialog>
    );
    Zrmc.showDialog(dialog);
  };

  handleDrawerChange = (name, index) => {
    let drawer = name;
    let aboveToolbar = false;
    const drawerOpen = false;
    if (index < 2) {
      drawer = "permanent";
      if (index === 1) {
        aboveToolbar = true;
      }
    }
    this.setState({
      drawer,
      activeTab: index,
      aboveToolbar,
      drawerOpen,
    });
  };

  toggleDrawer = () => {
    const open = !this.state.drawerOpen;
    this.setState({ drawerOpen: open });
  };

  render() {
    let icon;
    if (this.state.drawer !== "permanent") {
      icon = <ToolbarIcon name="menu" onClick={this.onMenuClick} />;
    }
    return (
      <Content>
        <Toolbar fixed>
          <ToolbarRow>
            <ToolbarSection align="start">
              {icon}
              <ToolbarTitle>Title</ToolbarTitle>
            </ToolbarSection>
            <ToolbarSection align="end" shrinkToFit>
              <ToolbarIcon name="search" />
            </ToolbarSection>
          </ToolbarRow>
        </Toolbar>
        <Drawer
          type={this.state.drawer}
          open={this.state.drawerOpen}
          above={this.state.aboveToolbar}
          onClose={this.toggleDrawer}
        >
          <DrawerContent list>
            <ListItem icon="inbox" href="#drawer">
              Drawer
            </ListItem>
            <ListItem
              icon={
                <svg viewBox="0 0 24 24">
                  <path d="M2,18C4.22,17 6.44,16 8.67,16C10.89,16 13.11,18 15.33,18C17.56,18 19.78,16 22,16V19C19.78,19 17.56,21 15.33,21C13.11,21 10.89,19 8.67,19C6.44,19 4.22,20 2,21V18M2,12C4.22,11 6.44,10 8.67,10C10.89,10 13.11,12 15.33,12C17.56,12 19.78,10 22,10V13C19.78,13 17.56,15 15.33,15C13.11,15 10.89,13 8.67,13C6.44,13 4.22,14 2,15V12M2,6C4.22,5 6.44,4 8.67,4C10.89,4 13.11,6 15.33,6C17.56,6 19.78,4 22,4V7C19.78,7 17.56,9 15.33,9C13.11,9 10.89,7 8.67,7C6.44,7 4.22,8 2,9V6Z" />
                </svg>
              }
              href="#ripple"
            >
              Ripples
            </ListItem>
            <ListItem
              icon={
                <svg viewBox="0 0 24 24">
                  <path d="M5,2H19A1,1 0 0,1 20,3V13A1,1 0 0,1 19,14H5A1,1 0 0,1 4,13V3A1,1 0 0,1 5,2M6,4V12H18V4H6M20,17A1,1 0 0,1 19,18H5A1,1 0 0,1 4,17V16H20V17M20,21A1,1 0 0,1 19,22H5A1,1 0 0,1 4,21V20H20V21Z" />
                </svg>
              }
              href="#cards"
            >
              Cards
            </ListItem>
            <ListItem icon="panorama_wide_angle" href="#buttons">
              Buttons
            </ListItem>
            <ListItem icon="check_box" href="#checkboxes">
              Checkboxes
            </ListItem>
            <ListItem icon="grid_on" href="#gridlists">
              Grid
            </ListItem>
            <ListItem icon="hdr_strong" href="#icon">
              Icons
            </ListItem>
            <ListItem icon="hdr_strong" href="#toggle">
              Icons Toogles
            </ListItem>
            <ListItem icon="linear_scale" href="#linear">
              Linear Progress
            </ListItem>
            <ListItem icon="list" href="#list">
              List
            </ListItem>
            <ListItem icon="menu" href="#menu">
              Menus
            </ListItem>
            <ListItem icon="radio_button_checked" href="#radio">
              Radio
            </ListItem>
            <ListItem icon="arrow_drop_down_circle" href="#select">
              Select
            </ListItem>
            <ListItem icon="sort" href="#slider">
              Sliders
            </ListItem>
            <ListItem icon="dns" href="#switch">
              Switchs
            </ListItem>
            <ListItem icon="tab" href="#tab">
              Tabbar
            </ListItem>
            <ListItem icon="textsms" href="#textfield">
              TextFields
            </ListItem>
          </DrawerContent>
        </Drawer>
        <Content>
          <Main>
            <section id="drawer">
              <h1>Drawer examples</h1>
              <Tabbar
                onChange={this.handleDrawerChange}
                activeTab={this.state.activeTab}
                ripple
              >
                <Tab text="permanent below" />
                <Tab text="permanent above" />
                <Tab text="persistent" />
                <Tab text="temporary" />
              </Tabbar>
            </section>
          </Main>
        </Content>
        <Fab icon="favorite" onClick={this.handleDialog} />
        <Snackbar message="Hello from snackbar" />
      </Content>
    );
  }
}
