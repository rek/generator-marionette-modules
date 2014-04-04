module.exports = {
    dist: {
        files: [{
            expand: true,
            dot: true,
            cwd: '<%= config.app %>',
            dest: '<%= config.dist %>',
            src: [
                // '*.{ico,txt}',
                '.htaccess',
                // 'images/{,*/}*.{webp,gif,png,jpg}', // done in min img
                // 'styles/*.css' // done in mincss
            ]
        }]
    },
    requirejs: {
        src: '<%= config.app %>/bower_components/requirejs/require.js',
        dest: '<%= config.dist %>/bower_components/requirejs/require.js'
    }
};