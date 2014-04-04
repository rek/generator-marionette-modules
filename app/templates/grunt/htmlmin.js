module.exports = {
    dist: {
        options: {
            // collapseBooleanAttributes: true,
            // https://github.com/yeoman/grunt-usemin/issues/44
            // collapseWhitespace: true,
            // removeAttributeQuotes: true,
            // removeCommentsFromCDATA: true,
            // removeEmptyAttributes: true,
            // removeOptionalTags: true,
            // removeRedundantAttributes: true,
            // useShortDoctype: true
        },
        files: [{
            expand: true,
            cwd: '<%= config.app %>',
            src: '*.html',
            dest: '<%= config.dist %>',
        }]
    }
};