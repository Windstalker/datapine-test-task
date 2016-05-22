define(['backbone', './chart-model'], function(Backbone, Chart) {
    'use strict';
    return Backbone.Collection.extend({
        model: Chart,
        url: '/scripts/dummy_data/charts.json'
    });
});
