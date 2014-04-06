'use strict';

module.exports = {
    compile: {
        files: {
            '<%= settings.app %>/scripts/common/templates.js': [
                '<%= settings.app %>/scripts/common/templates-raw/*.dust',
                '<%= settings.app %>/scripts/modules/{,*/}templates/*.dust'
            ]
        }
    }
};