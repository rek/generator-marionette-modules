/*global grunt */
'use strict';

module.exports = {
    'test': [
        // 'clean:server',
        'newer:jshint',

        'connect:test',
        'mocha_phantomjs',
    ],

    'build': [
        'clean:dist',
        'newer:dustjs',    // dust -> js
        'newer:less:production', // less -> css
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

    'serverf': [ // fast version
        'concurrent:server'
    ],

    'server': [
        // if (target === 'dist') {
            // return grunt.task.run(['build', 'open', 'connect:dist:keepalive']);
        // }

        'clean:server',
        'newer:dustjs',
        'newer:less:production',
        'concurrent:server'
    ]
};