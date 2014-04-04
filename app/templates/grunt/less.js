module.exports = {
    development: {
        options: {
            paths: [
                '<%= config.app %>/styles/less',
                '<%= config.app %>/bower_components/bootstrap/less'
            ],
        },
        expand: true,
        flatten: true,
        cwd: '<%= config.app %>/styles/less', // all sources relative to this path
        src: '*.less', // source folder patterns to match, relative to cwd
        dest: '<%= config.app %>/styles/', // destination folder path prefix
        ext: '.css' // replace any existing extension with this value in dest folder
    },
    production: {
        options: {
            paths: [
                '<%= config.app %>/styles/less',
                '<%= config.app %>/bower_components/bootstrap/less'
            ],
            yuicompress: true,
            cleancss: true, // minify
            report: 'min', // minification results
        },
        expand: true,
        flatten: true,
        cwd: '<%= config.app %>/styles/less', // all sources relative to this path
        src: '*.less', // source folder patterns to match, relative to cwd
        dest: '<%= config.app %>/styles/', // destination folder path prefix
        ext: '.css' // replace any existing extension with this value in dest folder
    }
};