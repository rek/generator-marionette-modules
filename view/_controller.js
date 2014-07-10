'use strict';
define(['app', '<%= name %>_view_<%= view %>', '<%= name %>_entity', 'common_views'], function(App, View, CommonViews) {
    App.module('<%= cname %>.<%= vname %>', function (<%= vname %>, App, Backbone, Marionette, $) { // , _
        var contextName = '<%= cname %>.<%= vname %>.Controller';
        <%= vname %>.Controller = {
            <%= cname %>: function() {
                App.log('<%= vname %> <%= cname %> called', contextName, 2);
                App.mainRegion.show(new CommonViews.Loading());

                var fetching<%= cname %> = App.request('<%= name %>:entities');
                var layout = new View.Layout();

                $.when(fetching<%= cname %>).done(function(<%= name %>) {
                    var view = new View.<%= cname %>({
                        collection: <%= name %>
                    });

                    // when the data is here, show it in this region
                    layout.<%= name %>Region.show(view);
                });

                // show the whole layout
                App.mainRegion.show(layout);
            }
        };
    });
    return App.<%= cname %>.<%= vname %>.Controller;
});