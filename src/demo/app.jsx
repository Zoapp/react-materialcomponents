import React, { Component } from "react";
import "material-components-web/dist/material-components-web.css";
/* import "material-design-icons/iconfont/material-icons.css"; */
import { Button, Content, Toolbar, ToolbarRow, ToolbarSection, ToolbarTitle, ToolbarIcon, Drawer, DrawerContent, ListItem } from "../../src";

export default class App extends Component {
  componentWillMount() {
    // window.mdc.autoInit();
  }

  render() {
    return (
      <Content fixed>
        <Toolbar fixed>
          <ToolbarRow>
            <ToolbarSection alignStart>
              <ToolbarIcon icon="menu" />
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
          <main>
            <Button>Hello</Button>
          </main>
        </Content>
      </Content>
    );
  }
}
