# generator-marionette-modules [![Build Status](https://secure.travis-ci.org/rek/generator-marionette-modules.png?branch=master)](https://travis-ci.org/rek/generator-marionette-modules)

> [Yeoman](http://yeoman.io) generator. For scaffolding a Marionette app with the Module pattern.


## Getting Started

Lots of decisions have been made for you. This is not so flexable at the moment.
> We like things like: less, dust, requirejs and mocha.

### What is Yeoman?

Trick question. It's not a thing. It's this guy:

![](http://i.imgur.com/JHaAlBJ.png)

Basically, he wears a top hat, lives in your computer, and waits for you to tell him what kind of application you wish to create.

```
$ npm install -g yo
```

### Yeoman Generators

Yeoman travels light. He didn't pack any generators when he moved in.

To install generator-marionette-modules from npm, run:

```
$ npm install -g generator-marionette-modules
```

Then initiate the generator:

```
$ yo marionette-modules
```

You also need to generate a module for your app, simply run:

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
