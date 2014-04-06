'use strict';

module.exports = {
    dist: {
        options: {

            modules: [{name: 'config'}],
            dir: '<%= settings.dist %>/scripts',
            baseUrl: '<%= settings.app %>/scripts',
            findNestedDependencies: true,

            // optimize: 'none',
            optimize: 'uglify2', // Supports generateSourceMaps
            preserveLicenseComments: false,
            useStrict: true,
            removeCombined: true,
            wrapShim: true,
            mainConfigFile: '<%= settings.app %>/scripts/config.js',

        },

    }
};