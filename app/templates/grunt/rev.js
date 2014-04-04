module.exports = {
    dist: {
        files: {
            src: [
                '!<%= config.dist %>/scripts/{,*/}*.js',
                '<%= config.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp}',
                '<%= config.dist %>/styles/{,*/}*.css',
                '<%= config.dist %>/styles/fonts/*'
            ]
        }
    }
};