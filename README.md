# generator-marionette-modules [![Build Status](https://secure.travis-ci.org/rek/generator-marionette-modules.png?branch=master)](https://travis-ci.org/rek/generator-marionette-modules)

> [Yeoman](http://yeoman.io) generator. For scaffolding a Marionette app with the Module pattern.

> We like things like: less, dust, requirejs and mocha.

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
$ mkdir my-new-project && cd $_
```

Then initiate the generator, optionally passing an app name:
```
$ yo marionette-modules [app-name]
```

You also need to generate a module for your app, so simply run:
```
$ yo marionette-modules:module moduleName
```

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

## License

MIT
