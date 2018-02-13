/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { Component } from "react";
/* import "material-components-web/dist/material-components-web.css"; */
/* import "material-design-icons/iconfont/material-icons.css"; */
import Rmdc, {
  Content, Fab, Snackbar, Tabbar, Tab,
  Toolbar, ToolbarRow, ToolbarSection, ToolbarTitle, ToolbarIcon,
  Drawer, DrawerContent,
  ListItem,
  Dialog,
} from "../../src/libs";
import Main from "./main";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0, drawer: "permanent", drawerOpen: false, aboveToolbar: false,
    };
  }

  componentWillMount() {
    Rmdc.init(this, { typography: true });
  }

  onMenuClick = (event) => {
    event.preventDefault();
    this.toggleDrawer();
  }

  handleDialog = () => {
    const dialog = (
      <Dialog header="Are you happy?" actions={[{ name: "Cancel" }, { name: "Continue" }]}>
        <div>Please check the left and right side of this element for fun.</div>
      </Dialog>);
    Rmdc.showDialog(dialog);
  }

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
      drawer, activeTab: index, aboveToolbar, drawerOpen,
    });
  }

  toggleDrawer = () => {
    const open = !this.state.drawerOpen;
    this.setState({ drawerOpen: open });
  }

  render() {
    let icon;
    if (this.state.drawer !== "permanent") {
      icon = <ToolbarIcon name="menu" onClick={this.onMenuClick} />;
    }
    return (
      <Content>
        <Toolbar fixed>
          <ToolbarRow>
            <ToolbarSection align="start" >
              {icon}
              <ToolbarTitle>Title</ToolbarTitle>
            </ToolbarSection>
            <ToolbarSection align="end" shrinkToFit >
              <ToolbarIcon name="search" />
            </ToolbarSection>
          </ToolbarRow>
        </Toolbar>
        <Drawer
          type={this.state.drawer}
          open={this.state.drawerOpen}
          above={this.state.aboveToolbar}
          onClose={this.toggleDrawer}
          onClick={this.state.activated}
        >
          <DrawerContent list>
            <ListItem type="a" icon="inbox" activated>Drawer</ListItem>
            <ListItem icon="account_circle">Cards</ListItem>
            <ListItem type="a" icon="panorama_wide_angle">Buttons</ListItem>
            <ListItem type="a" icon="check_box">Checkboxes</ListItem>
            <ListItem type="a" icon="grid_on">Grid</ListItem>
            <ListItem type="a" icon="hdr_strong">Icons Toogles</ListItem>
            <ListItem type="a" icon="linear_scale">Linear Progress</ListItem>
            <ListItem type="a" icon="list">List</ListItem>
            <ListItem type="a" icon="menu">Menus</ListItem>
            <ListItem type="a" icon="radio_button_checked">Radio</ListItem>
            <ListItem type="a" icon="arrow_drop_down_circle">Select</ListItem>
            <ListItem type="a" icon="sort">Sliders</ListItem>
            <ListItem type="a" icon="dns">Switchs</ListItem>
            <ListItem type="a" icon="tab">Tabbar</ListItem>
            <ListItem type="a" icon="textsms">TextFields</ListItem>
          </DrawerContent>
        </Drawer>
        <Content>
          <Main>
            <section>
              <h1>Drawer examples</h1>
              <Tabbar onChange={this.handleDrawerChange} activeTab={this.state.activeTab} >
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
