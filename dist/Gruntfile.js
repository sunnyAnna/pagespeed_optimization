module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        pagespeed: {
            options: {
                nokey: true,
                locale: "en_GB",
                url: 'http://ded12ee2.ngrok.io/mobile-perf/',
                threshold: 40
            },
            local: {
                options: {
                    strategy: "desktop"
                }
            },
            mobile: {
                options: {
                    strategy: "mobile"
                }
            }
        },
        responsive_images: {
            dev: {
                options: {
                    engine: 'im',
                    sizes: [{
                            name: 'sm',
                            width: 100,
                            quality: 80
                    },
                        {
                            name: 'med',
                            width: 150,
                            quality: 80
                           },
                        {
                            name: 'lg',
                            width: 200,
                            quality: 80
                           }]
                },
                files: [{
                    expand: true,
                    src: ['views/images/pizza.png']
                }]
            }
        },
        minifyHtml: {
            options: {
                cdata: true
            },
            dist: {
                files: {
                    'views/pizza.html': 'views/pizza.html'
                }
            }
        },
        cssnano: {
            options: {
                sourcemap: true
            },
            dist: {
                files: {
                    'views/css/style.css': 'views/css/style.css'
                }
            }
        },
        uglify: {
            my_target: {
                files: {
                    'views/js/main.js': ['views/js/main.js']
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-pagespeed');
    grunt.loadNpmTasks('grunt-cssnano');
    grunt.loadNpmTasks('grunt-minifyHtml');
    grunt.registerTask('default', ['pagespeed']);
}
