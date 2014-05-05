/*global expect */
/*jshint expr: true */
'use strict';

define([
        'app',
        'list/controller'
    ],

    function(App) {

<<<<<<< HEAD
        var <%= name %> = new App.<%= cname %>App.List.Controller();

        describe('<%= cname %> controller', function() {
=======
        var SOMEMODULE = new App.<%= cname %>App.List.Controller.listRegister();

        describe('Controller', function() {
>>>>>>> d4b7ccdb42e0104fc6f108082a1d2a5034f93087

            it('should exist', function() {
                expect(<%= name %>).to.exist;
            });

            it('should be an instance of <%= cname %>', function() {
                expect(<%= name %>).to.be.an.instanceof(App.<%= cname %>App.List.Controller);
            });

        });

    }
);