module.exports = {
    'glob_to_multiple': {
        expand: true,
        flatten: false,
        cwd: '<%= config.app %>/scripts/coffee',
        src: ['{,*/}*.coffee'],
        dest: '<%= config.app %>/scripts',
        ext: '.js'
    },
}