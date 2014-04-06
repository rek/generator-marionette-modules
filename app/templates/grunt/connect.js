'use strict';

module.exports = {
    connect: {
        options: {
            port: 9000,
            livereload: 35729,
            // Change this to '0.0.0.0' to access the server from outside
            hostname: 'localhost'
        },
        livereload: {
            options: {
                open: true,
                base: [
                    '.tmp',
                    ''
                ]
            }
        },
        test: {
            options: {
                port: 9001,
                base: [
                    '.tmp',
                    'test',
                    ''
                ]
            }
        },
        dist: {
            options: {
                open: true,
                base: '',
                livereload: false
            }
        }
    }
};