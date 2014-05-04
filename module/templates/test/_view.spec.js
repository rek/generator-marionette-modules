/*global expect */
/*jshint expr: true */
'use strict';

define([
        'app',
        'jquery',
        'list/view',
        'entities/register'
    ],

    function(App) {

//        describe('List view Deferred', function() {
//            var entities = App.request('register:entities');
////        console.log('entities: ' + JSON.stringify(entities));
//            $.when(entities).done(function(items){
//                console.log('items: ' + JSON.stringify(items));
//                if (items !== null) {
//                    var SOMEMODULE = new App.RegisterApp.List.Register({
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

        describe('List view', function() {
            var SOMEMODULE = null;
            var entities = App.request('<%= name %>:entities');
            if (entities !== null) {
                SOMEMODULE = new App.<%= cname %>App.List.View.<%= cname %>({
                    collection: entities
                });
            }

            it('should exist', function() {
                expect(SOMEMODULE).to.exist;
            });


            // it('should be an instance of XXXXX', function() {
            //     // expect(XXXXX).to.be.an.instanceof(XXXXX);
            // });

        });
    }
);