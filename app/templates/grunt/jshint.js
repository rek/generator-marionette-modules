'use strict';

module.exports = {
    options: {
        jshintrc: '.jshintrc'
    },
    all: [
        'Gruntfile.js',
        '<%= settings.app %>/scripts/{,*/}*.js',
        '!<%= settings.app %>/scripts/vendor/*',
        'test/spec/{,*/}*.js',
        '!<%= settings.app %>/scripts/templates/compiled.js'
    ]
};