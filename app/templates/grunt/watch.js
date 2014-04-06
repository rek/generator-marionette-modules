'use strict';

module.exports = {
    options: {
        nospawn: true,
        livereload: true
    },
    coffee: {
        files: '<%= settings.app %>/scripts/coffee/{,*/}*.coffee', // match one level deep
        tasks: 'coffee'
    },
    less: {
        files: '<%= settings.app %>/styles/less/*.less',
        tasks: 'less:development'
    },
    dust: {
        files: [
            '<%= settings.app %>/scripts/common/templates-raw/*.dust',
            '<%= settings.app %>/scripts/modules/{,*/}templates/*.dust',
        ],
        tasks: 'dustjs'
    },
    gruntfile: {
        files: ['Gruntfile.js']
    },
    livereload: {
        files: [
            '<%= settings.app %>/*.html',
            '{.tmp,<%= settings.app %>}/styles/{,*/}*.css',
            '{.tmp,<%= settings.app %>}/scripts/modules/**/*.js',
            '{.tmp,<%= settings.app %>}/scripts/common/{,*/}*.js',
            '{.tmp,<%= settings.app %>}/scripts/*.js',
            '<%= settings.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ],
        tasks: ['livereload'] // , 'jshint'
    }
};