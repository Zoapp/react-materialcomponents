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
  Content, Fab, Snackbar,
  Toolbar, ToolbarRow, ToolbarSection, ToolbarTitle, ToolbarIcon,
  Drawer, DrawerContent,
  ListItem,
  Dialog,
} from "../../src";
import Main from "./main";

export default class App extends Component {
  componentWillMount() {
    Rmdc.init(this, { typography: true });
  }

  handleDialog = () => {
    const dialog = (
      <Dialog header="Are you happy?" actions={[{ name: "Cancel" }, { name: "Continue" }]}>
        <div>Please check the left and right side of this element for fun.</div>
      </Dialog>);
    Rmdc.showDialog(dialog);
  }

  render() {
    return (
      <Content fixed>
        <Toolbar fixed>
          <ToolbarRow>
            <ToolbarSection align="start" >
              <ToolbarIcon name="menu" />
              <ToolbarTitle>Title</ToolbarTitle>
            </ToolbarSection>
          </ToolbarRow>
        </Toolbar>
        <Content fixed toolbarAdjust>
          <Drawer>
            <DrawerContent list>
              <ListItem type="a" icon="inbox" activated>Inbox</ListItem>
              <ListItem type="a" icon="star">Star</ListItem>
            </DrawerContent>
          </Drawer>
          <Main />
        </Content>
        <Fab icon="favorite" onClick={this.handleDialog} />
        <Snackbar message="Hello from snackbar" />
      </Content>
    );
  }
}
