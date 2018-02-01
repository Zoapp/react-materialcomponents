import React, { Component } from "react";
import "material-components-web/dist/material-components-web.css";
/* import "material-design-icons/iconfont/material-icons.css"; */
import Rmdc, {
  Button, Content, Fab, TextField, Checkbox, Radio, Select, Menu, Snackbar,
  LinearProgress, Switch, Slider, IconToggle,
  Toolbar, ToolbarRow, ToolbarSection, ToolbarTitle, ToolbarIcon,
  Drawer, DrawerContent,
  List, ListItem, ListDivider, ListGroup, ListGroupSubheader,
  Grid, Inner, Cell,
  Card, CardText, CardActions, CardMedia,
  Tab, Tabbar,
  GridList, Tile,
} from "../../src";

export default class App extends Component {
  componentWillMount() {
    Rmdc.init(this, { typography: true });
  }

  render() {
    return (
      <Content fixed>
        <Toolbar fixed>
          <ToolbarRow>
            <ToolbarSection alignStart>
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
                </Cell>
                <Cell>
                  <TextField label="Demo1" />
                  <TextField label="Demo2" defaultValue="Hello" />
                  <TextField label="Demo2" defaultValue="Hello" disabled />
                </Cell>
              </Inner>
            </Grid>
            <section>
              <div>
                <div style={{ padding: "16px" }}>
                  <Button>Hello</Button>
                </div>
                <div style={{ padding: "16px" }}>
                  <Button raised icon="favorite">Hello</Button>
                </div>
                <div style={{ padding: "16px" }}>
                  <Button raised>Hello</Button>
                </div>
                <div style={{ padding: "16px" }}>
                  <Button raised disabled>Hello</Button>
                </div>
                <div style={{ padding: "16px" }}>
                  <Button unelevated compact secondary>Hello</Button>
                </div>
                <div style={{ padding: "16px" }}>
                  <Button stroked dense>Hello</Button>
                </div>
                <div style={{ padding: "16px" }}>
                  <Button raised link="#">Hello</Button>
                </div>
              </div>
            </section>
            <section>
              <div style={{ padding: "16px" }}>
                <Checkbox label="label" checked />
              </div>
              <div style={{ padding: "16px" }}>
                <Checkbox label="label" checked disabled />
              </div>
              <div style={{ padding: "16px" }}>
                <Checkbox label="label" indeterminate />
              </div>
            </section>
            <section>
              <div style={{ padding: "16px" }}>
                <Radio label="radio 1" name="r1" checked />
                <Radio label="radio 2" name="r1" />
              </div>
              <div style={{ padding: "16px" }}>
                <Radio label="radio 1" name="r2" checked />
                <Radio label="radio 2" name="r2" />
              </div>
              <div style={{ padding: "16px" }}>
                <Radio label="radio 1" name="r3" checked disabled />
                <Radio label="radio 2" name="r3" disabled />
              </div>
            </section>
            <section>
              <div style={{ padding: "16px" }}>
                <Switch label="switch 1" checked />
              </div>
              <div style={{ padding: "16px" }}>
                <Switch label="switch 2" checked disabled />
              </div>
              <div style={{ padding: "16px" }}>
                <Switch label="switch 3" />
              </div>
            </section>
            <section>
              <div style={{ padding: "16px" }}>
                <Slider label="slider 1" />
              </div>
              <div style={{ padding: "16px" }}>
                <Slider label="slider 2" discrete disabled />
              </div>
              <div style={{ padding: "16px" }}>
                <Slider label="slider 3" discrete valueMax={256} valueNow={20} />
              </div>
            </section>
            <section>
              <LinearProgress progress={0.2} buffer={0.5} />
            </section>
            <section>
              <div style={{ padding: "16px" }}>
                <Tabbar>
                  <Tab text="tab1" active />
                  <Tab text="tab2" />
                  <Tab text="tab3" />
                </Tabbar>
              </div>
            </section>
            <section>
              <GridList width="320px" tileWidth="76px" tileBackground="#212121" >
                <Tile />
                <Tile />
                <Tile />
                <Tile />
                <Tile />
                <Tile />
                <Tile />
                <Tile />
              </GridList>
            </section>
            <section>
              <IconToggle name="favorite" nameOff="favorite_border" />
            </section>
            <section>
              <div style={{ padding: "16px" }}>
                <Select />
              </div>
            </section>
            <section>
              <div style={{ padding: "16px" }}>
                <Menu />
              </div>
            </section>
          </main>
        </Content>
        <Fab icon="favorite" />
        <Snackbar message="Hello from snackbar" />
      </Content>
    );
  }
}
