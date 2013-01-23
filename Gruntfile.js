module.exports = function( grunt ) {

  grunt.initConfig({

    bower: {
      install: {
        options:{
          targetDir: './public/libs',
          cleanup: true,
          install: true
        }
      }
    },

    requirejs: {
      compile: {
        options: {
          baseUrl: "app/scripts",
          mainConfigFile: "app/scripts/config.js",
          out: "public/scripts/main.js",
          name: "main",
          inlineText: false,
          optimize: "none",
          uglify: {
              //toplevel: true,
              //ascii_only: true,
              //beautify: true
          }
        }
      }
    },

    // compile .scss/.sass to .css using Compass
    compass: {
      dist: {
        // http://compass-style.org/help/tutorials/configuration-reference/#configuration-properties
        options: {
          cssDir: 'public/css',
          sassDir: 'app/styles',
          imagesDir: 'public/images',
          javascriptsDir: 'public/scripts',
          outputStyle: 'compressed',
          force: true
        }
      }
    },

    // default watch configuration
    watch: {
      compass: {
        files: [
          'app/styles/**/*.{scss,sass}'
        ],
        tasks: ['compass']
      },
      jshint: {
        files: [
          'app/scripts/**/*.js'
        ],
        tasks: ['jshint', 'requirejs']
      }
    },

    // // specifying JSHint options and globals
    // // https://github.com/cowboy/grunt/blob/master/docs/task_lint.md#specifying-jshint-options-and-globals
    jshint: {
      options: {
        'curly': true,
        'eqeqeq': true,
        'immed': true,
        'latedef': true,
        'newcap': true,
        'noarg': true,
        'sub': true,
        'undef': true,
        'boss': true,
        'eqnull': true,
        'browser': true,
        'jquery': true,
        'globals': {
          'jQuery': true,
          '$': true,
          'require': true,
          'define': true,
          'module': true
        }
      },
      files: [
        'Gruntfile.js',
        'app/scripts/**/*.js'
      ]
    }
  });


  //Load the npm tasks
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-contrib-requirejs');

  // Default grunt task to be run by node when the app starts in dev
  grunt.registerTask('default', ['compass', 'jshint', 'requirejs', 'watch']);

  //To install an update components run $ grunt setapp
  grunt.registerTask('setapp', ['bower']);

};