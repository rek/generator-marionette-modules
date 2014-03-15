'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var _ = require('lodash');

var ModuleGenerator = yeoman.generators.NamedBase.extend({
  init: function () {
    console.log('Creating a new module for you called: ' + this.name);
  },

  files: function () {
    // console.log(_(this.name).capitalize()+'');
    this.copy('_app.js', 'app/modules/' + this.name + '/app.js');

    this.mkdir('app/modules/' + this.name);
    this.mkdir('app/modules/' + this.name + '/entities');
    this.mkdir('app/modules/' + this.name + '/list');
    this.mkdir('app/modules/' + this.name + '/show');
    this.mkdir('app/modules/' + this.name + '/templates');
    this.mkdir('app/modules/' + this.name + '/test');

  }
});

module.exports = ModuleGenerator;