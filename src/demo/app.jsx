import React, { Component } from "react";
import "material-components-web/dist/material-components-web.css";
/* import "material-design-icons/iconfont/material-icons.css"; */
import { Button, Toolbar, ToolbarRow, ToolbarSection, ToolbarTitle, ToolbarIcon } from "../../src";

export default class App extends Component {
  componentWillMount() {
    // window.mdc.autoInit();
  }

  render() {
    return (
      <div>
        <Toolbar>
          <ToolbarRow>
            <ToolbarSection alignStart>
              <ToolbarIcon icon="menu" />
              <ToolbarTitle>Title</ToolbarTitle>
            </ToolbarSection>
          </ToolbarRow>
        </Toolbar>
        <div>
          <Button>Hello</Button>
        </div>
      </div>
    );
  }
}
