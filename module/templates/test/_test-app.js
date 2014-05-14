/*global define */
'use strict';

define([
        'marionette',
    ],

    function() {

        var App = new Backbone.Marionette.Application();
        App.context = '<%= cname %>: test-app.js';

        /**
         * @param options
         */
        App.on('initialize:before', function() {
            this.debug = 1;
            App.log('Initialization Started', App.context, 1);
            // options.anotherThing = true; // Add more data to your options
        });

        /**
         * Log function.
         * Pass all messages through here so we can disable for prod
         */
        App.log = function(message, domain, level) {
            if (App.debug < level) {
                return;
            }
            if (typeof message !== 'string') {
                console.log('Fancy object (' + domain + ')', message);
            } else {
                console.log((domain || false ? '(' + domain + ') ' : '') + message);
            }
        };

        App.log('App.addInitializer', App.context, 1);

        return App;

    }
);