define(['app', 'list_view'], function (App, View) {
  App.module('<%= cname %>App.List', function (List, App, Backbone, Marionette, $, _) {
    List.Controller = {
      list<%= cname %>: function () {
        require(['common/views', 'entities_<%= name %>'], function(CommonViews){

          App.mainRegion.show(new CommonViews.Loading());

          var fetching<%= cname %> = App.request('rote:entities');

          var <%= name %>ListLayout = new View.Layout();
          // var <%= name %>ListPanel = new View.Panel();

          // require(['entities/common'], function(FilteredCollection){
            $.when(fetching<%= cname %>).done(function(<%= name %>){
              App.log('fetched <%= name %> datas', 'App', 1);

              var <%= name %>ListView = new View.<%= cname %>({
                collection: <%= name %>
              });

              <%= name %>ListLayout.on('show', function(){
                // <%= name %>ListLayout.panelRegion.show(contactsListPanel);
                <%= name %>ListLayout.<%= name %>Region.show(<%= name %>ListView);
              });

              <%= name %>ListView.on('itemview:contact:show', function(childView, model){
                // App.trigger('<%= name %>:show', model.get('id'));
              });

              // when its all setup, tigger show
              App.mainRegion.show(<%= name %>ListLayout);

            });

        });
      }
    }
  });
  return App.<%= cname %>App.List.Controller;
});