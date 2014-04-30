define([
        'marionette'
    ],

    function() {
        'use strict';

        var App = new Backbone.Marionette.Application();

        App.addRegions({
            pageRegion: '#page-region',
            mainRegion: '#main-region',
            // same as:
            // App.container = new Backbone.Marionette.Region({el:'#main'});
        });

        // An init function for your main application object
        App.addInitializer(function() {
            this.debug = 1;
            this.root = '/'; // <- insert app name here? eg: app-name/

            // App.layout = new Layout();
            // $('body').prepend(App.layout.el);
            // App.layout.render();
            // App.layout.menu.show(myMenu);
        });

        // Close out the view and display nothing in #container.
        // region.close();

        // Add as many of these as you like
        App.addInitializer(function() {

        });

        App.navigate = function(route, options) {
            Backbone.history.navigate(route, options || {});
        };

        App.getCurrentRoute = function() {
            App.log('Get current route', 'App', 3);
            return Backbone.history.fragment;
        };

        /**
         * @param options
         */
        App.on('initialize:before', function() {
            App.log('Initialization Started', 'App', 2);
            // options.anotherThing = true; // Add more data to your options
        });

        /**
         * @param options
         */
        App.on('initialize:after', function() {
            if (Backbone.history) {
                // note: this is async, so the rest of the init code here will run first
                require(['modules/MODULENAME/app'], function () {
                    // Trigger the initial route and enable HTML5 History API support
                    // Backbone.history.start({
                    //     pushState: true,
                    //     root: App.root
                    // });

                    Backbone.history.start();

                    // set a default route
                    if (App.getCurrentRoute() === '') {
                        App.trigger('MODULENAME:list');
                    }
                    // App.switchApp('MyApp', {});
                });
            }

            App.log('Initialization Finished', 'App', 2);
        });

        /**
         * App changer
         */
        App.switchApp = function(appName, args) {
            // do not initalise a new module if no name is given
            var currentApp = appName ? App.module(appName) : null;

            if (App.currentApp === currentApp) { // only change if needed
                return;
            }

            App.log('Switching to: ' + appName, 'App', 1);

            if (App.currentApp) {
                App.currentApp.stop();
            }

            App.currentApp = currentApp;
            if (currentApp) {
                currentApp.start(args);
            }
        };

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

        // Return the instantiated App (there should only be one)
        return App;

    }
);