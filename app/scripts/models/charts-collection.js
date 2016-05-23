define([
    'backbone',
    'bluebird',
    './chart-model'
], function(
    Backbone,
    Promise,
    Chart
) {
    'use strict';
    return Backbone.Collection.extend({
        model: Chart,
        url: '/scripts/dummy_data/charts.json',
        exportUrl: 'http://export.highcharts.com/',
        fetchThumbnails: function() {
            var self = this;
            var xhrs = this.map(function(chart) {
                return chart.fetchThumbnail();
            });
            return Promise.all(xhrs).then(function() {
                self.trigger('fetch:thumbnails');
            });
        }
    });
});
