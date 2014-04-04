module.exports = {
    options: {
        nospawn: true,
        livereload: true
    },
    coffee: {
        files: '<%= config.app %>/scripts/coffee/{,*/}*.coffee', // match one level deep
        tasks: 'coffee'
    },
    less: {
        files: '<%= config.app %>/styles/less/*.less',
        tasks: 'less:development'
    },
    dust: {
        files: [
            '<%= config.app %>/scripts/common/templates-raw/*.dust',
            '<%= config.app %>/scripts/modules/{,*/}templates/*.dust',
        ],
        tasks: 'dustjs'
    },
    gruntfile: {
        files: ['Gruntfile.js']
    },
    livereload: {
        files: [
            '<%= config.app %>/*.html',
            '{.tmp,<%= config.app %>}/styles/{,*/}*.css',
            '{.tmp,<%= config.app %>}/scripts/modules/**/*.js',
            '{.tmp,<%= config.app %>}/scripts/common/{,*/}*.js',
            '{.tmp,<%= config.app %>}/scripts/*.js',
            '<%= config.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ],
        tasks: ['livereload'] // , 'jshint'
    }
};