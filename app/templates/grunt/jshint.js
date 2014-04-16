'use strict';

module.exports = {
    options: {
        jshintrc: '.jshintrc'
    },
    all: [
        'Gruntfile.js',
        'grunt/*.js',
        'test/spec/{,*/}*.js',
        '<%= settings.app %>/scripts/**/*.js',
        '!<%= settings.app %>/scripts/vendor/*',
        '!<%= settings.app %>/scripts/common/templates.js'
    ]
};