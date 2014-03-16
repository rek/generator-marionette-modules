// Generated on <%= (new Date).toISOString().split('T')[0] %> using <%= pkg.name %> <%= pkg.version %>
'use strict';
var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
    var banner = '/*\n<%= pkg.name %> <%= pkg.version %>';
        banner += '- <%= pkg.description %>\n<%= pkg.repository.url %>\n';
        banner += 'Built on <%= grunt.template.today("yyyy-mm-dd") %>\n*/\n';

        // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // configurable paths
    var yeomanConfig = {
        app: 'app',
        dist: 'build'
    };

    grunt.initConfig({
        yeoman: yeomanConfig,
        watch: {
            options: {
                nospawn: true,
                livereload: true
            },
            coffee: {
                files: 'app/scripts/coffee/{,*/}*.coffee', // match one level deep
                tasks: 'coffee'
            },
            less: {
                files: 'app/styles/less/*.less',
                tasks: 'less:development'
            },
            dust: {
                files: [
                    'app/scripts/common/templates-raw/*.dust',
                    'app/scripts/modules/{,*/}templates/*.dust',
                ],
                tasks: 'dustjs'
            },
            livereload: {
                files: [
                    'app/*.html',
                    '{.tmp,app}/styles/{,*/}*.css',
                    '{.tmp,app}/scripts/modules/**/*.js',
                    '{.tmp,app}/scripts/common/{,*/}*.js',
                    '{.tmp,app}/scripts/*.js',
                    'app/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ],
                tasks: ['livereload'] // , 'jshint'
            }
        },
        connect: {
            options: {
                port: 1212,
                // change this to '0.0.0.0' to access the server from outside
                // hostname: 'localhost'
                hostname: '0.0.0.0'
            },
            livereload: {
                options: {
                    middleware: function (connect) {
                        return [
                            lrSnippet,
                            mountFolder(connect, '.tmp'),
                            mountFolder(connect, 'app')
                        ];
                    }
                }
            },
            test: {
                options: {
                    middleware: function (connect) {
                        return [
                            mountFolder(connect, '.tmp'),
                            mountFolder(connect, 'test')
                        ];
                    }
                }
            },
            dist: {
                options: {
                    middleware: function (connect) {
                        return [
                            mountFolder(connect, 'dist')
                        ];
                    }
                }
            }
        },
        open: {
            server: {
                path: 'http://localhost:8888'
            }
        },
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        'build/*',
                        '!build/.git*'
                    ]
                }]
            },
            server: '.tmp'
        },
        coffee: {
            glob_to_multiple: {
                expand: true,
                flatten: false,
                cwd: 'app/scripts/coffee',
                src: ['{,*/}*.coffee'],
                dest: 'app/scripts',
                ext: '.js'
            },
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'Gruntfile.js',
                'app/scripts/{,*/}*.js',
                '!app/scripts/vendor/*',
                'test/spec/{,*/}*.js',
                '!app/scripts/templates/compiled.js'
            ]
        },
        jasmine: {
            all: {
                /*src: '',*/
                options: {
                    specs: 'test/spec/{,*/}*.js'
                }
            }
        },
        less: {
            development: {
                options: {
                    paths: [
                        'app/styles/less',
                        'app/bower_components/bootstrap/less'
                    ],
                },
                expand: true,
                flatten: true,
                cwd: 'app/styles/less', // all sources relative to this path
                src: '*.less', // source folder patterns to match, relative to cwd
                dest: 'app/styles/', // destination folder path prefix
                ext: '.css' // replace any existing extension with this value in dest folder
            },
            production: {
                options: {
                    paths: [
                        'app/styles/less',
                        'app/bower_components/bootstrap/less'
                    ],
                    yuicompress: true,
                    cleancss: true, // minify
                    report: 'min', // minification results
                },
                expand: true,
                flatten: true,
                cwd: 'app/styles/less', // all sources relative to this path
                src: '*.less', // source folder patterns to match, relative to cwd
                dest: 'app/styles/', // destination folder path prefix
                ext: '.css' // replace any existing extension with this value in dest folder
            }
        },
        requirejs: {
            dist: {
                options: {
                    baseUrl: 'app/scripts',
                    out: 'build/scripts/app.js',
                    mainConfigFile: "app/scripts/config.js",
                    name: "../../node_modules/almond/almond",
                    optimize: 'none',
                    preserveLicenseComments: false,
                    useStrict: true,
                    wrap: true
                }
            }
        },
        rev: {
            dist: {
                files: {
                    src: [
                        'build/scripts/{,*/}*.js',
                        'build/styles/{,*/}*.css',
                        'build/images/{,*/}*.{png,jpg,jpeg,gif,webp}',
                        'build/styles/fonts/*'
                    ]
                }
            }
        },
        useminPrepare: {
            html: 'app/index.html',
            options: {
                dest: 'build'
            }
        },
        usemin: {
            html: ['build/{,*/}*.html'],
            css: ['build/styles/{,*/}*.css'],
            options: {
                dirs: ['build']
            }
        },
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'app/images',
                    src: '{,*/}*.{png,jpg,jpeg}',
                    dest: 'build/images'
                }]
            }
        },
        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'app/images',
                    src: '{,*/}*.svg',
                    dest: 'build/images'
                }]
            }
        },
        cssmin: {
            dist: {
                files: {
                    'build/styles/main.min.css': [
                        'app/styles/*.css'
                    ]
                }
            }
        },
        concat: {
            options: {
                separator: ';\n',
                banner: banner
            },
            dist: {
            }
        },
        uglify: {
            options: {
                mangle: {
                    // except: ['jQuery', 'Backbone']
                },
                banner: banner,
            },
            dist: {
                files: {
                    'build/scripts/app.min.js': ['build/scripts/app.js']
                }
            }
        },
        htmlmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'app',
                    src: '*.html',
                    dest: 'build'
                }]
            }
        },
        dustjs: {
            compile: {
                files: {
                    'app/scripts/common/templates.js': [
                        'app/scripts/common/templates-raw/*.dust',
                        'app/scripts/modules/{,*/}templates/*.dust'
                    ]
                }
            }
        },
        mocha: {
            all: {
                options: {
                    log: true,
                    reporter: 'Spec',
                    run: false,
                    timeout: 10000,
                    urls: ['http://localhost:<%= connect.test.options.port %>/index.html']
                }
            }
        },
        mocha_phantomjs: {
            all: ['app/scripts/modules/{,*/}test/*.html']
        },
        // Put files not handled in other tasks here
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: 'app',
                    dest: 'build',
                    src: [
                        '*.{ico,txt}',
                        '.htaccess',
                        'images/{,*/}*.{webp,gif}',
                        'styles/fonts/*'
                    ]
                }]
            }
        },
        concurrent: {
            server: [

            ],
            test: [

            ],
            dist: [
                'imagemin',
                'svgmin',
                'htmlmin'
            ]
        }
    });

    grunt.registerTask('server', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'open', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'clean:server',
            'concurrent:server',
            'livereload-start',
            'connect:livereload',
            'open',
            'watch'
        ]);
    });

    // grunt.registerTask('test', [
    //     'clean:server',
    //     'concurrent:test',
    //     'connect:test',
    //     'jasmine'
    // ]);

    grunt.registerTask('test', [
        'connect:test',
        'mocha_phantomjs',
    ]);

    grunt.registerTask('build', [
        'clean:dist',
        'useminPrepare',
        'concurrent:dist',
        'requirejs',
        'cssmin',
        'concat',
        'uglify',
        'copy',
        'rev',
        'usemin'
    ]);

    grunt.registerTask('default', [
        'jshint',
        'test',
        'build'
    ]);
};
