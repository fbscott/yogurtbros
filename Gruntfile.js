module.exports = function(grunt) {

   // Configuration
   grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),

      babel: {
         options: {
            sourceMap: true,
            presets: ['es2015']
         },
         dist: {
            files: {
               'assets/js/bundle-es2015.js': 'assets/js/bundle.js'
            }
         }
      },

      browserify: {
         build: {
            src: 'src/js/app.js',
            dest: 'assets/js/bundle.js'
         }
      },

      clean: {
         css: {
            src: 'assets/css/'
         },
         js: {
            src: 'assets/js/'
         },
         img: {
            src: 'assets/img/'
         },
         zip: {
            src: 'zip/'
         }
      },

      // concat: {
      //    css: {
      //       src: ['src/css/*.css'],
      //       dest: 'assets/css/main.css'
      //    },
      //    js: {
      //       src: ['assets/js/*-compiled.js'],
      //       dest: 'assets/js/*-min.js'
      //    }
      // },

      cssmin: {
         options: {
            mergeIntoShorthands: false,
            roundingPrecision: -1
         },
         target: {
            files: {
               'assets/css/main.min.css': ['assets/css/main.css'],
               'assets/css/lib.min.css': ['assets/css/lib.css']
            }
         }
      },

      image: {
         dynamic: {
            files: [{
               expand: true,
               cwd: 'src/img/',
               src: ['**/*.{png,jpg,gif,svg}'],
               dest: 'assets/img/'
            }]
         }
      },

      sass: {
         dist: {
            files: {
               'assets/css/main.css': ['src/sass/main.scss'],
               'assets/css/lib.css': ['src/sass/lib.scss']
            }
         }
      }﻿,

      uglify: {
         options: {
            banner: '/*! <%= pkg.name %> v<%= pkg.version %> Author: <%= pkg.author %> <%= grunt.template.today("yyyy-mm-dd") %> */'
         },
         my_target: {
            /**
             * Individual files
             */
            files: {
               'assets/js/bundle.min.js': ['assets/js/bundle.js']
            }

            /**
             * Takes each file and minifies them individually
             */
            // files: [{
            //    expand: true,
            //    cwd: 'assets/js',
            //    src: '*-min.js', // '**/*.js' for sub directories
            //    dest: 'assets/js'
            // }]
         }
      },

      watch: {
         image: {
            files: ['src/**/*.jpg', 'src/**/*.png'],
            tasks: ['clean-img', 'image'],
            options: {
               spawn: false,
            }            
         },
         scripts: {
            files: ['src/**/*.js'],
            // tasks: ['concat:js', 'browserify', 'uglify'],
            tasks: ['clean-js', 'browserify', 'uglify'],
            options: {
               spawn: false,
            }
         },
         styles: {
            files: ['src/**/*.css', 'src/**/*.scss'],
            tasks: ['clean-css', 'sass', 'cssmin'],
            options: {
               spawn: false,
            }
         }
      },

      zip: {
         'zip/yb.zip': ['assets/**/*.*', '**/*.html', '**/*.htm', '.htaccess']
      }

   });

   // Load Plugins
   grunt.loadNpmTasks('grunt-babel');
   grunt.loadNpmTasks('grunt-browserify');
   grunt.loadNpmTasks('grunt-contrib-clean');
   // grunt.loadNpmTasks('grunt-contrib-concat');
   grunt.loadNpmTasks('grunt-contrib-cssmin');
   grunt.loadNpmTasks('grunt-image');
   grunt.loadNpmTasks('grunt-contrib-sass');
   grunt.loadNpmTasks('grunt-contrib-uglify');
   grunt.loadNpmTasks('grunt-contrib-watch');
   grunt.loadNpmTasks('grunt-zip');

   // Sample Tasks
   grunt.registerTask('sample', function() {
      console.log('Task "sample" running . . .');
   });

   // Register Tasks
   // grunt.registerTask('concat-css', ['concat:css']);
   // grunt.registerTask('concat-js', ['concat:js']);
   grunt.registerTask('clean-css', ['clean:css']);
   grunt.registerTask('clean-img', ['clean:img']);
   grunt.registerTask('clean-js', ['clean:js']);
   grunt.registerTask('dev', ['watch']);
   grunt.registerTask('default', ['clean', 'browserify', 'uglify', 'sass', 'cssmin', 'image', 'zip']);
};
