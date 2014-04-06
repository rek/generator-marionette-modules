'use strict';

module.exports = {
    svgmin: {
        dist: {
            files: [{
                expand: true,
                cwd: '<%= settings.app %>/images',
                src: '{,*/}*.svg',
                dest: '<%= settings.dist %>/images'
            }]
        }
    }
};