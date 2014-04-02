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

    this.mkdir('app/scripts/modules/' + this.name);
    this.mkdir('app/scripts/modules/' + this.name + '/entities');
    this.mkdir('app/scripts/modules/' + this.name + '/list');
    this.mkdir('app/scripts/modules/' + this.name + '/show');
    this.mkdir('app/scripts/modules/' + this.name + '/templates');
    this.mkdir('app/scripts/modules/' + this.name + '/test');
    this.mkdir('app/scripts/modules/' + this.name + '/test/spec');

    this.copy('test/index.html', 'app/scripts/modules/' + this.name + '/test/index.html');
    this.copy('test/runner.js', 'app/scripts/modules/' + this.name + '/test/runner.js');
    this.copy('test/test-app.js', 'app/scripts/modules/' + this.name + '/test/test-app.js');
    this.copy('test/example.spec.js', 'app/scripts/modules/' + this.name + '/test/spec/example.spec.js');

    this.copy('templates/layout.dust', 'app/scripts/modules/' + this.name + '/templates/' + this.name + '_layout.dust');
    this.copy('templates/_list.dust', 'app/scripts/modules/' + this.name + '/templates/list.dust');
    this.copy('templates/_list_one.dust', 'app/scripts/modules/' + this.name + '/templates/list_one.dust');
    this.copy('templates/show.dust', 'app/scripts/modules/' + this.name + '/templates/show.dust');

    this.copy('entities/_entity.js', 'app/scripts/modules/' + this.name + '/entities/' + this.name + '.js');
    this.copy('list/_controller.js', 'app/scripts/modules/' + this.name + '/list/list_controller.js');
    this.copy('list/_view.js', 'app/scripts/modules/' + this.name + '/list/list_view.js');
};

module.exports = ModuleGenerator;