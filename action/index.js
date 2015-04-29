'use strict';
var fs = require('fs');
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
	var prompts = [];
	this.modPath = 'src/documents/scripts/modules/';

	// if the user didn't not enter a name on the command line
	// then prompt for one:
	if (this.fakeName) {
		prompts.push({
			name: 'moduleName',
			message: 'Module name please! So, which module is this for?',
			default: 'example'
		});

		prompts.push({
			name: 'actionName',
			message: 'Now, create an action (submodule) name (i.e. create):',
			default: 'example-action'
		});
	}

	// queue up a node callback
	var cb = this.async();

	// using: https://github.com/SBoudrias/Inquirer.js
	this.prompt(prompts, function(props) {
		if (props.moduleName && props.actionName) {
			this.name = props.moduleName;
			this.actionName = props.actionName;
		}

		this.scriptsPath = 'src/documents/scripts/';
		this.modPath = 'src/documents/scripts/modules/';

		cb();
	}.bind(this));
};

ModuleGenerator.prototype.setup = function() {
	// helper for repeat path usage
	this.fullPath = this.modPath + this.name + '/' + this.actionName;

	console.log('Creating a new sub-module for you called: ' + this.actionName);
};

/**
 * Setup the module
 */
ModuleGenerator.prototype.files = function() {
	// nice little mixin to Marionette-style the module name
	_.mixin({
		capitalize: function(string) {
			return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
		},
        lowercase: function (string) {
            return string.substring(0).toLowerCase();
        }
	});

    // set up our vars to be written into the template files
	this.cname = _.capitalize(this.name);
	this.aname = _.capitalize(this.actionName);
    this.cnameLwr = _.lowercase(this.name);
    this.anameLwr = _.lowercase(this.actionName);

	// copy the view and controller to their places
	this.copy('_view.js', this.fullPath + '/view.js');
	this.copy('_controller.js', this.fullPath + '/controller.js');
};

/**
* Add lines for the new files to the loader.js file.
*/
ModuleGenerator.prototype.updateConfig = function() {
    var hook   = '/**===== yeoman hook =====**/',
        path   = this.scriptsPath + 'loader.js',
        file   = this.readFileAsString(path),
        insert = '';

        insert += "'" + this.cnameLwr + "_" + this.anameLwr + "_view'      : 'modules/" + this.cnameLwr + "/" + this.anameLwr + "/view',\n";
        insert += "        '" + this.cnameLwr + "_" + this.anameLwr + "_controller': 'modules/" + this.cnameLwr + "/" + this.anameLwr + "/controller',\n";
        // insert += "'show_view'      : 'modules/" + this.name + "/show/show_view',\n";
        // insert += "'show_controller': 'modules/" + this.name + "/show/show_controller',\n";
        // insert += "        '" + this.name + "_entity':      'modules/" + this.name + "/entities/" + this.name + "',\n";

    if (file && file.indexOf(insert) === -1) {
        this.write(path, file.replace(hook, insert+'\n        '+hook));
    }
};

module.exports = ModuleGenerator;
