module.exports = {
    dist: {
        files: {
            '<%= config.dist %>/styles/main.min.css': [
                '<%= config.app %>/styles/*.css'
            ]
        }

    }
};