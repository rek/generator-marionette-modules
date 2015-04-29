# generator-marionette-modules [![Build Status](https://secure.travis-ci.org/rek/generator-marionette-modules.png?branch=master)](https://travis-ci.org/rek/generator-marionette-modules)

> [Yeoman](http://yeoman.io) generator. For scaffolding a Marionette app with the Module pattern.

This project uses things like: less, dustjs (linkedin), requirejs and mocha.

## Getting Started

First make sure you have Yeoman installed:

```
$ npm install -g yo
```

Then install generator-marionette-modules from npm, run:
```
$ npm install -g generator-marionette-modules
```

Make a new directory, and cd into it:
```
$ mkdir newProject && cd $_
```

Then initiate the generator, optionally passing an app name:
```
$ yo marionette-modules [appName]
```

Then start generating modules for your app like so:
```
$ yo marionette-modules:module [MODULENAME]
```

To generate action (submodules) for your app:
```
$ yo marionette-modules:action
```
*NOTE:* there are no args or options at this point for `action`

### How to setup.

After you install a module, you also need to configure it to run.

So in your main app.js file, change the placeholder MODULENAME to whatever you named your module, in the two places listed below


To load your module change line 59:
```
require(['modules/MODULENAME/app'], function () {
```

Also on line 70, change the home page to one of your choosing:
```
App.trigger('MODULENAME:list');
```


### For dev:

```
grunt watch
```

### To build for prod:

```
grunt build
```

### To run tests:

```
grunt test
```

## License

MIT
