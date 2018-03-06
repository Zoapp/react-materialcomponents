# ZRMC - Zoapp React Material Components

[![Build
Status](https://travis-ci.org/Zoapp/react-materialcomponents.svg?branch=master)](https://travis-ci.org/Zoapp/react-materialcomponents)
[![GitHub
license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/zoapp/react-materialcomponents/blob/master/LICENSE)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/d87d26ad6c364e6faac757ba826da057)](https://www.codacy.com/app/zoapp/react-materialcomponents?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Zoapp/react-materialcomponents&amp;utm_campaign=Badge_Grade)
[![npm version](https://badge.fury.io/js/zrmc.svg)](https://badge.fury.io/js/zrmc)

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

## Versioning/Releases

This project adheres to [Semantic Versioning 2.0.0](http://semver.org/). The
different versions of this project can be found here:
https://github.com/Zoapp/react-materialcomponents/releases. In short, the
version number is made of three digits, separated with a dot: `x.y.z`:

* `x` is the number on the left and represents the _MAJOR_ version number. This
  number should be increased (by one) when a backward incompatible change is
  added in the project, hence this number does not often change. When you update
  this number, both the _MINOR_ and _PATCH_ numbers should be reset to 0;
* `y` (middle number) represents the _MINOR_ version number. This number should
  be increased (by one) every time **new features** are added to the project.
  When you update this number, the _PATCH_ number should be reset to 0;
* `z` (right number) represents the _PATCH_ version number. This number should
  be increased (by one) every time **bug fixes** are added to the project. If
  you have both new features and bug fixes, update the _MINOR_ version.

### Release Process (How to create a new release/version?)

In order to create a new release, you can use [`npm version`
](https://docs.npmjs.com/cli/version). Assuming we are at version `0.3.2` and we
want to release `0.3.3`. **Locally, in the `master` branch**, you can run the
following command:

```
$ npm version patch
```

This command performs the following tasks:

- bump (update) the version number in `package.json`
- create a new commit
- create a git tag

You can use `npm version minor` to release `0.4.0` from `0.3.1` (it bumps the
second number and resets the last number). You can also use `npm version major`
to release `1.0.0` from `0.3.1`. See the previous section about semantic
versioning.

Then, you can push to the repository:

```
$ git push origin master --tag
```

The tag will be pushed to GitHub and Travis CI will trigger the automatic
release process setup on this project (see: [`.travis.yml`](.travis.yml)).

### How to create "development" releases?

Sometimes, you want to create a new release because this project is a dependency
of another project you are working on and you want to try the changes you have
just made. In that case, it is **not recommended** to release a new version
because you are likely working in a (feature) branch and you should always
release new versions from the `master` branch.

Instead, you can publish a "dev" package locally as described below:

1. update the version in `package.json` without commiting it, it is only used to
   create a unique package, so you can bump the `patch` number (`z` in `x.y.z`)
2. create the "dev" package:

    ```
    $ yarn distribute:dev
    ```

That's it! You have a `.tgz` package in the `dist/` folder (e.g.,
`zrmc-v0.7.1.tgz`). Now you can add this package into your other project by
running:

```
$ yarn add file:/path/to/your/react-materialcomponents/dist/zrmc-v0.7.1.tgz
```

When you are satisfied with the current state of your feature branch, undo the
`package.json` version change and merge the branch into the `master` branch.
Next, you can go to your `master` branch, getting the latest commits from GitHub
(`git pull`) and follow the procedure "Release Process (How to create a new
release/version?)" to release a "production" package.

In your other project, you can re-add your dependency with `yarn` but that time,
you can directly use its name:

```
$ yarn add zrmc
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
