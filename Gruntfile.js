module.exports = function(grunt) {

   // Configuration
   grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),

      browserify: {
         build: {
            src: 'src/js/modules/objects.js',
            dest: 'assets/js/bundle.js'
         }
      },

      concat: {
         js: {
            src: ['src/js/*.js'],
            dest: 'assets/js/yb.js'
         },
         css: {
            src: ['src/css/*.css'],
            dest: 'assets/css/main.css'
         }
      },

      cssmin: {
         options: {
            mergeIntoShorthands: false,
            roundingPrecision: -1
         },
         target: {
            files: {
               'assets/css/main.min.css': ['assets/css/main.css'],
               'assets/css/yb.min.css': ['src/css/yb.css']
            }
         }
      },

      sass: {
         dist: {
            files: {
               'assets/css/main.css': ['src/sass/main.scss']
            }
         }
      }﻿,

      uglify: {
         options: {
            banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */'
         },
         build: {
            // src: 'src/<%= pkg.name %>.js',
            // src: 'assets/js/bundle.js',
            // dest: 'assets/js/bundle.min.js'
            files: {
               'assets/js/bundle.min.js': ['assets/js/bundle.js'],
               'assets/js/yb.min.js': ['assets/js/yb.js']
            }
         }
      },

      watch: {
         scripts: {
            files: ['src/**/*.js', 'src/**/*.css', 'src/**/*.scss'],
            tasks: ['concat', 'sass', 'cssmin', 'browserify', 'uglify'],
            options: {
               spawn: false,
            },
         },
      }

   });

   // Load Plugins
   grunt.loadNpmTasks('grunt-browserify');
   grunt.loadNpmTasks('grunt-contrib-concat');
   grunt.loadNpmTasks('grunt-contrib-cssmin');
   grunt.loadNpmTasks('grunt-contrib-sass');
   grunt.loadNpmTasks('grunt-contrib-uglify');
   grunt.loadNpmTasks('grunt-contrib-watch');

   // Sample Tasks
   grunt.registerTask('run', function() {
      console.log('task running');
   });
   grunt.registerTask('sleep', function() {
      console.log('task sleeping');
   });

   // Register Tasks
   grunt.registerTask('concat-js', ['concat:js']);
   grunt.registerTask('concat-css', ['concat:css']);
   grunt.registerTask('default', ['concat', 'sass', 'cssmin', 'browserify', 'uglify']);
};
