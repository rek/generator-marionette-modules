'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');

var MarionetteModulesGenerator = yeoman.generators.Base.extend({
    init: function() {
        this.pkg = require('../package.json');

        this.on('end', function() {
            if (!this.options['skip-install']) {
                this.installDependencies();
            }
        });
    },

    askFor: function() {
        var done = this.async();

        // have Yeoman greet the user
        this.log(this.yeoman);

        // replace it with a short and sweet description of your generator
        this.log(chalk.magenta('You\'re using the fantastic MarionetteModules generator.'));

        var prompts = [{
                // type: 'confirm',
                name: 'status',
                message: 'How are you doing today?',
                default: 'fine'
            }, {
                name: 'moduleName',
                message: '\n\nWonderful*! Then what should we name your project?',
                default: 'test'
            }, {
                name: 'authorName',
                message: 'and what then good sir, what do they call you?',
                default: 'yourName'
            }

        ];

        this.prompt(prompts, function(props) {
            this.go = props.status;
            this.moduleName = props.moduleName;
            this.authorName = props.authorName;

            done();
        }.bind(this));

    },

    app: function() {
        // not fully sure about this:
        this.connect = {
            test: {
                options: {
                    port: 8888
                }
            },
            dist: {
                options: {
                    port: 8888
                }
            }
        };

        this.mkdir('app');
        this.copy('app/_index.html', 'app/index.html');

        this.mkdir('app/styles');
        this.mkdir('app/styles/less');
        this.copy('app/styles/bootstrap.less', 'app/styles/less/bootstrap.less');
        this.copy('app/styles/main.less', 'app/styles/less/main.less');

        this.mkdir('app/scripts');
        this.copy('app/scripts/config.js', 'app/scripts/config.js');
        this.copy('app/scripts/app.js', 'app/scripts/app.js');
        this.copy('app/scripts/main.js', 'app/scripts/main.js');

        this.mkdir('app/images');
        this.mkdir('app/scripts/modules');

        this.mkdir('app/scripts/common/templates-raw');
        this.copy('app/common/loading.dust', 'app/scripts/common/templates-raw/loading.dust');
        this.copy('app/common/views.js', 'app/scripts/common/views.js');

        this.directory('grunt', 'grunt');

        this.mkdir('build');

    },

    projectfiles: function() {
        this.copy('_README', 'README.md');
        this.copy('_LICENSE', 'LICENSE');

        this.copy('_package.json', 'package.json');
        this.copy('_bower.json', 'bower.json');

        this.copy('Gruntfile.js', 'Gruntfile.js');
        this.copy('bowerrc', '.bowerrc');
        this.copy('editorconfig', '.editorconfig');
        this.copy('jshintrc', '.jshintrc');
        this.copy('gitignore', '.gitignore');
    }
});

module.exports = MarionetteModulesGenerator;