module.exports = function(grunt) {
  var theme = grunt.option('theme') || 'base';

  grunt.initConfig({
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'themes',
          src: ['**/*.scss'],
          dest: 'themes',
          ext: '.css',
          extDot: 'last',
          rename: function(dest, src) {
            return dest + '/' + src.replace('package.', '');
          }
        }]
      }
    },
    watch: {
      configFiles: {
        files: ['Gruntfile.js'],
        tasks: ['sass'],
        options: {
          reload: true
        }
      },
      styles: {
        files: ['themes/**/*.scss', 'app/**/*.scss'],
        tasks: ['sass'],
        options: {
          nospawn: true
        }
      }
    },
    copy: {
      js: {
        files: [
          { src: 'node_modules/jquery/dist/jquery.min.js', dest: 'ThirdParty/js/jquery.min.js' },
          { src: 'node_modules/bootstrap/dist/js/bootstrap.min.js', dest: 'ThirdParty/js/bootstrap.min.js' },
          { src: 'node_modules/bootstrap/dist/css/bootstrap.min.css', dest: 'ThirdParty/css/bootstrap.min.css' }
        ]
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('build', ['copy', 'sass']);
};
