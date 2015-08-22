module.exports = function(grunt) {
    grunt.initConfig({
        cssmin: {
            target: {
                files: {
                    'build/css-mint.min.css': ['src/css/normalize.css', 'src/css/buttons.css', 'src/css/footer.css', 'src/css/header.css', 'src/css/navbar.css', 'src/css/panel.css', 'src/css/typography.css', 'src/css/utilities.css', 'src/css/grid.css', 'src/css/card.css', 'src/css/base.css', 'src/css/alert.css']
                }
            }
        },
        watch: {
            scripts: {
                files: ['src/css/*.css'],
                tasks: ['cssmin'],
                options: {
                    spawn: false,
                },
            },
        },
    });
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['watch']);
};
