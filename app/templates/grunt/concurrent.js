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
        'htmlmin',
        'cssmin'
    ]
};