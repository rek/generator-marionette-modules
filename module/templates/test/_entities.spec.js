/*global expect */
/*jshint expr: true */
'use strict';

define([
        'app',
        'entities/<%= name %>'
    ],

    function(App) {
        var contextName = 'Entities<%= cname %>Test';
        var module<%= cname %> = App.request('<%= name %>:entities');

        App.log('<%= cname %> collection', contextName, 1);

        describe('<%= cname %> collection', function() {

            it('should exist', function() {
                expect(module<%= cname %>).to.exist;
            });

            // it('should be an instance of XXXXX', function() {
            //     // expect(XXXXX).to.be.an.instanceof(XXXXX);
            // });

        });

    }
);