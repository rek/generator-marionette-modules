'use strict';
define(['app', 'templates', 'dust'], function(App) {
    App.module('<%= cname %>App.List.View', function(View, App, Backbone, Marionette) { // , $, _
        var contextName = '<%= cname %>App.List.View';
        View.Layout = Marionette.Layout.extend({
            template: '<%= name %>_layout',

            regions: {
                panelRegion: '#panel-region',
                <%= name %>Region: '#content'
            },

            flash: function(cssClass) { // fade in and out.
                var $view = this.$el;
                $view.hide().toggleClass(cssClass).fadeIn(800, function() {
                    setTimeout(function() {
                        $view.toggleClass(cssClass);
                    }, 500);
                });
            }
        });

        // View.Panel = Marionette.ItemView.extend({
        //     template: panelTpl,

        //     triggers: {
        //         'click button.js-new': '<%= name %>:new'
        //     },

        //     events: {
        //         'submit #filter-form': 'filter<%= cname %>s'
        //     },

        //     ui: {
        //         criterion: 'input.js-filter-criterion'
        //     },

        //     filter<%= cname %>s: function(e){
        //         e.preventDefault();
        //         var criterion = this.$('.js-filter-criterion').val();
        //         this.trigger('<%= name %>s:filter', criterion);
        //     },

        //     onSetFilterCriterion: function(criterion){
        //         this.ui.criterion.val(criterion);
        //     }
        // });

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

            initialize: function() {
                App.log('init called', contextName, 1);
                this.listenTo(this.collection, 'reset', function() {
                    App.log('reset called', contextName, 1);
                    this.appendHtml = function(collectionView, itemView) { //, index) {
                        collectionView.$el.append(itemView.el);
                    };
                });
            },

            onCompositeCollectionRendered: function() {
                App.log('rendered called', '<%= name %> list view', 1);
                this.appendHtml = function(collectionView, itemView) { //, index) {
                    collectionView.$el.prepend(itemView.el);
                };
            }
        });
    });

    return App.<%= cname %>App.List.View;
});