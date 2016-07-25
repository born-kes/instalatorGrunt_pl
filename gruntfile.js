module.exports = function (grunt) {
    'use strict';

    // inicjalizacja konfiguracji zadań
    grunt.initConfig({

        /*
         *  Nasłuchiwanie zmian w plikach i uruchamianie odpowiedniego zadania.
         *  Przy okazji, automatyczne odświeżanie strony w przeglądarce.
         *
         *  https://github.com/gruntjs/grunt-contrib-watch
         */
        watch : {
            html : {
                files   : 'dev/index.html',
                options : {
                    livereload : true
                }
            },
        },

    });

    // ładowanie rozszerzeń dla Grunt,js
    grunt.loadNpmTasks('grunt-contrib-watch');


    // rejestrowanie domyślnego zestawu zadań dla Grunt.js
    grunt.registerTask('default', ['watch']);

};