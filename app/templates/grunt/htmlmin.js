'use strict';

module.exports = {
    dist: {
        options: {
            // collapseBooleanAttributes: true,
            // https://github.com/yeoman/grunt-usemin/issues/44
            // collapseWhitespace: true,
            // removeAttributeQuotes: true,
            removeCommentsFromCDATA: true,
            removeEmptyAttributes: true,
            // removeOptionalTags: true,
            removeRedundantAttributes: true,
            useShortDoctype: true
        },

        files: {
            '<%= settings.dist %>/index.html.temp': '<%= settings.app %>/index.html'
        }
    },
    deploy: {
        options: {
            // https://github.com/yeoman/grunt-usemin/issues/44
            collapseWhitespace: true,
        },
        files: [
            { // copy all
                expand: true,
                cwd: '<%= settings.dist %>',
                src: '*.html',
                dest: '<%= settings.dist %>',
            },
        ]
    }
};