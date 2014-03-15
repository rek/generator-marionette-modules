'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var MarionetteModulesGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // have Yeoman greet the user
    this.log(this.yeoman);

    // replace it with a short and sweet description of your generator
    this.log(chalk.magenta('You\'re using the fantastic MarionetteModules generator.'));

    var prompts = [
      {
        type: 'confirm',
        name: 'generateAll',
        message: 'Would you like me to generate a project for you?',
        default: true
      },
      {
        name: 'moduleName',
        message: '\n\nWonderful*! Then what should we name her?',
      },
      {
        name: 'authorName',
        message: 'and what then is your name good sir?',
      }

    ];

    this.prompt(prompts, function (props) {
      this.go = props.generateAll;
      this.moduleName = props.moduleName;
      this.authorName = props.authorName;

      done();
    }.bind(this));

  },

  app: function () {
    this.mkdir('app');
    this.mkdir('app/images');
    this.mkdir('app/styles');
    this.mkdir('app/scripts');
    this.mkdir('build');

    this.copy('app/_index.html', 'app/index.html');
    this.copy('app/scripts/config.js', 'app/scripts/config.js');
    this.copy('app/scripts/app.js', 'app/scripts/app.js');
    this.copy('app/scripts/main.js', 'app/scripts/main.js');

    this.copy('_package.json', 'package.json');
    this.copy('_bower.json', 'bower.json');
  },

  projectfiles: function () {
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
    this.copy('gitignore', '.gitignore');
  }
});

module.exports = MarionetteModulesGenerator;