module.exports = function(grunt) {

grunt.initConfig({
  uglify: {
    my_target: {
      files: {
        'dist/main.min.js': ['build/main.js']
      }
    }
  },

  less: {
    production: {
      options:{
        compress: true,
      },
      files: {
        'dist/main.css': 'build/main.less'
      }
    }
  },

  watch: {
    scripts: {
      files: ['**/*.js','**/*.less'],
      tasks: ['uglify', 'less'],
    },
  },
});


grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks('grunt-contrib-watch');

grunt.registerTask("default", ["uglify", "less", "watch"])

}