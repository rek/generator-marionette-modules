'use strict';

module.exports = {
    dist: {
        files: [{
            expand: true,
            dot: true,
            cwd: '<%= settings.app %>',
            dest: '<%= settings.dist %>',
            src: [
                // '*.{ico,txt}',
                '.htaccess',
                // 'images/{,*/}*.{webp,gif,png,jpg}', // done in min img
                // 'styles/*.css' // done in mincss
            ]
        }]
    },
    requirejs: {
        src: '<%= settings.app %>/bower_components/requirejs/require.js',
        dest: '<%= settings.dist %>/bower_components/requirejs/require.js'
    },
    index: { // remove the livereload script tag
        src: '<%= settings.dist %>/index.html.temp',
        dest: '<%= settings.dist %>/index.html',
        options: {
            process: function(content) {
                return content.replace(/<script>require\(\[\"\/\/localhost:35729\/livereload.js\"\]\);<\/script>/g, '');
            }
        }
    }
};