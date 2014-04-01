define(['app'], function (App) {
  App.module('<%= cname %>App.List.View', function (View, App, Backbone, Marionette, $, _) {
    View.Layout = Marionette.Layout.extend({
      template: '<%= name %>_layout',

      regions: {
        panelRegion: '#panel-region',
        <%= name %>Region: '#content'
      },

      flash: function(cssClass) {  // fade in and out.
        var $view = this.$el;
        $view.hide().toggleClass(cssClass).fadeIn(800, function() {
          setTimeout(function() {
            $view.toggleClass(cssClass)
          }, 500);
        });
      },
    });

    // View.Panel = Marionette.ItemView.extend({
    //   template: panelTpl,

    //   triggers: {
    //     'click button.js-new': 'contact:new'
    //   },

    //   events: {
    //     'submit #filter-form': 'filterContacts'
    //   },

    //   ui: {
    //     criterion: 'input.js-filter-criterion'
    //   },

    //   filterContacts: function(e){
    //     e.preventDefault();
    //     var criterion = this.$('.js-filter-criterion').val();
    //     this.trigger('contacts:filter', criterion);
    //   },

    //   onSetFilterCriterion: function(criterion){
    //     this.ui.criterion.val(criterion);
    //   }
    // });

    View.<%= cname %> = Marionette.ItemView.extend({
      tagName: 'div',
      template: '<%= name %>_list_one',

      events: {
        'click': 'highlightName',
        'click td a.js-show': 'showClicked',
        'click button.js-delete': 'deleteClicked'
      },


      highlightName: function(e) {
        this.$el.toggleClass('warning');
      },

      showClicked: function(e) {
        e.preventDefault();
        e.stopPropagation();
        this.trigger('contact:show', this.model);
      },

      deleteClicked: function(e) {
        e.stopPropagation();
        this.trigger('contact:delete', this.model);
      },

      remove: function() { // automatically called when this model is destroy() 'ed
        var self = this;
        this.$el.fadeOut(function() {
          Marionette.ItemView.prototype.remove.call(self);
        });
      }
    });

    var No<%= cname %>View = Marionette.ItemView.extend({
      template: '<%= name %>_none',
      // tagName: 'tr',
      className: 'alert'
    });

    View.<%= cname %> = Marionette.CompositeView.extend({
      // tagName: 'table',
      // className: 'table table-hover',
      template: '<%= name %>_list',
      emptyView: No<%= cname %>View,
      itemView: View.<%= cname %>,
      // itemViewContainer: 'tbody',

      initialize: function(){
        this.listenTo(this.collection, 'reset', function() {
          App.log('reset called', '<%= name %> list view', 1);
          this.appendHtml = function(collectionView, itemView, index){
            collectionView.$el.append(itemView.el);
          }
        });
      },

      onCompositeCollectionRendered: function() {
        App.log('rendered called', '<%= name %> list view', 1);
        this.appendHtml = function(collectionView, itemView, index){
          collectionView.$el.prepend(itemView.el);
        }
      }
    });
  });

  return App.<%= cname %>App.List.View;
});
