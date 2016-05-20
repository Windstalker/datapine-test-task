define([
    'backbone',
    '../views/app-view',
    '../views/about',
    '../views/chart-list',
    '../views/chart-view',
], function(Backbone, AppView, About, ChartList, ChartView) {
    'use strict';

    var routes = {
        '': 'charts',
        'charts': 'charts',
        'charts/:id': 'chart-view',
        'about': 'about'
    };

    return Backbone.Router.extend({
        routes: routes,
        initialize: function() {
            this.appView = new AppView();
            this.chartList = new ChartList();
            this.chartView = new ChartView();
            this.aboutView = new About();

            this.on('route:charts', function() {
                this.appView.setView('#page', this.chartList);
                this.appView.render();
            });

            this.on('route:chart-view', function() {
                this.appView.setView('#page', this.chartView);
                this.appView.render();
            });

            this.on('route:about', function() {
                this.appView.setView('#page', this.aboutView);
                this.appView.render();
            });

            this.appView.render();

            window.router = this;
        }
    });
});
