/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { Component } from "react";
import "material-components-web/dist/material-components-web.css";
/* import "material-design-icons/iconfont/material-icons.css"; */
import Rmdc, {
  Content, Fab, Snackbar, Tabbar, Tab,
  Toolbar, ToolbarRow, ToolbarSection, ToolbarTitle, ToolbarIcon,
  Drawer, DrawerContent,
  ListItem,
  Dialog,
} from "../../src";
import Main from "./main";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0, drawer: "permanent", drawerOpen: false, aboveToolbar: false, };
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
    console.log("drawer change=", name, index);
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
          </ToolbarRow>
        </Toolbar>
        <Drawer
          type={this.state.drawer}
          open={this.state.drawerOpen}
          above={this.state.aboveToolbar}
          onClose={this.toggleDrawer}
        >
          <DrawerContent list>
            <ListItem type="a" icon="inbox" activated>Inbox</ListItem>
            <ListItem type="a" icon="star">Star</ListItem>
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
