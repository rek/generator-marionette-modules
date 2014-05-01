'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var _ = require('lodash');

/**
 * Module Generator
 *
 * @param args
 * @param options
 * @param config
 */
function ModuleGenerator(args) {

    // check to see if we were given a name
    if (args.length !== 1) {
        // if not, lets just set a temp one, so we can move on
        args[0] = 'TEMP';
        this.fakeName = true;
    }

    yeoman.NamedBase.apply(this, arguments);
}

util.inherits(ModuleGenerator, yeoman.NamedBase);

ModuleGenerator.prototype.init = function() {
    // if the user didn't not enter a name on the command line
    // then prompt for one:
    if (this.fakeName) {
        var prompts = [{
            name: 'moduleName',
            message: '...you forgot to say, what shall we call this module?',
            default: 'awesomeModule'
        }];

        var cb = this.async();

        this.prompt(prompts, function(props) {
            this.name = props.moduleName;
            cb();
        }.bind(this));
    }

};

ModuleGenerator.prototype.setup = function() {
    console.log('Creating a new module for you called: ' + this.name);

    this.appPath = 'app/scripts/';
};

ModuleGenerator.prototype.files = function() {
    _.mixin({
        capitalize: function(string) {
            return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
        }
    });
    this.cname = _.capitalize(this.name);

    // console.log(_(this.name).capitalize()+'');
    this.copy('_app.js', 'app/scripts/modules/' + this.name + '/app.js');

    this.mkdir(this.appPath + 'modules/' + this.name);
    this.mkdir(this.appPath + 'modules/' + this.name + '/entities');
    this.mkdir(this.appPath + 'modules/' + this.name + '/list');
    this.mkdir(this.appPath + 'modules/' + this.name + '/show');
    this.mkdir(this.appPath + 'modules/' + this.name + '/templates');
    this.mkdir(this.appPath + 'modules/' + this.name + '/test');
    this.mkdir(this.appPath + 'modules/' + this.name + '/test/spec');

    // module templates
    this.copy('templates/layout.dust', this.appPath + 'modules/' + this.name + '/templates/' + this.name + '_layout.dust');
    this.copy('templates/_list.dust', this.appPath + 'modules/' + this.name + '/templates/' + this.name + '_list.dust');
    this.copy('templates/_list_one.dust', this.appPath + 'modules/' + this.name + '/templates/' + this.name + '_list_one.dust');
    this.copy('templates/show.dust', this.appPath + 'modules/' + this.name + '/templates/' + this.name + '_show.dust');

    this.copy('entities/_entity.js', this.appPath + 'modules/' + this.name + '/entities/' + this.name + '.js');
    this.copy('list/_controller.js', this.appPath + 'modules/' + this.name + '/list/controller.js');
    this.copy('list/_view.js', this.appPath + 'modules/' + this.name + '/list/view.js');
};

/**
* Add includes for the new templates to the config file.
*
*/
ModuleGenerator.prototype.prepareTests = function() {
    this.copy('test/index.html', this.appPath + 'modules/' + this.name + '/test/index.html');
    this.copy('test/_runner.js', this.appPath + 'modules/' + this.name + '/test/runner.js');
    this.copy('test/test-app.js', this.appPath + 'modules/' + this.name + '/test/test-app.js');

    this.copy('test/_controller.spec.js', this.appPath + 'modules/' + this.name + '/test/spec/list_controller.spec.js');
};

/**
* Add includes for the new templates to the config file.
*
*/
ModuleGenerator.prototype.updateConfig = function() {
    var hook   = '/**===== yeoman hook =====**/',
        path   = this.appPath + 'config.js',
        file   = this.readFileAsString(path),
        insert = '';

        insert += "'" + this.name + "_list_view'      : 'modules/" + this.name + "/list/view',\n";
        insert += "        '" + this.name + "_list_controller': 'modules/" + this.name + "/list/controller',\n";
        // insert += "'show_view'      : 'modules/" + this.name + "/show/show_view',\n";
        // insert += "'show_controller': 'modules/" + this.name + "/show/show_controller',\n";
        insert += "        '" + this.name + "_entity':      'modules/" + this.name + "/entities/" + this.name + "',\n";

    if (file.indexOf(insert) === -1) {
        this.write(path, file.replace(hook, insert+'\n        '+hook));
    }
};

module.exports = ModuleGenerator;