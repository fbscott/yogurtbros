module.exports = function(grunt) {

   // Configuration
   grunt.initConfig({
      concat: {
         js: {
            src: ['src/js/*.js'],
            dest: 'assets/js/main.js'
         },
         css: {
            src: ['src/css/*.css'],
            dest: 'assets/css/yb.css'
         }
      },

      sass: {
         dist: {
            files: {
               'assets/css/main.css': 'src/sass/main.scss'
            }
         }
      }﻿,

      watch: {
         scripts: {
            files: ['src/**/*.js', 'src/**/*.scss'],
            tasks: ['concat', 'sass'],
            options: {
               spawn: false,
            },
         },
      }

   });

   // Load Plugins
   grunt.loadNpmTasks('grunt-contrib-concat');
   grunt.loadNpmTasks('grunt-contrib-sass');
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
   grunt.registerTask('default', ['concat', 'sass']);
};
