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
        karma: {
            unit: {
                configFile: 'config/karma.config.js'
            }
        },

    });

    // ładowanie rozszerzeń dla Grunt,js
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-karma');


    // rejestrowanie domyślnego zestawu zadań dla Grunt.js
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('goKarma', ['karma']);

};