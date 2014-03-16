define(['app'], function(App){
  App.module('Entities', function(Entities, App, Backbone, Marionette, $, _){
    var contextName = 'Entity';
    Entities.<%= cname %> = Backbone.Model.extend({
      urlRoot: '<%= name %>',

      defaults: {
        name: '',
        slug: ''
      },

      validate: function(attrs, options) {
        var errors = {}
    //     if (! attrs.firstName) {
    //       errors.firstName = 'can't be blank';
    //     }
    //     if (! attrs.lastName) {
    //       errors.lastName = 'can't be blank';
    //     }
    //     else{
    //       if (attrs.lastName.length < 2) {
    //         errors.lastName = 'is too short';
    //       }
    //     }
    //     if( ! _.isEmpty(errors)){
    //       return errors;
    //     }
      }
    });

    Entities.<%= cname %>Collection = Backbone.Collection.extend({
      url: '<%= name %>'
    });

    var initialize<%= cname %>s = function(){
      App.log('<%= cname %>s init', contextName, 1);
      var <%= cname %> = Backbone.Model.extend({});

      var fake<%= cname %>s = [
          new <%= cname %>({ name: 'First <%= cname %>', slug: 'page-1' }),
          new <%= cname %>({ name: 'Second <%= cname %>', slug: 'page-2' })
      ]

      return fake<%= cname %>s;
    };

    var API = {
      get<%= cname %>Entities: function(){
        App.log('get<%= cname %>s called', contextName, 1);
        var <%= name %>s = new Entities.<%= cname %>Collection();
        var defer = $.Deferred();
        <%= name %>s.fetch({
          complete: function(data){
            App.log('fake datas', contextName, 1);
            defer.resolve(<%= name %>s);
          },
          success: function(data){
            App.log('success data', contextName, 1);
            defer.resolve(data);
          }
        });
        var promise = defer.promise();
        $.when(promise).done(function(<%= name %>s){
          App.log('promise running: ' + <%= name %>s.length, contextName, 1);
          if (<%= name %>s.length === 0) {
            // if we don't have any <%= name %>s yet, create some for convenience
            var models = initialize<%= cname %>s();
            setTimeout(function () {
              App.trigger('page:register', models); // add each <%= name %> to the menu
              <%= name %>s.reset(models);
            }, 2000);

          }
        });
        return promise;
      },

    };

    App.reqres.setHandler('<%= name %>:entities', function(){
      return API.get<%= cname %>Entities();
    });

    // App.reqres.setHandler('<%= name %>:entity', function(id){
      // return API.getContactEntity(id);
    // });

    // App.reqres.setHandler('contact:entity:new', function(id){
      // return new Entities.Contact();
    // });
  });

  return ;
});
