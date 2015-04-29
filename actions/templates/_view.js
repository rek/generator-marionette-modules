'use strict';

define(['app', 'parsley', 'backbone.syphon'], function(App) {

	/**
	* @namespace <%= cname %>.<%= aname %>.View
	* @memberof <%= cname %>
	*/
	App.module('<%= cname %>.<%= aname %>.View', function(View, App, Backbone, Marionette) {

		/**
		* Initialises View.<%= aname %>
		*
		* @namespace <%= cname %>.View.<%= aname %>
		* @memberof <%= cname %>.<%= aname %>
		* @class
		* @private
		* @augments Marionette.LayoutView
		*/
		View.Layout = Marionette.LayoutView.extend({
			template: '<%= cnameLwr %>_<%= anameLwr %>',

			regions: {
				'list': '#list-region'
			}
		});

	});

	return App.<%= cname %>.<%= aname %>.View;
});

