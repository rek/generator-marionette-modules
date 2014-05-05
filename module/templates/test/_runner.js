/*global require, window, mochaPhantomJS, mocha */
'use strict';

require.config({
    baseUrl: '../',
    paths: {
        jquery: '../../../bower_components/jquery/dist/jquery.min',
        backbone: '../../../bower_components/backbone/backbone',
        underscore: '../../../bower_components/underscore/underscore',
        marionette: '../../../bower_components/marionette/lib/core/amd/backbone.marionette',
        dust                   : '../../../bower_components/dustjs-linkedin/lib/dust',
        dustHelpers            : '../../../bower_components/dustjs-linkedin-helpers/lib/dust-helpers',
        dustMarionette         : '../../../bower_components/marionette-dust/src/backbone.marionette.dust',
        // 'backbone.picky'       : '../bower_components/backbone.picky/lib/amd/backbone.picky',
        'backbone.wreqr': '../../../bower_components/backbone.wreqr/lib/amd/backbone.wreqr',
        // 'backbone.eventbinder' : '../bower_components/backbone.eventbinder/lib/amd/backbone.eventbinder',
        'backbone.babysitter': '../../../bower_components/backbone.babysitter/lib/amd/backbone.babysitter',

        'list_view': 'list/list_view',
        'entities_<%= name %>s': 'entities/<%= name %>s',
        'common/views': '../../common/views',

        'app': 'test/test-app',
        templates: '../../common/templates',
        spin: '../../../bower_components/spinjs/spin',
        'spin.jquery': '../../../bower_components/spinjs/jquery.spin',

        'register_list_view'      : 'list/view',
        'register_list_controller': 'list/controller',
        'register_entity':      'entities/register'

    },
    shim: {
        underscore: {
            exports: '_'
        },
        jquery: {
            exports: '$'
        },
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        dustMarionette: {
            deps: ['backbone']
        },
        dust: {
            exports: 'dust'
        },
        dustHelpers: ['dust'],
        templates: ['dust', 'dustMarionette'] // load dust before our compiled templates
    }
});

var specs = [
    'spec/entities.spec.js',
    'spec/list_view.spec.js',
    'spec/list_controller.spec.js'
];

require(specs, function() {
    // console.log('Mocha setup');

    if (window.mochaPhantomJS) {
        mochaPhantomJS.run();
    } else {
        mocha.run();
    }

});