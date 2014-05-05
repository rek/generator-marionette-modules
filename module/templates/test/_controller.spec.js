/*global expect */
/*jshint expr: true */
'use strict';

define([
        'app',
        '/list/controller',
    ],

    function(App) {

        var <%= name %> = new App.<%= cname %>App.List.Controller();

        describe('<%= cname %> controller', function() {

            it('should exist', function() {
                expect(<%= name %>).to.exist;
            });

            it('should be an instance of <%= cname %>', function() {
                expect(<%= name %>).to.be.an.instanceof(App.<%= cname %>App.List.Controller);
            });

        });

    }
);