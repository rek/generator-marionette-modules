/*global expect */
/*jshint expr: true */
'use strict';

define([
        'app',
        'list/controller'
    ],

    function(App) {

        var ListController = App.<%= cname %>App.List.Controller;

        describe('<%= cname %> List Controller', function() {

            it('should exist', function() {
                expect(ListController).to.exist;
            });

            it('actions should exist', function() {
                expect(ListController.list<%= cname %>).to.exist;
            });

            // it('should be an instance of <%= cname %>', function() {
            //     expect(<%= name %>).to.be.an.instanceof(App.<%= cname %>App.List.Controller);
            // });

        });

    }
);