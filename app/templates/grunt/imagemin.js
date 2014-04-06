'use strict';

module.exports = {
    dist: {
        files: [{
            expand: true,
            cwd: '<%= settings.app %>/images',
            src: '{,*/}*.{png,jpg,jpeg}',
            dest: '<%= settings.dist %>/images'
        }]
    }
};