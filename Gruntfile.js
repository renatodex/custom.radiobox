module.exports = function(grunt) {

  grunt.initConfig({
    uglify: {
       bower: {
        options: {
          mangle: false,
          compress: true
        },
        files: {
          'dist/custom.radiobox.min.js': 'src/custom.radiobox.js'
        }
      }
    },
    jasmine: {
      pivotal: {
        src: 'src/**/*.js',
        options: {
          keepRunner: true,
          outfile:'_SpecRunner.html',
          specs: 'spec/*spec.js',
          helpers: 'spec/*helper.js',
          vendor: [
            "bower_components/jquery/dist/jquery.js",
            "bower_components/jasmine-jquery/lib/jasmine-jquery.js",
            "bower_components/bridger/dist/bridger.js",
          ]
        },
      }
    }
  });

  // Register tasks.
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Task defining.
  grunt.registerTask('default', ['uglify','jasmine']);
  grunt.registerTask('build', ['uglify']);
};
