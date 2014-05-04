/*global expect */
/*jshint expr: true */
'use strict';

define([
        'app',
        'entities/register'
    ],

    function(App) {
        var contextName = 'EntitiesRegisterTest';
        var SOMEMODULE = App.request('register:entities');
        App.log('Register collection', contextName, 1);
        console.log('Register collection: ' + JSON.stringify(SOMEMODULE));
        describe('Register collection', function() {

            it('should exist', function() {
                expect(SOMEMODULE).to.exist;
            });

            // it('should be an instance of XXXXX', function() {
            //     // expect(XXXXX).to.be.an.instanceof(XXXXX);
            // });

        });

    }
);