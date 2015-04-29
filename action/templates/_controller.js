'use strict';

define(['app', '<%= cnameLwr %>_<%= anameLwr %>_view', '<%= cnameLwr %>_entity'], function(App, View) {

	/**
	* @namespace <%= cname %>.<%= aname %>
	* @memberof <%= cname %>
	*/
	App.module('<%= cname %>.<%= aname %>', function(<%= aname %>, App, Backbone, Marionette, $, _) {

		/**
		* <%= cname %> <%= aname %> Controller
		*
		* @namespace <%= cname %>.<%= aname %>.Controller
		* @memberof <%= cname %>.<%= aname %>
		* @class
		* @private
		* @augments Marionette.DLController
		*/
		<%= aname %>.Controller = Marionette.DLController.extend({

			/**
			* <%= aname %> a new <%= anameLwr %>
			*
			* @memberof <%= cname %>.<%= aname %>.Controller
			* @method <%= anameLwr %>
			* @private
			*/
			<%= anameLwr %>: function(options) {

			}

		});
	});

	/**
	 * @returns {object} App.<%= cname %>.<%= aname %>
	 */
	return new App.<%= cname %>.<%= aname %>.Controller(App.<%= cname %>.<%= aname %>);
});
