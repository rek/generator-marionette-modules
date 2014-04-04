module.exports = {
    'default': [
        'watch'
    ],

    'test': [
        // 'clean:server',
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
            // 'uglify', <- require does these 2 better
        'copy',            // copy any extra files we need
        'rev',             // rename them to bust cache
        'requirejs',
        'usemin',
    ],

    'default': [
        'jshint',
        'test'
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