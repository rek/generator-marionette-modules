'use strict';
define(function(require) {
    var App = require('app');

    // create a new module
    App.module('<%= cname %>', {
        startWithParent: false,
        // only avaiable with object literal def of module;
        // initialize: function(options, moduleName, App) { // on prototype chain thus inheritable
            // this.name = moduleName;
        // },
        define: function(<%= cname %>, App, Backbone, Marionette, $, _) { // non inheritable
            App.log('Initalize: ' + App.getCurrentRoute(), this.name, 2);
        }
    });

    // create a new sub module
    App.module('Routers.<%= cname %>', function(<%= cname %>Router, App, Backbone, Marionette) { //, $, _) {
        this.name = 'Routers.<%= cname %>';

        <%= cname %>Router.Router = Marionette.AppRouter.extend({
            initialize: function() {
                // App.log('Before Router', <%= cname %>Router.name);
                // start ourselves
                // App.switchApp('<%= cname %>App', {});
            },
            appRoutes: {
                '': 'list<%= cname %>',
                '<%= name %>': 'list<%= cname %>',
                // '<%= name %>/create': 'create<%= cname %>',
                // '<%= name %>/:slug' : 'show<%= cname %>'
            }
        });

        var executeAction = function(action, arg) {
            App.switchApp('<%= cname %>');
            action(arg);
            // App.execute('set:active:page', '<%= name %>');
        };

        var API = {
            list<%= cname %> : function() {
                require(['<%= name %>_list_controller'], function(ListController) {
                    App.log('List <%= name %>: Controller loaded, requesting <%= name %>..', <%= cname %>AppRouter.name, 2);
                    executeAction(ListController.list<%= cname %>);
                });
            },
        };

        // also watch for manual events:
        App.on('<%= name %>:list', function() {
            App.navigate('/<%= name %>');
            API.list<%= cname %>();
        });

        App.addInitializer(function() {
            App.log('Initalizer running: Starting Router', <%= cname %>Router.name, 2);
            new <%= cname %>Router.Router({
                controller: API
            });
        });
    });

    return App.<%= cname %>Router;
});