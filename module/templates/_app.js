define(function(require) {
    var App = require('app');
    var path = 'modules/<%= name %>/';

    requirejs.config({
        baseUrl: 'scripts/',
        paths: {
            list_view       : path + 'list/list_view',
            list_controller : path + 'list/list_controller',
            show_view       : path + 'show/show_view',
            show_controller : path + 'show/show_controller',
            entities_<%= name %>  : path + 'entities/<%= name %>',
        }
    });

    // create a new module
    App.module('App', {
        startWithParent: false,
        // only avaiable with object literal def of module;
        initialize: function (options, moduleName, app) { // on prototype chain thus inheritable
            this.name = moduleName;
            App.log('Initalize: ' + App.getCurrentRoute(), this.name, 2);
        },
        define: function (<%= cname %>App, App, Backbone, Marionette, $, _) { // non inheritable
            // temp stuff for logging
            // TODO: find a better way to get module name
        }
    });

    // create a new sub module
    App.module('Routers.<%= cname %>App', function(<%= cname %>AppRouter, App, Backbone, Marionette, $, _){
        this.name = 'Routers.<%= cname %>App';

        <%= cname %>AppRouter.Router = Marionette.AppRouter.extend({
            initialize: function () {
                // App.log('Before Router', RotesAppRouter.name);
                // start ourselves
                // App.switchApp('RotesApp', {});
            },
            appRoutes: {
                ''            : 'list<%= cname %>',
                '<%= name %>'       : 'list<%= cname %>',
                // '<%= name %>/create': 'create<%= cname %>',
                // '<%= name %>/:slug'  : 'show<%= cname %>'
            }
        });

        var executeAction = function(action, arg){
            App.switchApp('<%= cname %>App');
            action(arg);
            App.execute('set:active:page', '<%= name %>');
        };

        var API = {
            list<%= cname %>: function(){
                require(['list_controller'], function(ListController){
                    App.log('List <%= name %>: Controller loaded, requesting <%= name %>..', <%= cname %>AppRouter.name, 2);
                    executeAction(ListController.list<%= cname %>);
                });
            },
        };

        // also watch for manual events:
        App.on('<%= name %>:list', function(){
          App.navigate('/<%= name %>');
          API.list<%= cname %>();
        });

        App.addInitializer(function(){
            App.log('Initalizer running: Starting Router', <%= cname %>AppRouter.name, 2);
            new <%= cname %>AppRouter.Router({
                controller: API
            });
        });
    });

    return App.<%= cname %>AppRouter;
});