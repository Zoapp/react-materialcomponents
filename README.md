# ZRMC - Zoapp React Material Components 

[![Build
Status](https://travis-ci.org/Zoapp/react-materialcomponents.svg?branch=master)](https://travis-ci.org/Zoapp/react-materialcomponents)
[![GitHub
license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/zoapp/react-materialcomponents/blob/master/LICENSE)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/d87d26ad6c364e6faac757ba826da057)](https://www.codacy.com/app/zoapp/react-materialcomponents?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Zoapp/react-materialcomponents&amp;utm_campaign=Badge_Grade)
[![npm version](https://badge.fury.io/js/zoapp-materialcomponents.svg)](https://badge.fury.io/js/zoapp-materialcomponents)

ZRMC is a React wrapper for Material Components Web.

## Recent updates

ZRMC is actually in Work In Progress. ZRMC was updated to MDC 0.31.0.
Some features are missing:

* Animations of Drawer / Menu / Select
* Check all component's props to MDC ones
* Theming
* Enhance Demos and publish them in github pages
* Create a bootstrap example


## Goal

* Create a fully compatible React implementation of Material Components for the Web.
[https://material.io/components/web/](https://material.io/components/web/)
* Based on MDC Web. ZRMC is using it's CSS library.
[https://github.com/material-components/material-components-web/](https://github.com/material-components/material-components-web/)
* ZRMC doesn't use MDC's javascript. ZRMC rewrite components in an ES7 React code. But it follows MDC naming, props and usages.
* ZRMC try to be as much as possible well documented
* Our main goal is to maintain it regulary. ZRMC is actually used in a much bigger project (see Zoapp-front).


## Getting started

### Production

1. create a React Appp
1. add ZRMC dependencies

    ```
    $ yarn add zrmc
    ```
2. add to App.jsx main container:

    ```
    import Zrmc, { Content, Toolbar, ToolbarRow, ToolbarSection, ToolbarTitle, Fab, Snackbar } from "zrmc";
    ```

3. in the render() function return this

    ```
      <Content>
        <Toolbar fixed>
          <ToolbarRow>
            <ToolbarSection align="start" >
              <ToolbarTitle>Title</ToolbarTitle>
            </ToolbarSection>
            <ToolbarSection align="end" shrinkToFit >
              <ToolbarIcon name="search" />
            </ToolbarSection>
          </ToolbarRow>
        </Toolbar>
        <Content>
          <h1>
            Hello world !
          </h1>
        </Content>
        <Fab icon="favorite" onClick={() => { }} />
        <Snackbar message="Hello from snackbar" />
      </Content>        
    ```

4. Run the code

2. Enhance it


### Development

1. Install the dependencies:

    ```
    $ yarn install
    ```
2. You can run the test suite with:

    ```
    $ yarn test
    ```

3. In addition, you can run the demo project by running:

    ```
    $ yarn dev
    ```


## Contributing

Please, see the [CONTRIBUTING](CONTRIBUTING.md) file.


## Contributor Code of Conduct

Please note that this project is released with a [Contributor Code of
Conduct](http://contributor-covenant.org/). By participating in this project you
agree to abide by its terms. See [CODE_OF_CONDUCT](CODE_OF_CONDUCT.md) file.


## License

This project is released under the MIT License. See the bundled
[LICENSE](LICENSE) file for details.
