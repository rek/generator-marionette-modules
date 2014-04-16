/*global expect */
/*jshint expr: true */
'use strict';

define([
        'app',
        '../list/list_controller',
    ],

    function(App) {

        var SOMEMODULE = new App.List.Controller();

        describe('Examples collection', function() {

            it('should exist', function() {
                expect(SOMEMODULE).to.exist;
            });

            // it('should be an instance of XXXXX', function() {
            //     // expect(XXXXX).to.be.an.instanceof(XXXXX);
            // });

        });

    }
);