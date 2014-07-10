'use strict';
define(['app'], function(App) {
    App.module('<%= cname %>.<%= vname %>.View', function(View, App, Backbone, Marionette) { // , $, _
        var contextName = '<%= cname %>.<%= vname %>.View';
        <% if (empty === "no") { %>
        View.Layout = Marionette.Layout.extend({
            template: '<%= name %>_layout',

            regions: {
                <%= name %>Region: '.content'
            },
        });

        View.<%= cname %>One = Marionette.ItemView.extend({
            tagName: 'div',
            template: '<%= name %>_list_one',

            events: {
                'click': 'highlightName',
                'click td a.js-show': 'showClicked',
                'click button.js-delete': 'deleteClicked'
            },

            highlightName: function() {
                this.$el.toggleClass('warning');
            },

            showClicked: function(e) {
                e.preventDefault();
                e.stopPropagation();
                this.trigger('<%= name %>:show', this.model);
            },

            deleteClicked: function(e) {
                e.stopPropagation();
                this.trigger('<%= name %>:delete', this.model);
            },

            remove: function() { // automatically called when this model is destroy() 'ed
                var self = this;
                this.$el.fadeOut(function() {
                    Marionette.ItemView.prototype.remove.call(self);
                });
            }
        });

        var <%= cname %>Empty = Marionette.ItemView.extend({
            template: '<%= name %>_none',
            // tagName: 'div',
            className: 'alert'
        });

        View.<%= cname %> = Marionette.CompositeView.extend({
            tagName: 'div',
            className: '',
            template: '<%= name %>_list',
            emptyView: <%= cname %>Empty,
            itemView: View.<%= cname %>One,
            itemViewContainer: '.<%= name %>_list',
        });
        <% } %>
    });

    return App.<%= cname %>.<%= vname %>.View;
});