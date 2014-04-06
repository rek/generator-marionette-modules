'use strict';

module.exports = {
    dist: {
        files: {
            '<%= settings.dist %>/styles/main.min.css': [
                '<%= settings.app %>/styles/*.css'
            ]
        }

    }
};