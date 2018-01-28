import React, { Component } from "react";
import "material-components-web/dist/material-components-web.css";
/* import "material-design-icons/iconfont/material-icons.css"; */
import {
  Button, Content, Fab, TextField,
  Toolbar, ToolbarRow, ToolbarSection, ToolbarTitle, ToolbarIcon,
  Drawer, DrawerContent,
  List, ListItem, ListDivider, ListGroup, ListGroupSubheader,
  Grid, Inner, Cell,
  Card, CardText, CardActions, CardMedia,
} from "../../src";

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
            <Grid>
              <Inner>
                <Cell>
                  <Card title="Title" subTitle="subtitle">
                    <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
                    </CardText>
                    <CardActions><Button>Ok</Button><Button>Cancel</Button></CardActions>
                  </Card>
                </Cell>
                <Cell>
                  <Card title="Title" largeTitle>
                    <CardMedia src="https://material-components-web.appspot.com/images/1-1.jpg" />
                    <CardActions><Button>Ok</Button><Button>Cancel</Button></CardActions>
                  </Card>
                </Cell>
                <Cell>
                  <Card title="Title" horizontalBlock>
                    <CardMedia src="https://material-components-web.appspot.com/images/1-1.jpg" />
                    <CardActions><Button>Ok</Button><Button>Cancel</Button></CardActions>
                  </Card>
                </Cell>
              </Inner>
              <Inner>
                <Cell>
                  <ListGroup>
                    <ListGroupSubheader>header1</ListGroupSubheader>
                    <List>
                      <ListItem>item1</ListItem>
                      <ListItem>item2</ListItem>
                      <ListDivider />
                      <ListItem>item3</ListItem>
                      <ListItem>item4</ListItem>
                    </List>
                    <ListDivider type="hr" />
                    <ListGroupSubheader>header2</ListGroupSubheader>
                    <List>
                      <ListItem>item1</ListItem>
                      <ListItem>item2</ListItem>
                      <ListDivider />
                      <ListItem>item3</ListItem>
                      <ListItem>item4</ListItem>
                    </List>
                  </ListGroup>
                </Cell>
                <Cell>
                  <Button>Hello</Button>
                  <TextField label="Demo" />
                </Cell>
              </Inner>
            </Grid>
          </main>
        </Content>
        <Fab icon="favorite" />
      </Content>
    );
  }
}
