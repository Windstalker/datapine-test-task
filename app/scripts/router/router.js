define([
    'marionette',
    '../views/app-view',
    '../views/about',
    '../views/chart-list',
    '../views/chart-view',
], function(Mn, AppView, About, ChartList, ChartView) {
    'use strict';

    var routes = {
        '': 'showCharts',
        'charts': 'showCharts',
        'charts/:id': 'showChartView',
        'about': 'showAbout'
    };

    var controller = {
        showAbout: function() {
            console.log(arguments);
        },
        showChartView: function() {
            console.log(arguments);
        },
        showCharts: function() {
            console.log(arguments);
        }
    };

    return Mn.AppRouter.extend({
        routes: routes,
        controller: controller
    });
});
