module.exports = function(grunt) {

   // Configuration
   grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),

      // 'babel': {
      babel: {
         options: {
            // sourceMap: true
            // presets: ['es2015']
         },
         dist: {
            files: [{
               // "assets/js/yb-main.js": "src/js/yb-main.js"
               expand: true,
               cwd: 'src/js/',
               src: ['*.js'],
               dest: 'assets/js/',
               ext: '-compiled.js'
            }]
         }
      },

      browserify: {
         build: {
            src: 'src/js/modules/object.js',
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
         // folderTwo: ["assetsOne/js/", "assetsTwo/js/"]
      },

      concat: {
         css: {
            src: ['src/css/*.css'],
            dest: 'assets/css/main.css'
         },
         js: {
            src: ['assets/js/*-compiled.js'],
            dest: 'assets/js/*-min.js'
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
               'assets/css/wufoo.min.css': ['assets/css/wufoo.css']
               // 'assets/css/yb.min.css': ['src/css/yb.css']
            }
         }
      },

      image: {
         // static: {
         //    options: {
         //       optipng: false,
         //       pngquant: true,
         //       zopflipng: true,
         //       jpegRecompress: false,
         //       mozjpeg: true,
         //       guetzli: false,
         //       gifsicle: true,
         //       svgo: true
         //    },
         //    files: {
         //       'assets/img/img.png': 'src/img/img.png',
         //       'assets/img/img.jpg': 'src/img/img.jpg',
         //       'assets/img/img.gif': 'src/img/img.gif',
         //       'assets/img/img.svg': 'src/img/img.svg'
         //    }
         // },
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
               'assets/css/wufoo.css': ['src/sass/wufoo.scss']
            }
         }
      }﻿,

      uglify: {
         options: {
            banner: '/*! <%= pkg.name %> v<%= pkg.version %> Author: <%= pkg.author %> <%= grunt.template.today("yyyy-mm-dd") %> */'
         },
         build: {
            // src: 'src/<%= pkg.name %>.js',
            // src: 'assets/js/bundle.js',
            // dest: 'assets/js/bundle.min.js'

            /**
             * Individual files
             */
            // files: {
            //    'assets/js/bundle.min.js': ['assets/js/bundle.js'],
            //    'assets/js/yb.min.js': ['assets/js/yb.js']
            // }

            /**
             * Takes each file and minifies them individually
             */
            files: [{
               expand: true,
               cwd: 'assets/js',
               src: '*-compiled.js', // '**/*.js' for sub directories
               dest: 'assets/js'
            }]
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
            tasks: ['clean-js', 'babel', 'uglify'],
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
   grunt.loadNpmTasks('grunt-contrib-concat');
   grunt.loadNpmTasks('grunt-contrib-cssmin');
   grunt.loadNpmTasks('grunt-image');
   grunt.loadNpmTasks('grunt-contrib-sass');
   grunt.loadNpmTasks('grunt-contrib-uglify');
   grunt.loadNpmTasks('grunt-contrib-watch');
   grunt.loadNpmTasks('grunt-zip');

   // Sample Tasks
   grunt.registerTask('run', function() {
      console.log('task running');
   });
   grunt.registerTask('sleep', function() {
      console.log('task sleeping');
   });

   // Register Tasks
   grunt.registerTask('concat-css', ['concat:css']);
   grunt.registerTask('concat-js', ['concat:js']);
   grunt.registerTask('clean-css', ['clean:css']);
   grunt.registerTask('clean-img', ['clean:img']);
   grunt.registerTask('clean-js', ['clean:js']);
   grunt.registerTask('dev', ['watch']);
   // grunt.registerTask('default', ['concat', 'sass', 'cssmin', 'babel', 'browserify', 'uglify']);
   // grunt.registerTask('default', ['concat', 'sass', 'cssmin', 'babel', 'uglify']);
   grunt.registerTask('default', ['clean', 'babel', 'uglify', 'sass', 'cssmin', 'image', 'zip']);
};
