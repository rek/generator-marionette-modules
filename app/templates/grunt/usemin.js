module.exports = {
    html: ['<%= config.dist %>/*.html'],
    css: ['<%= config.dist %>/styles/{,*/}*.css'],
    options: {
        assetsDirs: [
            '<%= config.dist %>',
            '<%= config.dist %>/styles'
        ],
    }
};