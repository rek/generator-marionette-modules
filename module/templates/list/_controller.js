define(['app', 'list_view'], function (App, View) {
  App.module('RotesApp.List', function (List, App, Backbone, Marionette, $, _) {
    List.Controller = {
      listRotes: function () {
        require(['common/views', 'entities_rote'], function(CommonViews){

          App.mainRegion.show(new CommonViews.Loading());

          var fetchingRotes = App.request('rote:entities');

          var rotesListLayout = new View.Layout();
          // var rotesListPanel = new View.Panel();

          // require(['entities/common'], function(FilteredCollection){
            $.when(fetchingRotes).done(function(rotes){
              App.log('fetched rotes datas', 'App', 1);

              var rotesListView = new View.Rotes({
                collection: rotes
              });

              rotesListLayout.on('show', function(){
                // rotesListLayout.panelRegion.show(contactsListPanel);
                rotesListLayout.rotesRegion.show(rotesListView);
              });

              rotesListView.on('itemview:contact:show', function(childView, model){
                // App.trigger('rotes:show', model.get('id'));
              });

              // when its all setup, tigger show
              App.mainRegion.show(rotesListLayout);

            });

        });
      }
    }
  });
  return App.RotesApp.List.Controller;
});

//   List.Controller = {
//     showAll: function() {
//       var func = _.bind(this._showAll, this);

//       $.when(App.request('rotes:entities')).then(func);
//     },
// listRotes
//     _showAll: function(rotes) {
//       var roteListView = this._getRoteListView(rotes);
//       // emailListView.on('email:selected', function(view) {
//         // App.vent.trigger('email:selected', view.model);
//       // });
//       App.main.show(roteListView);
//     },

//     _getRoteListView: function(rotes) {
//       return new List.Rotes({
//         collection: rotes
//       });
//     }
//   }

// });