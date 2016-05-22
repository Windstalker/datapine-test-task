define([
    'marionette',
    '../views/app-view',
    '../views/about',
    '../views/menu',
    '../views/chart-list',
    '../views/chart-view',
], function(Mn, AppView, About, Menu, ChartList, ChartView) {
    'use strict';

    var routes = {
        '': 'showCharts',
        'charts': 'showCharts',
        'charts/:id': 'showChartView',
        'about': 'showAbout'
    };

    var Controller = Mn.Object.extend({
        initialize: function() {
            this.appView = new AppView();
            this.appView.render();
            this.appView.showChildView('menu', new Menu());
        },
        showAbout: function() {
            this.appView.showChildView('page', new About());
        },
        showChartView: function() {
            this.appView.showChildView('page', new ChartView());
        },
        showCharts: function() {
            this.appView.showChildView('page', new ChartList());
        }
    });

    return Mn.AppRouter.extend({
        appRoutes: routes,
        controller: new Controller()
    });
});
