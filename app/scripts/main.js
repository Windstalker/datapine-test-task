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
        marionette: '../bower_components/backbone.marionette/lib/backbone.marionette',
        text: '../bower_components/requirejs-text/text',
        highcharts: '../bower_components/highcharts-release/highcharts',
        underscore: '../bower_components/underscore/underscore',
        bluebird: '../bower_components/bluebird/js/browser/bluebird.min'
    }
});

require([
    'application'
], function (App) {
    var app = new App();

    app.start();
});
