/*global describe, beforeEach, it */
'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;

describe('marionette-modules generator', function() {
    beforeEach(function(done) {
        helpers.testDirectory(path.join(__dirname, 'temp'), function(err) {
            if (err) {
                return done(err);
            }

            this.app = helpers.createGenerator('marionette-modules:app', [
                '../../app'
            ]);
            done();
        }.bind(this));
    });

    it('creates expected files', function(done) {
        var expected = [
            // add files you expect to exist here.
            'app/index.html',
            'app/styles/less/bootstrap.less',
            'app/styles/less/main.less',
            'app/scripts/config.js',
            'app/scripts/app.js',
            'app/scripts/main.js',
            'app/scripts/common/templates-raw/loading.dust',
            'app/scripts/common/views.js',

            'grunt/aliases.js',
            'grunt/clean.js',
            'grunt/coffee.js',
            'grunt/concat.js',
            'grunt/concurrent.js',
            'grunt/connect.js',
            'grunt/copy.js',
            'grunt/cssmin.js',
            'grunt/dustjs.js',
            'grunt/htmlmin.js',
            'grunt/imagemin.js',
            'grunt/jshint.js',
            'grunt/less.js',
            'grunt/mocha_phantomjs.js',
            'grunt/requirejs.js',
            'grunt/rev.js',
            'grunt/settings.js',
            'grunt/svgmin.js',
            'grunt/usemin.js',
            'grunt/useminPrepare.js',
            'grunt/watch.js',

            'README.md',
            'LICENSE',
            'package.json',
            'bower.json',
            'Gruntfile.js',
            '.jshintrc',
            '.editorconfig',
            '.gitignore',
            '.bowerrc'

        ];

        helpers.mockPrompt(this.app, {
            'someOption': true
        });
        this.app.options['skip-install'] = true;
        this.app.run({}, function() {
            helpers.assertFile(expected);
            done();
        });
    });

    it('module subgenerator creates files correctly', function(done) {
        var moduleName = 'testModule';

        // Set up the module generator
        prepareSubgenerator.call(this, 'module', [moduleName]);

        // Test for created files
        var expected = [
            'app/scripts/modules/' + moduleName + '/entities/' + moduleName + '.js',
            'app/scripts/modules/' + moduleName + '/list/controller.js',
            'app/scripts/modules/' + moduleName + '/list/view.js',
            'app/scripts/modules/' + moduleName + '/app.js',
        ];

        verifySubgeneratorFiles(this.app, expected, done);
    });

    // it('something else', function (done) {
    //   var expected = [
    //   ];

    //   helpers.mockPrompt(this.webapp, {
    //     features: ['includeSass']
    //   });

    //   this.webapp.coffee = true;
    //   this.webapp.run({}, function () {
    //     helpers.assertFiles(expected);
    //     done();
    //   });
    // });
    //
    // Utility Functions
    //

    function prepareSubgenerator (subgeneratorName, args) {
        this.app.subgenerator = helpers.createGenerator(
            'marionette-modules:'+subgeneratorName,
            [
                '../../'+subgeneratorName,
                [helpers.createDummyGenerator(), 'mocha:'+subgeneratorName]
            ],
            args
        );
        this.app.subgenerator.options['skip-install'] = true;
        // this.marionette.subgenerator.env.register('../../item-view');
    }

    function verifySubgeneratorFiles (generator, files, done) {
        generator.app.run({}, function () {
            generator.subgenerator.run({}, function () {
                helpers.assertFiles(files);
                done();
            });
        });
    }

});