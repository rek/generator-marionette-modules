'use strict';

module.exports = {
    options: {
        limit: 4
    },
    server: [

    ],
    test: [

    ],
    dist: [
        'imagemin',
        'svgmin',
        'htmlmin:dist',
        'cssmin'
    ]
};