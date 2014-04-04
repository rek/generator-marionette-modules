module.exports = {
    dist: {
        options: {

            modules: [{name: 'config'}],
            dir: '<%= config.dist %>/scripts',
            baseUrl: '<%= config.app %>/scripts',
            findNestedDependencies: true,

            // optimize: 'none',
            optimize: 'uglify2', // Supports generateSourceMaps
            preserveLicenseComments: false,
            useStrict: true,
            removeCombined: true,
            wrapShim: true,
            mainConfigFile: '<%= config.app %>/scripts/config.js',

        },

    }
};