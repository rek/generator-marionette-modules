/*global expect */
/*jshint expr: true */
'use strict';

define([
        'app',
        'jquery',
        '<%= name %>_list_view',
        '<%= name %>_entity'
    ],

    function(App, $) {
        var contextName = '<%= cname %>App.List.View';

        before(function () {
            // Create test fixture.
            this.$fixture = $('<div id=\'<%= name %>-view-fixture\'></div>');
        });

        beforeEach(function () {
            // Empty out and rebind the fixture for each run.
            this.$fixture.empty().appendTo($('#fixtures'));

            // New default model and view for each test.
            var entities = App.request('<%= name %>:entities');
            if (entities !== null) {
                App.log('Creating view: ', contextName, 1);
                this.view = new App.<%= cname %>App.List.View.<%= cname %>({
                    el: this.$fixture,
                    collection: entities
                });
                this.view.render();
            }
        });

        afterEach(function () {
            // Destroying the model also destroys the view.
            // App.log('Teardown: ' + this.view.collection.length, contextName, 1);
            // this.view.collection.reset();
        });

        after(function () {
            // Remove all sub-fixtures after test suite finishes.
            App.log('Teardown: ' + this.view.collection.length, contextName, 1);
            this.view.collection.reset();
            $('#fixtures').empty();
        });

        describe('List view', function() {

            it('can render <%= name %>List', function () {
                App.log('this.$fixture.html(): ' + this.$fixture.html(), contextName, 1);
                expect(this.$fixture.html()).to.contain('<%= name %>_list');
            });

        });

//        describe('List view Deferred', function() {
//            var entities = App.request('<%= name %>:entities');
//            console.log('entities: ' + JSON.stringify(entities));
//            $.when(entities).done(function(items){
//                console.log('items: ' + JSON.stringify(items));
//                if (items !== null) {
//                    var SOMEMODULE = new App.<%= cname %>App.List.<%= cname %>({
//                        collection: entities
//                    });
//                }
//
//                it('should exist', function() {
//                    expect(SOMEMODULE).to.exist;
//                });
//
//            });
//
//            // it('should be an instance of XXXXX', function() {
//            //     // expect(XXXXX).to.be.an.instanceof(XXXXX);
//            // });
//
//        });

    }
);