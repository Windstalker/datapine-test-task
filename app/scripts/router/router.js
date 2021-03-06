define([
    'marionette',
    'bluebird',
    '../models/charts-collection',
    '../views/app-view',
    '../views/about',
    '../views/menu',
    '../views/chart-list',
    '../views/chart-view',
], function(
    Mn,
    Promise,
    ChartsCollection,
    AppView,
    AboutView,
    MenuView,
    ChartListView,
    ChartDetailsView
) {
    'use strict';

    var routes = {
        '': 'onChartsRoute',
        'charts(/)(:id)': 'onChartsRoute',
        'about': 'showAboutView'
    };

    var Controller = Mn.Object.extend({
        initialize: function() {
            var self = this;
            this.charts = new ChartsCollection();
            this.chartsPromise = Promise.resolve(this.charts.fetch());
            this.chartsPromise.then(function() {
                return self.charts.fetchThumbnails();
            });
            this.appView = new AppView();
            this.appView.render();
            this.appView.showChildView('menu', new MenuView());

        },
        showAboutView: function() {
            this.appView.showChildView('page', new AboutView());
        },
        onChartsRoute: function(id) {
            var self = this;
            this.chartsPromise.then(function() {
                if (id !== null) {
                    return self.showChartDetailsView(id);
                }
                self.showCharts();
            });
        },
        showChartDetailsView: function(id) {
            var chart = this.charts.get(id);

            this.appView.showChildView('page', new ChartDetailsView({
                model: chart,
                collection: this.charts
            }));
        },
        showCharts: function() {
            this.appView.showChildView('page', new ChartListView({
                collection: this.charts
            }));
        }
    });

    return Mn.AppRouter.extend({
        appRoutes: routes,
        controller: new Controller()
    });
});
