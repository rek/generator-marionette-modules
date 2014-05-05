'use strict';
define(['app'], function(App) {
    App.module('Entities', function(Entities, App, Backbone, Marionette, $, _) {
        var contextName = '<%= cname %> Entity';
        Entities.<%= cname %> = Backbone.Model.extend({
            urlRoot: '<%= name %>',

            defaults: {
                name: '',
                slug: ''
            },

            validate: function(attrs) { // , options
                var errors = {};
                if (!attrs.fileName) {
                    errors.fileName = 'can\'t be blank';
                }
                //     if (! attrs.somethingelse) {
                //       errors.lastName = 'can't be blank';
                //     }
                //     else{
                //       if (attrs.somethingelse.length < 2) {
                //         errors.somethingelse = 'is too short';
                //       }
                //     }
                if (!_.isEmpty(errors)) {
                    return errors;
                }
            }
        });

        Entities.<%= cname %>Collection = Backbone.Collection.extend({
            url: '/',
            model: Entities.<%= cname %>
        });

        var initialize<%= cname %>s = function() {
            App.log('Initializing Fake <%= cname %>s', contextName, 1);

            var fake<%= cname %>s = new Entities.<%= cname %>Collection([{
                name: 'First <%= cname %>',
                slug: 'page-1'
            }, {
                name: 'Second <%= cname %>',
                slug: 'page-2'
            }]);

            return fake<%= cname %>s;
        };

        var API = {
            get<%= cname %>Entity: function(id) {
                var model = new Entities.<%= cname %>(id);
                App.log('Made new object: ' + id, contextName, 1);
                return model;
            },

            get<%= cname %>Entities: function() {
                App.log('<%= name %>:entities event detected', contextName, 1);
                var <%= name %>Collection = new Entities.<%= cname %>Collection();
                <%= name %>Collection.reset(initialize<%= cname %>s().models); // update the collection
                return <%= name %>Collection;
            },

            get<%= cname %>EntitiesPromises: function() {
                App.log('<%= name %>:entities event detected', contextName, 1);
                var <%= name %>Collection = new Entities.<%= cname %>Collection();
                var defer = $.Deferred();
                <%= name %>Collection.fetch({
                    complete: function() {
                        defer.resolve(<%= name %>Collection); // send back the collection
                    },
                    // success: function(data){
                    //     App.log('success data', contextName, 1);
                    //     defer.resolve(data);
                    // }
                });
                // chain the above promise,
                var promise = defer.promise();
                $.when(promise).done(function(<%= name %>Collection) {
                    // check to see if it had content:
                    if (<%= name %>Collection.length === 0) { // if not, get defaults.
                        // FAKE NETWORK LAG
                        setTimeout(function() {
                            // App.trigger('page:register', models); // add each <%= name %> to the menu
                            // if we don't have any imageCollection yet, create some for convenience
                            <%= name %>Collection.reset(initialize<%= cname %>s().models); // update the collection
                        }, 2000);

                    }
                });
                return promise;
            },

        };

        App.reqres.setHandler('<%= name %>:entities', function() {
            return API.get<%= cname %>Entities();
        });

        App.reqres.setHandler('<%= name %>:entity:new', function(id) {
            return API.get<%= cname %>Entity(id);
        });
    });

    return;
});