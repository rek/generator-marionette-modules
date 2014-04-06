'use strict';

module.exports = {
    html: ['<%= settings.dist %>/*.html.temp'],
    css: ['<%= settings.dist %>/styles/{,*/}*.css'],
    options: {
        assetsDirs: [
            '<%= settings.dist %>',
            '<%= settings.dist %>/styles'
        ],
    }
};