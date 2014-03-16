/*global require */
'use strict';

require.config({
    baseUrl: '../',
    paths: {
        jquery        : '../../../bower_components/jquery/dist/jquery.min',
        backbone      : '../../../bower_components/backbone/backbone',
        underscore    : '../../../bower_components/underscore/underscore',
        marionette    : '../../../bower_components/marionette/lib/core/amd/backbone.marionette',
        // dust                   : '../bower_components/dustjs-linkedin/lib/dust',
        // dustHelpers            : '../bower_components/dustjs-linkedin-helpers/lib/dust-helpers',
        // dustMarionette         : '../bower_components/marionette-dust/src/backbone.marionette.dust',
        // 'backbone.picky'       : '../bower_components/backbone.picky/lib/amd/backbone.picky',
        'backbone.wreqr'       : '../../../bower_components/backbone.wreqr/lib/amd/backbone.wreqr',
        // 'backbone.eventbinder' : '../bower_components/backbone.eventbinder/lib/amd/backbone.eventbinder',
        'backbone.babysitter'  : '../../../bower_components/backbone.babysitter/lib/amd/backbone.babysitter',
        'app': 'test/test-app'
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
 }
});

var specs = [
    'spec/rote_entity.spec.js',
    'spec/list_controller.spec.js'
];

require(specs, function() {
    // console.log('Mocha setup');

    if (window.mochaPhantomJS) { mochaPhantomJS.run(); }
    else { mocha.run(); }

});