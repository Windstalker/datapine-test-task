/*global require*/
'use strict';

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        highcharts: {
            exports: 'Highcharts',
            deps: ['jquery']
        }
    },
    paths: {
        jquery: '../bower_components/jquery/jquery',
        backbone: '../bower_components/backbone/backbone',
        layoutmanager: '../bower_components/layoutmanager/backbone.layoutmanager',
        text: '../bower_components/requirejs-text/text',
        highcharts: '../bower_components/highcharts-release/highcharts',
        underscore: '../bower_components/underscore/underscore'
    }
});

require([
    'application'
], function (App) {
    App.init();
});
