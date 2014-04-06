'use strict';

module.exports = {
    'glob_to_multiple': {
        expand: true,
        flatten: false,
        cwd: '<%= settings.app %>/scripts/coffee',
        src: ['{,*/}*.coffee'],
        dest: '<%= settings.app %>/scripts',
        ext: '.js'
    },
};