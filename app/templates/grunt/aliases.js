/*global grunt */
'use strict';

module.exports = {
    'default': [
        'watch'
    ],

    'test': [
        // 'clean:server',
        'jshint',

        'connect:test',
        'mocha_phantomjs',
    ],

    'build': [
        'clean:dist',
        'dustjs',          // dust -> js
        'less:production', // less -> css
        'useminPrepare',   // concat to prepare for cssmin
        'concurrent:dist', // runs: imagemin, svgmin, htmlmin and cssmin
            // 'concat',
            // 'uglify', <- requirejs does these 2 better
        'copy:dist',       // copy any extra files we need
        'copy:requirejs',
        'rev',             // rename them to bust cache
        'requirejs',
        'usemin',
        'copy:index',
        'htmlmin:deploy',
        'clean:postBuild'
    ],

    'server': function(target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'open', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'clean:server',
            'concurrent:server',
            'livereload-start',
            'connect:livereload',
            'open',
            'watch'
        ]);
    }
};