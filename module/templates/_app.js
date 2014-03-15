define(function(require) {
    var App = require('app');
    <%
        _.mixin({
          capitalize: function(string) {
            return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
          }
        });
    %>
    var path = 'modules/<%= name %>/';

    requirejs.config({
        paths: {
            list_view       : path + 'list/list_view',
            list_controller : path + 'list/list_controller',
            show_view       : path + 'show/show_view',
            show_controller : path + 'show/show_controller',
            entities_<%= name %>   : path + 'entities/<%= name %>',
        }
    });

    // create a new module
    App.module('App', {
        startWithParent: false,
        // only avaiable with object literal def of module;
        initialize: function (options, moduleName, app) { // on prototype chain thus interitable
            this.name = moduleName;
            App.log('Initalize: ' + App.getCurrentRoute(), this.name, 2);
        },
        define: function (<%= _.capitalize(name) %>App, App, Backbone, Marionette, $, _) { // non interitable
            // temp stuff for logging
            // TODO: find a better way to get module name
        }
    });

    // create a new sub module
    App.module("Routers.<%= _.capitalize(name) %>App", function(<%= _.capitalize(name) %>AppRouter, App, Backbone, Marionette, $, _){
        this.name = 'Routers.<%= _.capitalize(name) %>App';

        <%= _.capitalize(name) %>AppRouter.Router = Marionette.AppRouter.extend({
            initialize: function () {
                // App.log('Before Router', RotesAppRouter.name);
                // start ourselves
                // App.switchApp('RotesApp', {});
            },
            appRoutes: {
                ''            : 'list<%= _.capitalize(name) %>',
                '<%= name %>'       : 'list<%= _.capitalize(name) %>',
                // '<%= name %>/create': 'create<%= _.capitalize(name) %>',
                '<%= name %>/:slug'  : 'show<%= _.capitalize(name) %>'
            }
        });

        var executeAction = function(action, arg){
            App.switchApp("<%= _.capitalize(name) %>App");
            action(arg);
            App.execute("set:active:page", "<%= name %>");
        };

        var API = {
            list<%= _.capitalize(name) %>: function(){
                require(['list_controller'], function(ListController){
                    App.log('List <%= name %>: Controller loaded, requesting <%= name %>..', <%= _.capitalize(name) %>AppRouter.name, 2);
                    executeAction(ListController.list<%= _.capitalize(name) %>);
                });
            },
        };

        App.on("<%= name %>:list", function(){
          App.navigate("/<%= name %>");
          API.list<%= _.capitalize(name) %>();
        });

        App.addInitializer(function(){
            App.log('Initalizer running: Starting Router', <%= _.capitalize(name) %>AppRouter.name, 2);
            new <%= _.capitalize(name) %>AppRouter.Router({
                controller: API
            });
        });
    });

    return App.<%= _.capitalize(name) %>AppRouter;
});