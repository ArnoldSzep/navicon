module.exports = function (grunt) {
    const sass = require('node-sass');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            options: {
                implementation: sass,
                outputStyle: 'compressed',
                sourcemap: 'none'
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'css_scss/',
                    src: ['*.scss'],
                    dest: 'build/css/',
                    ext: '.css'
                }]
            }
        },
        postcss: {
            options: {
                processors: [
                    require('autoprefixer')({ browsers: ['> 0.2%'] }),
                    require('cssnano')({ zindex: false, reduceIdents: false })
                ]
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'css/',
                    src: ['*.css'],
                    dest: 'build/css/',
                    ext: '.css'
                }]
            }
        },
        concat: {
            stp: {
                src: ['js/common/*.js', 'js/stp/*.js'],
                dest: 'build/js/script_stp.js',
            },
            sub: {
                src: ['js/common/*.js', 'js/sub/*.js'],
                dest: 'build/js/script_sub.js',
            }
        },
        uglify: {
            target: {
                files: {
                    'build/js/script_stp.min.js': ['build/js/script_stp.js'],
                    'build/js/script_sub.min.js': ['build/js/script_sub.js']
                }
            }
        },
        copy: {
            main: {
                files: [
                    { expand: true, flatten: true, src: ['img/*.*'], dest: 'build/img/' },
                    { expand: true, flatten: true, src: ['index.php'], dest: 'build/' },
                    { expand: true, flatten: false, src: ['php/*.*', 'php/*/*.*'], dest: 'build/' },
                ],
            },
        },
        watch: {
            css: {
                files: ['css_scss/*.scss', 'css_scss/*/*.scss', 'css_scss/*.css'],
                tasks: ['sass', 'postcss'],
                options: {
                    spawn: false
                }
            },
            scripts: {
                files: ['js/*.js', 'js/*/*.js'],
                tasks: ['concat', 'uglify'], 
            },
            php: {
                files: ['*.php', 'php/*.php', 'php/*/*.php'],
                tasks: ['copy'],
            },
            img: {
                files: ['img/*'],
                tasks: ['copy'],
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify-es');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.registerTask('default', ['watch']);
};