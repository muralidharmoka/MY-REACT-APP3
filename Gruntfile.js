module.exports = function (grunt) {
    
// register custom tasks
    grunt.initConfig({
        connect: {
            options: {
                hostname: 'localhost',
                port: 9876,
                livereload: 35729, // Default livereload port
            },
            server: {
                options: {
                    open: true, // Automatically open the web browser
                    base: 'src',
                }
            }
        },

        open: {
            file: {
                path: 'http://localhost:9876/index.html'
            }
        },
        watch: {
            html: {
                files: ['src/index.html'],
                options: {
                    livereload: true
                }
            }
        },
    });


    //Load NPM Tasks
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-open');


    //Register default task
    grunt.registerTask('default', ['connect:server', 'open', 'watch']);

};

/** Grunt has to use livereload.js on index.html when using connect plugin**/