/*global describe, beforeEach, it */
'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;

describe('marionette-modules generator', function () {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        return done(err);
      }

      this.app = helpers.createGenerator('marionette-modules', [
        '../../app'
      ]);
      done();
    }.bind(this));
  });

  it('creates expected files', function (done) {
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
    this.app.run({}, function () {
      helpers.assertFile(expected);
      done();
    });
  });


  it('something else', function (done) {
    var expected = [
    ];

    helpers.mockPrompt(this.webapp, {
      features: ['includeSass']
    });

    this.webapp.coffee = true;
    this.webapp.run({}, function () {
      helpers.assertFiles(expected);
      done();
    });
  });


});
