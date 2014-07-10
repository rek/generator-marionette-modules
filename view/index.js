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
    // if not, lets just set a temp one, so we can move on
    if (args.length !== 1) {
        args[0] = 'TEMP';
        this.fakeModule = true;
    }
    if (args.length !== 2) {
        args[1] = 'TEMP';
        this.fakeView = true;
    }

    yeoman.NamedBase.apply(this, arguments);
}

util.inherits(ModuleGenerator, yeoman.NamedBase);

ModuleGenerator.prototype.init = function() {
    var prompts = [];

    // if the user didn't not enter a name on the command line
    // then prompt for one:
    if (this.fakeModule) {
        prompts.push({
            name: 'moduleName',
            message: '...you forgot to say, what if your module called?',
            default: 'example'
        });
    }

    if (this.fakeView) {
        prompts.push({
            name: 'viewName',
            message: '...you also forgot to say, what do you want your view to be called?',
            default: 'list'
        });
    }

    // prompts.push({
    //     name: 'empty',
    //     message: '\n\nDo you want an empty module?',
    //     default: 'no'
    // });

    var cb = this.async();

    this.prompt(prompts, function(props) {
        if (props.moduleName) {
            this.name = props.moduleName;
        }
        if (props.viewName) {
            this.view = props.viewName;
        }
        // this.empty = props.empty;
        cb();
    }.bind(this));
};

ModuleGenerator.prototype.setup = function() {
    console.log('Creating a new view in ' + this.name + ' module for you called: ' + this.view);

    this.appPath = 'app/scripts/';
};

/**
* Setup the module
*
*/
ModuleGenerator.prototype.files = function() {
    _.mixin({
        capitalize: function(string) {
            return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
        }
    });
    this.cname = _.capitalize(this.name);

    this.mkdir(this.appPath + 'modules/' + this.name + '/' + this.view);

    this.copy('list/_controller.js',      this.appPath + 'modules/' + this.name + '/list/controller.js');
    this.copy('list/_view.js',            this.appPath + 'modules/' + this.name + '/list/view.js');
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

        insert += "'" + this.name + "_view_" + this.name + "'      : 'modules/" + this.name + "/" + this.name + "/view',\n";
        insert += "        '" + this.name + "_controller_" + this.name + "'': 'modules/" + this.name + "/" + this.name + "/controller',\n";

    if (file && file.indexOf(insert) === -1) {
        this.write(path, file.replace(hook, insert+'\n        '+hook));
    }
};

module.exports = ModuleGenerator;