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
  }

  componentWillMount() {
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
            <ListItem icon="aspect_ratio" href="#ripple">
              Ripples
            </ListItem>
            <ListItem icon="account_circle" href="#cards">
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
