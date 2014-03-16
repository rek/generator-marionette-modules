define(["app"], function (App) {
  App.module("RotesApp.List.View", function (View, App, Backbone, Marionette, $, _) {
    View.Layout = Marionette.Layout.extend({
      template: 'rotes_layout',

      regions: {
        panelRegion: "#panel-region",
        rotesRegion: "#content"
      }
    });

    // View.Panel = Marionette.ItemView.extend({
    //   template: panelTpl,

    //   triggers: {
    //     "click button.js-new": "contact:new"
    //   },

    //   events: {
    //     "submit #filter-form": "filterContacts"
    //   },

    //   ui: {
    //     criterion: "input.js-filter-criterion"
    //   },

    //   filterContacts: function(e){
    //     e.preventDefault();
    //     var criterion = this.$(".js-filter-criterion").val();
    //     this.trigger("contacts:filter", criterion);
    //   },

    //   onSetFilterCriterion: function(criterion){
    //     this.ui.criterion.val(criterion);
    //   }
    // });

    View.Rote = Marionette.ItemView.extend({
      tagName: "tr",
      template: 'rotes_list_one',

      events: {
        "click": "highlightName",
        "click td a.js-show": "showClicked",
        "click td a.js-edit": "editClicked",
        "click button.js-delete": "deleteClicked"
      },

      flash: function(cssClass){
        var $view = this.$el;
        $view.hide().toggleClass(cssClass).fadeIn(800, function(){
          setTimeout(function(){
            $view.toggleClass(cssClass)
          }, 500);
        });
      },

      highlightName: function(e){
        this.$el.toggleClass("warning");
      },

      showClicked: function(e){
        e.preventDefault();
        e.stopPropagation();
        this.trigger("contact:show", this.model);
      },

      editClicked: function(e){
        e.preventDefault();
        e.stopPropagation();
        this.trigger("contact:edit", this.model);
      },

      deleteClicked: function(e){
        e.stopPropagation();
        this.trigger("contact:delete", this.model);
      },

      remove: function(){
        var self = this;
        this.$el.fadeOut(function(){
          Marionette.ItemView.prototype.remove.call(self);
        });
      }
    });

    var NoRotesView = Marionette.ItemView.extend({
      template: 'rotes_none',
      tagName: "tr",
      className: "alert"
    });

    View.Rotes = Marionette.CompositeView.extend({
      tagName: "table",
      className: "table table-hover",
      template: 'rotes_list',
      emptyView: NoRotesView,
      itemView: View.Rote,
      itemViewContainer: "tbody",

      initialize: function(){
        this.listenTo(this.collection, "reset", function(){
          App.log('reset called', 'rotes list view', 1);
          this.appendHtml = function(collectionView, itemView, index){
            collectionView.$el.append(itemView.el);
          }
        });
      },

      onCompositeCollectionRendered: function(){
        App.log('rendered called', 'rotes list view', 1);
        this.appendHtml = function(collectionView, itemView, index){
          collectionView.$el.prepend(itemView.el);
        }
      }
    });
  });

  return App.RotesApp.List.View;
});
