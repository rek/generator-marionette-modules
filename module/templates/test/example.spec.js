/*global define, describe, it, expect */
'use strict';

define([
        'app',
        '../entities/XXXXX',
    ],

    function(App, XXXXX) {

        var SOMEMODULE = new App.Entities.XXXXX();

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