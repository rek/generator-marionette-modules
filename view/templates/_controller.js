'use strict';
define(['app', '<%= name %>_list_view'], function(App, View) {
    App.module('<%= cname %>.List', function (List, App, Backbone, Marionette, $) { // , _
        var contextName = '<%= cname %>.List.Controller';
        List.Controller = {
            list<%= cname %>: function() {
                <% if (empty === "no") { %>
                require(['common_views', '<%= name %>_entity'], function(CommonViews) {
                    App.log('List <%= cname %> called', contextName, 2);
                    App.mainRegion.show(new CommonViews.Loading());

                    var fetching<%= cname %> = App.request('<%= name %>:entities');

                    var <%= name %>ListLayout = new View.Layout();
                    // var <%= name %>ListPanel = new View.Panel();

                    $.when(fetching<%= cname %>).done(function(<%= name %>) {
                        // App.log('Fetched <%= name %> data', 'App', 1);

                        var <%= name %>ListView = new View.<%= cname %>({
                            collection: <%= name %>
                        });

                        // <%= name %>ListLayout.on('show', function() {
                        //   <%= name %>ListLayout.panelRegion.show(<%= name %>sListPanel);
                        //   <%= name %>ListLayout.<%= name %>Region.show(<%= name %>ListView);
                        // });

                        // <%= name %>ListView.on('itemview:<%= name %>:show', function(childView, model) {
                        //   App.trigger('<%= name %>:show', model.get('id'));
                        // });

                        <%= name %>ListView.on('itemview:<%= name %>:delete', function(childView, model) {
                            // auto magically call's remove in the view.
                            model.destroy();
                        });

                        // when the data is here, show it in this region
                        <%= name %>ListLayout.<%= name %>Region.show(<%= name %>ListView);

                    });

                    // show the whole layout
                    App.mainRegion.show(<%= name %>ListLayout);
                });
                <% } %>
            }
        };
    });
    return App.<%= cname %>.List.Controller;
});